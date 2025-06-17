
import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Thermometer, 
  Eye, 
  Gauge,
  MapPin,
  RefreshCw,
  Search
} from "lucide-react"
import { getCurrentWeather, getWeatherIcon, WeatherData } from "@/services/weatherService"

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchLocation, setSearchLocation] = useState("")
  const [currentLocation, setCurrentLocation] = useState("Current Location")

  const fetchWeather = async (lat?: number, lon?: number) => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCurrentWeather(lat, lon)
      setWeatherData(data)
    } catch (err) {
      console.error('Weather fetch error:', err)
      setError('Failed to load weather data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Try to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          await fetchWeather(latitude, longitude)
          setCurrentLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`)
        },
        async () => {
          // Fallback to default location
          await fetchWeather()
          setCurrentLocation("New York, NY")
        }
      )
    } else {
      fetchWeather()
      setCurrentLocation("New York, NY")
    }
  }, [])

  const handleRefresh = () => {
    fetchWeather()
  }

  const getWeatherGradient = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return 'from-yellow-400 via-orange-400 to-red-400'
      case 'clouds':
        return 'from-gray-400 via-gray-500 to-gray-600'
      case 'rain':
        return 'from-blue-400 via-blue-500 to-blue-600'
      case 'snow':
        return 'from-blue-200 via-white to-gray-300'
      case 'thunderstorm':
        return 'from-gray-700 via-gray-800 to-black'
      default:
        return 'from-blue-400 via-sky-500 to-cyan-500'
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <RefreshCw className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
              <p className="text-lg text-gray-600">Loading weather data...</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (error || !weatherData) {
    return (
      <DashboardLayout>
        <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
          <div className="flex items-center justify-center min-h-96">
            <Card className="w-full max-w-md">
              <CardContent className="pt-6 text-center">
                <Cloud className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Weather Unavailable</h3>
                <p className="text-gray-600 mb-4">{error || 'Unable to load weather data'}</p>
                <Button onClick={handleRefresh} className="bg-blue-600 hover:bg-blue-700">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <Sun className="w-8 h-8 text-yellow-500" />
              Weather Dashboard
            </h1>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{currentLocation}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleRefresh} 
              variant="outline"
              className="border-blue-200 hover:bg-blue-50"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Current Weather Card */}
        <Card className={`bg-gradient-to-br ${getWeatherGradient(weatherData.current.condition)} text-white overflow-hidden relative`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="p-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{getWeatherIcon(weatherData.current.icon)}</span>
                  <div>
                    <div className="text-5xl font-bold">{weatherData.current.temperature}°F</div>
                    <div className="text-xl opacity-90">{weatherData.current.condition}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5" />
                    <span className="text-sm opacity-90">Humidity</span>
                  </div>
                  <div className="text-2xl font-bold">{weatherData.current.humidity}%</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5" />
                    <span className="text-sm opacity-90">Wind Speed</span>
                  </div>
                  <div className="text-2xl font-bold">{weatherData.current.windSpeed} mph</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5-Day Forecast */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
              <Cloud className="w-6 h-6 text-blue-600" />
              5-Day Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {weatherData.forecast.map((day, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-4 text-center">
                    <div className="font-semibold text-gray-800 mb-2">{day.day}</div>
                    <div className="text-4xl mb-2">{getWeatherIcon(day.icon)}</div>
                    <div className="text-sm text-gray-600 mb-2 capitalize">{day.description}</div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-800">{day.high}°</span>
                      <span className="text-gray-500">{day.low}°</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      <Droplets className="w-3 h-3 mr-1" />
                      {day.precipitation}%
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather Alerts & Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Farming Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-green-700">
                    Current weather conditions are {weatherData.current.temperature > 70 ? 'favorable' : 'moderate'} for outdoor farming activities.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-green-700">
                    Wind speed of {weatherData.current.windSpeed} mph is {weatherData.current.windSpeed > 15 ? 'high - consider postponing spraying' : 'suitable for most field operations'}.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-green-700">
                    Humidity at {weatherData.current.humidity}% indicates {weatherData.current.humidity > 70 ? 'high moisture - monitor for fungal diseases' : 'good conditions for plant growth'}.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 flex items-center gap-2">
                <Thermometer className="w-5 h-5" />
                Weather Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weatherData.forecast.some(day => day.precipitation > 60) && (
                  <div className="flex items-start gap-3">
                    <CloudRain className="w-5 h-5 text-blue-500 mt-0.5" />
                    <p className="text-orange-700">
                      Heavy rain expected in the coming days. Plan indoor activities and protect sensitive crops.
                    </p>
                  </div>
                )}
                {weatherData.current.windSpeed > 20 && (
                  <div className="flex items-start gap-3">
                    <Wind className="w-5 h-5 text-gray-500 mt-0.5" />
                    <p className="text-orange-700">
                      High wind speeds detected. Avoid aerial applications and secure loose equipment.
                    </p>
                  </div>
                )}
                {!weatherData.forecast.some(day => day.precipitation > 60) && weatherData.current.windSpeed <= 20 && (
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-green-700">
                      No weather alerts at this time. Conditions are favorable for farming operations.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
