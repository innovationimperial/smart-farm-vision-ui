
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ArrowLeft, Save, FileText, Shield } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function VaccinationSchedule() {
  const form = useForm({
    defaultValues: {
      animalId: "",
      vaccineType: "",
      manufacturer: "",
      vaccinationDate: "",
      batchNumber: "",
      lotNumber: "",
      expirationDate: "",
      veterinarian: "",
      vetLicense: "",
      nextDueDate: "",
      adverseReactions: "",
      vaccinationSite: "",
      dosage: "",
      administrationMethod: "",
      boosterRequired: "",
      notes: "",
      cost: ""
    }
  })

  const onSubmit = (data: any) => {
    console.log("Vaccination data:", data)
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
              <Shield className="w-8 h-8 text-green-500" />
              Vaccination Schedule
            </h1>
            <p className="text-gray-600 mt-2">Immunization tracking and scheduling</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vaccination Record</CardTitle>
            <CardDescription>Track immunizations and maintain vaccination schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Vaccination Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Vaccination Details</h3>
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
                      name="vaccineType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vaccine Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select vaccine" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="BVDV">BVDV (Bovine Viral Diarrhea)</SelectItem>
                              <SelectItem value="IBR">IBR (Infectious Bovine Rhinotracheitis)</SelectItem>
                              <SelectItem value="PI3">PI3 (Parainfluenza-3)</SelectItem>
                              <SelectItem value="BRSV">BRSV (Bovine Respiratory Syncytial Virus)</SelectItem>
                              <SelectItem value="Clostridial">Clostridial (7-way, 8-way)</SelectItem>
                              <SelectItem value="Rabies">Rabies</SelectItem>
                              <SelectItem value="Anthrax">Anthrax</SelectItem>
                              <SelectItem value="Brucellosis">Brucellosis (Bangs)</SelectItem>
                              <SelectItem value="Leptospirosis">Leptospirosis</SelectItem>
                              <SelectItem value="Haemophilus">Haemophilus Somnus</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="manufacturer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Manufacturer</FormLabel>
                          <FormControl>
                            <Input placeholder="Zoetis, Merck, Boehringer..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Administration Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Administration Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="vaccinationDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vaccination Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
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
                          <FormLabel>Dosage (ml/cc)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.1" placeholder="2.0" {...field} />
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
                              <SelectItem value="Intranasal">Intranasal</SelectItem>
                              <SelectItem value="Oral">Oral</SelectItem>
                              <SelectItem value="Intravenous">Intravenous (IV)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vaccinationSite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vaccination Site</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select site" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Left neck">Left neck</SelectItem>
                              <SelectItem value="Right neck">Right neck</SelectItem>
                              <SelectItem value="Left hip">Left hip</SelectItem>
                              <SelectItem value="Right hip">Right hip</SelectItem>
                              <SelectItem value="Left shoulder">Left shoulder</SelectItem>
                              <SelectItem value="Right shoulder">Right shoulder</SelectItem>
                              <SelectItem value="Nose">Nose (intranasal)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Product Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="batchNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Batch Number</FormLabel>
                          <FormControl>
                            <Input placeholder="B123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lotNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Lot Number</FormLabel>
                          <FormControl>
                            <Input placeholder="L789012" {...field} />
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
                  </div>
                </div>

                {/* Veterinarian Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Veterinarian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="veterinarian"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinarian Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Smith, DVM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vetLicense"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinary License #</FormLabel>
                          <FormControl>
                            <Input placeholder="VET123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Follow-up Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Follow-up & Reactions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nextDueDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Next Due Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="boosterRequired"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Booster Required</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Yes">Yes</SelectItem>
                              <SelectItem value="No">No</SelectItem>
                              <SelectItem value="Annual">Annual</SelectItem>
                              <SelectItem value="Bi-annual">Bi-annual</SelectItem>
                              <SelectItem value="As needed">As needed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="adverseReactions"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Adverse Reactions Noted</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any swelling, fever, behavioral changes, or other reactions..." 
                              {...field} 
                            />
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
                      name="cost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cost ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" placeholder="25.00" {...field} />
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
                              placeholder="Special instructions, observations, or comments..." 
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
                    Save Vaccination Record
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Certificate
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
