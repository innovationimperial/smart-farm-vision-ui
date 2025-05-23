
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, FileText, Pill } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function TreatmentRecords() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      treatmentDate: "",
      condition: "",
      medicationName: "",
      dosage: "",
      administrationMethod: "",
      frequency: "",
      treatmentDuration: "",
      veterinarian: "",
      administrator: "",
      withdrawalMeat: "",
      withdrawalMilk: "",
      treatmentOutcome: "",
      followUpRequired: "",
      followUpDate: "",
      cost: "",
      notes: "",
      prescription: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Treatment data:", data)
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
              <Pill className="w-8 h-8 text-blue-500" />
              Treatment Records
            </h1>
            <p className="text-gray-600 mt-2">Medical treatments and medications</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Medical Treatment Record</CardTitle>
            <CardDescription>Document medical treatments, medications, and withdrawal periods</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Treatment Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Treatment Information</h3>
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
                      name="treatmentDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Treatment Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="condition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Condition/Illness Treated *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select condition" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Respiratory infection">Respiratory infection</SelectItem>
                              <SelectItem value="Digestive disorder">Digestive disorder</SelectItem>
                              <SelectItem value="Mastitis">Mastitis</SelectItem>
                              <SelectItem value="Lameness">Lameness</SelectItem>
                              <SelectItem value="Eye infection">Eye infection</SelectItem>
                              <SelectItem value="Skin condition">Skin condition</SelectItem>
                              <SelectItem value="Parasites">Parasites</SelectItem>
                              <SelectItem value="Injury/wound">Injury/wound</SelectItem>
                              <SelectItem value="Metabolic disorder">Metabolic disorder</SelectItem>
                              <SelectItem value="Reproductive issue">Reproductive issue</SelectItem>
                              <SelectItem value="Fever">Fever</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Medication Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Medication Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="medicationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medication Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Penicillin, Oxytetracycline..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dosage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dosage *</FormLabel>
                          <FormControl>
                            <Input placeholder="5ml per 100 lbs" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="administrationMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Administration Method</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Intramuscular">Intramuscular (IM)</SelectItem>
                              <SelectItem value="Subcutaneous">Subcutaneous (SQ)</SelectItem>
                              <SelectItem value="Intravenous">Intravenous (IV)</SelectItem>
                              <SelectItem value="Oral">Oral</SelectItem>
                              <SelectItem value="Topical">Topical</SelectItem>
                              <SelectItem value="Intranasal">Intranasal</SelectItem>
                              <SelectItem value="Intramammary">Intramammary</SelectItem>
                              <SelectItem value="Pour-on">Pour-on</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="frequency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Frequency</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Once daily">Once daily</SelectItem>
                              <SelectItem value="Twice daily">Twice daily</SelectItem>
                              <SelectItem value="Three times daily">Three times daily</SelectItem>
                              <SelectItem value="Every 12 hours">Every 12 hours</SelectItem>
                              <SelectItem value="Every 8 hours">Every 8 hours</SelectItem>
                              <SelectItem value="Every 6 hours">Every 6 hours</SelectItem>
                              <SelectItem value="As needed">As needed</SelectItem>
                              <SelectItem value="Single dose">Single dose</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="treatmentDuration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Treatment Duration</FormLabel>
                          <FormControl>
                            <Input placeholder="5 days, 2 weeks..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="prescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prescription #</FormLabel>
                          <FormControl>
                            <Input placeholder="RX123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Administration Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Administration Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="veterinarian"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prescribing Veterinarian</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Smith, DVM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="administrator"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Person Administering</FormLabel>
                          <FormControl>
                            <Input placeholder="Farm manager, veterinarian..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Withdrawal Periods */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Withdrawal Periods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="withdrawalMeat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meat Withdrawal Period (days)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="14" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="withdrawalMilk"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Milk Withdrawal Period (hours)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="72" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Treatment Outcome */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Treatment Outcome & Follow-up</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="treatmentOutcome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Treatment Outcome</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select outcome" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Fully recovered">Fully recovered</SelectItem>
                              <SelectItem value="Improved">Improved</SelectItem>
                              <SelectItem value="No change">No change</SelectItem>
                              <SelectItem value="Worsened">Worsened</SelectItem>
                              <SelectItem value="Treatment ongoing">Treatment ongoing</SelectItem>
                              <SelectItem value="Euthanized">Euthanized</SelectItem>
                              <SelectItem value="Died">Died</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="followUpRequired"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Follow-up Required</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Yes">Yes</SelectItem>
                              <SelectItem value="No">No</SelectItem>
                              <SelectItem value="If symptoms persist">If symptoms persist</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="followUpDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Follow-up Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Treatment Cost ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="45.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Treatment Notes</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Additional observations, side effects, special instructions..." 
                              className="min-h-[100px]"
                              {...field} 
                            />
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
                    Save Treatment Record
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
