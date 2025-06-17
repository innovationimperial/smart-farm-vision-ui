
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, FileText, BarChart3, PieChart, Calculator, Receipt, Wallet, Building, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Finance = () => {
  const quickStats = [
    { title: "Current Cash", amount: "$45,280", change: "+12.5%", trend: "up" },
    { title: "Monthly Revenue", amount: "$18,420", change: "-3.2%", trend: "down" },
    { title: "YTD Profit", amount: "$127,350", change: "+8.7%", trend: "up" },
    { title: "Accounts Receivable", amount: "$12,840", change: "0%", trend: "neutral" },
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

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farm Finance Management</h1>
          <p className="text-gray-600 mt-2">Comprehensive financial management for your farming operation</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.amount}</p>
                    <div className="flex items-center mt-1">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : stat.trend === "down" ? (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      ) : null}
                      <span className={`text-sm ml-1 ${
                        stat.trend === "up" ? "text-green-500" : 
                        stat.trend === "down" ? "text-red-500" : "text-gray-500"
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <Wallet className="h-8 w-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Finance Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeModules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Link to={module.link} key={index}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`${module.color} p-3 rounded-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest financial activities on your farm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Description</th>
                    <th className="text-left py-2">Category</th>
                    <th className="text-right py-2">Amount</th>
                    <th className="text-center py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="py-3">{transaction.date}</td>
                      <td className="py-3">{transaction.description}</td>
                      <td className="py-3">{transaction.category}</td>
                      <td className={`py-3 text-right font-medium ${
                        transaction.amount > 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </td>
                      <td className="py-3 text-center">
                        <Badge variant={transaction.status === "Paid" || transaction.status === "Received" ? "default" : "secondary"}>
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline">View All Transactions</Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-16 flex flex-col space-y-2">
                <Receipt className="h-6 w-6" />
                <span>Record Expense</span>
              </Button>
              <Button className="h-16 flex flex-col space-y-2" variant="outline">
                <DollarSign className="h-6 w-6" />
                <span>Add Revenue</span>
              </Button>
              <Button className="h-16 flex flex-col space-y-2" variant="outline">
                <FileText className="h-6 w-6" />
                <span>Create Invoice</span>
              </Button>
              <Button className="h-16 flex flex-col space-y-2" variant="outline">
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
