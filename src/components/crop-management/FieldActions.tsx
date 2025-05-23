
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, Droplets, Bug, Tractor, BarChart3, FileText, Camera } from "lucide-react"

export function FieldActions() {
  const actions = [
    {
      icon: Plus,
      label: "Add Field",
      description: "Create new field",
      color: "text-farm-green",
      bgColor: "bg-farm-green/10"
    },
    {
      icon: Calendar,
      label: "Schedule Activity",
      description: "Plan field work",
      color: "text-ocean-blue",
      bgColor: "bg-ocean-blue/10"
    },
    {
      icon: Droplets,
      label: "Irrigation",
      description: "Water management",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Bug,
      label: "Pest Control",
      description: "Monitor pests",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Tractor,
      label: "Equipment",
      description: "Assign machinery",
      color: "text-harvest-orange",
      bgColor: "bg-harvest-orange/10"
    },
    {
      icon: BarChart3,
      label: "Analytics",
      description: "Field performance",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FileText,
      label: "Reports",
      description: "Generate reports",
      color: "text-gray-600",
      bgColor: "bg-gray-50"
    },
    {
      icon: Camera,
      label: "Photo Log",
      description: "Visual records",
      color: "text-sunshine-yellow",
      bgColor: "bg-sunshine-yellow/10"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-3 justify-start hover:bg-gray-50"
            >
              <div className={`p-2 rounded-lg ${action.bgColor} mr-3`}>
                <action.icon className={`w-4 h-4 ${action.color}`} />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">{action.label}</div>
                <div className="text-sm text-gray-600">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
