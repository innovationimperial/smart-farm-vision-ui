
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
import { ArrowLeft, Download, Package, Plus, Save, AlertTriangle } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

const chemicalFormSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  chemicalType: z.string().min(1, "Chemical type is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  activeIngredient: z.string().min(1, "Active ingredient is required"),
  concentration: z.string().min(1, "Concentration is required"),
  batchNumber: z.string().min(1, "Batch number is required"),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
  quantityPurchased: z.string().min(1, "Quantity purchased is required"),
  quantityRemaining: z.string().min(1, "Quantity remaining is required"),
  unitCost: z.string().min(1, "Unit cost is required"),
  storageLocation: z.string().min(1, "Storage location is required"),
  hazardClass: z.string().min(1, "Hazard class is required"),
  phi: z.string().min(1, "PHI is required"),
  rei: z.string().min(1, "REI is required"),
  notes: z.string().optional(),
})

type ChemicalFormValues = z.infer<typeof chemicalFormSchema>

const defaultValues: Partial<ChemicalFormValues> = {
  chemicalType: "Herbicide",
  hazardClass: "III",
}

const chemicalInventory = [
  {
    id: "CH001",
    name: "Roundup PowerMAX",
    type: "Herbicide",
    ingredient: "Glyphosate",
    concentration: "48.7%",
    quantity: "55 gal",
    remaining: "42 gal",
    expiry: "2026-03-15",
    hazard: "III",
    phi: "7 days",
    status: "Good"
  },
  {
    id: "CH002",
    name: "Sencor 75DF",
    type: "Herbicide",
    ingredient: "Metribuzin",
    concentration: "75%",
    quantity: "10 lbs",
    remaining: "7 lbs",
    expiry: "2025-08-20",
    hazard: "II",
    phi: "60 days",
    status: "Good"
  },
  {
    id: "CH003",
    name: "Warrior II",
    type: "Insecticide",
    ingredient: "Lambda-cyhalothrin",
    concentration: "22.8%",
    quantity: "2.5 gal",
    remaining: "0.8 gal",
    expiry: "2025-12-31",
    hazard: "II",
    phi: "30 days",
    status: "Low Stock"
  }
]

export default function ChemicalInventory() {
  const { toast } = useToast()
  
  const form = useForm<ChemicalFormValues>({
    resolver: zodResolver(chemicalFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ChemicalFormValues) {
    toast({
      title: "Chemical Record Added",
      description: `${data.productName} has been added to inventory.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Inventory",
      description: "Your chemical inventory is being exported to CSV.",
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
                <Package className="w-8 h-8 text-red-500" />
                Chemical Inventory
              </h1>
              <p className="text-gray-600 mt-2">Manage pesticides, herbicides, and other chemicals</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Chemical
            </Button>
          </div>
        </div>

        {/* Safety Alert */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <div>
                <h3 className="font-semibold text-orange-800">Safety Reminder</h3>
                <p className="text-orange-700">Always follow proper storage and handling procedures for chemicals. Ensure PHI and REI periods are observed.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Inventory */}
        <Card>
          <CardHeader>
            <CardTitle>Current Chemical Inventory</CardTitle>
            <CardDescription>Overview of all chemicals and pesticides in stock</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Active Ingredient</TableHead>
                  <TableHead>Concentration</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Remaining</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Hazard</TableHead>
                  <TableHead>PHI</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {chemicalInventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.ingredient}</TableCell>
                    <TableCell>{item.concentration}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.remaining}</TableCell>
                    <TableCell>{item.expiry}</TableCell>
                    <TableCell>
                      <Badge variant={item.hazard === "II" ? "destructive" : "secondary"}>
                        Class {item.hazard}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.phi}</TableCell>
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

        {/* Add Chemical Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Chemical</CardTitle>
            <CardDescription>Register new chemical purchases and update inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Roundup PowerMAX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="chemicalType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chemical Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Herbicide">Herbicide</SelectItem>
                            <SelectItem value="Insecticide">Insecticide</SelectItem>
                            <SelectItem value="Fungicide">Fungicide</SelectItem>
                            <SelectItem value="Fertilizer">Fertilizer</SelectItem>
                            <SelectItem value="Growth Regulator">Growth Regulator</SelectItem>
                            <SelectItem value="Adjuvant">Adjuvant</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="manufacturer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Manufacturer</FormLabel>
                        <FormControl>
                          <Input placeholder="Bayer CropScience" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="activeIngredient"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Active Ingredient</FormLabel>
                        <FormControl>
                          <Input placeholder="Glyphosate" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="concentration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Concentration</FormLabel>
                        <FormControl>
                          <Input placeholder="48.7%" {...field} />
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
                          <Input placeholder="BC2025-001" {...field} />
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
                        <FormLabel>Quantity Purchased</FormLabel>
                        <FormControl>
                          <Input placeholder="55 gal" {...field} />
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
                        <FormLabel>Quantity Remaining</FormLabel>
                        <FormControl>
                          <Input placeholder="55 gal" {...field} />
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
                        <FormLabel>Unit Cost ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="125.00" {...field} />
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
                          <Input placeholder="Chemical Storage Building A" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hazardClass"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hazard Class</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hazard class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="I">Class I - Highly Toxic</SelectItem>
                            <SelectItem value="II">Class II - Moderately Toxic</SelectItem>
                            <SelectItem value="III">Class III - Slightly Toxic</SelectItem>
                            <SelectItem value="IV">Class IV - Practically Non-toxic</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PHI (Pre-Harvest Interval)</FormLabel>
                        <FormControl>
                          <Input placeholder="7 days" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rei"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>REI (Restricted Entry Interval)</FormLabel>
                        <FormControl>
                          <Input placeholder="12 hours" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Additional safety notes and handling instructions" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Chemical Record
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
