
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Egg, Download } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function EggProduction() {
  const form = useForm({
    defaultValues: {
      recordDate: "",
      houseId: "",
      totalEggCount: "",
      gradeA: "",
      gradeB: "",
      cracked: "",
      dirty: "",
      averageEggWeight: "",
      feedConsumed: "",
      feedConversionRatio: "",
      lightingStart: "",
      lightingEnd: "",
      lightingDuration: "",
      mortality: "",
      mortalityCause: "",
      productionEfficiency: "",
      temperature: "",
      humidity: "",
      waterConsumption: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Egg production data:", data)
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
              <Egg className="w-8 h-8 text-yellow-500" />
              Egg Production Records
            </h1>
            <p className="text-gray-600 mt-2">Daily egg production tracking for poultry operations</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daily Egg Production Record</CardTitle>
            <CardDescription>Track daily egg count, quality distribution, and production metrics</CardDescription>
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
                      name="houseId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>House/Cage ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="House A, Cage 1, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="totalEggCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Egg Count *</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="120" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Egg Grade Distribution */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Egg Grade Distribution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="gradeA"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade A Eggs</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="100" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gradeB"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade B Eggs</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="15" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cracked"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cracked Eggs</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dirty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dirty Eggs</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="2" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="averageEggWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Egg Weight (grams)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="62.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="productionEfficiency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Production Efficiency (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="85.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Feed Conversion */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Feed Conversion</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="feedConsumed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Consumed (kg)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="45.0" {...field} />
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
                            <Input type="number" step="0.01" placeholder="2.25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterConsumption"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Consumption (liters)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="90.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Lighting Schedule */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Lighting Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="lightingStart"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lighting Start Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lightingEnd"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lighting End Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lightingDuration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lighting Duration (hours)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="14.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Mortality and Environment */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Mortality & Environment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="mortality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mortality Count</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="temperature"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="22.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="humidity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Humidity (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="65.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mortalityCause"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mortality Cause</FormLabel>
                        <FormControl>
                          <Input placeholder="Cause of mortality if any" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    Save Egg Production Record
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
