
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Layers, Satellite, Mountain } from "lucide-react"
import { useState } from "react"

export function FieldMap() {
  const [mapType, setMapType] = useState<'satellite' | 'terrain' | 'hybrid'>('satellite')

  return (
    <Card className="card-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-farm-green">Field Map View</CardTitle>
          <div className="flex gap-2">
            <Button
              variant={mapType === 'satellite' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapType('satellite')}
            >
              <Satellite className="w-4 h-4 mr-1" />
              Satellite
            </Button>
            <Button
              variant={mapType === 'terrain' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapType('terrain')}
            >
              <Mountain className="w-4 h-4 mr-1" />
              Terrain
            </Button>
            <Button
              variant={mapType === 'hybrid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapType('hybrid')}
            >
              <Layers className="w-4 h-4 mr-1" />
              Hybrid
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Map Container */}
        <div className="relative bg-green-50 rounded-lg h-96 mb-4 overflow-hidden border">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200"></div>
          
          {/* Field Markers */}
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-12 bg-farm-green rounded-lg opacity-80 border-2 border-white shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-farm-green text-xs">North Field</Badge>
              </div>
            </div>
          </div>

          <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-14 h-10 bg-ocean-blue rounded-lg opacity-80 border-2 border-white shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-ocean-blue text-xs">South Field</Badge>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-18 h-14 bg-harvest-orange rounded-lg opacity-80 border-2 border-white shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-harvest-orange text-xs">East Field</Badge>
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 left-1/6 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-12 h-10 bg-sunshine-yellow rounded-lg opacity-80 border-2 border-white shadow-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-sunshine-yellow text-xs">West Field</Badge>
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button variant="outline" size="sm" className="bg-white">+</Button>
            <Button variant="outline" size="sm" className="bg-white">-</Button>
          </div>

          <div className="absolute bottom-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-farm-green" />
                <span>247 total acres</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
            <div className="w-4 h-4 bg-farm-green rounded"></div>
            <span className="text-sm">Active Crops</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
            <div className="w-4 h-4 bg-ocean-blue rounded"></div>
            <span className="text-sm">Flowering</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
            <div className="w-4 h-4 bg-harvest-orange rounded"></div>
            <span className="text-sm">Harvested</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
            <div className="w-4 h-4 bg-sunshine-yellow rounded"></div>
            <span className="text-sm">Preparing</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
