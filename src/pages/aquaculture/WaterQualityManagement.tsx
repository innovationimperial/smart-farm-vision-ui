
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
import { ArrowLeft, Plus, Save, Droplets, AlertTriangle, CheckCircle } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const waterQualitySchema = z.object({
  water_body_id: z.string().min(1, "Water body is required"),
  test_date: z.string().min(1, "Test date is required"),
  test_time: z.string().min(1, "Test time is required"),
  temperature: z.number().min(0, "Temperature must be positive"),
  ph_level: z.number().min(0).max(14, "pH must be between 0-14"),
  dissolved_oxygen: z.number().min(0, "Dissolved oxygen must be positive"),
  ammonia: z.number().min(0, "Ammonia level must be positive"),
  nitrite: z.number().min(0, "Nitrite level must be positive"),
  nitrate: z.number().min(0, "Nitrate level must be positive"),
  alkalinity: z.number().min(0, "Alkalinity must be positive"),
  hardness: z.number().min(0, "Hardness must be positive"),
  turbidity: z.number().min(0, "Turbidity must be positive"),
  salinity: z.number().min(0, "Salinity must be positive"),
  chlorine: z.number().min(0, "Chlorine level must be positive"),
  tested_by: z.string().min(1, "Tester name is required"),
  testing_method: z.string().min(1, "Testing method is required"),
  remarks: z.string().optional(),
})

type WaterQualityFormData = z.infer<typeof waterQualitySchema>

const mockWaterQualityRecords = [
  {
    id: "WQ001",
    water_body_id: "WB001",
    test_date: "2024-01-15",
    temperature: 26.5,
    ph_level: 7.2,
    dissolved_oxygen: 6.8,
    status: "Normal"
  },
  {
    id: "WQ002",
    water_body_id: "WB002", 
    test_date: "2024-01-15",
    temperature: 24.8,
    ph_level: 6.9,
    dissolved_oxygen: 5.2,
    status: "Warning"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Normal": return "bg-green-100 text-green-800"
    case "Warning": return "bg-yellow-100 text-yellow-800"
    case "Critical": return "bg-red-100 text-red-800"
    default: return "bg-gray-100 text-gray-800"
  }
}

export default function WaterQualityManagement() {
  const [qualityRecords, setQualityRecords] = useState(mockWaterQualityRecords)
  const { toast } = useToast()

  const form = useForm<WaterQualityFormData>({
    resolver: zodResolver(waterQualitySchema),
    defaultValues: {
      water_body_id: "",
      test_date: "",
      test_time: "",
      temperature: 0,
      ph_level: 0,
      dissolved_oxygen: 0,
      ammonia: 0,
      nitrite: 0,
      nitrate: 0,
      alkalinity: 0,
      hardness: 0,
      turbidity: 0,
      salinity: 0,
      chlorine: 0,
      tested_by: "",
      testing_method: "",
      remarks: "",
    },
  })

  const onSubmit = (data: WaterQualityFormData) => {
    console.log("Water quality data:", data)
    toast({
      title: "Water Quality Recorded",
      description: `Water quality test for ${data.water_body_id} has been recorded.`,
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
              <Droplets className="w-8 h-8 text-blue-500" />
              Water Quality Management
            </h1>
            <p className="text-gray-600 mt-2">Monitor and manage water quality parameters</p>
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
                  <p className="text-sm text-gray-600">Tests Today</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Normal Status</p>
                  <p className="text-2xl font-bold">6</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Warnings</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Critical</p>
                  <p className="text-2xl font-bold">0</p>
                </div>
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Water Quality Testing Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Record Water Quality Test
              </CardTitle>
              <CardDescription>
                Record water quality parameters for monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="water_body_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Body</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select water body" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="WB001">Main Production Pond</SelectItem>
                              <SelectItem value="WB002">Nursery Tank</SelectItem>
                              <SelectItem value="WB003">Grow-out Pond 1</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="test_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Test Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="test_time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Test Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="temperature"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="26.5" 
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
                      name="ph_level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>pH Level</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="7.2" 
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
                      name="dissolved_oxygen"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dissolved Oxygen (mg/L)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="6.8" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="ammonia"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ammonia (mg/L)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.01"
                              placeholder="0.25" 
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
                      name="nitrite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nitrite (mg/L)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.01"
                              placeholder="0.15" 
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
                      name="nitrate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nitrate (mg/L)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              step="0.1"
                              placeholder="5.0" 
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
                      name="tested_by"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tested By</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="testing_method"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Testing Method</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="test_kit">Test Kit</SelectItem>
                              <SelectItem value="digital_meter">Digital Meter</SelectItem>
                              <SelectItem value="laboratory">Laboratory Analysis</SelectItem>
                              <SelectItem value="automated_system">Automated System</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="remarks"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Remarks</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Additional observations or notes..."
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
                    Record Water Quality Test
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Tests</CardTitle>
              <CardDescription>
                Latest water quality test results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualityRecords.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{record.water_body_id}</p>
                        <p className="text-sm text-gray-600">{record.test_date}</p>
                      </div>
                      <span className={cn(
                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                        getStatusColor(record.status)
                      )}>
                        {record.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Temp:</span> {record.temperature}°C
                      </div>
                      <div>
                        <span className="text-gray-600">pH:</span> {record.ph_level}
                      </div>
                      <div>
                        <span className="text-gray-600">DO:</span> {record.dissolved_oxygen} mg/L
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
