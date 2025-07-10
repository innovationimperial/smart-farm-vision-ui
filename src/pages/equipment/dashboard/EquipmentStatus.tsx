import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, CheckCircle, Clock, Wrench, TrendingUp, MapPin, Calendar } from "lucide-react"

const equipmentStatusData = [
  { id: "EQ001", name: "John Deere Tractor 6120M", category: "Tractors", status: "operational", location: "Field A", lastMaintenance: "2024-01-15", nextMaintenance: "2024-02-15", utilization: 85 },
  { id: "EQ002", name: "Case IH Combine 8250", category: "Harvesters", status: "maintenance", location: "Garage 1", lastMaintenance: "2024-01-10", nextMaintenance: "2024-01-20", utilization: 0 },
  { id: "EQ003", name: "New Holland Planter", category: "Planters", status: "operational", location: "Field B", lastMaintenance: "2024-01-08", nextMaintenance: "2024-02-08", utilization: 72 },
  { id: "EQ004", name: "Kubota Loader L3901", category: "Loaders", status: "out-of-service", location: "Garage 2", lastMaintenance: "2023-12-20", nextMaintenance: "2024-01-25", utilization: 0 },
  { id: "EQ005", name: "Caterpillar Bulldozer", category: "Heavy Equipment", status: "operational", location: "Construction Site", lastMaintenance: "2024-01-12", nextMaintenance: "2024-02-12", utilization: 90 }
]

const statusColors = {
  operational: "bg-green-500",
  maintenance: "bg-yellow-500",
  "out-of-service": "bg-red-500"
}

const statusBadges = {
  operational: "default",
  maintenance: "secondary", 
  "out-of-service": "destructive"
}

export default function EquipmentStatus() {
  const totalEquipment = equipmentStatusData.length
  const operational = equipmentStatusData.filter(eq => eq.status === "operational").length
  const maintenance = equipmentStatusData.filter(eq => eq.status === "maintenance").length
  const outOfService = equipmentStatusData.filter(eq => eq.status === "out-of-service").length

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-600" />
              Equipment Status Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Real-time fleet tracking, availability, and alerts</p>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <MapPin className="mr-2 h-4 w-4" />
            Fleet Map View
          </Button>
        </div>

        {/* Status Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Equipment</p>
                  <h3 className="text-2xl font-bold text-slate-800">{totalEquipment}</h3>
                </div>
                <Wrench className="h-5 w-5 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Operational</p>
                  <h3 className="text-2xl font-bold text-green-600">{operational}</h3>
                  <p className="text-xs text-slate-500">{Math.round((operational/totalEquipment)*100)}% of fleet</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">In Maintenance</p>
                  <h3 className="text-2xl font-bold text-yellow-600">{maintenance}</h3>
                  <p className="text-xs text-slate-500">{Math.round((maintenance/totalEquipment)*100)}% of fleet</p>
                </div>
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Out of Service</p>
                  <h3 className="text-2xl font-bold text-red-600">{outOfService}</h3>
                  <p className="text-xs text-slate-500">{Math.round((outOfService/totalEquipment)*100)}% of fleet</p>
                </div>
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">Equipment List</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & Notifications</TabsTrigger>
            <TabsTrigger value="utilization">Utilization Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Equipment Fleet Status</CardTitle>
                <CardDescription>Current status and location of all equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Utilization</TableHead>
                      <TableHead>Next Maintenance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipmentStatusData.map((equipment) => (
                      <TableRow key={equipment.id}>
                        <TableCell className="font-medium">{equipment.id}</TableCell>
                        <TableCell>{equipment.name}</TableCell>
                        <TableCell>{equipment.category}</TableCell>
                        <TableCell>
                          <Badge variant={statusBadges[equipment.status as keyof typeof statusBadges] as "default" | "secondary" | "destructive" | "outline"}>
                            {equipment.status.replace("-", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>{equipment.location}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={equipment.utilization} className="w-16" />
                            <span className="text-sm text-slate-600">{equipment.utilization}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{equipment.nextMaintenance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="grid gap-4">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Critical Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-red-200">
                      <p className="font-medium text-red-800">Kubota Loader L3901 - Out of Service</p>
                      <p className="text-sm text-red-600">Hydraulic system failure detected. Immediate repair required.</p>
                      <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Maintenance Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-yellow-200">
                      <p className="font-medium text-yellow-800">Case IH Combine 8250 - Scheduled Maintenance</p>
                      <p className="text-sm text-yellow-600">Oil change and filter replacement due today.</p>
                      <p className="text-xs text-slate-500 mt-1">Due today</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-yellow-200">
                      <p className="font-medium text-yellow-800">John Deere Tractor 6120M - Maintenance Due Soon</p>
                      <p className="text-sm text-yellow-600">Scheduled maintenance due in 3 days.</p>
                      <p className="text-xs text-slate-500 mt-1">Due: 2024-02-15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="utilization">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Equipment Utilization Overview</CardTitle>
                <CardDescription>Current utilization rates across the fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {equipmentStatusData.map((equipment) => (
                    <div key={equipment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-slate-800">{equipment.name}</p>
                        <p className="text-sm text-slate-600">{equipment.category} • {equipment.location}</p>
                      </div>
                      <div className="flex items-center gap-4 min-w-[200px]">
                        <Progress value={equipment.utilization} className="flex-1" />
                        <span className="text-sm font-medium text-slate-700 min-w-[40px]">{equipment.utilization}%</span>
                        <div className={`w-3 h-3 rounded-full ${statusColors[equipment.status as keyof typeof statusColors]}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}