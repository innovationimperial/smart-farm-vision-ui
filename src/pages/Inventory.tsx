
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Plus, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign, BarChart3 } from "lucide-react"
import { NavLink } from "react-router-dom"

const inventoryCategories = [
  {
    title: "Seeds & Planting Materials",
    description: "Manage seed inventory and planting materials",
    items: [
      { name: "Seed Inventory", href: "/inventory/seeds", icon: Package },
      { name: "Seed Purchase Orders", href: "/inventory/seed-orders", icon: Plus },
      { name: "Seed Quality Testing", href: "/inventory/seed-quality", icon: CheckCircle },
    ]
  },
  {
    title: "Fertilizers & Chemicals",
    description: "Track fertilizers, pesticides, and chemicals",
    items: [
      { name: "Chemical Inventory", href: "/inventory/chemicals", icon: Package },
      { name: "Application Records", href: "/inventory/applications", icon: BarChart3 },
      { name: "Storage Compliance", href: "/inventory/compliance", icon: CheckCircle },
    ]
  },
  {
    title: "Feed & Supplements",
    description: "Manage livestock feed and supplements",
    items: [
      { name: "Feed Inventory", href: "/inventory/feed", icon: Package },
      { name: "Supplement Tracking", href: "/inventory/supplements", icon: Plus },
      { name: "Nutritional Analysis", href: "/inventory/nutrition", icon: BarChart3 },
    ]
  },
  {
    title: "Fuel & Energy",
    description: "Track fuel consumption and energy usage",
    items: [
      { name: "Fuel Inventory", href: "/inventory/fuel", icon: Package },
      { name: "Energy Monitoring", href: "/inventory/energy", icon: TrendingUp },
      { name: "Cost Analysis", href: "/inventory/fuel-costs", icon: DollarSign },
    ]
  },
  {
    title: "Spare Parts & Supplies",
    description: "Manage equipment parts and general supplies",
    items: [
      { name: "Parts Inventory", href: "/inventory/parts", icon: Package },
      { name: "Supply Orders", href: "/inventory/supply-orders", icon: Plus },
      { name: "Vendor Management", href: "/inventory/vendors", icon: CheckCircle },
    ]
  },
  {
    title: "Medical & Veterinary",
    description: "Track medical supplies and medications",
    items: [
      { name: "Medical Inventory", href: "/inventory/medical", icon: Package },
      { name: "Vaccination Supplies", href: "/inventory/vaccines", icon: Plus },
      { name: "Treatment Records", href: "/inventory/treatments", icon: BarChart3 },
    ]
  }
]

const dashboards = [
  {
    title: "Inventory Overview",
    description: "Real-time stock levels and alerts",
    href: "/inventory/dashboard/overview",
    icon: Package,
    color: "bg-blue-500"
  },
  {
    title: "Low Stock Alerts",
    description: "Items requiring immediate attention",
    href: "/inventory/dashboard/alerts",
    icon: AlertTriangle,
    color: "bg-red-500"
  },
  {
    title: "Financial Tracking",
    description: "Inventory value and cost analysis",
    href: "/inventory/dashboard/financial",
    icon: DollarSign,
    color: "bg-green-500"
  },
  {
    title: "Usage Analytics",
    description: "Consumption patterns and trends",
    href: "/inventory/dashboard/analytics",
    icon: BarChart3,
    color: "bg-purple-500"
  }
]

const quickStats = [
  { label: "Total Items", value: "2,847", change: "+156", status: "up" },
  { label: "Low Stock Items", value: "23", change: "-5", status: "down" },
  { label: "Inventory Value", value: "$487K", change: "+8.2%", status: "up" },
  { label: "Monthly Usage", value: "$43K", change: "+2.1%", status: "up" }
]

export default function Inventory() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Package className="w-8 h-8 text-blue-600" />
              Inventory Management
            </h1>
            <p className="text-slate-600 mt-2">Comprehensive inventory tracking and management system</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Quick Add Item
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
                        variant={stat.status === 'down' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  {stat.label === 'Low Stock Items' ? (
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
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Inventory Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboards.map((dashboard, index) => (
              <NavLink key={index} to={dashboard.href}>
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer border-slate-200 hover:border-blue-300">
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

        {/* Inventory Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {inventoryCategories.map((category, index) => (
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
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                    >
                      <item.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
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
