
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Calendar, ClipboardCheck, Download, FileCheck, FileText, Plus, Save, Shield } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

// Checklist Schema
const complianceSchema = z.object({
  inspectionType: z.string().min(1, "Inspection type is required"),
  inspectionDate: z.string().min(1, "Inspection date is required"),
  inspectorName: z.string().min(1, "Inspector name is required"),
  premisesIdNumber: z.string().min(1, "Premises ID is required"),
  certificationStatus: z.string().min(1, "Certification status is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
  animalWelfareChecklist: z.record(z.string(), z.boolean()).optional(),
  biosecurityChecklist: z.record(z.string(), z.boolean()).optional(),
  environmentalChecklist: z.record(z.string(), z.boolean()).optional(),
  notes: z.string().optional(),
})

type ComplianceFormValues = z.infer<typeof complianceSchema>

// Sample data for demonstration
const complianceRecords = [
  {
    id: "CR001",
    type: "Animal Welfare",
    date: "2025-04-15",
    inspector: "John Smith",
    status: "Compliant",
    expiration: "2026-04-15"
  },
  {
    id: "CR002",
    type: "Organic Certification",
    date: "2025-02-20",
    inspector: "Maria Johnson",
    status: "Compliant",
    expiration: "2026-02-20"
  },
  {
    id: "CR003",
    type: "Environmental",
    date: "2025-03-05",
    inspector: "David Wilson",
    status: "Minor Findings",
    expiration: "2026-03-05"
  },
  {
    id: "CR004",
    type: "Food Safety",
    date: "2025-05-10",
    inspector: "Sarah Brown",
    status: "Compliant",
    expiration: "2026-05-10"
  }
]

// Checklist items
const animalWelfareItems = [
  "Adequate space for all animals",
  "Clean and dry bedding",
  "Access to fresh water",
  "Proper ventilation",
  "Regular health monitoring",
  "Low stress handling procedures",
  "Appropriate social groupings",
  "Shelter from weather extremes",
  "Enrichment opportunities",
  "Pain management protocols"
]

const biosecurityItems = [
  "Visitor log maintained",
  "Footbaths at all entrances",
  "Quarantine procedures for new animals",
  "Separate equipment for isolation areas",
  "Staff training on biosecurity",
  "Wildlife exclusion measures",
  "Feed storage protection",
  "Vector control program",
  "Vehicle disinfection protocols",
  "Proper carcass disposal procedures"
]

const environmentalItems = [
  "Manure management plan",
  "Waste storage facilities",
  "Runoff control measures",
  "Water quality testing",
  "Proper chemical storage",
  "Soil conservation practices",
  "Emission reduction strategies",
  "Energy efficiency measures",
  "Wildlife habitat protection",
  "Proper disposal of medical waste"
]

export default function RegulatoryCompliance() {
  const { toast } = useToast()
  
  // Initialize form with default checklist values
  const defaultValues: Partial<ComplianceFormValues> = {
    inspectionType: "Animal Welfare",
    certificationStatus: "Compliant",
    animalWelfareChecklist: Object.fromEntries(animalWelfareItems.map(item => [item, false])),
    biosecurityChecklist: Object.fromEntries(biosecurityItems.map(item => [item, false])),
    environmentalChecklist: Object.fromEntries(environmentalItems.map(item => [item, false])),
  }
  
  const form = useForm<ComplianceFormValues>({
    resolver: zodResolver(complianceSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ComplianceFormValues) {
    toast({
      title: "Compliance Record Updated",
      description: `${data.inspectionType} compliance record has been saved.`,
    })
    console.log(data)
  }

  function handleExport() {
    toast({
      title: "Exporting Records",
      description: "Your compliance records are being exported to PDF.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Shield className="w-8 h-8 text-gray-500" />
              Regulatory Compliance
            </h1>
            <p className="text-gray-600 mt-2">Track and maintain compliance with regulatory requirements</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Records
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Inspection
            </Button>
          </div>
        </div>

        {/* Compliance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Certifications</p>
                  <h3 className="text-2xl font-bold">4</h3>
                  <p className="text-xs text-green-600">All current</p>
                </div>
                <FileCheck className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Renewals</p>
                  <h3 className="text-2xl font-bold">1</h3>
                  <p className="text-xs text-yellow-600">Within 60 days</p>
                </div>
                <Calendar className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Compliance Rate</p>
                  <h3 className="text-2xl font-bold">98%</h3>
                  <p className="text-xs text-green-600">Above industry average</p>
                </div>
                <ClipboardCheck className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Open Findings</p>
                  <h3 className="text-2xl font-bold">2</h3>
                  <p className="text-xs text-red-600">Requiring attention</p>
                </div>
                <FileText className="h-5 w-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Records */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Records</CardTitle>
            <CardDescription>History of inspections and certifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-6 bg-slate-50 p-3 text-sm font-medium text-slate-600">
                <div>Record ID</div>
                <div>Type</div>
                <div>Date</div>
                <div>Inspector</div>
                <div>Status</div>
                <div>Expiration</div>
              </div>
              <div className="divide-y">
                {complianceRecords.map((record) => (
                  <div key={record.id} className="grid grid-cols-6 p-3 text-sm">
                    <div className="font-medium">{record.id}</div>
                    <div>{record.type}</div>
                    <div>{record.date}</div>
                    <div>{record.inspector}</div>
                    <div>
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        record.status === "Compliant" ? "bg-green-100 text-green-800" : 
                        record.status === "Minor Findings" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      )}>
                        {record.status}
                      </span>
                    </div>
                    <div>{record.expiration}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Form */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Inspection Form</CardTitle>
            <CardDescription>Record new inspection results and certification details</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="inspectionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inspection Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inspection type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Animal Welfare">Animal Welfare</SelectItem>
                            <SelectItem value="Organic Certification">Organic Certification</SelectItem>
                            <SelectItem value="Environmental">Environmental</SelectItem>
                            <SelectItem value="Food Safety">Food Safety</SelectItem>
                            <SelectItem value="Biosecurity">Biosecurity</SelectItem>
                            <SelectItem value="Export Certification">Export Certification</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Type of inspection or certification being conducted
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="inspectionDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inspection Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="inspectorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inspector Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="premisesIdNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Premises ID Number</FormLabel>
                        <FormControl>
                          <Input placeholder="PIN12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="certificationStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Certification Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Compliant">Compliant</SelectItem>
                            <SelectItem value="Minor Findings">Minor Findings</SelectItem>
                            <SelectItem value="Major Findings">Major Findings</SelectItem>
                            <SelectItem value="Non-Compliant">Non-Compliant</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                          </SelectContent>
                        </Select>
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

                <div className="border-t pt-6">
                  <Tabs defaultValue="animal-welfare" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="animal-welfare">Animal Welfare</TabsTrigger>
                      <TabsTrigger value="biosecurity">Biosecurity</TabsTrigger>
                      <TabsTrigger value="environmental">Environmental</TabsTrigger>
                    </TabsList>
                    <TabsContent value="animal-welfare" className="pt-4">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Animal Welfare Checklist</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {animalWelfareItems.map((item) => (
                            <div key={item} className="flex items-center space-x-2">
                              <FormField
                                control={form.control}
                                name={`animalWelfareChecklist.${item}`}
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="biosecurity" className="pt-4">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Biosecurity Checklist</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {biosecurityItems.map((item) => (
                            <div key={item} className="flex items-center space-x-2">
                              <FormField
                                control={form.control}
                                name={`biosecurityChecklist.${item}`}
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="environmental" className="pt-4">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Environmental Checklist</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {environmentalItems.map((item) => (
                            <div key={item} className="flex items-center space-x-2">
                              <FormField
                                control={form.control}
                                name={`environmentalChecklist.${item}`}
                                render={({ field }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inspection Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter any findings, observations, or required corrective actions" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Compliance Record
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Compliance Report
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
