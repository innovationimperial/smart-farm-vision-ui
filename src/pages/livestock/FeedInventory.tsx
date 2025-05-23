
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, Package, AlertTriangle } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function FeedInventory() {
  const form = useForm({
    defaultValues: {
      feedType: "",
      feedBrand: "",
      feedCategory: "",
      quantityOnHand: "",
      unitOfMeasure: "",
      purchaseDate: "",
      supplier: "",
      supplierContact: "",
      costPerUnit: "",
      totalCost: "",
      storageLocation: "",
      storageConditions: "",
      expirationDate: "",
      batchLotNumber: "",
      qualityGrade: "",
      qualityAssessment: "",
      moistureContent: "",
      proteinContent: "",
      fiberContent: "",
      energyContent: "",
      reorderLevel: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Feed inventory data:", data)
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
              <Package className="w-8 h-8 text-green-500" />
              Feed Inventory Management
            </h1>
            <p className="text-gray-600 mt-2">Feed stock tracking and management</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Feed Inventory Record</CardTitle>
            <CardDescription>Track feed stock, quality, and storage information</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                              <SelectItem value="supplements">Supplements</SelectItem>
                              <SelectItem value="minerals">Minerals</SelectItem>
                              <SelectItem value="pasture">Pasture/Grass</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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
                      name="feedCategory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feed Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="starter">Starter Feed</SelectItem>
                              <SelectItem value="grower">Grower Feed</SelectItem>
                              <SelectItem value="finisher">Finisher Feed</SelectItem>
                              <SelectItem value="lactation">Lactation Feed</SelectItem>
                              <SelectItem value="maintenance">Maintenance Feed</SelectItem>
                              <SelectItem value="breeding">Breeding Feed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Quantity and Purchase Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Quantity & Purchase Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="quantityOnHand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity on Hand *</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="100" {...field} />
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
                              <SelectItem value="tons">Tons</SelectItem>
                              <SelectItem value="bales">Bales</SelectItem>
                              <SelectItem value="bags">Bags</SelectItem>
                              <SelectItem value="bushels">Bushels</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="costPerUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cost per Unit ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="25.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="totalCost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Cost ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="2500.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      name="supplier"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Supplier</FormLabel>
                          <FormControl>
                            <Input placeholder="Feed supplier name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supplierContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Supplier Contact</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone/email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Storage and Quality */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Storage & Quality Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="storageLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Storage Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Barn A, Silo 1, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expirationDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiration Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="batchLotNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Batch/Lot Number</FormLabel>
                          <FormControl>
                            <Input placeholder="LOT123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="storageConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Storage Conditions</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Dry, cool, covered storage..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="qualityAssessment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quality Assessment</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Visual inspection, smell, texture..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Nutritional Content */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Nutritional Content</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="moistureContent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Moisture Content (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="12.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="proteinContent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Protein Content (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="16.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fiberContent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fiber Content (%)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="18.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="energyContent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Energy Content (Mcal/kg)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="3.25" {...field} />
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
                      name="reorderLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reorder Level</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="20" {...field} />
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
                            <Textarea placeholder="Special handling, quality issues, etc." {...field} />
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
                    Save Feed Inventory
                  </Button>
                  <Button type="button" variant="outline">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Check Expiry Alerts
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
