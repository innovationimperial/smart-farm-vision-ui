
import { DashboardLayout } from "@/components/DashboardLayout"
import { CropOverviewCard } from "@/components/crop-management/CropOverviewCard"
import { CropCalendar } from "@/components/crop-management/CropCalendar"
import { FieldStatusGrid } from "@/components/crop-management/FieldStatusGrid"
import { GrowthStageVisualizer } from "@/components/crop-management/GrowthStageVisualizer"
import { WeatherImpact } from "@/components/crop-management/WeatherImpact"
import { QuickActions } from "@/components/crop-management/CropQuickActions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Calendar, BarChart3, Map, Sprout } from "lucide-react"
import { Link } from "react-router-dom"

export default function CropManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Crop Management</h1>
            <p className="text-gray-600 mt-1">Monitor and manage your crop production</p>
          </div>
          <div className="flex gap-3">
            <Link to="/crops/data-entry">
              <Button className="bg-farm-green hover:bg-farm-green/90">
                <Plus className="w-4 h-4 mr-2" />
                Add New Crop
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Link to="/crops/data-entry" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-farm-green">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-farm-green/10 rounded-lg">
                    <Plus className="w-5 h-5 text-farm-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Entry</h3>
                    <p className="text-sm text-gray-600">Add crop records</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/crops/calendar" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-ocean-blue">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Crop Calendar</h3>
                    <p className="text-sm text-gray-600">Schedule activities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/crops/fields" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-harvest-orange">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-harvest-orange/10 rounded-lg">
                    <Map className="w-5 h-5 text-harvest-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Field Management</h3>
                    <p className="text-sm text-gray-600">Monitor fields</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/crops/analytics" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-sunshine-yellow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sunshine-yellow/10 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-sunshine-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-600">Performance insights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CropOverviewCard />
            <FieldStatusGrid />
            <WeatherImpact />
          </div>
          
          <div className="space-y-6">
            <QuickActions />
            <GrowthStageVisualizer />
            <CropCalendar />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
