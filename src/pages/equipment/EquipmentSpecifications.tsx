
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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Save, FileText, Wrench } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const equipmentSpecificationsSchema = z.object({
  equipmentId: z.string().min(1, "Equipment ID is required"),
  specificationDate: z.string().min(1, "Specification date is required"),
  
  // Technical Specifications
  engineType: z.string().optional(),
  enginePower: z.string().optional(),
  engineDisplacement: z.string().optional(),
  fuelCapacity: z.string().optional(),
  fuelConsumption: z.string().optional(),
  transmissionType: z.string().optional(),
  numberOfGears: z.string().optional(),
  hydraulicPressure: z.string().optional(),
  hydraulicFlow: z.string().optional(),
  
  // Physical Specifications
  overallLength: z.string().optional(),
  overallWidth: z.string().optional(),
  overallHeight: z.string().optional(),
  operatingWeight: z.string().optional(),
  groundClearance: z.string().optional(),
  wheelbase: z.string().optional(),
  
  // Performance Specifications
  maxSpeed: z.string().optional(),
  liftCapacity: z.string().optional(),
  workingPressure: z.string().optional(),
  flowRate: z.string().optional(),
  operatingTemperature: z.string().optional(),
  
  // Electrical Specifications
  electricalSystem: z.string().optional(),
  batteryVoltage: z.string().optional(),
  alternatorOutput: z.string().optional(),
  
  // Safety Specifications
  safetyStandards: z.string().optional(),
  certifications: z.string().optional(),
  emergencyFeatures: z.string().optional(),
  
  // Environmental Specifications
  emissionStandard: z.string().optional(),
  noiseLevel: z.string().optional(),
  operatingConditions: z.string().optional(),
  
  // Maintenance Specifications
  serviceIntervals: z.string().optional(),
  lubricantCapacity: z.string().optional(),
  filterSpecifications: z.string().optional(),
  
  notes: z.string().optional(),
})

type EquipmentSpecificationsValues = z.infer<typeof equipmentSpecificationsSchema>

// Sample equipment for selection
const equipmentList = [
  { id: "EQ-001", name: "Heavy Duty Tractor - JD 4066R", type: "Tractor" },
  { id: "EQ-002", name: "Feed Mixer - Model MX-2000", type: "Mixer" },
  { id: "EQ-003", name: "Harvester - Case IH 8250", type: "Harvester" },
  { id: "EQ-004", name: "Irrigation Pump - Grundfos CR45", type: "Pump" },
]

