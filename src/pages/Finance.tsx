
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, FileText, BarChart3, PieChart, Calculator, Receipt, Wallet, Building, Users, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const Finance = () => {
  const quickStats = [
    { title: "Current Cash", amount: "$45,280", change: "+12.5%", trend: "up", icon: Wallet },
    { title: "Monthly Revenue", amount: "$18,420", change: "-3.2%", trend: "down", icon: TrendingUp },
    { title: "YTD Profit", amount: "$127,350", change: "+8.7%", trend: "up", icon: DollarSign },
    { title: "Accounts Receivable", amount: "$12,840", change: "0%", trend: "neutral", icon: FileText },
  ];

  const financeModules = [
    {
      title: "Chart of Accounts",
      description: "Manage your farm's financial structure",
      icon: Building,
      color: "bg-blue-500",
      link: "/finance/chart-of-accounts"
    },
    {
      title: "Expense Management",
      description: "Track and categorize farm expenses",
      icon: Receipt,
      color: "bg-red-500",
      link: "/finance/expenses"
    },
    {
      title: "Revenue & Sales",
      description: "Record crop and livestock sales",
      icon: DollarSign,
      color: "bg-green-500",
      link: "/finance/revenue"
    },
    {
      title: "Invoicing",
      description: "Create and manage customer invoices",
      icon: FileText,
      color: "bg-purple-500",
      link: "/finance/invoicing"
    },
    {
      title: "Budget Planning",
      description: "Plan and track farm budgets",
      icon: Calculator,
      color: "bg-orange-500",
      link: "/finance/budget"
    },
    {
      title: "Financial Reports",
      description: "Profit & Loss, Balance Sheet, Cash Flow",
      icon: BarChart3,
      color: "bg-indigo-500",
      link: "/finance/reports"
    },
    {
      title: "Bank Reconciliation",
      description: "Reconcile bank statements",
      icon: CreditCard,
      color: "bg-teal-500",
      link: "/finance/reconciliation"
    },
    {
      title: "Analytics & Insights",
      description: "Financial KPIs and trends",
      icon: PieChart,
      color: "bg-pink-500",
      link: "/finance/analytics"
    }
  ];

  const recentTransactions = [
    { id: 1, date: "2024-01-15", description: "Fertilizer Purchase", category: "Operating Expenses", amount: -450.00, status: "Paid" },
    { id: 2, date: "2024-01-14", description: "Corn Sales - ABC Grain", category: "Crop Revenue", amount: 8500.00, status: "Received" },
    { id: 3, date: "2024-01-12", description: "Fuel - Field Operations", category: "Operating Expenses", amount: -230.50, status: "Paid" },
    { id: 4, date: "2024-01-10", description: "Equipment Maintenance", category: "Repair & Maintenance", amount: -675.00, status: "Pending" },
  ];

  // Chart data
  const cashFlowData = [
    { month: "Jan", income: 25000, expenses: 18000, net: 7000 },
    { month: "Feb", income: 22000, expenses: 16500, net: 5500 },
    { month: "Mar", income: 28000, expenses: 19200, net: 8800 },
    { month: "Apr", income: 31000, expenses: 22000, net: 9000 },
    { month: "May", income: 35000, expenses: 24500, net: 10500 },
    { month: "Jun", income: 42000, expenses: 28000, net: 14000 },
  ];

  const expenseBreakdown = [
    { name: "Seeds & Planting", value: 18500, color: "#8884d8" },
    { name: "Fertilizers", value: 32400, color: "#82ca9d" },
    { name: "Feed & Supplements", value: 28200, color: "#ffc658" },
    { name: "Fuel & Energy", value: 15800, color: "#ff7c7c" },
    { name: "Labor", value: 22000, color: "#8dd1e1" },
    { name: "Equipment", value: 12500, color: "#d084d0" },
  ];

  const monthlyComparison = [
    { category: "Crop Sales", current: 45000, previous: 38000 },
    { category: "Livestock Sales", current: 28000, previous: 32000 },
    { category: "Operating Costs", current: 35000, previous: 33000 },
    { category: "Equipment Costs", current: 12000, previous: 15000 },
  ];

  const chartConfig = {
    income: { label: "Income", color: "#10b981" },
    expenses: { label: "Expenses", color: "#ef4444" },
    net: { label: "Net Profit", color: "#3b82f6" },
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Farm Finance Management</h1>
          <p className="text-green-100 text-lg">Comprehensive financial management for your farming operation</p>
          <div className="mt-6 flex space-x-4">
            <Button className="bg-white text-green-600 hover:bg-green-50">
              <Receipt className="h-4 w-4 mr-2" />
              Quick Expense
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Reports
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 ${
                  stat.trend === "up" ? "bg-green-500/10" : 
                  stat.trend === "down" ? "bg-red-500/10" : "bg-gray-500/10"
                } rounded-full -mr-8 -mt-8`} />
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                    <div className="flex items-center space-x-1">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : stat.trend === "down" ? (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      ) : null}
                      <span className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-500" : 
                        stat.trend === "down" ? "text-red-500" : "text-gray-500"
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.amount}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cash Flow Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Cash Flow Trend
              </CardTitle>
              <CardDescription>6-month income vs expenses overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <AreaChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="income"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stackId="2"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Expense Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                Expense Breakdown
              </CardTitle>
              <CardDescription>Current year expense distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <RechartsPieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <RechartsPieChart data={expenseBreakdown} cx="50%" cy="50%" outerRadius={100}>
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                  <Legend />
                </RechartsPieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Comparison Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
              Monthly Performance Comparison
            </CardTitle>
            <CardDescription>Current month vs previous month comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <BarChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="current" fill="#3b82f6" name="Current Month" />
                <Bar dataKey="previous" fill="#94a3b8" name="Previous Month" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Finance Modules Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Management Modules</CardTitle>
            <CardDescription>Access all your financial management tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financeModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Link to={module.link} key={index}>
                    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 border-2 hover:border-blue-200">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className={`${module.color} p-4 rounded-full`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activities on your farm</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Date</th>
                    <th className="text-left py-3 font-semibold">Description</th>
                    <th className="text-left py-3 font-semibold">Category</th>
                    <th className="text-right py-3 font-semibold">Amount</th>
                    <th className="text-center py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b hover:bg-gray-50">
                      <td className="py-4">{transaction.date}</td>
                      <td className="py-4 font-medium">{transaction.description}</td>
                      <td className="py-4">
                        <Badge variant="secondary">{transaction.category}</Badge>
                      </td>
                      <td className={`py-4 text-right font-bold ${
                        transaction.amount > 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </td>
                      <td className="py-4 text-center">
                        <Badge variant={transaction.status === "Paid" || transaction.status === "Received" ? "default" : "secondary"}>
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Quick Actions</CardTitle>
            <CardDescription>Frequently used financial operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-green-600 hover:bg-green-700">
                <Receipt className="h-6 w-6" />
                <span>Record Expense</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                <DollarSign className="h-6 w-6" />
                <span>Add Revenue</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                <FileText className="h-6 w-6" />
                <span>Create Invoice</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
                <BarChart3 className="h-6 w-6" />
                <span>View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Finance;
