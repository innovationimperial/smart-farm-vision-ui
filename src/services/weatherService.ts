
const API_KEY = '457248e9b7e7990ac6f0f55a178672b2'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export interface WeatherData {
  current: {
    temperature: number
    condition: string
    humidity: number
    windSpeed: number
    icon: string
  }
  forecast: Array<{
    day: string
    high: number
    low: number
    icon: string
    precipitation: number
    description: string
  }>
}

export async function getCurrentWeather(lat: number = 40.7128, lon: number = -74.0060): Promise<WeatherData> {
  try {
    // Get current weather
    const currentResponse = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    )
    const currentData = await currentResponse.json()

    // Get 5-day forecast
    const forecastResponse = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    )
    const forecastData = await forecastResponse.json()

    // Process current weather
    const current = {
      temperature: Math.round(currentData.main.temp),
      condition: currentData.weather[0].main,
      humidity: currentData.main.humidity,
      windSpeed: Math.round(currentData.wind.speed),
      icon: currentData.weather[0].icon
    }

    // Process forecast data (group by day and get daily highs/lows)
    const dailyForecasts = new Map()
    
    forecastData.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000)
      const dayKey = date.toDateString()
      
      if (!dailyForecasts.has(dayKey)) {
        dailyForecasts.set(dayKey, {
          date,
          temps: [],
          weather: item.weather[0],
          precipitation: item.pop * 100
        })
      }
      
      dailyForecasts.get(dayKey).temps.push(item.main.temp)
    })

    // Convert to forecast array
    const forecast = Array.from(dailyForecasts.values()).slice(0, 5).map((day: any, index: number) => {
      const temps = day.temps
      const dayNames = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      
      return {
        day: index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : 
             day.date.toLocaleDateString('en-US', { weekday: 'short' }),
        high: Math.round(Math.max(...temps)),
        low: Math.round(Math.min(...temps)),
        icon: day.weather.icon,
        precipitation: Math.round(day.precipitation),
        description: day.weather.description
      }
    })

    return { current, forecast }

  } catch (error) {
    console.error('Error fetching weather data:', error)
    
    // Return fallback data
    return {
      current: {
        temperature: 72,
        condition: "Partly Cloudy",
        humidity: 65,
        windSpeed: 8,
        icon: "02d"
      },
      forecast: [
        { day: "Today", high: 75, low: 60, icon: "01d", precipitation: 0, description: "sunny" },
        { day: "Tomorrow", high: 73, low: 58, icon: "10d", precipitation: 20, description: "light rain" },
        { day: "Wed", high: 70, low: 55, icon: "04d", precipitation: 60, description: "cloudy" },
        { day: "Thu", high: 68, low: 52, icon: "10d", precipitation: 80, description: "rain" },
        { day: "Fri", high: 71, low: 54, icon: "01d", precipitation: 10, description: "sunny" },
      ]
    }
  }
}

export function getWeatherIcon(iconCode: string) {
  const iconMap: { [key: string]: string } = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  }
  
  return iconMap[iconCode] || '☀️'
}
