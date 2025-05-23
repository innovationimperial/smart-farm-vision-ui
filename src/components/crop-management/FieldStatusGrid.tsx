
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FieldStatusGrid() {
  const fields = [
    {
      name: "North Field",
      crop: "Corn",
      variety: "Pioneer 1234",
      stage: "Tasseling",
      health: "Excellent",
      size: "45 acres",
      plantDate: "Apr 15",
      harvestEst: "Sep 20",
      healthColor: "bg-growth-green"
    },
    {
      name: "South Field",
      crop: "Soybeans",
      variety: "Asgrow AG2032",
      stage: "Pod Fill",
      health: "Good",
      size: "38 acres",
      plantDate: "May 8",
      harvestEst: "Oct 5",
      healthColor: "bg-ocean-blue"
    },
    {
      name: "East Field",
      crop: "Wheat",
      variety: "Hard Red Winter",
      stage: "Grain Fill",
      health: "Fair",
      size: "52 acres",
      plantDate: "Oct 12",
      harvestEst: "Jul 15",
      healthColor: "bg-sunshine-yellow"
    },
    {
      name: "West Field",
      crop: "Tomatoes",
      variety: "Celebrity",
      stage: "Flowering",
      health: "Excellent",
      size: "12 acres",
      plantDate: "May 20",
      harvestEst: "Aug 10",
      healthColor: "bg-growth-green"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Field Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{field.name}</h3>
                  <p className="text-sm text-gray-600">{field.size}</p>
                </div>
                <Badge className={`${field.healthColor} text-white`}>
                  {field.health}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Crop:</span>
                  <span className="font-medium">{field.crop}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Variety:</span>
                  <span className="font-medium">{field.variety}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Stage:</span>
                  <span className="font-medium">{field.stage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Planted:</span>
                  <span className="font-medium">{field.plantDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Harvest Est:</span>
                  <span className="font-medium">{field.harvestEst}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
