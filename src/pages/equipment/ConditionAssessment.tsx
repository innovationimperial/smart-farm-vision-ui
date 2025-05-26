
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
import { ArrowLeft, Save, Camera, AlertTriangle, CheckCircle, Wrench } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const conditionAssessmentSchema = z.object({
  equipmentId: z.string().min(1, "Equipment ID is required"),
  assessmentDate: z.string().min(1, "Assessment date is required"),
  inspector: z.string().min(1, "Inspector name is required"),
  overallCondition: z.string().min(1, "Overall condition is required"),
  operationalStatus: z.string().min(1, "Operational status is required"),
  visualInspection: z.string().min(1, "Visual inspection result is required"),
  mechanicalCondition: z.string().min(1, "Mechanical condition is required"),
  electricalCondition: z.string().optional(),
  hydraulicCondition: z.string().optional(),
  engineCondition: z.string().optional(),
  tireCondition: z.string().optional(),
  fluidLevels: z.string().min(1, "Fluid levels check is required"),
  safetyFeatures: z.string().min(1, "Safety features check is required"),
  defectsFound: z.string().optional(),
  repairsNeeded: z.string().optional(),
  urgencyLevel: z.string().min(1, "Urgency level is required"),
  estimatedCost: z.string().optional(),
  nextAssessmentDate: z.string().min(1, "Next assessment date is required"),
  recommendations: z.string().optional(),
  notes: z.string().optional(),
})

type ConditionAssessmentValues = z.infer<typeof conditionAssessmentSchema>

const defaultValues: Partial<ConditionAssessmentValues> = {
  overallCondition: "Good",
  operationalStatus: "Operational",
  visualInspection: "Pass",
  mechanicalCondition: "Good",
  urgencyLevel: "Medium",
}

// Sample equipment for selection
const equipmentList = [
  { id: "EQ-001", name: "Heavy Duty Tractor - JD 4066R" },
  { id: "EQ-002", name: "Feed Mixer - Model MX-2000" },
  { id: "EQ-003", name: "Harvester - Case IH 8250" },
  { id: "EQ-004", name: "Irrigation Pump - Grundfos CR45" },
]

