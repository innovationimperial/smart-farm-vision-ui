
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, FileText, Baby } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function BreedingRecords() {
  const form = useForm({
    defaultValues: {
      damId: "",
      sireId: "",
      breedingDate: "",
      breedingMethod: "",
      breedingSeason: "",
      cycleNumber: "",
      heatDetectionDate: "",
      heatDetectionMethod: "",
      inseminationTime: "",
      semenSource: "",
      semenBatch: "",
      technician: "",
      pregnancyTestDate: "",
      pregnancyTestMethod: "",
      pregnancyResult: "",
      expectedBirthDate: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Breeding records data:", data)
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
              <Baby className="w-8 h-8 text-pink-500" />
              Breeding Records
            </h1>
            <p className="text-gray-600 mt-2">Mating and artificial insemination records</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Breeding Information</CardTitle>
            <CardDescription>Record mating and artificial insemination details</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Breeding Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Breeding Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="damId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dam (Female) ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="F001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="sireId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sire (Male) ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="M001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="breedingDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Breeding Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="breedingMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Breeding Method *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Natural">Natural Service</SelectItem>
                              <SelectItem value="AI">Artificial Insemination (AI)</SelectItem>
                              <SelectItem value="ET">Embryo Transfer (ET)</SelectItem>
                              <SelectItem value="IVF">In Vitro Fertilization (IVF)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="breedingSeason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Breeding Season</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select season" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Spring">Spring</SelectItem>
                              <SelectItem value="Summer">Summer</SelectItem>
                              <SelectItem value="Fall">Fall</SelectItem>
                              <SelectItem value="Winter">Winter</SelectItem>
                              <SelectItem value="Year-round">Year-round</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cycleNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cycle Number</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Heat Detection */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Heat Detection Records</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="heatDetectionDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Heat Detection Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="heatDetectionMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Heat Detection Method</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Visual observation">Visual observation</SelectItem>
                              <SelectItem value="Heat patches">Heat patches</SelectItem>
                              <SelectItem value="Chin-ball markers">Chin-ball markers</SelectItem>
                              <SelectItem value="Electronic sensors">Electronic sensors</SelectItem>
                              <SelectItem value="Teaser animals">Teaser animals</SelectItem>
                              <SelectItem value="Hormone testing">Hormone testing</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="inseminationTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insemination Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Artificial Insemination Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Artificial Insemination Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="semenSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Semen Source</FormLabel>
                          <FormControl>
                            <Input placeholder="Farm bull, AI company, custom collection..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="semenBatch"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Semen Batch/Straw #</FormLabel>
                          <FormControl>
                            <Input placeholder="BS123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="technician"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>AI Technician</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith, AI Tech" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Pregnancy Testing */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Pregnancy Testing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="pregnancyTestDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pregnancy Test Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pregnancyTestMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Testing Method</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Ultrasound">Ultrasound</SelectItem>
                              <SelectItem value="Blood test">Blood test</SelectItem>
                              <SelectItem value="Rectal palpation">Rectal palpation</SelectItem>
                              <SelectItem value="Milk progesterone">Milk progesterone</SelectItem>
                              <SelectItem value="Return to heat">Return to heat observation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pregnancyResult"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pregnancy Result</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select result" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Pregnant">Pregnant</SelectItem>
                              <SelectItem value="Not pregnant">Not pregnant</SelectItem>
                              <SelectItem value="Questionable">Questionable</SelectItem>
                              <SelectItem value="Recheck needed">Recheck needed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expectedBirthDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Birth Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Notes</h3>
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Breeding Notes</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Breeding behavior, complications, special observations..." 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Breeding Record
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Breeding Certificate
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
