
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CloudRain, Sun, Thermometer, Wind } from "lucide-react"

export function WeatherImpact() {
  const impacts = [
    {
      factor: "Temperature",
      icon: Thermometer,
      status: "Optimal",
      impact: "Positive growth conditions",
      color: "text-growth-green",
      bgColor: "bg-growth-green/10"
    },
    {
      factor: "Rainfall",
      icon: CloudRain,
      status: "Above Average",
      impact: "Excellent for corn development",
      color: "text-ocean-blue",
      bgColor: "bg-ocean-blue/10"
    },
    {
      factor: "Sunshine",
      icon: Sun,
      status: "Good",
      impact: "Supporting photosynthesis",
      color: "text-sunshine-yellow",
      bgColor: "bg-sunshine-yellow/10"
    },
    {
      factor: "Wind",
      icon: Wind,
      status: "Moderate",
      impact: "No stress conditions",
      color: "text-gray-600",
      bgColor: "bg-gray-100"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Weather Impact on Crops</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {impacts.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg ${item.bgColor}`}>
              <div className="flex items-center gap-3 mb-2">
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.factor}</h4>
                  <p className={`text-sm font-medium ${item.color}`}>{item.status}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{item.impact}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
