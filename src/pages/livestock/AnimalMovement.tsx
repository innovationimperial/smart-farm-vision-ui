
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, MapPin } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function AnimalMovement() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      movementDate: "",
      fromLocation: "",
      toLocation: "",
      reason: "",
      transportCompany: "",
      driverName: "",
      vehicleId: "",
      distanceMiles: "",
      duration: "",
      healthStatus: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Movement data:", data)
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
            <h1 className="text-3xl font-bold text-gray-900">Animal Transfer/Movement</h1>
            <p className="text-gray-600 mt-2">Track animal movements between locations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Movement Details</CardTitle>
                <CardDescription>Record animal transfers and movements</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="animalId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Animal ID *</FormLabel>
                            <FormControl>
                              <Input placeholder="A001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="movementDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Movement Date *</FormLabel>
                            <FormControl>
                              <Input type="datetime-local" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fromLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>From Location</FormLabel>
                            <FormControl>
                              <Input placeholder="Barn A, Pasture 1, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="toLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>To Location</FormLabel>
                            <FormControl>
                              <Input placeholder="Barn B, Pasture 2, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reason for Movement</FormLabel>
                            <FormControl>
                              <Input placeholder="Breeding, Medical, Grazing, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="transportCompany"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Transport Company</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC Transport" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="driverName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Driver Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="vehicleId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vehicle/Trailer ID</FormLabel>
                            <FormControl>
                              <Input placeholder="T001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="distanceMiles"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Distance (miles)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration (hours)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="2.5" {...field} />
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
                            <FormLabel>Health Status</FormLabel>
                            <FormControl>
                              <Input placeholder="Healthy, requires monitoring, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit">
                      <Save className="w-4 h-4 mr-2" />
                      Record Movement
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Movements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <div className="font-medium">A001 - Bessie</div>
                      <div className="text-gray-600">Barn A → Pasture 3</div>
                      <div className="text-gray-500">2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                    <div>
                      <div className="font-medium">A002 - Daisy</div>
                      <div className="text-gray-600">Pasture 1 → Medical Pen</div>
                      <div className="text-gray-500">Yesterday</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
