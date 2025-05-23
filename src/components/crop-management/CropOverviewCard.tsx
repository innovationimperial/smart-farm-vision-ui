
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Sprout, Calendar } from "lucide-react"

export function CropOverviewCard() {
  const stats = [
    {
      title: "Active Crops",
      value: "8",
      change: "+2 this season",
      changeType: "positive" as const,
      icon: Sprout,
      color: "text-farm-green"
    },
    {
      title: "Total Acreage",
      value: "347",
      change: "acres planted",
      icon: Calendar,
      color: "text-ocean-blue"
    },
    {
      title: "Avg Growth Stage",
      value: "65%",
      change: "+5% vs last week",
      changeType: "positive" as const,
      icon: TrendingUp,
      color: "text-growth-green"
    },
    {
      title: "Expected Yield",
      value: "92%",
      change: "of target",
      changeType: "positive" as const,
      icon: TrendingUp,
      color: "text-harvest-orange"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Crop Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className={`inline-flex p-2 rounded-lg bg-white ${stat.color} mb-2`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="font-mono text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.title}</div>
              <div className={`text-xs mt-1 ${
                stat.changeType === 'positive' ? 'text-growth-green' : 'text-gray-500'
              }`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
