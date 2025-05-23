
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, BarChart3, Camera, Droplets, Bug } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Record Activity",
      description: "Log field operations",
      icon: Plus,
      color: "bg-farm-green hover:bg-farm-green/90"
    },
    {
      title: "Schedule Task",
      description: "Plan upcoming activities",
      icon: Calendar,
      color: "bg-ocean-blue hover:bg-ocean-blue/90"
    },
    {
      title: "View Analytics",
      description: "Crop performance data",
      icon: BarChart3,
      color: "bg-harvest-orange hover:bg-harvest-orange/90"
    },
    {
      title: "Photo Log",
      description: "Capture field conditions",
      icon: Camera,
      color: "bg-sunshine-yellow hover:bg-sunshine-yellow/90"
    },
    {
      title: "Irrigation",
      description: "Manage water systems",
      icon: Droplets,
      color: "bg-sky-blue hover:bg-sky-blue/90"
    },
    {
      title: "Pest Report",
      description: "Log pest observations",
      icon: Bug,
      color: "bg-tomato-red hover:bg-tomato-red/90"
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
              variant="outline"
              className="justify-start h-auto p-4 text-left"
            >
              <action.icon className="h-5 w-5 mr-3 text-gray-600" />
              <div>
                <div className="font-medium text-gray-900">{action.title}</div>
                <div className="text-sm text-gray-600">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
