
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Sprout, Beef, Calendar, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";

const ProductionAnalytics = () => {
  const [timeRange, setTimeRange] = useState("6months");
  const [productionType, setProductionType] = useState("all");

  const productionData = [
    { month: "Jan", crops: 1200, livestock: 800, target: 1800, efficiency: 85 },
    { month: "Feb", crops: 1350, livestock: 820, target: 1850, efficiency: 88 },
    { month: "Mar", crops: 1500, livestock: 850, target: 1900, efficiency: 91 },
    { month: "Apr", crops: 1650, livestock: 900, target: 1950, efficiency: 94 },
    { month: "May", crops: 1800, livestock: 950, target: 2000, efficiency: 96 },
    { month: "Jun", crops: 1950, livestock: 980, target: 2050, efficiency: 98 }
  ];

  const cropAnalytics = [
    { crop: "Corn", yield: 8500, target: 8000, efficiency: 106, trend: "+12%" },
    { crop: "Soybeans", yield: 3200, target: 3000, efficiency: 107, trend: "+8%" },
    { crop: "Wheat", yield: 2800, target: 3000, efficiency: 93, trend: "-3%" },
    { crop: "Tomatoes", yield: 15000, target: 14000, efficiency: 107, trend: "+15%" }
  ];

  const livestockAnalytics = [
    { type: "Dairy Cattle", production: 2500, target: 2400, efficiency: 104, trend: "+6%" },
    { type: "Beef Cattle", production: 1800, target: 1750, efficiency: 103, trend: "+4%" },
    { type: "Chickens", production: 12000, target: 11500, efficiency: 104, trend: "+8%" },
    { type: "Pigs", production: 850, target: 800, efficiency: 106, trend: "+12%" }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Production Analytics</h1>
            <p className="text-gray-600">Analyze crop and livestock production performance</p>
          </div>
          <div className="flex space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">3 Months</SelectItem>
                <SelectItem value="6months">6 Months</SelectItem>
                <SelectItem value="1year">1 Year</SelectItem>
              </SelectContent>
            </Select>
            <Select value={productionType} onValueChange={setProductionType}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="crops">Crops Only</SelectItem>
                <SelectItem value="livestock">Livestock Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Production</p>
                  <p className="text-3xl font-bold">2,930 units</p>
                  <p className="text-sm text-green-600">+8.5% vs target</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Efficiency Rate</p>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-green-600">+2% from last month</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Crop Yield</p>
                  <p className="text-3xl font-bold">1,950 tons</p>
                  <p className="text-sm text-green-600">+12% vs last year</p>
                </div>
                <Sprout className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Livestock Output</p>
                  <p className="text-3xl font-bold">980 units</p>
                  <p className="text-sm text-green-600">+6% vs target</p>
                </div>
                <Beef className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Production Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Production Trends vs Targets</CardTitle>
            <CardDescription>Monthly production performance against targets</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area dataKey="target" stackId="1" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} name="Target" />
                <Area dataKey="crops" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Crops" />
                <Area dataKey="livestock" stackId="2" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Livestock" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Production Analytics Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Crop Performance</CardTitle>
              <CardDescription>Individual crop yield analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cropAnalytics.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Sprout className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-medium">{crop.crop}</h4>
                        <p className="text-sm text-gray-500">{crop.yield} units produced</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={crop.efficiency >= 100 ? 'default' : 'secondary'}>
                        {crop.efficiency}% efficiency
                      </Badge>
                      <p className={`text-sm ${crop.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {crop.trend}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Livestock Performance</CardTitle>
              <CardDescription>Individual livestock production analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {livestockAnalytics.map((livestock, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Beef className="h-5 w-5 text-orange-600" />
                      <div>
                        <h4 className="font-medium">{livestock.type}</h4>
                        <p className="text-sm text-gray-500">{livestock.production} units produced</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={livestock.efficiency >= 100 ? 'default' : 'secondary'}>
                        {livestock.efficiency}% efficiency
                      </Badge>
                      <p className={`text-sm ${livestock.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {livestock.trend}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Efficiency Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Production Efficiency Trends</CardTitle>
            <CardDescription>Monthly efficiency performance tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProductionAnalytics;
