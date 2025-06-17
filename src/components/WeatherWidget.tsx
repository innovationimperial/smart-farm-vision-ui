
import { useState, useEffect } from "react"
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentWeather, getWeatherIcon, WeatherData } from "@/services/weatherService"

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Try to get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords
              const data = await getCurrentWeather(latitude, longitude)
              setWeatherData(data)
              setLoading(false)
            },
            async () => {
              // Fallback to default location (New York)
              const data = await getCurrentWeather()
              setWeatherData(data)
              setLoading(false)
            }
          )
        } else {
          // Fallback to default location
          const data = await getCurrentWeather()
          setWeatherData(data)
          setLoading(false)
        }
      } catch (err) {
        console.error('Weather fetch error:', err)
        setError('Failed to load weather data')
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) {
    return (
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center space-x-2">
            <Sun className="w-6 h-6 text-sunshine-yellow" />
            <span>Weather Forecast</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-sky-blue to-ocean-blue rounded-lg p-4 text-white">
            <div className="animate-pulse">
              <div className="h-8 bg-white/20 rounded mb-2"></div>
              <div className="h-4 bg-white/20 rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !weatherData) {
    return (
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center space-x-2">
            <Sun className="w-6 h-6 text-sunshine-yellow" />
            <span>Weather Forecast</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-500 text-center py-4">
            {error || 'Unable to load weather data'}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-heading flex items-center space-x-2">
          <Sun className="w-6 h-6 text-sunshine-yellow" />
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
            <div className="text-4xl">
              {getWeatherIcon(weatherData.current.icon)}
            </div>
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
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="text-sm font-medium w-16">{day.day}</span>
              <div className="flex items-center space-x-2">
                <span className="text-xl">{getWeatherIcon(day.icon)}</span>
                <span className="text-xs text-ocean-blue">{day.precipitation}%</span>
              </div>
              <div className="text-sm font-mono">
                <span className="font-semibold">{day.high}°</span>
                <span className="text-gray-500 ml-1">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
