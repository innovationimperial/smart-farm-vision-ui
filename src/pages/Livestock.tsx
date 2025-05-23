
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NavLink } from "react-router-dom"
import { 
  Beef, 
  Heart, 
  Baby, 
  Wheat, 
  Package, 
  DollarSign, 
  Home, 
  FileCheck,
  Users,
  Activity,
  TrendingUp,
  Calendar
} from "lucide-react"

const moduleCategories = [
  {
    title: "Animal Management",
    description: "Core animal identification and tracking",
    icon: Beef,
    color: "bg-blue-500",
    forms: [
      { name: "Individual Animal Registration", path: "/livestock/animal-registration", description: "Core animal identification and basic information" },
      { name: "Parent/Lineage Information", path: "/livestock/lineage", description: "Breeding history and genetic background" },
      { name: "Acquisition Details", path: "/livestock/acquisition", description: "How and when animals were obtained" },
      { name: "Animal Transfer/Movement", path: "/livestock/movement", description: "Track animal movements between locations" }
    ]
  },
  {
    title: "Health Management",
    description: "Comprehensive health monitoring and care",
    icon: Heart,
    color: "bg-red-500",
    forms: [
      { name: "Health Records", path: "/livestock/health-records", description: "Ongoing health status and condition monitoring" },
      { name: "Vaccination Schedule", path: "/livestock/vaccination", description: "Immunization tracking and scheduling" },
      { name: "Treatment Records", path: "/livestock/treatment", description: "Medical treatments and medications" },
      { name: "Veterinary Visits", path: "/livestock/veterinary", description: "Professional veterinary care documentation" }
    ]
  },
  {
    title: "Breeding Management",
    description: "Breeding and reproduction tracking",
    icon: Baby,
    color: "bg-pink-500",
    forms: [
      { name: "Breeding Records", path: "/livestock/breeding", description: "Mating and artificial insemination records" },
      { name: "Pregnancy Monitoring", path: "/livestock/pregnancy", description: "Gestation period tracking" },
      { name: "Birth Records", path: "/livestock/birth", description: "Birthing details and offspring information" },
      { name: "Weaning Records", path: "/livestock/weaning", description: "Weaning process and post-weaning data" }
    ]
  },
  {
    title: "Feed and Nutrition",
    description: "Nutrition and feeding management",
    icon: Wheat,
    color: "bg-green-500",
    forms: [
      { name: "Feed Inventory Management", path: "/livestock/feed-inventory", description: "Feed stock tracking and management" },
      { name: "Daily Feeding Records", path: "/livestock/feeding", description: "Daily nutrition and feeding logs" },
      { name: "Pasture and Grazing Management", path: "/livestock/grazing", description: "Grazing rotation and pasture health" },
      { name: "Nutritional Analysis", path: "/livestock/nutrition-analysis", description: "Feed efficiency and growth performance" }
    ]
  },
  {
    title: "Production Records",
    description: "Specialized production tracking",
    icon: Package,
    color: "bg-purple-500",
    forms: [
      { name: "Milk Production", path: "/livestock/milk-production", description: "Daily milk yield and quality (dairy operations)" },
      { name: "Egg Production", path: "/livestock/egg-production", description: "Egg laying records and performance (poultry)" },
      { name: "Meat Production", path: "/livestock/meat-production", description: "Growth rates and market readiness" }
    ]
  },
  {
    title: "Financial Management",
    description: "Financial tracking and analysis",
    icon: DollarSign,
    color: "bg-yellow-500",
    forms: [
      { name: "Purchase Records", path: "/livestock/purchase", description: "Animal and supply acquisition costs" },
      { name: "Sales Records", path: "/livestock/sales", description: "Revenue from animal and product sales" },
      { name: "Operating Expenses", path: "/livestock/expenses", description: "Ongoing operational costs" },
      { name: "Profitability Analysis", path: "/livestock/profitability", description: "Financial performance calculations" }
    ]
  },
  {
    title: "Facility and Equipment",
    description: "Infrastructure management",
    icon: Home,
    color: "bg-indigo-500",
    forms: [
      { name: "Housing Records", path: "/livestock/housing", description: "Barn assignments and facility management" },
      { name: "Equipment Inventory", path: "/livestock/equipment", description: "Equipment tracking and maintenance" }
    ]
  },
  {
    title: "Compliance and Regulatory",
    description: "Regulatory compliance tracking",
    icon: FileCheck,
    color: "bg-gray-500",
    forms: [
      { name: "Regulatory Compliance", path: "/livestock/compliance", description: "Government and certification requirements" },
      { name: "Record Keeping Requirements", path: "/livestock/record-keeping", description: "Mandatory documentation logs" }
    ]
  }
]

const quickStats = [
  { label: "Total Animals", value: "147", icon: Users, change: "+5 this month" },
  { label: "Health Records", value: "98%", icon: Activity, change: "Up to date" },
  { label: "Production Avg", value: "$2,450", icon: TrendingUp, change: "+12% this quarter" },
  { label: "Upcoming Tasks", value: "23", icon: Calendar, change: "This week" },
]

export default function Livestock() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Livestock Management</h1>
          <p className="text-gray-600 mt-2">Comprehensive livestock tracking and management system</p>
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
