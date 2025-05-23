
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function AcquisitionDetails() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      acquisitionDate: "",
      source: "",
      vendor: "",
      purchasePrice: "",
      transportMethod: "",
      healthCertificate: "",
      quarantinePeriod: "",
      insurance: "",
      documentation: ""
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
            <CardDescription>Record how and when animals were acquired</CardDescription>
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
                    name="source"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Source Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Purchase, Birth, Gift, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vendor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vendor/Seller</FormLabel>
                        <FormControl>
                          <Input placeholder="Farm name or seller" {...field} />
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

                  <FormField
                    control={form.control}
                    name="transportMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transport Method</FormLabel>
                        <FormControl>
                          <Input placeholder="Truck, trailer, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                    name="documentation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Documentation</FormLabel>
                        <FormControl>
                          <Input placeholder="Notes and references" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit">
                  <Save className="w-4 h-4 mr-2" />
                  Save Acquisition Details
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
