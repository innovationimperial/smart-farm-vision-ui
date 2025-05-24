
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Plus, Save, Factory, Settings, Wrench } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const infrastructureSchema = z.object({
  component_id: z.string().min(1, "Component ID is required"),
  component_name: z.string().min(1, "Component name is required"),
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Type is required"),
  location: z.string().min(1, "Location is required"),
  installation_date: z.string().min(1, "Installation date is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  model: z.string().min(1, "Model is required"),
  capacity: z.string().min(1, "Capacity is required"),
  power_rating: z.string().optional(),
  maintenance_schedule: z.string().min(1, "Maintenance schedule is required"),
  warranty_expiry: z.string().optional(),
  cost: z.number().min(0, "Cost must be positive"),
  status: z.string().min(1, "Status is required"),
  notes: z.string().optional(),
})

type InfrastructureFormData = z.infer<typeof infrastructureSchema>

const mockInfrastructure = [
  {
    id: "INF001",
    name: "Main Aerator",
    category: "Aeration",
    type: "Paddlewheel",
    location: "Pond A",
    status: "Active",
    last_maintenance: "2024-01-10"
  },
  {
    id: "INF002",
    name: "Water Pump",
    category: "Water Management",
    type: "Centrifugal Pump",
    location: "Pump House",
    status: "Active",
    last_maintenance: "2024-01-05"
  }
]

export default function SystemInfrastructure() {
  const [infrastructure, setInfrastructure] = useState(mockInfrastructure)
  const { toast } = useToast()

  const form = useForm<InfrastructureFormData>({
    resolver: zodResolver(infrastructureSchema),
    defaultValues: {
      component_id: "",
      component_name: "",
      category: "",
      type: "",
      location: "",
      installation_date: "",
      manufacturer: "",
      model: "",
      capacity: "",
      power_rating: "",
      maintenance_schedule: "",
      warranty_expiry: "",
      cost: 0,
      status: "",
      notes: "",
    },
  })

  const onSubmit = (data: InfrastructureFormData) => {
    console.log("Infrastructure data:", data)
    toast({
      title: "Infrastructure Component Added",
      description: `${data.component_name} has been successfully added.`,
    })
    form.reset()
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Factory className="w-8 h-8 text-indigo-500" />
              System Infrastructure
            </h1>
            <p className="text-gray-600 mt-2">Track aquaculture system components and facilities</p>
          </div>
          <Button asChild variant="outline">
            <NavLink to="/aquaculture" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Aquaculture
            </NavLink>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Components</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <Factory className="h-5 w-5 text-indigo-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active</p>
                  <p className="text-2xl font-bold">22</p>
                </div>
                <Settings className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Maintenance Due</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Wrench className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="text-2xl font-bold">$45,200</p>
                </div>
                <Settings className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Infrastructure Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Infrastructure Component
              </CardTitle>
              <CardDescription>
                Register new system infrastructure components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="component_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Component ID</FormLabel>
                          <FormControl>
                            <Input placeholder="INF001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="component_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Component Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Main Aerator" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="aeration">Aeration System</SelectItem>
                              <SelectItem value="pumping">Pumping System</SelectItem>
                              <SelectItem value="filtration">Filtration System</SelectItem>
                              <SelectItem value="monitoring">Monitoring Equipment</SelectItem>
                              <SelectItem value="feeding">Feeding System</SelectItem>
                              <SelectItem value="electrical">Electrical System</SelectItem>
                              <SelectItem value="structural">Structural Component</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <FormControl>
                            <Input placeholder="Paddlewheel Aerator" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Pond A" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="installation_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Installation Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="manufacturer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Manufacturer</FormLabel>
                          <FormControl>
                            <Input placeholder="AquaTech Industries" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="model"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model</FormLabel>
                          <FormControl>
                            <Input placeholder="AT-500" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="capacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Capacity</FormLabel>
                          <FormControl>
                            <Input placeholder="5 HP / 1000 L/min" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cost ($)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="2500" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="maintenance_schedule"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maintenance Schedule</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select schedule" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                              <SelectItem value="quarterly">Quarterly</SelectItem>
                              <SelectItem value="semi_annual">Semi-Annual</SelectItem>
                              <SelectItem value="annual">Annual</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="maintenance">Under Maintenance</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                              <SelectItem value="retired">Retired</SelectItem>
                            </SelectContent>
                          </Select>
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
                            placeholder="Additional notes about the component..."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Add Infrastructure Component
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Infrastructure List */}
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Components</CardTitle>
              <CardDescription>
                Current system infrastructure components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {infrastructure.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
