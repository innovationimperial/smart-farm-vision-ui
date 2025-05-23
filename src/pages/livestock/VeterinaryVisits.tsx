
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, FileText, Stethoscope } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function VeterinaryVisits() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      visitDate: "",
      visitReason: "",
      veterinarianName: "",
      vetClinic: "",
      vetPhone: "",
      vetEmail: "",
      diagnosis: "",
      treatmentPlan: "",
      prescribedMedications: "",
      followUpInstructions: "",
      nextVisitDate: "",
      visitCost: "",
      insuranceClaim: "",
      insuranceAmount: "",
      notes: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Veterinary visit data:", data)
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
              <Stethoscope className="w-8 h-8 text-purple-500" />
              Veterinary Visits
            </h1>
            <p className="text-gray-600 mt-2">Professional veterinary care documentation</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Veterinary Visit Record</CardTitle>
            <CardDescription>Document professional veterinary care visits and treatments</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Visit Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Visit Information</h3>
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
                      name="visitDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Visit Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="visitReason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Visit *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select reason" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Routine checkup">Routine checkup</SelectItem>
                              <SelectItem value="Vaccination">Vaccination</SelectItem>
                              <SelectItem value="Illness/disease">Illness/disease</SelectItem>
                              <SelectItem value="Injury">Injury</SelectItem>
                              <SelectItem value="Pregnancy check">Pregnancy check</SelectItem>
                              <SelectItem value="Breeding soundness">Breeding soundness</SelectItem>
                              <SelectItem value="Surgery">Surgery</SelectItem>
                              <SelectItem value="Emergency">Emergency</SelectItem>
                              <SelectItem value="Pre-purchase exam">Pre-purchase exam</SelectItem>
                              <SelectItem value="Euthanasia">Euthanasia</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Veterinarian Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Veterinarian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="veterinarianName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinarian Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Smith, DVM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vetClinic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinary Clinic</FormLabel>
                          <FormControl>
                            <Input placeholder="ABC Veterinary Clinic" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vetPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinarian Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vetEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinarian Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="dr.smith@vetclinic.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Diagnosis and Treatment */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Diagnosis & Treatment Plan</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <FormField
                      control={form.control}
                      name="diagnosis"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Diagnosis</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Primary and secondary diagnoses, clinical findings..." 
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
                      name="treatmentPlan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Treatment Plan</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Detailed treatment plan, procedures performed..." 
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
                      name="prescribedMedications"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prescribed Medications</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Medications prescribed, dosages, administration instructions..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="followUpInstructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Follow-up Instructions</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Care instructions, monitoring requirements, restrictions..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Financial Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Financial Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="visitCost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Visit Cost ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="150.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="insuranceClaim"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insurance Claim #</FormLabel>
                          <FormControl>
                            <Input placeholder="INS123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="insuranceAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Insurance Coverage ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="120.00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Follow-up and Notes */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Follow-up & Additional Notes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nextVisitDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Next Scheduled Visit</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
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
                              placeholder="Additional observations, owner instructions, special considerations..." 
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
                    Save Veterinary Visit
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Invoice
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
