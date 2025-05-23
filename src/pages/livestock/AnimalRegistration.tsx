
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Plus, Camera, Upload } from "lucide-react"
import { NavLink } from "react-router-dom"

const speciesOptions = [
  "Cattle", "Sheep", "Goats", "Pigs", "Poultry", "Horses", "Donkeys", "Mules", "Alpacas", "Llamas"
]

const breedsBySpecies = {
  Cattle: ["Holstein", "Angus", "Hereford", "Charolais", "Simmental", "Limousin", "Jersey", "Guernsey"],
  Sheep: ["Merino", "Suffolk", "Dorper", "Romney", "Corriedale", "Jacob", "Hampshire"],
  Goats: ["Boer", "Nubian", "Saanen", "Alpine", "LaMancha", "Kiko", "Spanish"],
  Pigs: ["Yorkshire", "Duroc", "Hampshire", "Landrace", "Berkshire", "Chester White"],
  Poultry: ["Rhode Island Red", "Leghorn", "Plymouth Rock", "Brahma", "Orpington"],
  Horses: ["Quarter Horse", "Thoroughbred", "Arabian", "Paint", "Appaloosa", "Morgan"]
}

export default function AnimalRegistration() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      name: "",
      species: "",
      breed: "",
      sex: "",
      birthDate: "",
      birthWeight: "",
      color: "",
      markings: "",
      microchipId: "",
      rfidNumber: "",
      earTagNumber: "",
      tattooDetails: "",
      registrationNumber: "",
      dnaResults: "",
      photo: null
    }
  })

  const selectedSpecies = form.watch("species")

  const onSubmit = (data: any) => {
    console.log("Animal registration data:", data)
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
            <h1 className="text-3xl font-bold text-gray-900">Individual Animal Registration</h1>
            <p className="text-gray-600 mt-2">Core animal identification and basic information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Animal Information</CardTitle>
                <CardDescription>Enter comprehensive identification details for the animal</CardDescription>
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
                              <FormLabel>Animal ID/Tag Number *</FormLabel>
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
                              <FormLabel>Animal Name (Optional)</FormLabel>
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
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select species" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {speciesOptions.map((species) => (
                                    <SelectItem key={species} value={species}>
                                      {species}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
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
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select breed" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {selectedSpecies && breedsBySpecies[selectedSpecies as keyof typeof breedsBySpecies]?.map((breed) => (
                                    <SelectItem key={breed} value={breed}>
                                      {breed}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="sex"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Sex *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select sex" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Male">Male</SelectItem>
                                  <SelectItem value="Female">Female</SelectItem>
                                  <SelectItem value="Castrated Male">Castrated Male</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="birthDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="birthWeight"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Birth Weight (lbs)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="85" {...field} />
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
                              <FormLabel>Color</FormLabel>
                              <FormControl>
                                <Input placeholder="Black and white" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="markings"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Markings Description</FormLabel>
                              <FormControl>
                                <Input placeholder="White blaze on forehead, black spots on left side" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Identification Tags & Technology */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Identification & Technology</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="microchipId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Microchip Number</FormLabel>
                              <FormControl>
                                <Input placeholder="982000123456789" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="rfidNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>RFID Number</FormLabel>
                              <FormControl>
                                <Input placeholder="840003123456789" {...field} />
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
                          name="tattooDetails"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tattoo Details</FormLabel>
                              <FormControl>
                                <Input placeholder="ABC123 (left ear)" {...field} />
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

                        <FormField
                          control={form.control}
                          name="dnaResults"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>DNA/Genetic Testing Results</FormLabel>
                              <FormControl>
                                <Input placeholder="DNA123456 - Genotype results" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Photo Upload */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Photo Documentation</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-lg font-medium text-gray-700 mb-2">Upload Animal Photo</p>
                        <p className="text-sm text-gray-500 mb-4">Click to browse or drag and drop your photo here</p>
                        <Button type="button" variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Photo
                        </Button>
                      </div>
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
                <Button variant="outline" className="w-full justify-start">
                  Generate QR Codes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <span className="font-medium">A145 - Daisy</span>
                      <p className="text-gray-500">Holstein</p>
                    </div>
                    <span className="text-gray-500">Today</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <span className="font-medium">A144 - Rosie</span>
                      <p className="text-gray-500">Jersey</p>
                    </div>
                    <span className="text-gray-500">Yesterday</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <span className="font-medium">A143 - Molly</span>
                      <p className="text-gray-500">Holstein</p>
                    </div>
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
