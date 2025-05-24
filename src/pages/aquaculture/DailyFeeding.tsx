
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
import { Fish, Clock, Thermometer } from "lucide-react"

const dailyFeedingSchema = z.object({
  feedingDate: z.string().min(1, "Feeding date is required"),
  feedingTime: z.string().min(1, "Feeding time is required"),
  feedType: z.string().min(1, "Feed type is required"),
  feedBrand: z.string().min(1, "Feed brand is required"),
  waterBodyId: z.string().min(1, "Water body is required"),
  quantityFed: z.string().min(1, "Quantity fed is required"),
  feedingMethod: z.string().min(1, "Feeding method is required"),
  weatherConditions: z.string().min(1, "Weather conditions are required"),
  waterTemperature: z.string().min(1, "Water temperature is required"),
  fishResponse: z.string().min(1, "Fish response is required"),
  conversionObservations: z.string().min(1, "Feed conversion observations are required"),
  uneatenFeedEstimate: z.string().min(1, "Uneaten feed estimate is required"),
  feedingStaff: z.string().min(1, "Feeding staff member is required"),
  feedingDuration: z.string().min(1, "Feeding duration is required"),
  notes: z.string().optional(),
})

type DailyFeedingFormData = z.infer<typeof dailyFeedingSchema>

export default function DailyFeeding() {
  const { toast } = useToast()
  
  const form = useForm<DailyFeedingFormData>({
    resolver: zodResolver(dailyFeedingSchema),
    defaultValues: {
      feedingDate: "",
      feedingTime: "",
      feedType: "",
      feedBrand: "",
      waterBodyId: "",
      quantityFed: "",
      feedingMethod: "",
      weatherConditions: "",
      waterTemperature: "",
      fishResponse: "",
      conversionObservations: "",
      uneatenFeedEstimate: "",
      feedingStaff: "",
      feedingDuration: "",
      notes: "",
    },
  })

  const onSubmit = (data: DailyFeedingFormData) => {
    console.log("Daily feeding data:", data)
    toast({
      title: "Feeding Record Saved",
      description: "Daily feeding record has been successfully recorded.",
    })
    form.reset()
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Fish className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Daily Feeding Records</h1>
            <p className="text-gray-600">Record daily feeding activities and observations</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Daily Feeding Entry
            </CardTitle>
            <CardDescription>
              Record detailed feeding information including quantities, conditions, and fish response
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="feedingDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feeding Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedingTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feeding Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select feed type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="starter">Starter Feed</SelectItem>
                            <SelectItem value="grower">Grower Feed</SelectItem>
                            <SelectItem value="finisher">Finisher Feed</SelectItem>
                            <SelectItem value="maintenance">Maintenance Feed</SelectItem>
                            <SelectItem value="breeding">Breeding Feed</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedBrand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed Brand</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter feed brand used" {...field} />
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
                    name="quantityFed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity Fed (kg)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter quantity in kg" type="number" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedingMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feeding Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select feeding method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="broadcast">Broadcast</SelectItem>
                            <SelectItem value="automatic">Automatic Feeder</SelectItem>
                            <SelectItem value="hand">Hand Feeding</SelectItem>
                            <SelectItem value="spot">Spot Feeding</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="weatherConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weather Conditions</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select weather" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sunny">Sunny</SelectItem>
                            <SelectItem value="cloudy">Cloudy</SelectItem>
                            <SelectItem value="rainy">Rainy</SelectItem>
                            <SelectItem value="overcast">Overcast</SelectItem>
                            <SelectItem value="windy">Windy</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="waterTemperature"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Water Temperature (°C)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter temperature" type="number" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fishResponse"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fish Response to Feeding</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select fish response" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent - Very Active</SelectItem>
                            <SelectItem value="good">Good - Active</SelectItem>
                            <SelectItem value="normal">Normal - Moderate Activity</SelectItem>
                            <SelectItem value="poor">Poor - Low Activity</SelectItem>
                            <SelectItem value="no-response">No Response</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="conversionObservations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed Conversion Observations</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select conversion rating" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent Conversion</SelectItem>
                            <SelectItem value="good">Good Conversion</SelectItem>
                            <SelectItem value="average">Average Conversion</SelectItem>
                            <SelectItem value="poor">Poor Conversion</SelectItem>
                            <SelectItem value="very-poor">Very Poor Conversion</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="uneatenFeedEstimate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Uneaten Feed Estimate (%)</FormLabel>
                        <FormControl>
                          <Input placeholder="Estimate percentage" type="number" min="0" max="100" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedingStaff"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feeding Staff Member</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter staff member name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedingDuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feeding Duration (minutes)</FormLabel>
                        <FormControl>
                          <Input placeholder="Duration in minutes" type="number" {...field} />
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
                      <FormLabel>Special Notes or Observations</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special observations, unusual behavior, or important notes..."
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Save Feeding Record
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
    </DashboardLayout>
  )
}
