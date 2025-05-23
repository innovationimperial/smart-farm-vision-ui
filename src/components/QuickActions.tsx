
import { Plus, FileText, Calendar, AlertTriangle, TrendingUp, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const actions = [
  {
    title: "Log Field Activity",
    description: "Record planting, spraying, or harvest",
    icon: Plus,
    color: "bg-farm-green hover:bg-green-700"
  },
  {
    title: "Add Livestock Record",
    description: "Health check, feeding, or breeding",
    icon: FileText,
    color: "bg-ocean-blue hover:bg-blue-700"
  },
  {
    title: "Schedule Task",
    description: "Plan upcoming farm operations",
    icon: Calendar,
    color: "bg-sunrise-purple hover:bg-purple-700"
  },
  {
    title: "Report Issue",
    description: "Equipment, pest, or disease alert",
    icon: AlertTriangle,
    color: "bg-harvest-orange hover:bg-orange-700"
  },
  {
    title: "View Analytics",
    description: "Performance and financial reports",
    icon: TrendingUp,
    color: "bg-sky-blue hover:bg-blue-600"
  },
  {
    title: "Farm Settings",
    description: "Manage farm configuration",
    icon: Settings,
    color: "bg-earthy-brown hover:bg-yellow-600"
  }
]

export function QuickActions() {
  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-heading">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start space-y-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover-scale"
              >
                <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm text-gray-900">{action.title}</div>
                  <div className="text-xs text-gray-600">{action.description}</div>
                </div>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
