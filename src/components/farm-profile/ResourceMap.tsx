
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Map, Home, Droplets, Zap, Truck } from "lucide-react"

export function ResourceMap() {
  const resources = [
    { type: 'Buildings', count: 12, icon: Home, color: 'bg-earthy-brown' },
    { type: 'Water Sources', count: 8, icon: Droplets, color: 'bg-ocean-blue' },
    { type: 'Power Systems', count: 5, icon: Zap, color: 'bg-sunshine-yellow' },
    { type: 'Equipment Storage', count: 6, icon: Truck, color: 'bg-harvest-orange' }
  ]

  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-farm-green">
          <Map className="h-5 w-5" />
          Farm Infrastructure & Resources
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover-scale">
              <div className={`w-12 h-12 ${resource.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <resource.icon className="h-6 w-6 text-white" />
              </div>
              <div className="font-mono text-2xl font-bold text-gray-900">{resource.count}</div>
              <div className="text-sm text-gray-600">{resource.type}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-farm-green/10 to-ocean-blue/10 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Interactive Farm Map</h3>
            <Badge variant="outline">Coming Soon</Badge>
          </div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Map className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Interactive map with real-time resource tracking</p>
              <p className="text-sm">Fields • Buildings • Water Sources • Equipment</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
