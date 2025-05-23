
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Search } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function LineageInformation() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      sireId: "",
      sireName: "",
      sireBreed: "",
      damId: "",
      damName: "",
      damBreed: "",
      maternalGrandsireId: "",
      paternalGrandsireId: "",
      registrationPapers: "",
      geneticMarkers: "",
      breedingValue: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Lineage data:", data)
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
            <h1 className="text-3xl font-bold text-gray-900">Parent/Lineage Information</h1>
            <p className="text-gray-600 mt-2">Breeding history and genetic background</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Lineage Details</CardTitle>
                <CardDescription>Enter breeding history and genetic information</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="animalId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Animal ID *</FormLabel>
                          <div className="flex gap-2">
                            <FormControl>
                              <Input placeholder="A001" {...field} />
                            </FormControl>
                            <Button type="button" variant="outline" size="icon">
                              <Search className="w-4 h-4" />
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Sire Information</h3>
                        <FormField
                          control={form.control}
                          name="sireId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sire ID</FormLabel>
                              <FormControl>
                                <Input placeholder="S001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="sireName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sire Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Champion Bull" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="sireBreed"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sire Breed</FormLabel>
                              <FormControl>
                                <Input placeholder="Holstein" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Dam Information</h3>
                        <FormField
                          control={form.control}
                          name="damId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dam ID</FormLabel>
                              <FormControl>
                                <Input placeholder="D001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="damName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dam Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Mother Cow" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="damBreed"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dam Breed</FormLabel>
                              <FormControl>
                                <Input placeholder="Holstein" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="maternalGrandsireId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Maternal Grandsire ID</FormLabel>
                            <FormControl>
                              <Input placeholder="MG001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="paternalGrandsireId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Paternal Grandsire ID</FormLabel>
                            <FormControl>
                              <Input placeholder="PG001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="registrationPapers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Registration Papers</FormLabel>
                            <FormControl>
                              <Input placeholder="Document reference" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="breedingValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Breeding Value</FormLabel>
                            <FormControl>
                              <Input placeholder="High quality genetics" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit">
                      <Save className="w-4 h-4 mr-2" />
                      Save Lineage Information
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pedigree Tree</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <div className="font-medium">Current Animal</div>
                  <div className="pl-4">
                    <div className="font-medium">Sire: Champion Bull</div>
                    <div className="pl-4 text-gray-600">
                      <div>PG Sire: Grand Champion</div>
                      <div>PG Dam: Elite Cow</div>
                    </div>
                  </div>
                  <div className="pl-4">
                    <div className="font-medium">Dam: Mother Cow</div>
                    <div className="pl-4 text-gray-600">
                      <div>MG Sire: Superior Bull</div>
                      <div>MG Dam: Prime Heifer</div>
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
