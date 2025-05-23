
import { DashboardLayout } from "@/components/DashboardLayout"
import { CropDataEntryForm } from "@/components/crop-management/CropDataEntryForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Copy } from "lucide-react"
import { Link } from "react-router-dom"

export default function CropDataEntry() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6 max-w-4xl mx-auto">
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
              <h1 className="text-3xl font-heading font-bold text-gray-900">Crop Data Entry</h1>
              <p className="text-gray-600 mt-1">Add detailed information for new crop records</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy from Template
            </Button>
            <Button className="bg-farm-green hover:bg-farm-green/90">
              <Save className="w-4 h-4 mr-2" />
              Save Crop
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <Card className="border-farm-green/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Form Progress</span>
              <span className="text-farm-green font-medium">0% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-farm-green h-2 rounded-full w-0 transition-all duration-300"></div>
            </div>
          </CardContent>
        </Card>

        {/* Main Form */}
        <CropDataEntryForm />
      </div>
    </DashboardLayout>
  )
}
