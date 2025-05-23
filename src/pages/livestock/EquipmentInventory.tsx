
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Calendar, Download, FileText, Package, Plus, Save, Tool, Wrench } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const equipmentFormSchema = z.object({
  equipmentName: z.string().min(1, "Equipment name is required"),
  equipmentType: z.string().min(1, "Equipment type is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  modelNumber: z.string().min(1, "Model number is required"),
  serialNumber: z.string().min(1, "Serial number is required"),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  purchaseCost: z.string().min(1, "Purchase cost is required"),
  currentValue: z.string().min(1, "Current value is required"),
  location: z.string().min(1, "Location is required"),
  condition: z.string().min(1, "Condition is required"),
  maintenanceFrequency: z.string().min(1, "Maintenance frequency is required"),
  lastMaintenanceDate: z.string().min(1, "Last maintenance date is required"),
  nextMaintenanceDate: z.string().min(1, "Next maintenance date is required"),
  warrantyExpiration: z.string().optional(),
  insuranceCoverage: z.string().optional(),
  notes: z.string().optional(),
})

type EquipmentFormValues = z.infer<typeof equipmentFormSchema>

const defaultValues: Partial<EquipmentFormValues> = {
  equipmentType: "Feed Equipment",
  condition: "Good",
  maintenanceFrequency: "Monthly",
}

// Sample data for demonstration
const equipmentItems = [
  {
    id: "EQ001",
    name: "Feed Mixer",
    type: "Feed Equipment",
    model: "MX-2000",
    purchaseDate: "2023-06-15",
    value: "$12,500",
    nextMaintenance: "2025-06-01",
    condition: "Good"
  },
  {
    id: "EQ002",
    name: "Milking System",
    type: "Dairy Equipment",
    model: "MS-8X",
    purchaseDate: "2022-03-10",
    value: "$28,000",
    nextMaintenance: "2025-05-25",
    condition: "Good"
  },
  {
    id: "EQ003",
    name: "Tractor",
    type: "Heavy Equipment",
    model: "JD-4066R",
    purchaseDate: "2021-07-22",
    value: "$45,000",
    nextMaintenance: "2025-06-15",
    condition: "Fair"
  },
  {
    id: "EQ004",
    name: "Automatic Waterer",
    type: "Water Equipment",
    model: "AW-500",
    purchaseDate: "2024-01-05",
    value: "$3,200",
    nextMaintenance: "2025-07-05",
    condition: "Excellent"
  }
]

export default function EquipmentInventory() {
  const { toast } = useToast()
  
  const form = useForm<EquipmentFormValues>({
    resolver: zodResolver(equipmentFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: EquipmentFormValues) {
    toast({
      title: "Equipment Record Added",
      description: `${data.equipmentName} has been added to your inventory.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Inventory",
      description: "Your equipment inventory is being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Tool className="w-8 h-8 text-indigo-500" />
              Equipment Inventory
            </h1>
            <p className="text-gray-600 mt-2">Track and manage farm equipment and tools</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Inventory
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Equipment
            </Button>
          </div>
        </div>

        {/* Equipment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Equipment Value</p>
                  <h3 className="text-2xl font-bold">$88,700</h3>
                  <p className="text-xs text-gray-600">23 items in inventory</p>
                </div>
                <Package className="h-5 w-5 text-indigo-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Maintenance Due</p>
                  <h3 className="text-2xl font-bold">4</h3>
                  <p className="text-xs text-yellow-600">Within next 30 days</p>
                </div>
                <Wrench className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Items Needing Repair</p>
                  <h3 className="text-2xl font-bold">2</h3>
                  <p className="text-xs text-red-600">Scheduled for service</p>
                </div>
                <Tool className="h-5 w-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Warranty Expirations</p>
                  <h3 className="text-2xl font-bold">3</h3>
                  <p className="text-xs text-blue-600">Within next 90 days</p>
                </div>
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Equipment Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle>Equipment Inventory</CardTitle>
            <CardDescription>List of all farm equipment and machinery</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Next Maintenance</TableHead>
                  <TableHead>Condition</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipmentItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell>{item.purchaseDate}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell>{item.nextMaintenance}</TableCell>
                    <TableCell>
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        item.condition === "Excellent" ? "bg-green-100 text-green-800" : 
                        item.condition === "Good" ? "bg-blue-100 text-blue-800" :
                        item.condition === "Fair" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      )}>
                        {item.condition}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Equipment Record Form */}
        <Card>
          <CardHeader>
            <CardTitle>Equipment Details</CardTitle>
            <CardDescription>Add or update equipment information</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="equipmentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Equipment Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Feed Mixer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="equipmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Equipment Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select equipment type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Feed Equipment">Feed Equipment</SelectItem>
                            <SelectItem value="Dairy Equipment">Dairy Equipment</SelectItem>
                            <SelectItem value="Heavy Equipment">Heavy Equipment</SelectItem>
                            <SelectItem value="Water Equipment">Water Equipment</SelectItem>
                            <SelectItem value="Transportation">Transportation</SelectItem>
                            <SelectItem value="Handling Equipment">Handling Equipment</SelectItem>
                            <SelectItem value="Medical Equipment">Medical Equipment</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
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
                          <Input placeholder="John Deere" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="modelNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Model Number</FormLabel>
                        <FormControl>
                          <Input placeholder="MX-2000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serialNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serial Number</FormLabel>
                        <FormControl>
                          <Input placeholder="SN12345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Main Barn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Purchase & Value Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      name="purchaseCost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Purchase Cost ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="12500.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentValue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Value ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="9000.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="warrantyExpiration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Warranty Expiration Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="insuranceCoverage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insurance Coverage ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="10000.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Maintenance Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="condition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Condition</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select condition" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Excellent">Excellent</SelectItem>
                              <SelectItem value="Good">Good</SelectItem>
                              <SelectItem value="Fair">Fair</SelectItem>
                              <SelectItem value="Poor">Poor</SelectItem>
                              <SelectItem value="Needs Repair">Needs Repair</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maintenanceFrequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maintenance Frequency</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Weekly">Weekly</SelectItem>
                              <SelectItem value="Monthly">Monthly</SelectItem>
                              <SelectItem value="Quarterly">Quarterly</SelectItem>
                              <SelectItem value="Bi-annually">Bi-annually</SelectItem>
                              <SelectItem value="Annually">Annually</SelectItem>
                              <SelectItem value="As needed">As needed</SelectItem>
                              <SelectItem value="Hours based">Hours based</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastMaintenanceDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Maintenance Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nextMaintenanceDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Next Maintenance Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter any additional notes about this equipment" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Equipment
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
