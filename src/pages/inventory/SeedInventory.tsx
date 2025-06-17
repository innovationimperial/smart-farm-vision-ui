
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Package, Plus, Save } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

const seedFormSchema = z.object({
  seedType: z.string().min(1, "Seed type is required"),
  variety: z.string().min(1, "Variety is required"),
  supplier: z.string().min(1, "Supplier is required"),
  batchNumber: z.string().min(1, "Batch number is required"),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
  quantityPurchased: z.string().min(1, "Quantity purchased is required"),
  quantityRemaining: z.string().min(1, "Quantity remaining is required"),
  unitCost: z.string().min(1, "Unit cost is required"),
  storageLocation: z.string().min(1, "Storage location is required"),
  germinationRate: z.string().min(1, "Germination rate is required"),
  seedTreatment: z.string().optional(),
  qualityGrade: z.string().min(1, "Quality grade is required"),
  notes: z.string().optional(),
})

type SeedFormValues = z.infer<typeof seedFormSchema>

const defaultValues: Partial<SeedFormValues> = {
  seedType: "Corn",
  qualityGrade: "A",
}

const seedInventory = [
  {
    id: "SD001",
    type: "Corn",
    variety: "Pioneer P2089",
    supplier: "Pioneer Seeds",
    batch: "B2025-001",
    quantity: "2,500 lbs",
    remaining: "1,800 lbs",
    germination: "95%",
    expiry: "2025-12-31",
    status: "Good"
  },
  {
    id: "SD002",
    type: "Soybeans",
    variety: "Asgrow AG2535",
    supplier: "Asgrow Seed Co",
    batch: "B2025-002",
    quantity: "1,200 lbs",
    remaining: "900 lbs",
    germination: "92%",
    expiry: "2025-10-15",
    status: "Good"
  },
  {
    id: "SD003",
    type: "Wheat",
    variety: "Red Winter",
    supplier: "Local Coop",
    batch: "B2024-045",
    quantity: "800 lbs",
    remaining: "200 lbs",
    germination: "88%",
    expiry: "2025-08-30",
    status: "Low Stock"
  }
]

export default function SeedInventory() {
  const { toast } = useToast()
  
  const form = useForm<SeedFormValues>({
    resolver: zodResolver(seedFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: SeedFormValues) {
    toast({
      title: "Seed Record Added",
      description: `${data.variety} seed inventory has been updated.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Inventory",
      description: "Your seed inventory is being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/inventory">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Inventory
              </Button>
            </NavLink>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Package className="w-8 h-8 text-green-500" />
                Seed Inventory
              </h1>
              <p className="text-gray-600 mt-2">Manage seed stock and planting materials</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Seed
            </Button>
          </div>
        </div>

        {/* Current Inventory */}
        <Card>
          <CardHeader>
            <CardTitle>Current Seed Inventory</CardTitle>
            <CardDescription>Overview of all seed varieties in stock</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Variety</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Remaining</TableHead>
                  <TableHead>Germination</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {seedInventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.variety}</TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell>{item.batch}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.remaining}</TableCell>
                    <TableCell>{item.germination}</TableCell>
                    <TableCell>{item.expiry}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === "Good" ? "bg-green-100 text-green-800" : 
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Seed Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Seed Inventory</CardTitle>
            <CardDescription>Register new seed purchases and update inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="seedType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seed Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select seed type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Corn">Corn</SelectItem>
                            <SelectItem value="Soybeans">Soybeans</SelectItem>
                            <SelectItem value="Wheat">Wheat</SelectItem>
                            <SelectItem value="Rice">Rice</SelectItem>
                            <SelectItem value="Barley">Barley</SelectItem>
                            <SelectItem value="Oats">Oats</SelectItem>
                            <SelectItem value="Vegetables">Vegetables</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="variety"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Variety</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Pioneer P2089" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="supplier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Supplier</FormLabel>
                        <FormControl>
                          <Input placeholder="Supplier name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="batchNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Batch Number</FormLabel>
                        <FormControl>
                          <Input placeholder="B2025-001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="purchaseDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purchase Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expirationDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiration Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="quantityPurchased"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity Purchased (lbs)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="2500" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="quantityRemaining"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity Remaining (lbs)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="2500" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="unitCost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit Cost ($/lb)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="3.50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="storageLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Storage Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Warehouse A, Bin 12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="germinationRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Germination Rate (%)</FormLabel>
                        <FormControl>
                          <Input type="number" max="100" placeholder="95" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="qualityGrade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quality Grade</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="A">Grade A</SelectItem>
                            <SelectItem value="B">Grade B</SelectItem>
                            <SelectItem value="C">Grade C</SelectItem>
                            <SelectItem value="Premium">Premium</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="seedTreatment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seed Treatment (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Fungicide, Insecticide, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Additional notes about this seed batch" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Seed Inventory
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
