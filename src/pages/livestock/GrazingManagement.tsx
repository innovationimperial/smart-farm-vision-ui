
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, MapPin, Droplets } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function GrazingManagement() {
  const form = useForm({
    defaultValues: {
      pastureId: "",
      pastureName: "",
      paddockNumber: "",
      pastureSize: "",
      grazingStartDate: "",
      grazingEndDate: "",
      rotationSchedule: "",
      stockingDensity: "",
      animalCount: "",
      animalType: "",
      pastureCondition: "",
      grassHeight: "",
      grassType: "",
      forageDensity: "",
      forageQuality: "",
      soilCondition: "",
      fencingCondition: "",
      waterSourceType: "",
      waterAvailability: "",
      waterQuality: "",
      fertilizationDate: "",
      fertilizerType: "",
      fertilizerAmount: "",
      seedingDate: "",
      seedType: "",
      weedControl: "",
      pestControl: "",
      restPeriod: "",
      carryingCapacity: "",
      grazingPressure: "",
      weatherConditions: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Grazing management data:", data)
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
              <MapPin className="w-8 h-8 text-green-600" />
              Pasture & Grazing Management
            </h1>
            <p className="text-gray-600 mt-2">Grazing rotation and pasture health monitoring</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Grazing Management Record</CardTitle>
            <CardDescription>Track pasture usage, condition, and rotation schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Pasture Identification */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Pasture Identification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="pastureId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pasture ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="P001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pastureName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pasture Name</FormLabel>
                          <FormControl>
                            <Input placeholder="North Field" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="paddockNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Paddock Number</FormLabel>
                          <FormControl>
                            <Input placeholder="1A" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pastureSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pasture Size (acres)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="25.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Grazing Schedule */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Grazing Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="grazingStartDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grazing Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="grazingEndDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grazing End Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="restPeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rest Period (days)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="21" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="rotationSchedule"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rotation Schedule</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select rotation type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="continuous">Continuous Grazing</SelectItem>
                            <SelectItem value="rotational">Rotational Grazing</SelectItem>
                            <SelectItem value="intensive">Intensive Rotational</SelectItem>
                            <SelectItem value="mob">Mob Grazing</SelectItem>
                            <SelectItem value="strip">Strip Grazing</SelectItem>
                            <SelectItem value="deferred">Deferred Grazing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Stocking Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Stocking Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="animalType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Animal Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cattle">Cattle</SelectItem>
                              <SelectItem value="sheep">Sheep</SelectItem>
                              <SelectItem value="goats">Goats</SelectItem>
                              <SelectItem value="horses">Horses</SelectItem>
                              <SelectItem value="mixed">Mixed</SelectItem>
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

                    <FormField
                      control={form.control}
                      name="stockingDensity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stocking Density (animals/acre)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="1.2" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="carryingCapacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Carrying Capacity</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Pasture Condition Assessment */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Pasture Condition Assessment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="pastureCondition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Overall Pasture Condition</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rate condition" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                              <SelectItem value="overgrazed">Overgrazed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="forageDensity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Forage Density</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rate density" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="thick">Thick</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="thin">Thin</SelectItem>
                              <SelectItem value="sparse">Sparse</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="forageQuality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Forage Quality</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rate quality" />
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="grassHeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Grass Height (inches)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="6.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="grassType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Predominant Grass Type</FormLabel>
                          <FormControl>
                            <Input placeholder="Bermuda, Fescue, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="grazingPressure"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grazing Pressure</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select pressure" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="heavy">Heavy</SelectItem>
                              <SelectItem value="excessive">Excessive</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Water Source Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Water Source Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="waterSourceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Source Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="pond">Pond</SelectItem>
                              <SelectItem value="well">Well</SelectItem>
                              <SelectItem value="stream">Stream</SelectItem>
                              <SelectItem value="tank">Water Tank</SelectItem>
                              <SelectItem value="trough">Water Trough</SelectItem>
                              <SelectItem value="automatic">Automatic Waterer</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterAvailability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Availability</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select availability" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="abundant">Abundant</SelectItem>
                              <SelectItem value="adequate">Adequate</SelectItem>
                              <SelectItem value="limited">Limited</SelectItem>
                              <SelectItem value="insufficient">Insufficient</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Quality</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rate quality" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                              <SelectItem value="contaminated">Contaminated</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Management Activities */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Management Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fertilizationDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Fertilization Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fertilizerType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fertilizer Type</FormLabel>
                          <FormControl>
                            <Input placeholder="10-10-10, Organic, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="seedingDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Seeding Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="seedType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seed Type</FormLabel>
                          <FormControl>
                            <Input placeholder="Clover, Ryegrass, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="weedControl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weed Control Methods</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Herbicide, mowing, mechanical..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pestControl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pest Control Measures</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Fly control, parasite management..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="weatherConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weather Conditions</FormLabel>
                          <FormControl>
                            <Input placeholder="Recent weather affecting pasture..." {...field} />
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
                            <Textarea placeholder="Special observations, issues, plans..." {...field} />
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
                    Save Grazing Record
                  </Button>
                  <Button type="button" variant="outline">
                    <Droplets className="w-4 h-4 mr-2" />
                    Check Water Systems
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
