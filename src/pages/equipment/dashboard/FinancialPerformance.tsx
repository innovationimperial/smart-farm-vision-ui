import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { DollarSign, TrendingUp, TrendingDown, Calculator, FileText, Target } from "lucide-react"

const costData = [
  { month: "Jan", maintenance: 12500, fuel: 8500, depreciation: 15000, insurance: 2500 },
  { month: "Feb", maintenance: 15800, fuel: 9200, depreciation: 15000, insurance: 2500 },
  { month: "Mar", maintenance: 11200, fuel: 10800, depreciation: 15000, insurance: 2500 },
  { month: "Apr", maintenance: 18500, fuel: 11500, depreciation: 15000, insurance: 2500 },
  { month: "May", maintenance: 13800, fuel: 12200, depreciation: 15000, insurance: 2500 },
  { month: "Jun", maintenance: 16200, fuel: 13800, depreciation: 15000, insurance: 2500 },
]

const roiData = [
  { month: "Jan", revenue: 45000, costs: 38500, roi: 16.9 },
  { month: "Feb", revenue: 52000, costs: 42500, roi: 22.4 },
  { month: "Mar", revenue: 48000, costs: 39500, roi: 21.5 },
  { month: "Apr", revenue: 55000, costs: 47500, roi: 15.8 },
  { month: "May", revenue: 62000, costs: 44500, roi: 39.3 },
  { month: "Jun", revenue: 68000, costs: 48000, roi: 41.7 },
]

const equipmentValuation = [
  { id: "EQ001", name: "John Deere Tractor 6120M", purchasePrice: 125000, currentValue: 98000, depreciation: 27000, utilizationValue: 105000 },
  { id: "EQ002", name: "Case IH Combine 8250", purchasePrice: 450000, currentValue: 380000, depreciation: 70000, utilizationValue: 420000 },
  { id: "EQ003", name: "New Holland Planter", purchasePrice: 85000, currentValue: 72000, depreciation: 13000, utilizationValue: 78000 },
  { id: "EQ004", name: "Kubota Loader L3901", purchasePrice: 65000, currentValue: 55000, depreciation: 10000, utilizationValue: 62000 },
]

const costBreakdown = [
  { name: "Maintenance", value: 35, color: "#ff7043" },
  { name: "Fuel", value: 28, color: "#ffc107" },
  { name: "Depreciation", value: 25, color: "#2196f3" },
  { name: "Insurance", value: 12, color: "#4caf50" },
]

export default function FinancialPerformance() {
  const totalCosts = costData[costData.length - 1].maintenance + costData[costData.length - 1].fuel + 
                    costData[costData.length - 1].depreciation + costData[costData.length - 1].insurance
  const totalRevenue = roiData[roiData.length - 1].revenue
  const currentROI = roiData[roiData.length - 1].roi
  const totalAssetValue = equipmentValuation.reduce((sum, eq) => sum + eq.currentValue, 0)

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-orange-600" />
              Financial Performance Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Costs, ROI, depreciation tracking, and asset valuation</p>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Costs (MTD)</p>
                  <h3 className="text-2xl font-bold text-slate-800">${totalCosts.toLocaleString()}</h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-red-500 mr-1" />
                    <span className="text-xs text-red-500">+8.5% vs last month</span>
                  </div>
                </div>
                <Calculator className="h-5 w-5 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Revenue (MTD)</p>
                  <h3 className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+12.3% vs last month</span>
                  </div>
                </div>
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">ROI</p>
                  <h3 className="text-2xl font-bold text-blue-600">{currentROI}%</h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-blue-500 mr-1" />
                    <span className="text-xs text-blue-500">+5.2% vs last month</span>
                  </div>
                </div>
                <Target className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-600">Asset Value</p>
                  <h3 className="text-2xl font-bold text-purple-600">${totalAssetValue.toLocaleString()}</h3>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 text-orange-500 mr-1" />
                    <span className="text-xs text-orange-500">-2.1% depreciation</span>
                  </div>
                </div>
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="costs" className="space-y-4">
          <TabsList>
            <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
            <TabsTrigger value="roi">ROI Tracking</TabsTrigger>
            <TabsTrigger value="valuation">Asset Valuation</TabsTrigger>
            <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="costs">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Monthly Cost Trends</CardTitle>
                <CardDescription>Equipment operational costs by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                    <Bar dataKey="maintenance" stackId="costs" fill="#ff7043" name="Maintenance" />
                    <Bar dataKey="fuel" stackId="costs" fill="#ffc107" name="Fuel" />
                    <Bar dataKey="depreciation" stackId="costs" fill="#2196f3" name="Depreciation" />
                    <Bar dataKey="insurance" stackId="costs" fill="#4caf50" name="Insurance" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roi">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Return on Investment</CardTitle>
                <CardDescription>Revenue vs costs and ROI percentage over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={roiData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === "roi" ? `${value}%` : `$${value.toLocaleString()}`, 
                        name === "roi" ? "ROI" : name === "revenue" ? "Revenue" : "Costs"
                      ]} 
                    />
                    <Bar yAxisId="left" dataKey="revenue" fill="#4caf50" name="revenue" />
                    <Bar yAxisId="left" dataKey="costs" fill="#f44336" name="costs" />
                    <Line yAxisId="right" type="monotone" dataKey="roi" stroke="#2196f3" strokeWidth={3} name="roi" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="valuation">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Equipment Asset Valuation</CardTitle>
                <CardDescription>Current market value and depreciation analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Purchase Price</TableHead>
                      <TableHead>Current Value</TableHead>
                      <TableHead>Depreciation</TableHead>
                      <TableHead>Utilization Value</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipmentValuation.map((equipment) => {
                      const depreciationPercent = ((equipment.depreciation / equipment.purchasePrice) * 100).toFixed(1)
                      const valueRetention = ((equipment.currentValue / equipment.purchasePrice) * 100).toFixed(1)
                      
                      return (
                        <TableRow key={equipment.id}>
                          <TableCell className="font-medium">{equipment.name}</TableCell>
                          <TableCell>${equipment.purchasePrice.toLocaleString()}</TableCell>
                          <TableCell>${equipment.currentValue.toLocaleString()}</TableCell>
                          <TableCell>
                            <span className="text-red-600">-${equipment.depreciation.toLocaleString()}</span>
                            <span className="text-xs text-slate-500 block">(-{depreciationPercent}%)</span>
                          </TableCell>
                          <TableCell>${equipment.utilizationValue.toLocaleString()}</TableCell>
                          <TableCell>
                            {parseFloat(valueRetention) > 75 ? (
                              <Badge variant="outline" className="text-green-600">Excellent</Badge>
                            ) : parseFloat(valueRetention) > 60 ? (
                              <Badge variant="secondary">Good</Badge>
                            ) : (
                              <Badge variant="destructive">Fair</Badge>
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

          <TabsContent value="breakdown">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Cost Distribution</CardTitle>
                  <CardDescription>Breakdown of operational costs by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={costBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {costBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, ""]} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Cost Efficiency Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600">Cost per Operating Hour</span>
                      <span className="text-sm font-medium">$45.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Target: $42.00</span>
                      <Badge variant="destructive">Over Target</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600">Maintenance Cost Ratio</span>
                      <span className="text-sm font-medium">12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Industry Average: 15%</span>
                      <Badge variant="outline" className="text-green-600">Below Average</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600">Asset Utilization Rate</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Target: 80%</span>
                      <Badge variant="secondary">Near Target</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-600">Equipment ROI</span>
                      <span className="text-sm font-medium">18.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Target: 15%</span>
                      <Badge variant="outline" className="text-green-600">Above Target</Badge>
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