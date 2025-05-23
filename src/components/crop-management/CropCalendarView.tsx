
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Plus, Edit, Trash2 } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from "date-fns"

export function CropCalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [viewMode, setViewMode] = useState<"month" | "week" | "agenda">("month")

  // Sample activities data
  const activities = [
    {
      id: 1,
      date: new Date(2024, 5, 23),
      title: "Corn Fertilization",
      field: "North Field",
      time: "08:00 AM",
      priority: "High",
      type: "Fertilization",
      status: "pending"
    },
    {
      id: 2,
      date: new Date(2024, 5, 24),
      title: "Soybean Scouting",
      field: "South Field",
      time: "10:00 AM",
      priority: "Medium",
      type: "Monitoring",
      status: "pending"
    },
    {
      id: 3,
      date: new Date(2024, 5, 25),
      title: "Wheat Harvest",
      field: "East Field",
      time: "06:00 AM",
      priority: "High",
      type: "Harvest",
      status: "pending"
    },
    {
      id: 4,
      date: new Date(2024, 5, 28),
      title: "Irrigation Check",
      field: "West Field",
      time: "02:00 PM",
      priority: "Low",
      type: "Maintenance",
      status: "completed"
    }
  ]

  const getActivitiesForDate = (date: Date) => {
    return activities.filter(activity => isSameDay(activity.date, date))
  }

  const getSelectedDateActivities = () => {
    if (!selectedDate) return []
    return getActivitiesForDate(selectedDate)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-tomato-red"
      case "Medium": return "bg-sunshine-yellow"
      case "Low": return "bg-growth-green"
      default: return "bg-gray-500"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Planting": return "bg-growth-green"
      case "Fertilization": return "bg-ocean-blue"
      case "Harvest": return "bg-harvest-orange"
      case "Monitoring": return "bg-sunshine-yellow"
      case "Maintenance": return "bg-farm-green"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "month" | "week" | "agenda")}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-lg font-semibold min-w-[200px] text-center">
                {format(currentDate, "MMMM yyyy")}
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentDate(new Date())}
            >
              Today
            </Button>
          </div>
        </div>

        <TabsContent value="month" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    month={currentDate}
                    onMonthChange={setCurrentDate}
                    className="w-full"
                    components={{
                      Day: ({ date, ...props }) => {
                        const dayActivities = getActivitiesForDate(date)
                        const hasActivities = dayActivities.length > 0
                        
                        return (
                          <div className="relative">
                            <button
                              {...props}
                              className={`
                                w-full h-16 p-1 text-sm border rounded-lg transition-colors
                                ${isSameDay(date, selectedDate || new Date()) ? 'bg-farm-green text-white' : ''}
                                ${isToday(date) ? 'bg-ocean-blue/10 border-ocean-blue' : 'border-gray-200'}
                                ${hasActivities ? 'bg-sunshine-yellow/10' : ''}
                                hover:bg-gray-50
                              `}
                            >
                              <div className="font-medium">{format(date, 'd')}</div>
                              {hasActivities && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {dayActivities.slice(0, 2).map((activity, index) => (
                                    <div
                                      key={index}
                                      className={`w-2 h-2 rounded-full ${getPriorityColor(activity.priority)}`}
                                    />
                                  ))}
                                  {dayActivities.length > 2 && (
                                    <div className="text-xs text-gray-500">+{dayActivities.length - 2}</div>
                                  )}
                                </div>
                              )}
                            </button>
                          </div>
                        )
                      }
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Selected Date Activities */}
            <div>
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-farm-green flex items-center justify-between">
                    {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Select a date"}
                    <Button size="sm" className="bg-farm-green hover:bg-farm-green/90">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {getSelectedDateActivities().length > 0 ? (
                    getSelectedDateActivities().map((activity) => (
                      <div key={activity.id} className="p-3 border rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{activity.title}</h4>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">{activity.field}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                        <div className="flex gap-2">
                          <Badge className={`${getPriorityColor(activity.priority)} text-white text-xs`}>
                            {activity.priority}
                          </Badge>
                          <Badge className={`${getTypeColor(activity.type)} text-white text-xs`}>
                            {activity.type}
                          </Badge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <p>No activities scheduled</p>
                      <p className="text-sm">Click + to add an activity</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Week View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-gray-500 py-8">
                Week view coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agenda" className="space-y-4">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-farm-green">Agenda View</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="font-semibold text-farm-green">
                          {format(activity.date, "MMM")}
                        </div>
                        <div className="text-2xl font-bold">
                          {format(activity.date, "d")}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.field} • {activity.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`${getPriorityColor(activity.priority)} text-white`}>
                      {activity.priority}
                    </Badge>
                    <Badge className={`${getTypeColor(activity.type)} text-white`}>
                      {activity.type}
                    </Badge>
                    <div className="flex gap-1 ml-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
