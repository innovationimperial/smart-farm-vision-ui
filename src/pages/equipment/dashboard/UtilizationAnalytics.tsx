import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { BarChart3, TrendingUp, Clock, Zap, Target, Calendar, Activity } from "lucide-react"

const utilizationData = [
  { month: "Jan", tractor: 85, combine: 0, planter: 45, loader: 72 },
  { month: "Feb", tractor: 88, combine: 0, planter: 52, loader: 78 },
  { month: "Mar", tractor: 92, combine: 95, planter: 88, loader: 85 },
  { month: "Apr", tractor: 89, combine: 98, planter: 92, loader: 81 },
  { month: "May", tractor: 95, combine: 89, planter: 78, loader: 88 },
  { month: "Jun", tractor: 87, combine: 0, planter: 65, loader: 79 },
]

const efficiencyData = [
  { date: "Mon", planned: 8, actual: 7.5, efficiency: 94 },
  { date: "Tue", planned: 8, actual: 8.2, efficiency: 103 },
  { date: "Wed", planned: 8, actual: 7.8, efficiency: 98 },
  { date: "Thu", planned: 8, actual: 6.5, efficiency: 81 },
  { date: "Fri", planned: 8, actual: 8.5, efficiency: 106 },
  { date: "Sat", planned: 6, actual: 5.8, efficiency: 97 },
  { date: "Sun", planned: 4, actual: 4.2, efficiency: 105 },
]

const equipmentMetrics = [
  { 
    id: "EQ001", 
    name: "John Deere Tractor 6120M", 
    utilizationRate: 87, 
    hoursWorked: 156, 
    plannedHours: 180, 
    efficiency: 94, 
    fuelEfficiency: 12.5,
    status: "optimal" 
  },
  { 
    id: "EQ002", 
    name: "Case IH Combine 8250", 
    utilizationRate: 89, 
    hoursWorked: 142, 
    plannedHours: 160, 
    efficiency: 98, 
    fuelEfficiency: 8.2,
    status: "optimal" 
  },
  { 
    id: "EQ003", 
    name: "New Holland Planter", 
    utilizationRate: 65, 
    hoursWorked: 98, 
    plannedHours: 150, 
    efficiency: 78, 
    fuelEfficiency: 15.8,
    status: "underutilized" 
  },
  { 
    id: "EQ004", 
    name: "Kubota Loader L3901", 
    utilizationRate: 79, 
    hoursWorked: 127, 
    plannedHours: 160, 
    efficiency: 85, 
    fuelEfficiency: 18.2,
    status: "good" 
  },
]

const operationalInsights = [
  { metric: "Peak Usage Hours", value: "8 AM - 6 PM", trend: "+5%" },
  { metric: "Average Session Length", value: "4.2 hours", trend: "+12%" },
  { metric: "Idle Time", value: "15%", trend: "-8%" },
  { metric: "Multi-Equipment Coordination", value: "78%", trend: "+3%" },
]

