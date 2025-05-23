
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Calendar, Users, Award } from "lucide-react"

export function FarmStats() {
  const stats = [
    {
      title: "Years in Operation",
      value: "37",
      change: "Since 1987",
      icon: Calendar,
      color: "text-farm-green"
    },
    {
      title: "Team Members",
      value: "24",
      change: "+3 this year",
      changeType: "positive" as const,
      icon: Users,
      color: "text-ocean-blue"
    },
    {
      title: "Certifications",
      value: "4",
      change: "All current",
      icon: Award,
      color: "text-harvest-orange"
    },
    {
      title: "Sustainability Score",
      value: "94%",
      change: "+5% vs last year",
      changeType: "positive" as const,
      icon: TrendingUp,
      color: "text-growth-green"
    }
  ]

  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="text-farm-green">Farm Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-white ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm ${
                stat.changeType === 'positive' ? 'text-growth-green' : 'text-gray-600'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
