
import { DashboardLayout } from "@/components/DashboardLayout"
import { CropCalendarView } from "@/components/crop-management/CropCalendarView"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Filter, Download, Calendar as CalendarIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function CropCalendar() {
  const todayActivities = [
    {
      time: "08:00 AM",
      task: "Corn Fertilization",
      field: "North Field",
      priority: "High",
      status: "pending"
    },
    {
      time: "02:00 PM",
      task: "Irrigation Check",
      field: "West Field", 
      priority: "Medium",
      status: "completed"
    }
  ]

  const upcomingActivities = [
    {
      date: "Tomorrow",
      task: "Soybean Scouting",
      field: "South Field",
      priority: "Medium"
    },
    {
      date: "Jun 25",
      task: "Wheat Harvest",
      field: "East Field",
      priority: "High"
    },
    {
      date: "Jun 28",
      task: "Pesticide Application",
      field: "North Field",
      priority: "High"
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/crops">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Crops
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-900">Crop Calendar</h1>
              <p className="text-gray-600 mt-1">Schedule and manage your crop activities</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-farm-green hover:bg-farm-green/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Activity
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-3">
            <CropCalendarView />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Activities */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-farm-green flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Today's Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {todayActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{activity.task}</div>
                      <div className="text-sm text-gray-600">{activity.field}</div>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge variant={activity.priority === "High" ? "destructive" : "secondary"}>
                        {activity.priority}
                      </Badge>
                      <Badge variant={activity.status === "completed" ? "default" : "outline"}>
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Activities */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-farm-green">Upcoming Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{activity.task}</div>
                      <div className="text-sm text-gray-600">{activity.field}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                    <Badge variant={activity.priority === "High" ? "destructive" : "secondary"}>
                      {activity.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-farm-green">Calendar Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Activities Today</span>
                  <span className="font-semibold text-farm-green">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-semibold text-ocean-blue">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Overdue</span>
                  <span className="font-semibold text-tomato-red">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed</span>
                  <span className="font-semibold text-growth-green">15</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
