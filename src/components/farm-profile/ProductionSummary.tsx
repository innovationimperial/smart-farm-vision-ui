
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { Sprout } from "lucide-react"

const productionData = [
  { name: 'Vegetables', acres: 450, color: '#4CAF50' },
  { name: 'Fruit Orchards', acres: 350, color: '#FF7043' },
  { name: 'Grains', acres: 280, color: '#FFD54F' },
  { name: 'Pasture/Livestock', acres: 120, color: '#2196F3' },
  { name: 'Fallow/Other', acres: 50, color: '#9C27B0' }
]

const chartConfig = {
  vegetables: { label: "Vegetables", color: "#4CAF50" },
  orchards: { label: "Fruit Orchards", color: "#FF7043" },
  grains: { label: "Grains", color: "#FFD54F" },
  pasture: { label: "Pasture/Livestock", color: "#2196F3" },
  other: { label: "Fallow/Other", color: "#9C27B0" }
}

export function ProductionSummary() {
  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-farm-green">
          <Sprout className="h-5 w-5" />
          Land Allocation by Production Type
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="acres"
                  >
                    {productionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Production Breakdown</h3>
            <div className="space-y-3">
              {productionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold">{item.acres} acres</div>
                    <div className="text-sm text-gray-600">
                      {((item.acres / 1250) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
