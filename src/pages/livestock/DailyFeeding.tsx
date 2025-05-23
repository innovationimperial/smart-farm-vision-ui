
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Calendar, Plus } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function DailyFeeding() {
  const form = useForm({
    defaultValues: {
      feedingDate: "",
      animalGroup: "",
      animalIds: "",
      feedType: "",
      feedBrand: "",
      amountPerAnimal: "",
      totalAmount: "",
      unitOfMeasure: "",
      feedingTime: "",
      feedingFrequency: "",
      feedQuality: "",
      feedQualityNotes: "",
      feedRefusalAmount: "",
      waterConsumption: "",
      supplementType: "",
      supplementAmount: "",
      feedingMethod: "",
      weatherConditions: "",
      animalBehavior: "",
      feedConversionNotes: "",
      feedCostPerDay: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Daily feeding data:", data)
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
              <Calendar className="w-8 h-8 text-orange-500" />
              Daily Feeding Records
            </h1>
            <p className="text-gray-600 mt-2">Daily nutrition and feeding logs</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daily Feeding Record</CardTitle>
            <CardDescription>Record daily feeding activities and observations</CardDescription>
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
                      name="feedingDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feeding Date *</FormLabel>
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
                      name="feedingFrequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feeding Frequency</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="once">Once daily</SelectItem>
                              <SelectItem value="twice">Twice daily</SelectItem>
                              <SelectItem value="three">Three times daily</SelectItem>
                              <SelectItem value="ad-libitum">Ad libitum</SelectItem>
                              <SelectItem value="as-needed">As needed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Animal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Animal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              <SelectItem value="horses">Horses</SelectItem>
                              <SelectItem value="calves">Calves</SelectItem>
                              <SelectItem value="breeding-stock">Breeding Stock</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                </div>

                {/* Feed Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Feed Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="feedType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select feed type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="hay">Hay</SelectItem>
                              <SelectItem value="grain">Grain</SelectItem>
                              <SelectItem value="pellets">Pellets</SelectItem>
                              <SelectItem value="silage">Silage</SelectItem>
                              <SelectItem value="concentrates">Concentrates</SelectItem>
                              <SelectItem value="pasture">Pasture</SelectItem>
                              <SelectItem value="mixed-ration">Mixed Ration</SelectItem>
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
                            <Input placeholder="Brand name" {...field} />
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
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="hand-feeding">Hand Feeding</SelectItem>
                              <SelectItem value="automatic-feeder">Automatic Feeder</SelectItem>
                              <SelectItem value="trough">Trough</SelectItem>
                              <SelectItem value="pasture-grazing">Pasture Grazing</SelectItem>
                              <SelectItem value="total-mixed-ration">Total Mixed Ration</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="amountPerAnimal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amount per Animal</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="5.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="totalAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Amount</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="150.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="unitOfMeasure"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit of Measure</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                              <SelectItem value="kg">Kilograms (kg)</SelectItem>
                              <SelectItem value="bales">Bales</SelectItem>
                              <SelectItem value="scoops">Scoops</SelectItem>
                              <SelectItem value="cups">Cups</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="feedCostPerDay"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Cost per Day ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="25.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Feed Quality and Observations */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Feed Quality & Observations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="feedQuality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Quality Rating</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rate feed quality" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="animalBehavior"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Animal Behavior During Feeding</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Observe behavior" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="eager">Eager/Excited</SelectItem>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="hesitant">Hesitant</SelectItem>
                              <SelectItem value="aggressive">Aggressive</SelectItem>
                              <SelectItem value="listless">Listless</SelectItem>
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
                      name="feedQualityNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Quality Notes</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Color, smell, texture, mold, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="feedConversionNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Conversion Notes</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Feed efficiency observations..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Consumption and Supplements */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Consumption & Supplements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="feedRefusalAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Refusal Amount</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="2.5" {...field} />
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
                          <FormLabel>Water Consumption (gallons)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="30.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supplementType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Supplement Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select supplement" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="minerals">Minerals</SelectItem>
                              <SelectItem value="vitamins">Vitamins</SelectItem>
                              <SelectItem value="protein">Protein</SelectItem>
                              <SelectItem value="probiotics">Probiotics</SelectItem>
                              <SelectItem value="salt">Salt</SelectItem>
                              <SelectItem value="none">None</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supplementAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Supplement Amount</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="0.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Environmental Conditions */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Environmental Conditions & Notes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="weatherConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weather Conditions</FormLabel>
                          <FormControl>
                            <Input placeholder="Sunny, rainy, cold, hot..." {...field} />
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
                            <Textarea placeholder="Special observations, issues, changes..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Feeding Record
                  </Button>
                  <Button type="button" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Feeding
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
