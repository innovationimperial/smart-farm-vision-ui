
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Milk, Download } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function MilkProduction() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      recordDate: "",
      dailyYield: "",
      morningYield: "",
      eveningYield: "",
      milkingTime1: "",
      milkingTime2: "",
      milkingDuration1: "",
      milkingDuration2: "",
      somaticCellCount: "",
      fatPercentage: "",
      proteinPercentage: "",
      lactosePercentage: "",
      totalSolids: "",
      bacteriaCount: "",
      bulkTankTemp: "",
      equipmentCleaned: "",
      equipmentMaintenance: "",
      milkBuyer: "",
      pricePerUnit: "",
      paymentDate: "",
      paymentAmount: "",
      qualityBonus: "",
      qualityPenalty: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Milk production data:", data)
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
              <Milk className="w-8 h-8 text-blue-500" />
              Milk Production Records
            </h1>
            <p className="text-gray-600 mt-2">Daily milk yield and quality tracking for dairy operations</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daily Milk Production Record</CardTitle>
            <CardDescription>Track daily milk yield, quality tests, and production metrics</CardDescription>
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
                      name="dailyYield"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Daily Milk Yield (liters) *</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="25.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Milking Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Milking Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="morningYield"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Morning Yield (liters)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="12.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eveningYield"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Evening Yield (liters)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="13.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="milkingTime1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Morning Milking Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="milkingTime2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Evening Milking Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="milkingDuration1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Morning Milking Duration (minutes)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="15" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="milkingDuration2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Evening Milking Duration (minutes)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="15" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Milk Quality Tests */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Milk Quality Tests</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="somaticCellCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Somatic Cell Count (SCC)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="200000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fatPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fat Percentage (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="3.75" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="proteinPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Protein Percentage (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="3.25" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="lactosePercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lactose Percentage (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="4.8" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="totalSolids"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Solids (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="12.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bacteriaCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bacteria Count</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="10000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Equipment and Storage */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Equipment & Storage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="bulkTankTemp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bulk Tank Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="4.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="equipmentCleaned"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Equipment Cleaned</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="partial">Partial</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="equipmentMaintenance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Equipment Maintenance</FormLabel>
                          <FormControl>
                            <Input placeholder="Any maintenance performed" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Payment Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="milkBuyer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Milk Buyer</FormLabel>
                          <FormControl>
                            <Input placeholder="Dairy company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pricePerUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price per Liter ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="0.45" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="paymentDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="paymentAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Amount ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="150.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="qualityBonus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quality Bonus ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="5.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="qualityPenalty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quality Penalty ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="0.00" {...field} />
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
                    Save Milk Production Record
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
