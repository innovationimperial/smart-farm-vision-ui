
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { TrendingUp, Calculator, BarChart3, DollarSign } from "lucide-react"

const feedConversionSchema = z.object({
  periodStartDate: z.string().min(1, "Period start date is required"),
  periodEndDate: z.string().min(1, "Period end date is required"),
  waterBodyId: z.string().min(1, "Water body is required"),
  totalFeedConsumed: z.string().min(1, "Total feed consumed is required"),
  initialFishWeight: z.string().min(1, "Initial fish weight is required"),
  finalFishWeight: z.string().min(1, "Final fish weight is required"),
  feedCostPerKg: z.string().min(1, "Feed cost per kg is required"),
  targetFCR: z.string().optional(),
  fishSurvivalRate: z.string().min(1, "Fish survival rate is required"),
  efficiencyTrend: z.string().min(1, "Efficiency trend is required"),
  recommendations: z.string().min(1, "Recommendations are required"),
  notes: z.string().optional(),
})

type FeedConversionFormData = z.infer<typeof feedConversionSchema>

export default function FeedConversionAnalysis() {
  const { toast } = useToast()
  
  const form = useForm<FeedConversionFormData>({
    resolver: zodResolver(feedConversionSchema),
    defaultValues: {
      periodStartDate: "",
      periodEndDate: "",
      waterBodyId: "",
      totalFeedConsumed: "",
      initialFishWeight: "",
      finalFishWeight: "",
      feedCostPerKg: "",
      targetFCR: "",
      fishSurvivalRate: "",
      efficiencyTrend: "",
      recommendations: "",
      notes: "",
    },
  })

  const watchedValues = form.watch()

  // Calculate FCR and other metrics
  const calculateMetrics = () => {
    const totalFeed = parseFloat(watchedValues.totalFeedConsumed) || 0
    const initialWeight = parseFloat(watchedValues.initialFishWeight) || 0
    const finalWeight = parseFloat(watchedValues.finalFishWeight) || 0
    const feedCost = parseFloat(watchedValues.feedCostPerKg) || 0
    
    const weightGain = finalWeight - initialWeight
    const fcr = weightGain > 0 ? totalFeed / weightGain : 0
    const ecr = weightGain > 0 ? (totalFeed * feedCost) / weightGain : 0
    
    return {
      weightGain: weightGain.toFixed(2),
      fcr: fcr.toFixed(3),
      ecr: ecr.toFixed(2),
      totalCost: (totalFeed * feedCost).toFixed(2)
    }
  }

  const metrics = calculateMetrics()

  const onSubmit = (data: FeedConversionFormData) => {
    console.log("Feed conversion analysis data:", data)
    console.log("Calculated metrics:", metrics)
    toast({
      title: "Analysis Complete",
      description: "Feed conversion analysis has been successfully recorded.",
    })
    form.reset()
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Feed Conversion Analysis</h1>
            <p className="text-gray-600">Analyze feed efficiency and economic conversion rates</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Feed Conversion Analysis Form
                </CardTitle>
                <CardDescription>
                  Enter data for feed conversion ratio and economic analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="periodStartDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Period Start Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="periodEndDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Period End Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="waterBodyId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Water Body</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select water body" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pond-1">Pond 1</SelectItem>
                                <SelectItem value="pond-2">Pond 2</SelectItem>
                                <SelectItem value="pond-3">Pond 3</SelectItem>
                                <SelectItem value="tank-a">Tank A</SelectItem>
                                <SelectItem value="tank-b">Tank B</SelectItem>
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
                            <FormLabel>Total Feed Consumed (kg)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter total feed consumed" type="number" step="0.1" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="initialFishWeight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Initial Fish Weight (kg)</FormLabel>
                            <FormControl>
                              <Input placeholder="Total weight at start" type="number" step="0.1" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="finalFishWeight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Final Fish Weight (kg)</FormLabel>
                            <FormControl>
                              <Input placeholder="Total weight at end" type="number" step="0.1" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="feedCostPerKg"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Feed Cost per kg ($)</FormLabel>
                            <FormControl>
                              <Input placeholder="Cost per kilogram" type="number" step="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="targetFCR"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target FCR (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Expected FCR" type="number" step="0.01" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fishSurvivalRate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fish Survival Rate (%)</FormLabel>
                            <FormControl>
                              <Input placeholder="Survival percentage" type="number" min="0" max="100" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="efficiencyTrend"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Feed Efficiency Trend</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select trend" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="improving">Improving</SelectItem>
                                <SelectItem value="stable">Stable</SelectItem>
                                <SelectItem value="declining">Declining</SelectItem>
                                <SelectItem value="fluctuating">Fluctuating</SelectItem>
                              </SelectContent>
                            </Select>
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
                          <FormLabel>Recommendations for Feed Adjustments</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Recommendations for improving feed efficiency, adjusting feeding schedules, or changing feed types..."
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
                              placeholder="Any additional observations or comments..."
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Save Analysis
                      </Button>
                      <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Clear Form
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Calculated Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Weight Gain</div>
                  <div className="text-2xl font-bold text-blue-900">{metrics.weightGain} kg</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-sm text-green-600 font-medium">Feed Conversion Ratio (FCR)</div>
                  <div className="text-2xl font-bold text-green-900">{metrics.fcr}</div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">Economic Conversion Ratio (ECR)</div>
                  <div className="text-2xl font-bold text-purple-900">${metrics.ecr}</div>
                </div>
                
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-orange-600 font-medium">Total Feed Cost</div>
                  <div className="text-2xl font-bold text-orange-900">${metrics.totalCost}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">FCR Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Excellent:</span>
                  <span className="font-medium text-green-600">&lt; 1.2</span>
                </div>
                <div className="flex justify-between">
                  <span>Good:</span>
                  <span className="font-medium text-blue-600">1.2 - 1.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Average:</span>
                  <span className="font-medium text-yellow-600">1.5 - 2.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Poor:</span>
                  <span className="font-medium text-red-600">&gt; 2.0</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
