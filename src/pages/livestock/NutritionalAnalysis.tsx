
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, TrendingUp, BarChart3 } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function NutritionalAnalysis() {
  const form = useForm({
    defaultValues: {
      analysisDate: "",
      animalGroup: "",
      animalIds: "",
      animalCount: "",
      averageWeight: "",
      weightGainPeriod: "",
      startWeight: "",
      endWeight: "",
      totalWeightGain: "",
      averageDailyGain: "",
      feedType: "",
      totalFeedConsumed: "",
      feedConversionRatio: "",
      feedEfficiency: "",
      feedCostPerAnimal: "",
      costPerPoundGain: "",
      dietProtein: "",
      dietEnergy: "",
      dietFiber: "",
      nutritionalRequirement: "",
      deficiencies: "",
      supplementsUsed: "",
      bodyConditionScore: "",
      healthStatus: "",
      performanceBenchmark: "",
      industryComparison: "",
      improvementAreas: "",
      recommendedChanges: "",
      targetPerformance: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Nutritional analysis data:", data)
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
              <TrendingUp className="w-8 h-8 text-purple-500" />
              Nutritional Analysis
            </h1>
            <p className="text-gray-600 mt-2">Feed efficiency and growth performance analysis</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Nutritional Analysis Report</CardTitle>
            <CardDescription>Analyze feed efficiency, growth performance, and nutritional requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Analysis Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="analysisDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Analysis Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="animalGroup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Animal Group</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select group" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="dairy-cows">Dairy Cows</SelectItem>
                              <SelectItem value="beef-cattle">Beef Cattle</SelectItem>
                              <SelectItem value="sheep">Sheep</SelectItem>
                              <SelectItem value="goats">Goats</SelectItem>
                              <SelectItem value="pigs">Pigs</SelectItem>
                              <SelectItem value="poultry">Poultry</SelectItem>
                              <SelectItem value="calves">Calves</SelectItem>
                              <SelectItem value="feeders">Feeder Animals</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="animalCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Animals</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="animalIds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Animal IDs (if applicable)</FormLabel>
                        <FormControl>
                          <Input placeholder="A001, A002, A003..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Weight and Growth Performance */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Weight & Growth Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="weightGainPeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight Gain Period (days)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="startWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Start Weight (lbs)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="450.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="endWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average End Weight (lbs)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="500.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="averageDailyGain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Daily Gain (lbs/day)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="1.67" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Feed Efficiency */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Feed Efficiency Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="feedType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Feed Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select feed type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="total-mixed-ration">Total Mixed Ration</SelectItem>
                              <SelectItem value="grain">Grain</SelectItem>
                              <SelectItem value="hay">Hay</SelectItem>
                              <SelectItem value="pasture">Pasture</SelectItem>
                              <SelectItem value="silage">Silage</SelectItem>
                              <SelectItem value="pellets">Pellets</SelectItem>
                              <SelectItem value="mixed">Mixed Diet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="totalFeedConsumed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Feed Consumed (lbs)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="1500.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="feedConversionRatio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Conversion Ratio</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="6.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="feedEfficiency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Efficiency (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="15.4" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="feedCostPerAnimal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Cost per Animal ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="75.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Nutritional Content Analysis */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Nutritional Content Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="dietProtein"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Diet Protein Content (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="16.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dietEnergy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Diet Energy (Mcal/kg)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="3.25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dietFiber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Diet Fiber Content (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="18.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nutritionalRequirement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nutritional Requirements Analysis</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Analysis of whether nutritional needs are being met..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="deficiencies"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Identified Deficiencies</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any nutritional deficiencies observed..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Performance Benchmarking */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Performance Benchmarking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="bodyConditionScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Body Condition Score (1-9)</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" max="9" step="0.1" placeholder="5.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="healthStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Overall Health Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                              <SelectItem value="concerning">Concerning</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="costPerPoundGain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cost per Pound Gain ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="1.25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="performanceBenchmark"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Performance vs. Farm Historical Data</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Comparison with previous periods..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industryComparison"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry Comparison</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How performance compares to industry standards..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Recommendations & Improvements</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <FormField
                      control={form.control}
                      name="improvementAreas"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Areas for Improvement</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Identified areas where performance could be improved..." 
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
                      name="recommendedChanges"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Recommended Changes</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Specific recommendations for diet, feeding schedule, supplements..." 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="targetPerformance"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Performance Goals</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Specific performance targets to achieve..." {...field} />
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
                              <Textarea placeholder="Other observations, considerations..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Analysis
                  </Button>
                  <Button type="button" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
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
