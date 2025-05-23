
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Download, FileCheck, Home, Repeat, Save, Thermometer } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const housingFormSchema = z.object({
  facilityName: z.string().min(1, "Facility name is required"),
  barnPenNumber: z.string().min(1, "Barn/pen number is required"),
  animalType: z.string().min(1, "Animal type is required"),
  stockingCapacity: z.string().min(1, "Stocking capacity is required"),
  currentOccupancy: z.string().min(1, "Current occupancy is required"),
  squareFootage: z.string().min(1, "Square footage is required"),
  temperatureRange: z.string().min(1, "Temperature range is required"),
  humidityRange: z.string().min(1, "Humidity range is required"),
  ventilationType: z.string().min(1, "Ventilation type is required"),
  flooringType: z.string().min(1, "Flooring type is required"),
  cleaningSchedule: z.string().min(1, "Cleaning schedule is required"),
  disinfectionProtocol: z.string().min(1, "Disinfection protocol is required"),
  lastCleaningDate: z.string().min(1, "Last cleaning date is required"),
  nextCleaningDate: z.string().min(1, "Next cleaning date is required"),
  maintenanceNotes: z.string().optional(),
})

type HousingFormValues = z.infer<typeof housingFormSchema>

const defaultValues: Partial<HousingFormValues> = {
  facilityName: "Main Barn",
  animalType: "Cattle",
  ventilationType: "Forced air",
  flooringType: "Concrete with rubber mats",
  cleaningSchedule: "Weekly",
  disinfectionProtocol: "Standard quaternary ammonium compounds",
}

// Sample data for demonstration
const housingFacilities = [
  {
    id: "BRN001",
    name: "Main Barn",
    type: "Cattle",
    capacity: "50",
    occupancy: "42",
    lastCleaned: "2025-05-15",
    nextCleaning: "2025-05-22",
    status: "Good",
  },
  {
    id: "BRN002",
    name: "North Shelter",
    type: "Sheep",
    capacity: "100",
    occupancy: "85",
    lastCleaned: "2025-05-12",
    nextCleaning: "2025-05-19",
    status: "Good",
  },
  {
    id: "BRN003",
    name: "East Wing",
    type: "Poultry",
    capacity: "500",
    occupancy: "450",
    lastCleaned: "2025-05-10",
    nextCleaning: "2025-05-17",
    status: "Needs Repair",
  },
  {
    id: "BRN004",
    name: "South Paddock",
    type: "Horses",
    capacity: "12",
    occupancy: "8",
    lastCleaned: "2025-05-18",
    nextCleaning: "2025-05-25",
    status: "Good",
  }
]

export default function HousingRecords() {
  const { toast } = useToast()
  
  const form = useForm<HousingFormValues>({
    resolver: zodResolver(housingFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: HousingFormValues) {
    toast({
      title: "Housing Record Updated",
      description: `${data.facilityName} housing information has been saved.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Records",
      description: "Your housing records are being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Home className="w-8 h-8 text-blue-500" />
              Housing Records
            </h1>
            <p className="text-gray-600 mt-2">Barn/pen assignments and facility management</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Records
            </Button>
            <Button>
              <Home className="mr-2 h-4 w-4" />
              Add Facility
            </Button>
          </div>
        </div>

        {/* Housing Facilities List */}
        <Card>
          <CardHeader>
            <CardTitle>Housing Facilities</CardTitle>
            <CardDescription>Overview of all livestock housing facilities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Facility</TableHead>
                  <TableHead>Animal Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Occupancy</TableHead>
                  <TableHead>Last Cleaned</TableHead>
                  <TableHead>Next Cleaning</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {housingFacilities.map((facility) => (
                  <TableRow key={facility.id}>
                    <TableCell className="font-medium">{facility.id}</TableCell>
                    <TableCell>{facility.name}</TableCell>
                    <TableCell>{facility.type}</TableCell>
                    <TableCell>{facility.capacity}</TableCell>
                    <TableCell>{facility.occupancy}</TableCell>
                    <TableCell>{facility.lastCleaned}</TableCell>
                    <TableCell>{facility.nextCleaning}</TableCell>
                    <TableCell>
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        facility.status === "Good" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      )}>
                        {facility.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Housing Record Form */}
        <Card>
          <CardHeader>
            <CardTitle>Housing Record Details</CardTitle>
            <CardDescription>Add or update housing facility information</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="facilityName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facility Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Main Barn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="barnPenNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Barn/Pen Number</FormLabel>
                        <FormControl>
                          <Input placeholder="B001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="animalType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Animal Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select animal type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Cattle">Cattle</SelectItem>
                            <SelectItem value="Sheep">Sheep</SelectItem>
                            <SelectItem value="Goats">Goats</SelectItem>
                            <SelectItem value="Poultry">Poultry</SelectItem>
                            <SelectItem value="Swine">Swine</SelectItem>
                            <SelectItem value="Horses">Horses</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stockingCapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stocking Capacity</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentOccupancy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Occupancy</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="42" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="squareFootage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Square Footage</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="2500" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Environmental Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="temperatureRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Temperature Range (°F)</FormLabel>
                          <FormControl>
                            <Input placeholder="65-75" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="humidityRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Humidity Range (%)</FormLabel>
                          <FormControl>
                            <Input placeholder="40-60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ventilationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ventilation Type</FormLabel>
                          <FormControl>
                            <Input placeholder="Forced air" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="flooringType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Flooring Type</FormLabel>
                          <FormControl>
                            <Input placeholder="Concrete with rubber mats" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Cleaning & Maintenance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="cleaningSchedule"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cleaning Schedule</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select cleaning schedule" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Daily">Daily</SelectItem>
                              <SelectItem value="Weekly">Weekly</SelectItem>
                              <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                              <SelectItem value="Monthly">Monthly</SelectItem>
                              <SelectItem value="Quarterly">Quarterly</SelectItem>
                              <SelectItem value="Custom">Custom</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="disinfectionProtocol"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Disinfection Protocol</FormLabel>
                          <FormControl>
                            <Input placeholder="Standard quaternary ammonium compounds" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastCleaningDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Cleaning Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nextCleaningDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Next Cleaning Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maintenanceNotes"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Maintenance Notes</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter any maintenance requirements or recent repairs" 
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
                    Save Housing Record
                  </Button>
                  <Button type="button" variant="outline">
                    <Repeat className="w-4 h-4 mr-2" />
                    Reset Form
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