export default function UtilizationAnalytics() {
  const avgUtilization = equipmentMetrics.reduce((sum, eq) => sum + eq.utilizationRate, 0) / equipmentMetrics.length
  const totalHoursWorked = equipmentMetrics.reduce((sum, eq) => sum + eq.hoursWorked, 0)
  const totalPlannedHours = equipmentMetrics.reduce((sum, eq) => sum + eq.plannedHours, 0)
  const avgEfficiency = equipmentMetrics.reduce((sum, eq) => sum + eq.efficiency, 0) / equipmentMetrics.length

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-orange-600" />
              Utilization Analytics Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Usage rates, efficiency optimization, and performance insights</p>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Target className="mr-2 h-4 w-4" />
            Optimize Schedule
          </Button>
        </div>

        {/* Utilization Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Average Utilization</p>
                  <h3 className="text-2xl font-bold text-slate-800">{avgUtilization.toFixed(1)}%</h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+3.2% vs last month</span>
                  </div>
                </div>
                <BarChart3 className="h-5 w-5 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Hours Worked</p>
                  <h3 className="text-2xl font-bold text-blue-600">{totalHoursWorked}</h3>
                  <p className="text-xs text-slate-500">of {totalPlannedHours} planned</p>
                </div>
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Efficiency Rate</p>
                  <h3 className="text-2xl font-bold text-green-600">{avgEfficiency.toFixed(1)}%</h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+1.8% vs target</span>
                  </div>
                </div>
                <Zap className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Peak Performance</p>
                  <h3 className="text-2xl font-bold text-purple-600">98%</h3>
                  <p className="text-xs text-slate-500">Best performing unit</p>
                </div>
                <Target className="h-5 w-5 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="utilization" className="space-y-4">
          <TabsList>
            <TabsTrigger value="utilization">Utilization Trends</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency Analysis</TabsTrigger>
            <TabsTrigger value="equipment">Equipment Metrics</TabsTrigger>
            <TabsTrigger value="insights">Operational Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="utilization">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Equipment Utilization Over Time</CardTitle>
                <CardDescription>Monthly utilization rates by equipment type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={utilizationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, ""]} />
                    <Area type="monotone" dataKey="tractor" stackId="1" stroke="#2196f3" fill="#2196f3" fillOpacity={0.6} name="Tractor" />
                    <Area type="monotone" dataKey="combine" stackId="1" stroke="#ff7043" fill="#ff7043" fillOpacity={0.6} name="Combine" />
                    <Area type="monotone" dataKey="planter" stackId="1" stroke="#4caf50" fill="#4caf50" fillOpacity={0.6} name="Planter" />
                    <Area type="monotone" dataKey="loader" stackId="1" stroke="#ffc107" fill="#ffc107" fillOpacity={0.6} name="Loader" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="efficiency">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Daily Efficiency Analysis</CardTitle>
                <CardDescription>Planned vs actual hours worked and efficiency percentages</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === "efficiency" ? `${value}%` : `${value} hours`, 
                        name === "planned" ? "Planned Hours" : name === "actual" ? "Actual Hours" : "Efficiency"
                      ]} 
                    />
                    <Bar yAxisId="left" dataKey="planned" fill="#e3f2fd" name="planned" />
                    <Bar yAxisId="left" dataKey="actual" fill="#2196f3" name="actual" />
                    <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#ff7043" strokeWidth={3} name="efficiency" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="equipment">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Individual Equipment Performance</CardTitle>
                <CardDescription>Detailed metrics for each piece of equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Utilization Rate</TableHead>
                      <TableHead>Hours Worked</TableHead>
                      <TableHead>Efficiency</TableHead>
                      <TableHead>Fuel Efficiency</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipmentMetrics.map((equipment) => (
                      <TableRow key={equipment.id}>
                        <TableCell className="font-medium">{equipment.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={equipment.utilizationRate} className="w-16" />
                            <span className="text-sm text-slate-600">{equipment.utilizationRate}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span>{equipment.hoursWorked}</span>
                          <span className="text-xs text-slate-500 block">of {equipment.plannedHours} planned</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={equipment.efficiency} className="w-16" />
                            <span className="text-sm text-slate-600">{equipment.efficiency}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{equipment.fuelEfficiency} L/h</TableCell>
                        <TableCell>
                          {equipment.status === "optimal" && (
                            <Badge variant="outline" className="text-green-600">Optimal</Badge>
                          )}
                          {equipment.status === "good" && (
                            <Badge variant="secondary">Good</Badge>
                          )}
                          {equipment.status === "underutilized" && (
                            <Badge variant="destructive">Underutilized</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Operational Insights</CardTitle>
                  <CardDescription>Key performance indicators and trends</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {operationalInsights.map((insight, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-slate-800">{insight.metric}</p>
                        <p className="text-2xl font-bold text-slate-900">{insight.value}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={insight.trend.startsWith('+') ? "outline" : "secondary"} 
                               className={insight.trend.startsWith('+') ? "text-green-600" : "text-orange-600"}>
                          {insight.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Optimization Recommendations</CardTitle>
                  <CardDescription>AI-powered suggestions for improvement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">Schedule Optimization</h4>
                        <p className="text-sm text-blue-600 mt-1">
                          New Holland Planter shows 65% utilization. Consider scheduling more planting operations or reallocating to other tasks.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Efficiency Improvement</h4>
                        <p className="text-sm text-green-600 mt-1">
                          Peak efficiency observed during 8 AM - 6 PM. Consider concentrating heavy operations during these hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Maintenance Planning</h4>
                        <p className="text-sm text-yellow-600 mt-1">
                          Schedule maintenance during low-utilization periods to minimize downtime impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-purple-800">Fuel Optimization</h4>
                        <p className="text-sm text-purple-600 mt-1">
                          Kubota Loader shows best fuel efficiency at 18.2 L/h. Apply similar operational patterns to other equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}