
import { DashboardLayout } from "@/components/DashboardLayout"
import { FieldOverviewGrid } from "@/components/crop-management/FieldOverviewGrid"
import { FieldMap } from "@/components/crop-management/FieldMap"
import { FieldActions } from "@/components/crop-management/FieldActions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Filter, Map, Grid, BarChart3 } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function FieldManagement() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')

  const fieldStats = [
    {
      label: "Total Fields",
      value: "12",
      color: "text-farm-green"
    },
    {
      label: "Active Fields",
      value: "8",
      color: "text-ocean-blue"
    },
    {
      label: "Total Acreage",
      value: "247 acres",
      color: "text-harvest-orange"
    },
    {
      label: "Avg Field Size",
      value: "20.6 acres",
      color: "text-sunshine-yellow"
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/crops">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Crops
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-900">Field Management</h1>
              <p className="text-gray-600 mt-1">Monitor and manage your farm fields</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="rounded-l-none"
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
            <Button className="bg-farm-green hover:bg-farm-green/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Field
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {fieldStats.map((stat, index) => (
            <Card key={index} className="card-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <BarChart3 className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Field Display */}
          <div className="lg:col-span-3">
            {viewMode === 'grid' ? <FieldOverviewGrid /> : <FieldMap />}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FieldActions />
            
            {/* Field Status Summary */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-farm-green">Field Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Planted</span>
                  <Badge className="bg-growth-green text-white">8 fields</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Preparing</span>
                  <Badge className="bg-sunshine-yellow text-white">2 fields</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Harvested</span>
                  <Badge className="bg-harvest-orange text-white">1 field</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Fallow</span>
                  <Badge className="bg-gray-500 text-white">1 field</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-farm-green">Recent Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">North Field</div>
                  <div className="text-gray-600">Irrigation completed</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">West Field</div>
                  <div className="text-gray-600">Fertilizer applied</div>
                  <div className="text-xs text-gray-500">1 day ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">South Field</div>
                  <div className="text-gray-600">Pest monitoring</div>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
