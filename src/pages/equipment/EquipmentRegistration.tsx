
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, QrCode, Camera, MapPin, Wrench } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

const equipmentRegistrationSchema = z.object({
  equipmentId: z.string().min(1, "Equipment ID is required"),
  equipmentName: z.string().min(1, "Equipment name is required"),
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Equipment type is required"),
  manufacturer: z.string().min(1, "Manufacturer is required"),
  model: z.string().min(1, "Model is required"),
  serialNumber: z.string().min(1, "Serial number is required"),
  yearManufactured: z.string().min(1, "Year manufactured is required"),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  purchasePrice: z.string().min(1, "Purchase price is required"),
  supplier: z.string().min(1, "Supplier is required"),
  warrantyPeriod: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  department: z.string().min(1, "Department is required"),
  operatorRequired: z.string().min(1, "Operator requirement is required"),
  safetyRating: z.string().min(1, "Safety rating is required"),
  fuelType: z.string().optional(),
  enginePower: z.string().optional(),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  description: z.string().optional(),
  notes: z.string().optional(),
})

type EquipmentRegistrationValues = z.infer<typeof equipmentRegistrationSchema>

const defaultValues: Partial<EquipmentRegistrationValues> = {
  category: "Heavy Machinery",
  operatorRequired: "Certified",
  safetyRating: "Medium",
}

export default function EquipmentRegistration() {
  const { toast } = useToast()
  const [photos, setPhotos] = useState<string[]>([])
  
  const form = useForm<EquipmentRegistrationValues>({
    resolver: zodResolver(equipmentRegistrationSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: EquipmentRegistrationValues) {
    toast({
      title: "Equipment Registered",
      description: `${data.equipmentName} has been successfully registered.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function generateQR() {
    toast({
      title: "QR Code Generated",
      description: "QR code generated for equipment tracking.",
    })
  }

  function addPhoto() {
    toast({
      title: "Photo Added",
      description: "Equipment photo has been added to documentation.",
    })
  }

  function getGPSLocation() {
    toast({
      title: "GPS Location",
      description: "Current GPS coordinates captured.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center gap-3 mb-6">
          <NavLink to="/equipment">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Equipment
            </Button>
          </NavLink>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-600" />
              Equipment Registration
            </h1>
            <p className="text-slate-600">Register new equipment into the system</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="xl:col-span-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Equipment Details</CardTitle>
                <CardDescription>Complete equipment registration information</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Basic Information */}
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Basic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="equipmentId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Equipment ID</FormLabel>
                              <FormControl>
                                <Input placeholder="EQ-2024-001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="equipmentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Equipment Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Heavy Duty Tractor" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Heavy Machinery">Heavy Machinery</SelectItem>
                                  <SelectItem value="Agricultural Equipment">Agricultural Equipment</SelectItem>
                                  <SelectItem value="Transportation">Transportation</SelectItem>
                                  <SelectItem value="Processing Equipment">Processing Equipment</SelectItem>
                                  <SelectItem value="Hand Tools">Hand Tools</SelectItem>
                                  <SelectItem value="Safety Equipment">Safety Equipment</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Equipment Type</FormLabel>
                              <FormControl>
                                <Input placeholder="Tractor" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Manufacturer Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Manufacturer Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="manufacturer"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Manufacturer</FormLabel>
                              <FormControl>
                                <Input placeholder="John Deere" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="model"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Model</FormLabel>
                              <FormControl>
                                <Input placeholder="4066R" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="serialNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Serial Number</FormLabel>
                              <FormControl>
                                <Input placeholder="JD2024001234" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="yearManufactured"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year Manufactured</FormLabel>
                              <FormControl>
                                <Input placeholder="2024" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Purchase Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Purchase Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="purchaseDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Purchase Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="purchasePrice"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Purchase Price ($)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.01" placeholder="75000.00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="supplier"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Supplier</FormLabel>
                              <FormControl>
                                <Input placeholder="ABC Equipment Dealers" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="warrantyPeriod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Warranty Period (months)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="24" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Location & Assignment */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Location & Assignment</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input placeholder="Main Equipment Yard" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Department</FormLabel>
                              <FormControl>
                                <Input placeholder="Field Operations" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="operatorRequired"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Operator Required</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="None">None</SelectItem>
                                  <SelectItem value="Basic Training">Basic Training</SelectItem>
                                  <SelectItem value="Certified">Certified</SelectItem>
                                  <SelectItem value="Licensed">Licensed</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="safetyRating"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Safety Rating</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Low">Low Risk</SelectItem>
                                  <SelectItem value="Medium">Medium Risk</SelectItem>
                                  <SelectItem value="High">High Risk</SelectItem>
                                  <SelectItem value="Critical">Critical Risk</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-slate-800 mb-4">Technical Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fuelType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Fuel Type</FormLabel>
                              <FormControl>
                                <Input placeholder="Diesel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="enginePower"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Engine Power (HP)</FormLabel>
                              <FormControl>
                                <Input placeholder="66" {...field} />
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
                              <FormLabel>Weight (kg)</FormLabel>
                              <FormControl>
                                <Input placeholder="3200" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dimensions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dimensions (L x W x H)</FormLabel>
                              <FormControl>
                                <Input placeholder="4.2m x 2.1m x 2.8m" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter detailed equipment description..."
                              className="min-h-[100px]"
                              {...field} 
                            />
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
                            <Textarea 
                              placeholder="Any additional notes or special instructions..."
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                      <Save className="w-4 h-4 mr-2" />
                      Register Equipment
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Smart Features Sidebar */}
          <div className="space-y-4">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Smart Features</CardTitle>
                <CardDescription>Modern equipment tracking tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={generateQR}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={addPhoto}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Add Photos
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={getGPSLocation}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  GPS Location
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Registration Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>• Use consistent naming conventions</p>
                <p>• Include all manufacturer details</p>
                <p>• Document purchase information</p>
                <p>• Assign proper location codes</p>
                <p>• Set appropriate safety ratings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