export default function EquipmentSpecifications() {
  const { toast } = useToast()
  const [selectedEquipment, setSelectedEquipment] = useState("")
  
  const form = useForm<EquipmentSpecificationsValues>({
    resolver: zodResolver(equipmentSpecificationsSchema),
    mode: "onChange",
  })

  function onSubmit(data: EquipmentSpecificationsValues) {
    toast({
      title: "Specifications Saved",
      description: `Specifications for ${data.equipmentId} have been updated.`,
    })
    console.log(data)
  }

  const selectedEquipmentDetails = equipmentList.find(eq => eq.id === selectedEquipment)

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center gap-3 mb-6">
          <NavLink to="/equipment">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Equipment
            </Button>
          </NavLink>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Equipment Specifications
            </h1>
            <p className="text-slate-600">Detailed technical specifications and documentation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Equipment Selection */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-800">Select Equipment</CardTitle>
              <CardDescription>Choose equipment to view/edit specifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {equipmentList.map((equipment) => (
                <div
                  key={equipment.id}
                  className={cn(
                    "p-3 border rounded-lg cursor-pointer transition-colors",
                    selectedEquipment === equipment.id 
                      ? "border-blue-300 bg-blue-50" 
                      : "border-slate-200 hover:border-slate-300"
                  )}
                  onClick={() => {
                    setSelectedEquipment(equipment.id)
                    form.setValue("equipmentId", equipment.id)
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-slate-800">{equipment.id}</p>
                      <p className="text-sm text-slate-600">{equipment.name}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {equipment.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Specifications Form */}
          <div className="xl:col-span-3">
            {selectedEquipmentDetails ? (
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">
                    Specifications: {selectedEquipmentDetails.name}
                  </CardTitle>
                  <CardDescription>
                    Complete technical specifications and documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="equipmentId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Equipment ID</FormLabel>
                              <FormControl>
                                <Input {...field} readOnly className="bg-slate-50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="specificationDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Specification Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Tabs defaultValue="technical" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger value="technical">Technical</TabsTrigger>
                          <TabsTrigger value="physical">Physical</TabsTrigger>
                          <TabsTrigger value="performance">Performance</TabsTrigger>
                          <TabsTrigger value="safety">Safety</TabsTrigger>
                          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                        </TabsList>

                        <TabsContent value="technical" className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium text-slate-800">Technical Specifications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <FormField
                              control={form.control}
                              name="engineType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Engine Type</FormLabel>
                                  <FormControl>
                                    <Input placeholder="4-Cylinder Diesel" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="enginePower"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Engine Power (HP)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="66" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="engineDisplacement"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Engine Displacement (L)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="4.5" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="fuelCapacity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Fuel Capacity (L)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="170" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="fuelConsumption"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Fuel Consumption (L/hr)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="12.5" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="transmissionType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Transmission Type</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Manual/Automatic" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="numberOfGears"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Number of Gears</FormLabel>
                                  <FormControl>
                                    <Input placeholder="16F/16R" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="hydraulicPressure"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Hydraulic Pressure (bar)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="210" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="hydraulicFlow"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Hydraulic Flow (L/min)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="67" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="physical" className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium text-slate-800">Physical Specifications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <FormField
                              control={form.control}
                              name="overallLength"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Overall Length (mm)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="4200" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="overallWidth"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Overall Width (mm)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="2100" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="overallHeight"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Overall Height (mm)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="2800" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="operatingWeight"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Operating Weight (kg)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="3200" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="groundClearance"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Ground Clearance (mm)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="450" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="wheelbase"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Wheelbase (mm)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="2400" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="performance" className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium text-slate-800">Performance Specifications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <FormField
                              control={form.control}
                              name="maxSpeed"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Maximum Speed (km/h)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="40" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="liftCapacity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Lift Capacity (kg)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="2800" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="workingPressure"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Working Pressure (bar)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="180" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="flowRate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Flow Rate (L/min)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="55" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="operatingTemperature"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Operating Temperature (°C)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="-20 to +40" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-medium text-slate-800">Electrical System</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <FormField
                                control={form.control}
                                name="electricalSystem"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Electrical System (V)</FormLabel>
                                    <FormControl>
                                      <Input placeholder="12" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="batteryVoltage"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Battery Voltage (V)</FormLabel>
                                    <FormControl>
                                      <Input placeholder="12" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="alternatorOutput"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Alternator Output (A)</FormLabel>
                                    <FormControl>
                                      <Input placeholder="90" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="safety" className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium text-slate-800">Safety & Environmental</h3>
                          <div className="space-y-4">
                            <FormField
                              control={form.control}
                              name="safetyStandards"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Safety Standards</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="List applicable safety standards and certifications..."
                                      className="min-h-[80px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="certifications"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Certifications</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="List certifications (CE, ISO, etc.)..."
                                      className="min-h-[80px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="emergencyFeatures"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Emergency Features</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Describe emergency stops, safety systems, etc..."
                                      className="min-h-[80px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <FormField
                                control={form.control}
                                name="emissionStandard"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Emission Standard</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Stage IIIA" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="noiseLevel"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Noise Level (dB)</FormLabel>
                                    <FormControl>
                                      <Input placeholder="98" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="operatingConditions"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Operating Conditions</FormLabel>
                                    <FormControl>
                                      <Input placeholder="All weather" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="maintenance" className="space-y-4 mt-6">
                          <h3 className="text-lg font-medium text-slate-800">Maintenance Specifications</h3>
                          <div className="space-y-4">
                            <FormField
                              control={form.control}
                              name="serviceIntervals"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Service Intervals</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Engine oil: 250 hours&#10;Hydraulic oil: 1000 hours&#10;Air filter: 500 hours"
                                      className="min-h-[100px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="lubricantCapacity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Lubricant Capacity</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Engine oil: 12L&#10;Hydraulic oil: 45L&#10;Transmission oil: 28L"
                                      className="min-h-[100px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="filterSpecifications"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Filter Specifications</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Oil filter: RE504836&#10;Air filter: RE171281&#10;Fuel filter: RE62418"
                                      className="min-h-[100px]"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </TabsContent>
                      </Tabs>

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any additional specifications or notes..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Save className="w-4 h-4 mr-2" />
                        Save Specifications
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-center text-slate-500">
                    <Wrench className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                    <p>Select equipment from the list to view or edit specifications</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