export default function ConditionAssessment() {
  const { toast } = useToast()
  const [selectedEquipment, setSelectedEquipment] = useState("")
  
  const form = useForm<ConditionAssessmentValues>({
    resolver: zodResolver(conditionAssessmentSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ConditionAssessmentValues) {
    toast({
      title: "Assessment Completed",
      description: `Condition assessment for ${data.equipmentId} has been saved.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function addPhoto() {
    toast({
      title: "Photo Added",
      description: "Assessment photo has been added to documentation.",
    })
  }

  const getConditionColor = (condition: string) => {
    switch(condition) {
      case "Excellent": return "bg-green-100 text-green-800"
      case "Good": return "bg-blue-100 text-blue-800"
      case "Fair": return "bg-yellow-100 text-yellow-800"
      case "Poor": return "bg-orange-100 text-orange-800"
      case "Critical": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case "Low": return "bg-green-100 text-green-800"
      case "Medium": return "bg-yellow-100 text-yellow-800"
      case "High": return "bg-orange-100 text-orange-800"
      case "Critical": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

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
              <CheckCircle className="w-8 h-8 text-green-600" />
              Condition Assessment
            </h1>
            <p className="text-slate-600">Evaluate equipment condition and performance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Equipment Selection */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-800">Select Equipment</CardTitle>
              <CardDescription>Choose equipment for assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {equipmentList.map((equipment) => (
                <div
                  key={equipment.id}
                  className={cn(
                    "p-3 border rounded-lg cursor-pointer transition-colors",
                    selectedEquipment === equipment.id 
                      ? "border-orange-300 bg-orange-50" 
                      : "border-slate-200 hover:border-slate-300"
                  )}
                  onClick={() => {
                    setSelectedEquipment(equipment.id)
                    form.setValue("equipmentId", equipment.id)
                  }}
                >
                  <p className="font-medium text-slate-800">{equipment.id}</p>
                  <p className="text-sm text-slate-600">{equipment.name}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Main Assessment Form */}
          <div className="xl:col-span-3">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Assessment Details</CardTitle>
                <CardDescription>Complete equipment condition evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Assessment Information */}
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Assessment Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                          name="assessmentDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Assessment Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="inspector"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Inspector</FormLabel>
                              <FormControl>
                                <Input placeholder="Inspector name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Overall Assessment */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Overall Assessment</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="overallCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Overall Condition</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Excellent">Excellent</SelectItem>
                                  <SelectItem value="Good">Good</SelectItem>
                                  <SelectItem value="Fair">Fair</SelectItem>
                                  <SelectItem value="Poor">Poor</SelectItem>
                                  <SelectItem value="Critical">Critical</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="operationalStatus"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Operational Status</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Operational">Operational</SelectItem>
                                  <SelectItem value="Limited Operation">Limited Operation</SelectItem>
                                  <SelectItem value="Non-Operational">Non-Operational</SelectItem>
                                  <SelectItem value="Under Repair">Under Repair</SelectItem>
                                  <SelectItem value="Decommissioned">Decommissioned</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Component Conditions */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Component Assessment</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="visualInspection"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Visual Inspection</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Pass">Pass</SelectItem>
                                  <SelectItem value="Pass with Notes">Pass with Notes</SelectItem>
                                  <SelectItem value="Fail">Fail</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mechanicalCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mechanical Condition</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Excellent">Excellent</SelectItem>
                                  <SelectItem value="Good">Good</SelectItem>
                                  <SelectItem value="Fair">Fair</SelectItem>
                                  <SelectItem value="Poor">Poor</SelectItem>
                                  <SelectItem value="N/A">N/A</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="electricalCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Electrical Condition</FormLabel>
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
                                  <SelectItem value="N/A">N/A</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="hydraulicCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Hydraulic Condition</FormLabel>
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
                                  <SelectItem value="N/A">N/A</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="engineCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Engine Condition</FormLabel>
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
                                  <SelectItem value="N/A">N/A</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="tireCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tire/Track Condition</FormLabel>
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
                                  <SelectItem value="N/A">N/A</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Safety & Fluids */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Safety & Fluids</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fluidLevels"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Fluid Levels Check</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="All Normal">All Normal</SelectItem>
                                  <SelectItem value="Low Levels">Low Levels</SelectItem>
                                  <SelectItem value="Requires Top-up">Requires Top-up</SelectItem>
                                  <SelectItem value="Contaminated">Contaminated</SelectItem>
                                  <SelectItem value="Leaks Detected">Leaks Detected</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="safetyFeatures"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Safety Features Check</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="All Functional">All Functional</SelectItem>
                                  <SelectItem value="Minor Issues">Minor Issues</SelectItem>
                                  <SelectItem value="Major Issues">Major Issues</SelectItem>
                                  <SelectItem value="Non-Functional">Non-Functional</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Issues & Recommendations */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Issues & Recommendations</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="defectsFound"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Defects Found</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="List any defects or issues found during inspection..."
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
                          name="repairsNeeded"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Repairs Needed</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe required repairs and maintenance..."
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
                            name="urgencyLevel"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Urgency Level</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="Low">Low</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Critical">Critical</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="estimatedCost"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Estimated Repair Cost ($)</FormLabel>
                                <FormControl>
                                  <Input type="number" step="0.01" placeholder="0.00" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="nextAssessmentDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Next Assessment Date</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="recommendations"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Recommendations</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Provide recommendations for maintenance, operation, or replacement..."
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
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Notes</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Any additional observations or notes..."
                                  className="min-h-[80px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        <Save className="w-4 h-4 mr-2" />
                        Save Assessment
                      </Button>
                      <Button type="button" variant="outline" onClick={addPhoto}>
                        <Camera className="w-4 h-4 mr-2" />
                        Add Photos
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
