
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CropCalendar() {
  const activities = [
    {
      date: "Today",
      task: "Corn Fertilization",
      field: "North Field",
      priority: "High",
      color: "bg-tomato-red"
    },
    {
      date: "Tomorrow",
      task: "Soybean Scouting",
      field: "South Field",
      priority: "Medium",
      color: "bg-sunshine-yellow"
    },
    {
      date: "Jun 25",
      task: "Wheat Harvest",
      field: "East Field",
      priority: "High",
      color: "bg-tomato-red"
    },
    {
      date: "Jun 28",
      task: "Irrigation Check",
      field: "West Field",
      priority: "Low",
      color: "bg-growth-green"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Upcoming Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{activity.task}</div>
              <div className="text-sm text-gray-600">{activity.field}</div>
              <div className="text-xs text-gray-500">{activity.date}</div>
            </div>
            <Badge className={`${activity.color} text-white text-xs`}>
              {activity.priority}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
