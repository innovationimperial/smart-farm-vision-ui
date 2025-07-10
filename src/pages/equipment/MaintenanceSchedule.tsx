import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Plus, Calendar as CalendarIcon, AlertTriangle, CheckCircle, Wrench } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const maintenanceSchedule = [
  { id: "MS001", equipment: "John Deere Tractor 6120M", task: "Oil Change & Filter", type: "Preventive", frequency: "Every 250 hours", lastCompleted: "2024-01-15", nextDue: "2024-02-15", priority: "medium", estimatedTime: "2 hours" },
  { id: "MS002", equipment: "Case IH Combine 8250", task: "Belt Inspection", type: "Preventive", frequency: "Every 100 hours", lastCompleted: "2024-01-10", nextDue: "2024-01-25", priority: "high", estimatedTime: "1 hour" },
  { id: "MS003", equipment: "New Holland Planter", task: "Seed Meter Calibration", type: "Seasonal", frequency: "Before planting season", lastCompleted: "2023-03-15", nextDue: "2024-03-01", priority: "high", estimatedTime: "3 hours" },
  { id: "MS004", equipment: "Kubota Loader L3901", task: "Hydraulic System Check", type: "Preventive", frequency: "Every 500 hours", lastCompleted: "2024-01-05", nextDue: "2024-04-05", priority: "low", estimatedTime: "4 hours" },
]

const priorityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500"
}

const priorityBadges = {
  low: "outline",
  medium: "secondary",
  high: "destructive"
}

export default function MaintenanceSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              Maintenance Schedule
            </h1>
            <p className="text-slate-600 mt-2">Plan and track preventive maintenance activities</p>
          </div>
          <Button onClick={() => setShowCreateForm(true)} className="bg-orange-600 hover:bg-orange-700">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Maintenance
          </Button>
        </div>

        <Tabs defaultValue="schedule" className="space-y-4">
          <TabsList>
            <TabsTrigger value="schedule">Maintenance Schedule</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="create">Create Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Scheduled Maintenance Tasks</CardTitle>
                <CardDescription>Upcoming and overdue maintenance activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Schedule ID</TableHead>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Task</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Last Completed</TableHead>
                      <TableHead>Next Due</TableHead>
                      <TableHead>Estimated Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {maintenanceSchedule.map((schedule) => {
                      const isOverdue = new Date(schedule.nextDue) < new Date()
                      const isDueSoon = new Date(schedule.nextDue) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                      
                      return (
                        <TableRow key={schedule.id}>
                          <TableCell className="font-medium">{schedule.id}</TableCell>
                          <TableCell>{schedule.equipment}</TableCell>
                          <TableCell>{schedule.task}</TableCell>
                          <TableCell>{schedule.type}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${priorityColors[schedule.priority as keyof typeof priorityColors]}`}></div>
                              <Badge variant={priorityBadges[schedule.priority as keyof typeof priorityBadges] as "default" | "secondary" | "destructive" | "outline"}>
                                {schedule.priority}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>{schedule.lastCompleted}</TableCell>
                          <TableCell className={isOverdue ? "text-red-600 font-medium" : isDueSoon ? "text-yellow-600 font-medium" : ""}>
                            {schedule.nextDue}
                          </TableCell>
                          <TableCell>{schedule.estimatedTime}</TableCell>
                          <TableCell>
                            {isOverdue ? (
                              <Badge variant="destructive">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Overdue
                              </Badge>
                            ) : isDueSoon ? (
                              <Badge variant="secondary">
                                <Clock className="w-3 h-3 mr-1" />
                                Due Soon
                              </Badge>
                            ) : (
                              <Badge variant="outline">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Scheduled
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Maintenance Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <div className="lg:col-span-2">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>
                      Tasks for {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Selected Date"}
                    </CardTitle>
                    <CardDescription>Scheduled maintenance activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {maintenanceSchedule
                        .filter(schedule => selectedDate && schedule.nextDue === format(selectedDate, "yyyy-MM-dd"))
                        .map((schedule) => (
                          <div key={schedule.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-slate-800">{schedule.task}</h4>
                                <p className="text-sm text-slate-600">{schedule.equipment}</p>
                                <p className="text-xs text-slate-500 mt-1">
                                  {schedule.type} • {schedule.estimatedTime}
                                </p>
                              </div>
                              <Badge variant={priorityBadges[schedule.priority as keyof typeof priorityBadges] as "default" | "secondary" | "destructive" | "outline"}>
                                {schedule.priority} priority
                              </Badge>
                            </div>
                          </div>
                        ))}
                      
                      {maintenanceSchedule.filter(schedule => 
                        selectedDate && schedule.nextDue === format(selectedDate, "yyyy-MM-dd")
                      ).length === 0 && (
                        <div className="text-center py-8">
                          <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                          <p className="text-slate-500">No maintenance tasks scheduled for this date</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Create Maintenance Schedule</CardTitle>
                <CardDescription>Set up recurring maintenance tasks for equipment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="equipment">Equipment</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select equipment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tractor-001">John Deere Tractor 6120M</SelectItem>
                          <SelectItem value="combine-001">Case IH Combine 8250</SelectItem>
                          <SelectItem value="planter-001">New Holland Planter</SelectItem>
                          <SelectItem value="loader-001">Kubota Loader L3901</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="task">Maintenance Task</Label>
                      <Input id="task" placeholder="e.g., Oil Change & Filter Replacement" />
                    </div>

                    <div>
                      <Label htmlFor="type">Maintenance Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="preventive">Preventive</SelectItem>
                          <SelectItem value="corrective">Corrective</SelectItem>
                          <SelectItem value="seasonal">Seasonal</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="frequency">Frequency</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hours-100">Every 100 hours</SelectItem>
                          <SelectItem value="hours-250">Every 250 hours</SelectItem>
                          <SelectItem value="hours-500">Every 500 hours</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="annually">Annually</SelectItem>
                          <SelectItem value="seasonal">Seasonal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Next Due Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="estimatedTime">Estimated Time</Label>
                      <Input id="estimatedTime" placeholder="e.g., 2 hours" />
                    </div>

                    <div>
                      <Label htmlFor="assignedTechnician">Assigned Technician</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select technician" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
                          <SelectItem value="sarah-wilson">Sarah Wilson</SelectItem>
                          <SelectItem value="tom-brown">Tom Brown</SelectItem>
                          <SelectItem value="lisa-davis">Lisa Davis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Task Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Detailed description of the maintenance task, including specific procedures, tools required, and safety considerations..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-3">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Wrench className="mr-2 h-4 w-4" />
                    Create Schedule
                  </Button>
                  <Button variant="outline">
                    Save as Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}