
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Droplets, Thermometer, Eye, Edit, MoreVertical } from "lucide-react"

export function FieldOverviewGrid() {
  const fields = [
    {
      id: 1,
      name: "North Field",
      size: "45 acres",
      crop: "Corn",
      variety: "Pioneer 1234",
      status: "Growing",
      statusColor: "bg-growth-green",
      plantDate: "Apr 15, 2024",
      harvestDate: "Sep 20, 2024",
      soilType: "Clay Loam",
      irrigation: "Active",
      temperature: "75°F",
      moisture: "Optimal",
      location: "40.7128, -74.0060",
      health: "Excellent"
    },
    {
      id: 2,
      name: "South Field",
      size: "38 acres",
      crop: "Soybeans",
      variety: "Asgrow AG2032",
      status: "Flowering",
      statusColor: "bg-ocean-blue",
      plantDate: "May 8, 2024",
      harvestDate: "Oct 5, 2024",
      soilType: "Sandy Loam",
      irrigation: "Scheduled",
      temperature: "78°F",
      moisture: "Good",
      location: "40.7580, -73.9855",
      health: "Good"
    },
    {
      id: 3,
      name: "East Field",
      size: "52 acres",
      crop: "Wheat",
      variety: "Hard Red Winter",
      status: "Harvested",
      statusColor: "bg-harvest-orange",
      plantDate: "Oct 12, 2023",
      harvestDate: "Jul 15, 2024",
      soilType: "Silt Loam",
      irrigation: "None",
      temperature: "72°F",
      moisture: "Low",
      location: "40.6782, -73.9442",
      health: "Fair"
    },
    {
      id: 4,
      name: "West Field",
      size: "32 acres",
      crop: "Tomatoes",
      variety: "Celebrity",
      status: "Preparing",
      statusColor: "bg-sunshine-yellow",
      plantDate: "May 20, 2024",
      harvestDate: "Aug 10, 2024",
      soilType: "Loam",
      irrigation: "Installing",
      temperature: "76°F",
      moisture: "Moderate",
      location: "40.7505, -73.9934",
      health: "Excellent"
    },
    {
      id: 5,
      name: "Central Field",
      size: "28 acres",
      crop: "Cotton",
      variety: "Deltapine 1646",
      status: "Growing",
      statusColor: "bg-growth-green",
      plantDate: "Apr 25, 2024",
      harvestDate: "Oct 15, 2024",
      soilType: "Clay",
      irrigation: "Active",
      temperature: "79°F",
      moisture: "Optimal",
      location: "40.7831, -73.9712",
      health: "Good"
    },
    {
      id: 6,
      name: "Back Field",
      size: "42 acres",
      crop: "Alfalfa",
      variety: "WL 343HQ",
      status: "Fallow",
      statusColor: "bg-gray-500",
      plantDate: "Mar 10, 2024",
      harvestDate: "Multiple cuts",
      soilType: "Sandy Clay",
      irrigation: "Inactive",
      temperature: "73°F",
      moisture: "Dry",
      location: "40.7282, -73.9942",
      health: "Resting"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Field Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {fields.map((field) => (
            <Card key={field.id} className="border hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{field.name}</h3>
                    <p className="text-sm text-gray-600">{field.size}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`${field.statusColor} text-white text-xs`}>
                      {field.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Crop:</span>
                    <span className="font-medium">{field.crop}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Variety:</span>
                    <span className="font-medium">{field.variety}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Soil:</span>
                    <span className="font-medium">{field.soilType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Health:</span>
                    <span className="font-medium">{field.health}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Thermometer className="w-3 h-3" />
                    {field.temperature}
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplets className="w-3 h-3" />
                    {field.moisture}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Location
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
