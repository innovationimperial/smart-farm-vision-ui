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
import { ArrowLeft, Plus, Save, Waves, MapPin, Edit, Trash2 } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const waterBodySchema = z.object({
  id: z.string().min(1, "Water body ID is required"),
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  location: z.string().min(1, "Location is required"),
  surface_area: z.number().min(0.1, "Surface area must be greater than 0"),
  max_depth: z.number().min(0.1, "Maximum depth must be greater than 0"),
  avg_depth: z.number().min(0.1, "Average depth must be greater than 0"),
  volume: z.number().min(1, "Volume must be greater than 0"),
  water_source: z.string().min(1, "Water source is required"),
  construction_date: z.string().min(1, "Construction date is required"),
  liner_type: z.string().optional(),
  aeration_system: z.string().min(1, "Aeration system status is required"),
  inlet_outlet: z.string().min(1, "Inlet/outlet description is required"),
  gps_coordinates: z.string().optional(),
  notes: z.string().optional(),
})

type WaterBodyFormData = z.infer<typeof waterBodySchema>

const mockWaterBodies = [
  {
    id: "WB001",
    name: "Main Production Pond",
    type: "Earthen Pond",
    location: "Section A",
    surface_area: 2500,
    max_depth: 2.5,
    status: "Active"
  },
  {
    id: "WB002", 
    name: "Nursery Tank",
    type: "Concrete Tank",
    location: "Section B",
    surface_area: 100,
    max_depth: 1.5,
    status: "Active"
  }
]

export default function WaterBodyRegistration() {
  const [waterBodies, setWaterBodies] = useState(mockWaterBodies)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<WaterBodyFormData>({
    resolver: zodResolver(waterBodySchema),
    defaultValues: {
      id: "",
      name: "",
      type: "",
      location: "",
      surface_area: 0,
      max_depth: 0,
      avg_depth: 0,
      volume: 0,
      water_source: "",
      construction_date: "",
      liner_type: "",
      aeration_system: "",
      inlet_outlet: "",
      gps_coordinates: "",
      notes: "",
    },
  })

  const onSubmit = (data: WaterBodyFormData) => {
    console.log("Water body data:", data)
    toast({
      title: "Water Body Registered",
      description: `${data.name} has been successfully registered.`,
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
              <Waves className="w-8 h-8 text-blue-500" />
              Water Body Registration
            </h1>
            <p className="text-gray-600 mt-2">Register and manage water bodies for aquaculture operations</p>
          </div>
          <Button asChild variant="outline">
            <NavLink to="/aquaculture" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Aquaculture
            </NavLink>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Register New Water Body
              </CardTitle>
              <CardDescription>
                Add a new water body to your aquaculture system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Body ID</FormLabel>
                          <FormControl>
                            <Input placeholder="WB001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Main Production Pond" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="earthen_pond">Earthen Pond</SelectItem>
                              <SelectItem value="concrete_tank">Concrete Tank</SelectItem>
                              <SelectItem value="fiberglass_tank">Fiberglass Tank</SelectItem>
                              <SelectItem value="plastic_tank">Plastic Tank</SelectItem>
                              <SelectItem value="lined_pond">Lined Pond</SelectItem>
                              <SelectItem value="cage_system">Cage System</SelectItem>
                            </SelectContent>
                          </Select>
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
                            <Input placeholder="Section A" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="surface_area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Surface Area (m²)</FormLabel>
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

                    <FormField
                      control={form.control}
                      name="max_depth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Max Depth (m)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="2.5" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="avg_depth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Avg Depth (m)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="2.0" 
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
                      name="volume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Volume (m³)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="5000" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="water_source"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Source</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="borehole">Borehole</SelectItem>
                              <SelectItem value="river">River</SelectItem>
                              <SelectItem value="lake">Lake</SelectItem>
                              <SelectItem value="municipal">Municipal Supply</SelectItem>
                              <SelectItem value="rainfall">Rainfall</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="construction_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Construction Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="aeration_system"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aeration System</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select aeration status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="paddlewheel">Paddlewheel Aerator</SelectItem>
                            <SelectItem value="diffuser">Diffuser System</SelectItem>
                            <SelectItem value="fountain">Fountain Aerator</SelectItem>
                            <SelectItem value="none">No Aeration</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any additional information about the water body..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Register Water Body
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Existing Water Bodies */}
          <Card>
            <CardHeader>
              <CardTitle>Registered Water Bodies</CardTitle>
              <CardDescription>
                Currently registered water bodies in your system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Area (m²)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {waterBodies.map((waterBody) => (
                    <TableRow key={waterBody.id}>
                      <TableCell className="font-medium">{waterBody.id}</TableCell>
                      <TableCell>{waterBody.name}</TableCell>
                      <TableCell>{waterBody.type}</TableCell>
                      <TableCell>{waterBody.surface_area.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {waterBody.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
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
