
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Package, FileText, AlertCircle } from "lucide-react"

const feedInventorySchema = z.object({
  feedBrand: z.string().min(1, "Feed brand is required"),
  feedType: z.string().min(1, "Feed type is required"),
  proteinContent: z.string().min(1, "Protein content is required"),
  pelletSize: z.string().min(1, "Pellet size is required"),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  supplier: z.string().min(1, "Supplier is required"),
  quantityReceived: z.string().min(1, "Quantity received is required"),
  unitCost: z.string().min(1, "Unit cost is required"),
  storageLocation: z.string().min(1, "Storage location is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
  storageConditions: z.string().min(1, "Storage conditions are required"),
  qualityAssessment: z.string().min(1, "Quality assessment is required"),
  batchNumber: z.string().min(1, "Batch/lot number is required"),
  analysisStatus: z.string().min(1, "Analysis certificate status is required"),
  notes: z.string().optional(),
})

type FeedInventoryFormData = z.infer<typeof feedInventorySchema>

export default function FeedInventory() {
  const { toast } = useToast()
  
  const form = useForm<FeedInventoryFormData>({
    resolver: zodResolver(feedInventorySchema),
    defaultValues: {
      feedBrand: "",
      feedType: "",
      proteinContent: "",
      pelletSize: "",
      purchaseDate: "",
      supplier: "",
      quantityReceived: "",
      unitCost: "",
      storageLocation: "",
      expirationDate: "",
      storageConditions: "",
      qualityAssessment: "",
      batchNumber: "",
      analysisStatus: "",
      notes: "",
    },
  })

  const onSubmit = (data: FeedInventoryFormData) => {
    console.log("Feed inventory data:", data)
    toast({
      title: "Feed Inventory Recorded",
      description: "Feed inventory record has been successfully saved.",
    })
    form.reset()
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Package className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Feed Inventory Management</h1>
            <p className="text-gray-600">Record and track feed inventory for aquaculture operations</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Feed Inventory Form
            </CardTitle>
            <CardDescription>
              Complete feed inventory details including specifications, storage, and quality information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="feedBrand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed Brand</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter feed brand name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="feedType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select feed type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="starter">Starter Feed</SelectItem>
                            <SelectItem value="grower">Grower Feed</SelectItem>
                            <SelectItem value="finisher">Finisher Feed</SelectItem>
                            <SelectItem value="maintenance">Maintenance Feed</SelectItem>
                            <SelectItem value="breeding">Breeding Feed</SelectItem>
                          </SelectContent>
                        </Select>
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
                          <Input placeholder="e.g., 32%" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pelletSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pellet Size (mm)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 3.0mm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                          <Input placeholder="Enter supplier name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="quantityReceived"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity Received (kg)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter quantity in kg" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="unitCost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unit Cost ($/kg)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter cost per kg" type="number" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="storageLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Storage Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Warehouse A, Shelf 3" {...field} />
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
                    name="storageConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Storage Conditions</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select storage conditions" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dry-cool">Dry and Cool</SelectItem>
                            <SelectItem value="climate-controlled">Climate Controlled</SelectItem>
                            <SelectItem value="ambient">Ambient Temperature</SelectItem>
                            <SelectItem value="refrigerated">Refrigerated</SelectItem>
                          </SelectContent>
                        </Select>
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select quality rating" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="acceptable">Acceptable</SelectItem>
                            <SelectItem value="poor">Poor</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="batchNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Batch/Lot Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter batch or lot number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="analysisStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed Analysis Certificate</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Certificate status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="received">Certificate Received</SelectItem>
                            <SelectItem value="pending">Certificate Pending</SelectItem>
                            <SelectItem value="not-required">Not Required</SelectItem>
                            <SelectItem value="incomplete">Incomplete</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional notes about the feed inventory..."
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Save Feed Inventory
                  </Button>
                  <Button type="button" variant="outline" onClick={() => form.reset()}>
                    Clear Form
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
