import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Clock, Wrench, AlertTriangle, CheckCircle, Plus, Calendar as CalendarIcon, TrendingUp } from "lucide-react"
import { useState } from "react"

const maintenanceSchedule = [
  { id: "WO001", equipment: "John Deere Tractor 6120M", type: "Preventive", priority: "high", dueDate: "2024-02-15", estimatedHours: 4, technician: "Mike Johnson", status: "scheduled" },
  { id: "WO002", equipment: "Case IH Combine 8250", type: "Corrective", priority: "critical", dueDate: "2024-01-20", estimatedHours: 8, technician: "Sarah Wilson", status: "in-progress" },
  { id: "WO003", equipment: "New Holland Planter", type: "Preventive", priority: "medium", dueDate: "2024-02-08", estimatedHours: 2, technician: "Tom Brown", status: "scheduled" },
  { id: "WO004", equipment: "Kubota Loader L3901", type: "Emergency", priority: "critical", dueDate: "2024-01-25", estimatedHours: 12, technician: "Mike Johnson", status: "pending" },
]

const partsInventory = [
  { part: "Engine Oil Filter", stock: 15, minStock: 5, cost: "$25", supplier: "John Deere" },
  { part: "Hydraulic Fluid", stock: 8, minStock: 10, cost: "$85", supplier: "Mobil" },
  { part: "Air Filter", stock: 22, minStock: 8, cost: "$45", supplier: "Case IH" },
  { part: "Spark Plugs", stock: 3, minStock: 6, cost: "$12", supplier: "NGK" },
]

const priorityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500", 
  high: "bg-orange-500",
  critical: "bg-red-500"
}

const statusBadges = {
  scheduled: "secondary",
  "in-progress": "default",
  pending: "destructive",
  completed: "outline"
}

export default function MaintenanceDashboard() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  
  const totalWorkOrders = maintenanceSchedule.length
  const inProgress = maintenanceSchedule.filter(wo => wo.status === "in-progress").length
  const scheduled = maintenanceSchedule.filter(wo => wo.status === "scheduled").length
  const overdue = maintenanceSchedule.filter(wo => new Date(wo.dueDate) < new Date()).length

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              Maintenance Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Schedules, work orders, parts inventory management</p>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Work Order
          </Button>
        </div>

        {/* Maintenance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Work Orders</p>
                  <h3 className="text-2xl font-bold text-slate-800">{totalWorkOrders}</h3>
                </div>
                <Wrench className="h-5 w-5 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">In Progress</p>
                  <h3 className="text-2xl font-bold text-blue-600">{inProgress}</h3>
                  <p className="text-xs text-slate-500">Active maintenance</p>
                </div>
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Scheduled</p>
                  <h3 className="text-2xl font-bold text-green-600">{scheduled}</h3>
                  <p className="text-xs text-slate-500">Upcoming tasks</p>
                </div>
                <CalendarIcon className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Overdue</p>
                  <h3 className="text-2xl font-bold text-red-600">{overdue}</h3>
                  <p className="text-xs text-slate-500">Needs attention</p>
                </div>
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Work Orders */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="work-orders" className="space-y-4">
              <TabsList>
                <TabsTrigger value="work-orders">Work Orders</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="parts">Parts Inventory</TabsTrigger>
              </TabsList>

              <TabsContent value="work-orders">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Active Work Orders</CardTitle>
                    <CardDescription>Current and upcoming maintenance tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Work Order</TableHead>
                          <TableHead>Equipment</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Technician</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {maintenanceSchedule.map((wo) => (
                          <TableRow key={wo.id}>
                            <TableCell className="font-medium">{wo.id}</TableCell>
                            <TableCell>{wo.equipment}</TableCell>
                            <TableCell>{wo.type}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${priorityColors[wo.priority as keyof typeof priorityColors]}`}></div>
                                <span className="capitalize">{wo.priority}</span>
                              </div>
                            </TableCell>
                            <TableCell>{wo.dueDate}</TableCell>
                            <TableCell>
                            <Badge variant={statusBadges[wo.status as keyof typeof statusBadges] as "default" | "secondary" | "destructive" | "outline"}>
                              {wo.status.replace("-", " ")}
                            </Badge>
                            </TableCell>
                            <TableCell>{wo.technician}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Maintenance Schedule</CardTitle>
                    <CardDescription>Planned maintenance activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {maintenanceSchedule.map((wo) => (
                        <div key={wo.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-slate-800">{wo.equipment}</p>
                              <p className="text-sm text-slate-600">{wo.type} Maintenance</p>
                              <p className="text-xs text-slate-500">Estimated: {wo.estimatedHours} hours</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-slate-800">{wo.dueDate}</p>
                              <Badge variant={statusBadges[wo.status as keyof typeof statusBadges] as "default" | "secondary" | "destructive" | "outline"}>
                                {wo.status.replace("-", " ")}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parts">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Parts Inventory</CardTitle>
                    <CardDescription>Current stock levels and requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Part Name</TableHead>
                          <TableHead>Current Stock</TableHead>
                          <TableHead>Min Stock</TableHead>
                          <TableHead>Unit Cost</TableHead>
                          <TableHead>Supplier</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {partsInventory.map((part, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{part.part}</TableCell>
                            <TableCell>{part.stock}</TableCell>
                            <TableCell>{part.minStock}</TableCell>
                            <TableCell>{part.cost}</TableCell>
                            <TableCell>{part.supplier}</TableCell>
                            <TableCell>
                              {part.stock <= part.minStock ? (
                                <Badge variant="destructive">Low Stock</Badge>
                              ) : (
                                <Badge variant="outline">In Stock</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Calendar and Summary */}
          <div className="space-y-6">
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

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Completion Rate</span>
                  <span className="text-sm font-medium">87%</span>
                </div>
                <Progress value={87} />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">On-Time Delivery</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} />

                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Parts Availability</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}