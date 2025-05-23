
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GrowthStageVisualizer() {
  const crops = [
    {
      name: "Corn",
      stages: ["Seed", "Germination", "V6", "Tasseling", "R3", "Maturity"],
      currentStage: 3,
      color: "bg-sunshine-yellow"
    },
    {
      name: "Soybeans",
      stages: ["Seed", "VC", "V3", "R1", "R3", "R6", "R8"],
      currentStage: 4,
      color: "bg-growth-green"
    },
    {
      name: "Wheat",
      stages: ["Seed", "Tillering", "Jointing", "Heading", "Grain Fill", "Harvest"],
      currentStage: 4,
      color: "bg-harvest-orange"
    }
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="text-farm-green">Growth Stages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {crops.map((crop, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">{crop.name}</h4>
              <span className="text-sm text-gray-600">
                Stage {crop.currentStage + 1} of {crop.stages.length}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              {crop.stages.map((stage, stageIndex) => (
                <div key={stageIndex} className="flex-1">
                  <div
                    className={`h-2 rounded-full ${
                      stageIndex <= crop.currentStage 
                        ? crop.color 
                        : 'bg-gray-200'
                    }`}
                  />
                  <div className="text-xs text-center mt-1 text-gray-600">
                    {stage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
