
import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis } from "recharts"
import { Calculator, Download, Calendar, ArrowDownRight, ArrowUpRight, ChevronDown, Filter, Search, TrendingUp, ArrowRight } from "lucide-react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

// Sample data for charts and metrics
const monthlyProfitData = [
  { month: "Jan", revenue: 12500, expenses: 8200, profit: 4300, 
    costPerDay: 8.8, revenuePerAnimal: 350, roi: 0.52 },
  { month: "Feb", revenue: 13200, expenses: 7800, profit: 5400, 
    costPerDay: 9.3, revenuePerAnimal: 370, roi: 0.69 },
  { month: "Mar", revenue: 14800, expenses: 8500, profit: 6300, 
    costPerDay: 9.1, revenuePerAnimal: 415, roi: 0.74 },
  { month: "Apr", revenue: 15300, expenses: 9100, profit: 6200, 
    costPerDay: 10.1, revenuePerAnimal: 430, roi: 0.68 },
  { month: "May", revenue: 16700, expenses: 9800, profit: 6900, 
    costPerDay: 10.5, revenuePerAnimal: 468, roi: 0.70 },
  { month: "Jun", revenue: 18200, expenses: 10500, profit: 7700, 
    costPerDay: 11.2, revenuePerAnimal: 510, roi: 0.73 }
]

const categoryProfitData = [
  { name: "Dairy", value: 45, profit: 12500, cost: 7200, roi: 1.74 },
  { name: "Beef Cattle", value: 30, profit: 8400, cost: 5600, roi: 1.50 },
  { name: "Poultry", value: 15, profit: 4200, cost: 2800, roi: 1.50 },
  { name: "Sheep", value: 10, profit: 2800, cost: 2100, roi: 1.33 }
]

const breakEvenData = [
  { name: "Fixed Costs", value: 35000 },
  { name: "Variable Costs", value: 48000 },
  { name: "Revenue", value: 95000 }
]

const comparativeMetrics = [
  { metric: "Cost per Animal/Day", farm: "$10.50", industry: "$12.30", difference: "+15%", positive: true },
  { metric: "Revenue per Animal", farm: "$468", industry: "$425", difference: "+10%", positive: true },
  { metric: "Profit Margin", farm: "41%", industry: "36%", difference: "+5%", positive: true },
  { metric: "Feed Conversion Ratio", farm: "4.2", industry: "4.5", difference: "+7%", positive: true },
  { metric: "Return on Investment", farm: "70%", industry: "62%", difference: "+8%", positive: true },
  { metric: "Labor Cost Ratio", farm: "18%", industry: "15%", difference: "-3%", positive: false }
]

