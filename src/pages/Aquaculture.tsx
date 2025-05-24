
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NavLink } from "react-router-dom"
import { 
  Fish, 
  Droplets, 
  Package, 
  DollarSign, 
  ShieldCheck,
  BarChart3,
  Users,
  Activity,
  TrendingUp,
  Calendar,
  Factory,
  Waves
} from "lucide-react"

const moduleCategories = [
  {
    title: "Infrastructure Management",
    description: "Water bodies, quality monitoring, and system infrastructure",
    icon: Factory,
    color: "bg-blue-500",
    forms: [
      { name: "Water Body Registration", path: "/aquaculture/water-body", description: "Register and manage water bodies for aquaculture" },
      { name: "Water Quality Management", path: "/aquaculture/water-quality", description: "Monitor and manage water quality parameters" },
      { name: "System Infrastructure", path: "/aquaculture/infrastructure", description: "Track aquaculture system components and facilities" }
    ]
  },
  {
    title: "Fish Stock Management",
    description: "Fish stocking, inventory, and health monitoring",
    icon: Fish,
    color: "bg-teal-500",
    forms: [
      { name: "Fish Stocking Registration", path: "/aquaculture/stocking", description: "Register new fish stock and stocking events" },
      { name: "Fish Inventory Tracking", path: "/aquaculture/inventory", description: "Track fish population and biomass" },
      { name: "Fish Health Management", path: "/aquaculture/health", description: "Monitor fish health and disease management" }
    ]
  },
  {
    title: "Feed Management",
    description: "Feed inventory, daily feeding, and conversion analysis",
    icon: Package,
    color: "bg-green-500",
    forms: [
      { name: "Feed Inventory", path: "/aquaculture/feed-inventory", description: "Manage feed stock and procurement" },
      { name: "Daily Feeding Records", path: "/aquaculture/feeding", description: "Record daily feeding activities and amounts" },
      { name: "Feed Conversion Analysis", path: "/aquaculture/feed-conversion", description: "Analyze feed efficiency and conversion rates" }
    ]
  },
  {
    title: "Water Management",
    description: "Water exchange and pond preparation",
    icon: Droplets,
    color: "bg-cyan-500",
    forms: [
      { name: "Water Exchange Records", path: "/aquaculture/water-exchange", description: "Track water exchange and circulation" },
      { name: "Pond/Tank Preparation", path: "/aquaculture/preparation", description: "Manage pond and tank preparation activities" }
    ]
  },
  {
    title: "Production & Harvest",
    description: "Growth monitoring, harvest planning and records",
    icon: TrendingUp,
    color: "bg-orange-500",
    forms: [
      { name: "Growth Monitoring", path: "/aquaculture/growth", description: "Track fish growth and development" },
      { name: "Harvest Planning", path: "/aquaculture/harvest-planning", description: "Plan and schedule harvest activities" },
      { name: "Harvest Records", path: "/aquaculture/harvest-records", description: "Record harvest details and yields" }
    ]
  },
  {
    title: "Financial Management",
    description: "Expenses, revenue, and profitability analysis",
    icon: DollarSign,
    color: "bg-yellow-500",
    forms: [
      { name: "Operational Expenses", path: "/aquaculture/expenses", description: "Track operational costs and expenses" },
      { name: "Revenue Tracking", path: "/aquaculture/revenue", description: "Monitor sales and revenue streams" },
      { name: "Profitability Analysis", path: "/aquaculture/profitability", description: "Analyze financial performance and ROI" }
    ]
  },
  {
    title: "Environmental & Compliance",
    description: "Waste management and biosecurity protocols",
    icon: ShieldCheck,
    color: "bg-purple-500",
    forms: [
      { name: "Waste Management", path: "/aquaculture/waste", description: "Track waste management and disposal" },
      { name: "Biosecurity Protocol", path: "/aquaculture/biosecurity", description: "Maintain biosecurity measures and protocols" }
    ]
  },
  {
    title: "Essential Dashboards",
    description: "Key performance and monitoring dashboards",
    icon: BarChart3,
    color: "bg-indigo-500",
    forms: [
      { name: "Primary Production Dashboard", path: "/aquaculture/dashboard-production", description: "Real-time operations overview" },
      { name: "Water Quality Dashboard", path: "/aquaculture/dashboard-water", description: "Environmental monitoring & alerts" },
      { name: "Financial Performance Dashboard", path: "/aquaculture/dashboard-financial", description: "Cost/revenue tracking" },
      { name: "Inventory Management Dashboard", path: "/aquaculture/dashboard-inventory", description: "Stock levels & procurement" }
    ]
  }
]

const quickStats = [
  { label: "Active Ponds", value: "12", icon: Waves, change: "+2 this month" },
  { label: "Fish Population", value: "45,280", icon: Fish, change: "+8% growth rate" },
  { label: "Water Quality", value: "95%", icon: Droplets, change: "Optimal levels" },
  { label: "Monthly Revenue", value: "$18,450", icon: DollarSign, change: "+15% vs last month" },
]

export default function Aquaculture() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Aquaculture Management</h1>
          <p className="text-gray-600 mt-2">Comprehensive aquaculture operations and fish farming management</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Module Categories */}
        <div className="space-y-6">
          {moduleCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  {category.title}
                  <Badge variant="secondary">{category.forms.length} forms</Badge>
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.forms.map((form) => (
                    <div key={form.name} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{form.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{form.description}</p>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <NavLink to={form.path}>Open</NavLink>
                        </Button>
                      </div>
                    </div>
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
