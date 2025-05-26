
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, Plus, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign, BarChart3 } from "lucide-react"
import { NavLink } from "react-router-dom"

const equipmentCategories = [
  {
    title: "Equipment & Inventory",
    description: "Register and manage equipment inventory",
    items: [
      { name: "Equipment Registration", href: "/equipment/registration", icon: Plus },
      { name: "Condition Assessment", href: "/equipment/condition", icon: CheckCircle },
      { name: "Equipment Specifications", href: "/equipment/specifications", icon: Wrench },
    ]
  },
  {
    title: "Maintenance Management",
    description: "Schedule and track maintenance activities",
    items: [
      { name: "Maintenance Schedule", href: "/equipment/maintenance/schedule", icon: Clock },
      { name: "Work Orders", href: "/equipment/maintenance/work-orders", icon: Wrench },
      { name: "Daily Inspections", href: "/equipment/maintenance/inspections", icon: CheckCircle },
    ]
  },
  {
    title: "Operations",
    description: "Track equipment usage and operations",
    items: [
      { name: "Usage Logs", href: "/equipment/operations/usage", icon: BarChart3 },
      { name: "Equipment Assignment", href: "/equipment/operations/assignment", icon: CheckCircle },
      { name: "Transfer & Movement", href: "/equipment/operations/transfer", icon: TrendingUp },
    ]
  },
  {
    title: "Financial Management",
    description: "Manage equipment costs and valuation",
    items: [
      { name: "Purchase Requests", href: "/equipment/financial/purchase", icon: DollarSign },
      { name: "Cost Tracking", href: "/equipment/financial/costs", icon: BarChart3 },
      { name: "Equipment Valuation", href: "/equipment/financial/valuation", icon: TrendingUp },
    ]
  },
  {
    title: "Safety & Compliance",
    description: "Ensure safety standards and compliance",
    items: [
      { name: "Safety Inspections", href: "/equipment/safety/inspections", icon: CheckCircle },
      { name: "Operator Certification", href: "/equipment/safety/certification", icon: CheckCircle },
    ]
  },
  {
    title: "Parts Management",
    description: "Manage spare parts and inventory",
    items: [
      { name: "Parts Inventory", href: "/equipment/parts/inventory", icon: Wrench },
      { name: "Parts Requisitions", href: "/equipment/parts/requisitions", icon: Plus },
    ]
  }
]

const dashboards = [
  {
    title: "Equipment Status",
    description: "Real-time fleet tracking, availability, alerts",
    href: "/equipment/dashboard/status",
    icon: Wrench,
    color: "bg-blue-500"
  },
  {
    title: "Maintenance Dashboard",
    description: "Schedules, work orders, parts inventory",
    href: "/equipment/dashboard/maintenance",
    icon: Clock,
    color: "bg-orange-500"
  },
  {
    title: "Financial Performance",
    description: "Costs, ROI, depreciation tracking",
    href: "/equipment/dashboard/financial",
    icon: DollarSign,
    color: "bg-green-500"
  },
  {
    title: "Utilization Analytics",
    description: "Usage rates, efficiency optimization",
    href: "/equipment/dashboard/utilization",
    icon: BarChart3,
    color: "bg-purple-500"
  }
]

const quickStats = [
  { label: "Total Equipment", value: "156", change: "+8", status: "up" },
  { label: "Operational", value: "142", change: "91%", status: "stable" },
  { label: "Maintenance Due", value: "12", change: "-3", status: "down" },
  { label: "Out of Service", value: "2", change: "+1", status: "up" }
]

export default function Equipment() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-600" />
              Equipment Management
            </h1>
            <p className="text-slate-600 mt-2">Comprehensive equipment and maintenance management system</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="mr-2 h-4 w-4" />
              Quick Add Equipment
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                    <div className="flex items-center mt-1">
                      <Badge 
                        variant={stat.status === 'up' ? 'destructive' : stat.status === 'down' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  {stat.status === 'up' && stat.label === 'Out of Service' ? (
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboards */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Equipment Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboards.map((dashboard, index) => (
              <NavLink key={index} to={dashboard.href}>
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-slate-200 hover:border-orange-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${dashboard.color}`}>
                        <dashboard.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{dashboard.title}</h3>
                        <p className="text-sm text-slate-600">{dashboard.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {equipmentCategories.map((category, index) => (
            <Card key={index} className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-800">{category.title}</CardTitle>
                <CardDescription className="text-slate-600">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <NavLink
                      key={itemIndex}
                      to={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 group"
                    >
                      <item.icon className="w-5 h-5 text-orange-600 group-hover:text-orange-700" />
                      <span className="text-slate-700 group-hover:text-slate-800 font-medium">
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