export default function ProfitabilityAnalysis() {
  const { toast } = useToast()
  const [timePeriod, setTimePeriod] = useState("6M")
  const [animalType, setAnimalType] = useState("All")
  
  function handleExport() {
    toast({
      title: "Exporting Analysis",
      description: "Your profitability analysis is being exported to PDF.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profitability Analysis</h1>
            <p className="text-gray-600 mt-2">Detailed financial analysis and performance metrics</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Select value={timePeriod} onValueChange={setTimePeriod}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1M">Last Month</SelectItem>
                <SelectItem value="3M">Last 3 Months</SelectItem>
                <SelectItem value="6M">Last 6 Months</SelectItem>
                <SelectItem value="1Y">Last Year</SelectItem>
                <SelectItem value="ALL">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Select value={animalType} onValueChange={setAnimalType}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Animal Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Animals</SelectItem>
                <SelectItem value="Dairy">Dairy</SelectItem>
                <SelectItem value="Beef">Beef Cattle</SelectItem>
                <SelectItem value="Poultry">Poultry</SelectItem>
                <SelectItem value="Sheep">Sheep</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
            <Button onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Analysis
            </Button>
          </div>
        </div>
        
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Cost per Animal per Day</p>
                <div className="flex items-baseline justify-between mt-2">
                  <h3 className="text-3xl font-bold">$10.50</h3>
                  <div className="flex items-center text-green-600">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">-5.2% from last period</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Revenue per Animal</p>
                <div className="flex items-baseline justify-between mt-2">
                  <h3 className="text-3xl font-bold">$468.00</h3>
                  <div className="flex items-center text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+8.8% from last period</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Return on Investment (ROI)</p>
                <div className="flex items-baseline justify-between mt-2">
                  <h3 className="text-3xl font-bold">70%</h3>
                  <div className="flex items-center text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">+2.9% from last period</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profit Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Profit Analysis</CardTitle>
            <CardDescription>Revenue, expenses, and profit trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyProfitData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => `$${value}`}
                    labelFormatter={(label) => `${label} 2025`}
                  />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#10b981" />
                  <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
                  <Bar dataKey="profit" name="Profit" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Financial Analysis Tabs */}
        <Tabs defaultValue="by-category">
          <TabsList className="grid grid-cols-3 w-[400px]">
            <TabsTrigger value="by-category">By Category</TabsTrigger>
            <TabsTrigger value="profitability">Metrics</TabsTrigger>
            <TabsTrigger value="break-even">Break-Even</TabsTrigger>
          </TabsList>
          
          <TabsContent value="by-category">
            <Card>
              <CardHeader>
                <CardTitle>Profitability by Animal Category</CardTitle>
                <CardDescription>Comparing profitability across different livestock types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryProfitData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {categoryProfitData.map((entry, index) => (
                            <Sector 
                              key={`cell-${index}`} 
                              fill={['#3b82f6', '#10b981', '#f59e0b', '#6366f1'][index % 4]} 
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-medium border-b pb-2">
                      <span>Category</span>
                      <span className="text-right">Profit</span>
                      <span className="text-right">Costs</span>
                      <span className="text-right">ROI</span>
                    </div>
                    {categoryProfitData.map((item) => (
                      <div key={item.name} className="flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-green-600">${item.profit}</span>
                        <span className="text-red-600">${item.cost}</span>
                        <span className={item.roi > 1.5 ? "text-green-600" : "text-blue-600"}>
                          {item.roi.toFixed(2)}x
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profitability">
            <Card>
              <CardHeader>
                <CardTitle>Comparative Performance Metrics</CardTitle>
                <CardDescription>Farm metrics compared to industry averages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 bg-slate-50 p-3 text-sm font-medium text-slate-600">
                    <div>Metric</div>
                    <div>Your Farm</div>
                    <div>Industry Average</div>
                    <div>Difference</div>
                  </div>
                  <div className="divide-y">
                    {comparativeMetrics.map((metric) => (
                      <div key={metric.metric} className="grid grid-cols-4 p-3 text-sm">
                        <div className="font-medium">{metric.metric}</div>
                        <div>{metric.farm}</div>
                        <div>{metric.industry}</div>
                        <div className={metric.positive ? "text-green-600" : "text-red-600"}>
                          {metric.difference}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-500">
                    * Industry averages based on regional data for farms of similar size and type.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="break-even">
            <Card>
              <CardHeader>
                <CardTitle>Break-Even Analysis</CardTitle>
                <CardDescription>Understanding your farm's financial equilibrium point</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={breakEvenData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip 
                          formatter={(value) => `$${value.toLocaleString()}`}
                        />
                        <Legend />
                        <Bar dataKey="value" name="Amount ($)" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-2">Break-Even Point</h4>
                        <p className="text-sm text-gray-600 mb-4">Based on current costs and revenue structure</p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Break-Even Units:</span>
                            <span className="font-medium">132 animals</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Break-Even Revenue:</span>
                            <span className="font-medium">$61,200</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Current Status:</span>
                            <span className="text-green-600 font-medium">Above Break-Even</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Safety Margin:</span>
                            <span className="text-green-600 font-medium">+35.6%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Need detailed analysis?</h4>
                          <p className="text-sm text-gray-600">Generate a comprehensive break-even report</p>
                        </div>
                        <Button>
                          Generate Report
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* ROI Trends */}
        <Card>
          <CardHeader>
            <CardTitle>ROI Trend Analysis</CardTitle>
            <CardDescription>Return on investment over the selected time period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyProfitData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 'dataMax + 0.1']} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                  <Tooltip 
                    formatter={(value) => `${(value * 100).toFixed(1)}%`}
                    labelFormatter={(label) => `${label} 2025`}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="roi" name="ROI" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
