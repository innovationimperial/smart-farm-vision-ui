
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, FileText } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function AcquisitionDetails() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      source: "",
      acquisitionDate: "",
      purchasePrice: "",
      seller: "",
      sellerAddress: "",
      sellerPhone: "",
      sellerEmail: "",
      transportMethod: "",
      transportCompany: "",
      transportDate: "",
      transportCost: "",
      healthCertificate: "",
      quarantinePeriod: "",
      quarantineLocation: "",
      initialHealthCheck: "",
      veterinarianName: "",
      insurance: "",
      documentation: "",
      contractNumber: "",
      warrantyInfo: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Acquisition data:", data)
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
            <h1 className="text-3xl font-bold text-gray-900">Acquisition Details</h1>
            <p className="text-gray-600 mt-2">How and when animals were obtained</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Animal Acquisition Information</CardTitle>
            <CardDescription>Record comprehensive details about how and when animals were acquired</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Acquisition Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Acquisition Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      name="source"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Source Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Born on farm">Born on farm</SelectItem>
                              <SelectItem value="Purchased">Purchased</SelectItem>
                              <SelectItem value="Traded">Traded</SelectItem>
                              <SelectItem value="Gift">Gift</SelectItem>
                              <SelectItem value="Lease">Lease</SelectItem>
                              <SelectItem value="Inheritance">Inheritance</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="acquisitionDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Acquisition Date *</FormLabel>
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
                            <Input type="number" placeholder="2500.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Seller Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Seller/Breeder Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="seller"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seller/Breeder Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Johnson Family Farm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sellerPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seller Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sellerAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seller Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Farm Road, County, State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sellerEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seller Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="contact@johnsonfarm.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Transportation Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Transportation Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="transportMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Transport Method</FormLabel>
                          <FormControl>
                            <Input placeholder="Livestock trailer, truck, etc." {...field} />
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
                            <Input placeholder="ABC Livestock Transport" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="transportDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Transport Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="transportCost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Transport Cost ($)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="250.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Health & Quarantine */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Health & Quarantine Records</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="healthCertificate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Health Certificate #</FormLabel>
                          <FormControl>
                            <Input placeholder="HC123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="quarantinePeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quarantine Period (days)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="14" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="quarantineLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quarantine Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Isolation barn A" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="veterinarianName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Examining Veterinarian</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Smith, DVM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="initialHealthCheck"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Initial Health Check Results</FormLabel>
                          <FormControl>
                            <Input placeholder="Healthy, no issues found, vaccinations up to date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Documentation & Legal */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Documentation & Legal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="insurance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insurance Policy #</FormLabel>
                          <FormControl>
                            <Input placeholder="INS123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contractNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contract/Agreement #</FormLabel>
                          <FormControl>
                            <Input placeholder="CON123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="warrantyInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Warranty Information</FormLabel>
                          <FormControl>
                            <Input placeholder="30 days health guarantee" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="documentation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Documentation</FormLabel>
                          <FormControl>
                            <Input placeholder="Registration papers, genetic tests, etc." {...field} />
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
                    Save Acquisition Details
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
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
