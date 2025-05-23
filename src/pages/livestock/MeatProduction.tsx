
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Beef, Download } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function MeatProduction() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      recordDate: "",
      currentWeight: "",
      previousWeight: "",
      weightGain: "",
      avgDailyGain: "",
      daysOnFeed: "",
      feedConsumed: "",
      feedConversionEfficiency: "",
      bodyConditionScore: "",
      muscleScore: "",
      fatCover: "",
      frameSize: "",
      carcassWeight: "",
      dressingPercentage: "",
      marbleScore: "",
      yieldGrade: "",
      qualityGrade: "",
      marketReadiness: "",
      estimatedValue: "",
      targetMarketDate: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Meat production data:", data)
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <NavLink to="/livestock">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Livestock
            </NavLink>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Beef className="w-8 h-8 text-red-500" />
              Meat Production Records
            </h1>
            <p className="text-gray-600 mt-2">Growth tracking and carcass quality assessments</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Meat Production Record</CardTitle>
            <CardDescription>Track live weight, growth rates, and market readiness assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="animalId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Animal ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter animal ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="recordDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Record Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="daysOnFeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Days on Feed</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="180" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Weight Tracking */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Weight Tracking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="currentWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Weight (kg) *</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="450.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="previousWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="420.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="weightGain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight Gain (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="30.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="avgDailyGain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Avg Daily Gain (kg/day)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="1.25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Feed Efficiency */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Feed Efficiency</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="feedConsumed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Consumed (kg/day)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="8.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="feedConversionEfficiency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Conversion Efficiency</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="6.8" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Body Condition Assessment */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Body Condition Assessment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="bodyConditionScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Body Condition Score (1-9)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select score" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 - Emaciated</SelectItem>
                              <SelectItem value="2">2 - Very Thin</SelectItem>
                              <SelectItem value="3">3 - Thin</SelectItem>
                              <SelectItem value="4">4 - Borderline</SelectItem>
                              <SelectItem value="5">5 - Moderate</SelectItem>
                              <SelectItem value="6">6 - Good</SelectItem>
                              <SelectItem value="7">7 - Very Good</SelectItem>
                              <SelectItem value="8">8 - Fat</SelectItem>
                              <SelectItem value="9">9 - Very Fat</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="muscleScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Muscle Score (1-5)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select score" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 - Poor</SelectItem>
                              <SelectItem value="2">2 - Below Average</SelectItem>
                              <SelectItem value="3">3 - Average</SelectItem>
                              <SelectItem value="4">4 - Good</SelectItem>
                              <SelectItem value="5">5 - Excellent</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fatCover"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fat Cover (mm)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="8.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="frameSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Frame Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">Small</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="large">Large</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Carcass Quality Predictions */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Carcass Quality Predictions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="carcassWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Carcass Weight (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="270.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dressingPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dressing Percentage (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="60.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="marbleScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marble Score</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select score" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 - Practically Devoid</SelectItem>
                              <SelectItem value="2">2 - Traces</SelectItem>
                              <SelectItem value="3">3 - Slight</SelectItem>
                              <SelectItem value="4">4 - Small</SelectItem>
                              <SelectItem value="5">5 - Modest</SelectItem>
                              <SelectItem value="6">6 - Moderate</SelectItem>
                              <SelectItem value="7">7 - Slightly Abundant</SelectItem>
                              <SelectItem value="8">8 - Moderately Abundant</SelectItem>
                              <SelectItem value="9">9 - Abundant</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="yieldGrade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Yield Grade</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select grade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 - Highest Yield</SelectItem>
                              <SelectItem value="2">2 - High Yield</SelectItem>
                              <SelectItem value="3">3 - Average Yield</SelectItem>
                              <SelectItem value="4">4 - Below Average</SelectItem>
                              <SelectItem value="5">5 - Lowest Yield</SelectItem>
                            </SelectContent>
                          </Select>
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
                              <SelectItem value="prime">Prime</SelectItem>
                              <SelectItem value="choice">Choice</SelectItem>
                              <SelectItem value="select">Select</SelectItem>
                              <SelectItem value="standard">Standard</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Market Readiness */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Market Readiness</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="marketReadiness"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Market Readiness</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="not-ready">Not Ready</SelectItem>
                              <SelectItem value="approaching">Approaching</SelectItem>
                              <SelectItem value="ready">Ready</SelectItem>
                              <SelectItem value="overfinished">Over-finished</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="estimatedValue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Value ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="1250.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="targetMarketDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Market Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Notes</h3>
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any additional observations or notes..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Meat Production Record
                  </Button>
                  <Button type="button" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
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
