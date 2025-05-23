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
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Calendar, ClipboardList, Download, FileCheck, FileText, Plus, Save, Search } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const recordSchema = z.object({
  recordType: z.string().min(1, "Record type is required"),
  recordDate: z.string().min(1, "Date is required"),
  animalIds: z.string().optional(),
  employeeName: z.string().min(1, "Employee name is required"),
  recordDetails: z.string().min(1, "Details are required"),
  attachmentReference: z.string().optional(),
  notes: z.string().optional(),
})

type RecordFormValues = z.infer<typeof recordSchema>

const defaultValues: Partial<RecordFormValues> = {
  recordType: "Daily Observations",
  employeeName: "John Smith",
}

// Sample data for demonstration
const recentRecords = [
  {
    id: "RK001",
    type: "Daily Observations",
    date: "2025-05-23",
    employee: "John Smith",
    status: "Complete"
  },
  {
    id: "RK002",
    type: "Feed Additive Usage",
    date: "2025-05-22",
    employee: "Maria Johnson",
    status: "Complete"
  },
  {
    id: "RK003",
    type: "Water Quality Testing",
    date: "2025-05-20",
    employee: "David Wilson",
    status: "Complete"
  },
  {
    id: "RK004",
    type: "Mortality Disposal",
    date: "2025-05-18",
    employee: "Sarah Brown",
    status: "Complete"
  }
]

const recordTemplates = [
  {
    title: "Daily Observations Log",
    description: "Record of animal health, behavior and conditions",
    frequency: "Daily",
    required: true,
    retention: "3 years"
  },
  {
    title: "Feed Additive Usage",
    description: "Documentation of medicated feed and additives",
    frequency: "Per usage",
    required: true,
    retention: "2 years"
  },
  {
    title: "Treatment Records",
    description: "Medications administered and withdrawal periods",
    frequency: "Per treatment",
    required: true,
    retention: "5 years"
  },
  {
    title: "Mortality Disposal",
    description: "Record of animal deaths and disposal method",
    frequency: "Per occurrence",
    required: true,
    retention: "3 years"
  },
  {
    title: "Water Quality Testing",
    description: "Results of water quality tests",
    frequency: "Quarterly",
    required: true,
    retention: "2 years"
  },
  {
    title: "Biosecurity Protocols",
    description: "Documentation of biosecurity measures and breaches",
    frequency: "As needed",
    required: false,
    retention: "2 years"
  },
]

export default function RecordKeeping() {
  const { toast } = useToast()
  
  const form = useForm<RecordFormValues>({
    resolver: zodResolver(recordSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: RecordFormValues) {
    toast({
      title: "Record Saved",
      description: `${data.recordType} record has been saved.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Records",
      description: "Your records are being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ClipboardList className="w-8 h-8 text-gray-500" />
              Record Keeping Requirements
            </h1>
            <p className="text-gray-600 mt-2">Mandatory documentation and record management</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Records
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Record
            </Button>
          </div>
        </div>

        {/* Record Keeping Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Records Maintained</p>
                  <h3 className="text-2xl font-bold">128</h3>
                  <p className="text-xs text-green-600">100% compliance</p>
                </div>
                <FileCheck className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Records Created Today</p>
                  <h3 className="text-2xl font-bold">4</h3>
                  <p className="text-xs text-blue-600">All requirements met</p>
                </div>
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Records Due Today</p>
                  <h3 className="text-2xl font-bold">2</h3>
                  <p className="text-xs text-yellow-600">Daily observations, feed logs</p>
                </div>
                <ClipboardList className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Retention Expiring</p>
                  <h3 className="text-2xl font-bold">15</h3>
                  <p className="text-xs text-gray-600">Within next 30 days</p>
                </div>
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Required Record Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Record Keeping Requirements</CardTitle>
            <CardDescription>Mandatory documentation for regulatory compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recordTemplates.map((template, index) => (
                <Card key={index} className="border">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      {template.required ? (
                        <Badge variant="default">Required</Badge>
                      ) : (
                        <Badge variant="outline">Optional</Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Frequency:</div>
                      <div>{template.frequency}</div>
                      <div className="text-muted-foreground">Retention:</div>
                      <div>{template.retention}</div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <FileText className="mr-2 h-4 w-4" />
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Records */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Records</CardTitle>
            <CardDescription>Latest documentation entries</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Record ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Recorded By</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.id}</TableCell>
                    <TableCell>{record.type}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.employee}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Record Entry Form */}
        <Card>
          <CardHeader>
            <CardTitle>Record Entry Form</CardTitle>
            <CardDescription>Create a new record for required documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="recordType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Record Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select record type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Daily Observations">Daily Observations</SelectItem>
                            <SelectItem value="Feed Additive Usage">Feed Additive Usage</SelectItem>
                            <SelectItem value="Treatment Record">Treatment Record</SelectItem>
                            <SelectItem value="Mortality Disposal">Mortality Disposal</SelectItem>
                            <SelectItem value="Water Quality Testing">Water Quality Testing</SelectItem>
                            <SelectItem value="Biosecurity Protocol">Biosecurity Protocol</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Type of record being created
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="recordDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Record Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="animalIds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Animal ID(s)</FormLabel>
                        <FormControl>
                          <Input placeholder="Leave blank if not applicable" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter ID numbers for specific animals or groups
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employeeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recorded By</FormLabel>
                        <FormControl>
                          <Input placeholder="Employee name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="recordDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Record Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter detailed information for this record" 
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Include all required information according to compliance requirements
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="attachmentReference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attachment Reference</FormLabel>
                        <FormControl>
                          <Input placeholder="Reference number or file name" {...field} />
                        </FormControl>
                        <FormDescription>
                          For lab reports, test results, or other attachments
                        </FormDescription>
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
                          <Textarea placeholder="Any additional information" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit">
                    <Save className="w-4 h-4 mr-2" />
                    Save Record
                  </Button>
                  <Button type="button" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Print Record
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
