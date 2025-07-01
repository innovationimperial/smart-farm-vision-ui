
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, PieChart as PieChartIcon, Activity, Target, Database, FileSpreadsheet, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const Analytics = () => {
  const productionData = [
    { month: "Jan", crops: 1200, livestock: 800, revenue: 45000 },
    { month: "Feb", crops: 1350, livestock: 820, revenue: 48000 },
    { month: "Mar", crops: 1500, livestock: 850, revenue: 52000 },
    { month: "Apr", crops: 1650, livestock: 900, revenue: 55000 },
    { month: "May", crops: 1800, livestock: 950, revenue: 58000 },
    { month: "Jun", crops: 1950, livestock: 980, revenue: 62000 }
  ];

  const expenseBreakdown = [
    { name: "Feed", value: 35, color: "#3b82f6" },
    { name: "Labor", value: 25, color: "#10b981" },
    { name: "Equipment", value: 20, color: "#f59e0b" },
    { name: "Utilities", value: 12, color: "#ef4444" },
    { name: "Other", value: 8, color: "#8b5cf6" }
  ];

  const profitabilityData = [
    { quarter: "Q1", profit: 15000, margin: 12.5 },
    { quarter: "Q2", profit: 18000, margin: 14.2 },
    { quarter: "Q3", profit: 22000, margin: 16.8 },
    { quarter: "Q4", profit: 25000, margin: 18.5 }
  ];

  const analyticsModules = [
    {
      title: "Production Analytics",
      description: "Analyze crop and livestock production trends",
      icon: BarChart3,
      href: "/analytics/production",
      color: "bg-blue-500",
      status: "Active"
    },
    {
      title: "Financial Analytics",
      description: "Track revenue, expenses, and profitability",
      icon: TrendingUp,
      href: "/analytics/financial",
      color: "bg-green-500",
      status: "Active"
    },
    {
      title: "Operational Analytics",
      description: "Monitor efficiency and resource utilization",
      icon: Activity,
      href: "/analytics/operational",
      color: "bg-purple-500",
      status: "Active"
    },
    {
      title: "Market Analytics",
      description: "Analyze market trends and pricing",
      icon: PieChartIcon,
      href: "/analytics/market",
      color: "bg-orange-500",
      status: "Active"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes",
      icon: Brain,
      href: "/analytics/predictive",
      color: "bg-indigo-500",
      status: "Beta"
    },
    {
      title: "Custom Reports",
      description: "Create custom analytics reports",
      icon: FileSpreadsheet,
      href: "/analytics/reports",
      color: "bg-red-500",
      status: "Active"
    }
  ];

  const keyMetrics = [
    {
      title: "YTD Revenue Growth",
      value: "+23.5%",
      change: "+2.1%",
      positive: true
    },
    {
      title: "Production Efficiency",
      value: "94.2%",
      change: "+1.8%",
      positive: true
    },
    {
      title: "Cost per Unit",
      value: "$2.34",
      change: "-0.15%",
      positive: true
    },
    {
      title: "Profit Margin",
      value: "16.8%",
      change: "+3.2%",
      positive: true
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Comprehensive insights into your farm operations</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p className={`text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change} from last month
                    </p>
                  </div>
                  <TrendingUp className={`h-8 w-8 ${metric.positive ? 'text-green-600' : 'text-red-600'}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Production & Revenue Trends</CardTitle>
              <CardDescription>Monthly production output and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={productionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area dataKey="crops" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>Distribution of operational expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quarterly Profitability Analysis</CardTitle>
            <CardDescription>Profit trends and margin analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={profitabilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="profit" fill="#10b981" name="Profit ($)" />
                <Line yAxisId="right" dataKey="margin" stroke="#f59e0b" name="Margin (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Analytics Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsModules.map((module) => (
            <Link key={module.title} to={module.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${module.color} p-3 rounded-lg`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                      <Badge variant={module.status === 'Beta' ? 'secondary' : 'default'} className="mt-2">
                        {module.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
