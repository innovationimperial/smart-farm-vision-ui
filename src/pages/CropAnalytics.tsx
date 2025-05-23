
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { TrendingUp, TrendingDown, Calendar, Download, Filter, BarChart3 } from "lucide-react"
import { Link } from "react-router-dom"

const yieldData = [
  { month: 'Jan', corn: 45, soybeans: 38, wheat: 42 },
  { month: 'Feb', corn: 52, soybeans: 41, wheat: 45 },
  { month: 'Mar', corn: 48, soybeans: 44, wheat: 48 },
  { month: 'Apr', corn: 61, soybeans: 47, wheat: 52 },
  { month: 'May', corn: 55, soybeans: 49, wheat: 49 },
  { month: 'Jun', corn: 67, soybeans: 52, wheat: 55 },
  { month: 'Jul', corn: 70, soybeans: 55, wheat: 58 },
  { month: 'Aug', corn: 68, soybeans: 53, wheat: 56 },
  { month: 'Sep', corn: 64, soybeans: 50, wheat: 53 },
  { month: 'Oct', corn: 59, soybeans: 48, wheat: 50 },
  { month: 'Nov', corn: 54, soybeans: 45, wheat: 47 },
  { month: 'Dec', corn: 49, soybeans: 42, wheat: 44 }
]

const cropDistribution = [
  { name: 'Corn', value: 450, color: '#FFD54F' },
  { name: 'Soybeans', value: 320, color: '#4CAF50' },
  { name: 'Wheat', value: 280, color: '#FF7043' },
  { name: 'Vegetables', value: 200, color: '#2196F3' }
]

const profitabilityData = [
  { crop: 'Corn', revenue: 85000, costs: 62000, profit: 23000 },
  { crop: 'Soybeans', revenue: 72000, costs: 54000, profit: 18000 },
  { crop: 'Wheat', revenue: 68000, costs: 51000, profit: 17000 },
  { crop: 'Vegetables', revenue: 95000, costs: 73000, profit: 22000 }
]

const weatherImpactData = [
  { month: 'Jan', temperature: 32, rainfall: 2.1, yield_impact: 5 },
  { month: 'Feb', temperature: 38, rainfall: 1.8, yield_impact: 3 },
  { month: 'Mar', temperature: 48, rainfall: 2.5, yield_impact: 8 },
  { month: 'Apr', temperature: 58, rainfall: 3.2, yield_impact: 12 },
  { month: 'May', temperature: 68, rainfall: 4.1, yield_impact: 15 },
  { month: 'Jun', temperature: 78, rainfall: 3.8, yield_impact: 18 },
  { month: 'Jul', temperature: 82, rainfall: 2.9, yield_impact: 20 },
  { month: 'Aug', temperature: 80, rainfall: 3.1, yield_impact: 19 },
  { month: 'Sep', temperature: 72, rainfall: 2.7, yield_impact: 16 },
  { month: 'Oct', temperature: 60, rainfall: 2.3, yield_impact: 11 },
  { month: 'Nov', temperature: 46, rainfall: 2.0, yield_impact: 7 },
  { month: 'Dec', temperature: 35, rainfall: 1.9, yield_impact: 4 }
]

const chartConfig = {
  corn: { label: "Corn", color: "#FFD54F" },
  soybeans: { label: "Soybeans", color: "#4CAF50" },
  wheat: { label: "Wheat", color: "#FF7043" },
  vegetables: { label: "Vegetables", color: "#2196F3" },
  revenue: { label: "Revenue", color: "#4CAF50" },
  costs: { label: "Costs", color: "#FF7043" },
  profit: { label: "Profit", color: "#2196F3" },
  temperature: { label: "Temperature (°F)", color: "#FF7043" },
  rainfall: { label: "Rainfall (inches)", color: "#2196F3" },
  yield_impact: { label: "Yield Impact (%)", color: "#4CAF50" }
}

export default function CropAnalytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Crop Analytics</h1>
            <p className="text-gray-600 mt-1">Comprehensive insights into your farm performance</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Link to="/crops">
              <Button className="bg-farm-green hover:bg-farm-green/90">
                <BarChart3 className="w-4 h-4 mr-2" />
                Back to Crops
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Yield</p>
                  <p className="text-2xl font-bold text-gray-900">1,250</p>
                  <p className="text-xs text-gray-500">tons this season</p>
                </div>
                <div className="flex items-center text-growth-green">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+12%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">$320K</p>
                  <p className="text-xs text-gray-500">this quarter</p>
                </div>
                <div className="flex items-center text-growth-green">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+8%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Profit Margin</p>
                  <p className="text-2xl font-bold text-gray-900">25.8%</p>
                  <p className="text-xs text-gray-500">vs industry avg</p>
                </div>
                <div className="flex items-center text-red-500">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">-2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Fields</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-xs text-gray-500">across 1,250 acres</p>
                </div>
                <div className="flex items-center text-growth-green">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Yield Trends */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Yield Trends by Crop</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="corn" stroke="#FFD54F" strokeWidth={3} />
                    <Line type="monotone" dataKey="soybeans" stroke="#4CAF50" strokeWidth={3} />
                    <Line type="monotone" dataKey="wheat" stroke="#FF7043" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Crop Distribution */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Crop Distribution (Acres)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cropDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {cropDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Profitability Analysis */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Profitability by Crop</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={profitabilityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="crop" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="revenue" fill="#4CAF50" />
                    <Bar dataKey="costs" fill="#FF7043" />
                    <Bar dataKey="profit" fill="#2196F3" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Weather Impact */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Weather Impact on Yield</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weatherImpactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Area type="monotone" dataKey="temperature" stackId="1" stroke="#FF7043" fill="#FF7043" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="rainfall" stackId="2" stroke="#2196F3" fill="#2196F3" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="yield_impact" stackId="3" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Additional Analytics Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Top Performing Fields</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { field: "North Field A", crop: "Corn", yield: "185 bu/acre", efficiency: "94%" },
                  { field: "East Field B", crop: "Soybeans", yield: "68 bu/acre", efficiency: "91%" },
                  { field: "South Field C", crop: "Wheat", yield: "78 bu/acre", efficiency: "89%" },
                  { field: "West Field D", crop: "Vegetables", yield: "12 tons/acre", efficiency: "87%" }
                ].map((field, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{field.field}</div>
                      <div className="text-sm text-gray-600">{field.crop}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-gray-900">{field.yield}</div>
                      <div className="text-sm text-growth-green">{field.efficiency}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Resource Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { resource: "Water Usage", current: "85%", target: "90%", status: "good" },
                  { resource: "Fertilizer Efficiency", current: "78%", target: "85%", status: "warning" },
                  { resource: "Fuel Consumption", current: "92%", target: "88%", status: "excellent" },
                  { resource: "Labor Productivity", current: "88%", target: "85%", status: "excellent" }
                ].map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{resource.resource}</div>
                      <div className="text-sm text-gray-600">Target: {resource.target}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-gray-900">{resource.current}</div>
                      <div className={`text-sm ${
                        resource.status === 'excellent' ? 'text-growth-green' :
                        resource.status === 'good' ? 'text-ocean-blue' : 'text-harvest-orange'
                      }`}>
                        {resource.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
