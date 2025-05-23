
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Plus } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function AnimalRegistration() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      name: "",
      species: "",
      breed: "",
      gender: "",
      birthDate: "",
      color: "",
      markings: "",
      weight: "",
      microchipId: "",
      earTagNumber: "",
      registrationNumber: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Animal registration data:", data)
    // Handle form submission
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <NavLink to="/livestock">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Livestock
            </NavLink>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Individual Animal Registration</h1>
            <p className="text-gray-600 mt-2">Core animal identification and basic information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Animal Information</CardTitle>
                <CardDescription>Enter the basic identification details for the animal</CardDescription>
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
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Animal Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Bessie" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="species"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Species *</FormLabel>
                            <FormControl>
                              <Input placeholder="Cattle" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="breed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Breed</FormLabel>
                            <FormControl>
                              <Input placeholder="Holstein" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                              <Input placeholder="Female" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Birth Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Color/Markings</FormLabel>
                            <FormControl>
                              <Input placeholder="Black and white" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Weight (lbs)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="1200" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="microchipId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Microchip ID</FormLabel>
                            <FormControl>
                              <Input placeholder="982000123456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="earTagNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ear Tag Number</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="registrationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Number</FormLabel>
                            <FormControl>
                              <Input placeholder="REG123456" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        Save Animal
                      </Button>
                      <Button type="button" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Save & Add Another
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  View All Animals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Import from File
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Print Tags
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>A145 - Daisy</span>
                    <span className="text-gray-500">Today</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A144 - Rosie</span>
                    <span className="text-gray-500">Yesterday</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A143 - Molly</span>
                    <span className="text-gray-500">2 days ago</span>
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
