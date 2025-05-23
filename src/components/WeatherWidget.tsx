
import { Cloud, CloudRain, Sun, Wind, Droplets, Thermometer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const weatherData = {
  current: {
    temperature: 72,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 8,
    icon: Sun
  },
  forecast: [
    { day: "Today", high: 75, low: 60, icon: Sun, precipitation: 0 },
    { day: "Tomorrow", high: 73, low: 58, icon: CloudRain, precipitation: 20 },
    { day: "Wed", high: 70, low: 55, icon: Cloud, precipitation: 60 },
    { day: "Thu", high: 68, low: 52, icon: CloudRain, precipitation: 80 },
    { day: "Fri", high: 71, low: 54, icon: Sun, precipitation: 10 },
  ]
}

export function WeatherWidget() {
  const CurrentIcon = weatherData.current.icon

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-heading flex items-center space-x-2">
          <CurrentIcon className="w-6 h-6 text-sunshine-yellow" />
          <span>Weather Forecast</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current conditions */}
        <div className="bg-gradient-to-r from-sky-blue to-ocean-blue rounded-lg p-4 text-white">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold font-mono">{weatherData.current.temperature}°F</div>
              <div className="text-sky-100">{weatherData.current.condition}</div>
            </div>
            <CurrentIcon className="w-12 h-12 text-sunshine-yellow" />
          </div>
          <div className="flex justify-between mt-3 text-sm text-sky-100">
            <div className="flex items-center space-x-1">
              <Droplets className="w-4 h-4" />
              <span>{weatherData.current.humidity}%</span>
            </div>
            <div className="flex items-center space-x-1">
              <Wind className="w-4 h-4" />
              <span>{weatherData.current.windSpeed} mph</span>
            </div>
          </div>
        </div>

        {/* 5-day forecast */}
        <div className="space-y-2">
          {weatherData.forecast.map((day, index) => {
            const DayIcon = day.icon
            return (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm font-medium w-16">{day.day}</span>
                <div className="flex items-center space-x-2">
                  <DayIcon className="w-4 h-4 text-ocean-blue" />
                  <span className="text-xs text-ocean-blue">{day.precipitation}%</span>
                </div>
                <div className="text-sm font-mono">
                  <span className="font-semibold">{day.high}°</span>
                  <span className="text-gray-500 ml-1">{day.low}°</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
