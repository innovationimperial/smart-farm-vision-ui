
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
      sireRegistration: "",
      damId: "",
      damName: "",
      damBreed: "",
      damRegistration: "",
      maternalGrandsireId: "",
      paternalGrandsireId: "",
      registrationPapers: "",
      pedigreeNumber: "",
      breedingValueMilk: "",
      breedingValueMeat: "",
      breedingValueFertility: "",
      geneticCoefficients: "",
      inbreedingCoefficient: ""
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
                <CardDescription>Enter comprehensive breeding history and genetic information</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Animal Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Animal Information</h3>
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
                    </div>

                    {/* Parent Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Sire Information (Father)</h3>
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
                        <FormField
                          control={form.control}
                          name="sireRegistration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sire Registration Number</FormLabel>
                              <FormControl>
                                <Input placeholder="SREG123456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Dam Information (Mother)</h3>
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
                        <FormField
                          control={form.control}
                          name="damRegistration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dam Registration Number</FormLabel>
                              <FormControl>
                                <Input placeholder="DREG123456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Grandparents */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Grandparent Information</h3>
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
                      </div>
                    </div>

                    {/* Registration & Pedigree */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Registration & Pedigree</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="registrationPapers"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Registration Papers</FormLabel>
                              <FormControl>
                                <Input placeholder="Document reference number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="pedigreeNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pedigree Number</FormLabel>
                              <FormControl>
                                <Input placeholder="PED123456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Breeding Values */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Breeding Value Scores</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="breedingValueMilk"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Milk Production Score</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="85" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="breedingValueMeat"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Meat Quality Score</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="92" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="breedingValueFertility"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Fertility Score</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="78" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Genetic Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Genetic Coefficients</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="geneticCoefficients"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Genetic Coefficients</FormLabel>
                              <FormControl>
                                <Input placeholder="A1A2 BB CC DD" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="inbreedingCoefficient"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Inbreeding Coefficient (%)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.01" placeholder="2.5" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
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
                <div className="text-sm space-y-3">
                  <div className="font-medium text-center p-2 bg-blue-50 rounded">
                    Current Animal (A001)
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-green-50 rounded">
                      <div className="font-medium">Sire Line</div>
                      <div className="text-xs space-y-1">
                        <div>S001 - Champion Bull</div>
                        <div className="pl-2 text-gray-600">
                          <div>PGS: Grand Champion</div>
                          <div>PGD: Elite Cow</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 bg-pink-50 rounded">
                      <div className="font-medium">Dam Line</div>
                      <div className="text-xs space-y-1">
                        <div>D001 - Mother Cow</div>
                        <div className="pl-2 text-gray-600">
                          <div>MGS: Superior Bull</div>
                          <div>MGD: Prime Heifer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Genetic Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Milk Score:</span>
                    <span className="font-medium">85/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meat Score:</span>
                    <span className="font-medium">92/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fertility Score:</span>
                    <span className="font-medium">78/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inbreeding:</span>
                    <span className="font-medium text-green-600">2.5% (Low)</span>
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
