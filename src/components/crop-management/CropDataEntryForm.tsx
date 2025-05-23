
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Camera, QrCode, Calculator, Save } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface FormSection {
  id: string
  title: string
  icon: string
  completed: boolean
}

export function CropDataEntryForm() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [expectedGermination, setExpectedGermination] = useState<Date>()
  const [harvestStart, setHarvestStart] = useState<Date>()
  const [harvestEnd, setHarvestEnd] = useState<Date>()
  
  const [formSections] = useState<FormSection[]>([
    { id: "basic", title: "Basic Information", icon: "🌱", completed: false },
    { id: "planting", title: "Planting Details", icon: "🌾", completed: false },
    { id: "characteristics", title: "Growing Characteristics", icon: "📏", completed: false },
    { id: "environment", title: "Environmental Requirements", icon: "🌡️", completed: false },
    { id: "soil", title: "Soil Requirements", icon: "🌍", completed: false },
    { id: "nutrition", title: "Nutritional Needs", icon: "💊", completed: false },
    { id: "field", title: "Field Assignment", icon: "📍", completed: false },
    { id: "outcomes", title: "Expected Outcomes", icon: "📈", completed: false },
    { id: "pest", title: "Pest & Disease Info", icon: "🐛", completed: false },
    { id: "economic", title: "Economic Data", icon: "💰", completed: false },
  ])

  const crops = [
    "Corn", "Wheat", "Soybeans", "Tomatoes", "Potatoes", "Rice", "Cotton", "Barley"
  ]

  const plantingMethods = [
    "Direct seeding", "Transplanting", "Broadcasting", "Precision planting", "Hydroseeding"
  ]

  const soilTypes = [
    "Clay", "Loam", "Sandy loam", "Silt loam", "Sandy", "Silt", "Clay loam"
  ]

  return (
    <div className="space-y-6">
      {/* Form Sections Navigation */}
      <Card className="bg-gradient-to-r from-farm-green/5 to-ocean-blue/5">
        <CardHeader>
          <CardTitle className="text-farm-green">Form Sections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {formSections.map((section) => (
              <div
                key={section.id}
                className={cn(
                  "p-3 rounded-lg border-2 cursor-pointer transition-all",
                  section.completed 
                    ? "border-farm-green bg-farm-green/10" 
                    : "border-gray-200 hover:border-farm-green/50"
                )}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{section.icon}</div>
                  <div className="text-xs font-medium text-gray-700">{section.title}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Basic Crop Information */}
      <Card className="card-shadow">
        <CardHeader className="bg-gradient-to-r from-farm-green to-farm-green/80 text-white">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            Basic Crop Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cropName" className="text-sm font-medium text-gray-700">
                Crop Name *
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Search and select crop..." />
                </SelectTrigger>
                <SelectContent>
                  {crops.map((crop) => (
                    <SelectItem key={crop} value={crop.toLowerCase()}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="variety" className="text-sm font-medium text-gray-700">
                Crop Variety/Cultivar
              </Label>
              <Input 
                id="variety" 
                placeholder="e.g., Golden Bantam, Beefsteak"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cropType" className="text-sm font-medium text-gray-700">
                Crop Type Classification
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select classification..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cereal">Cereal</SelectItem>
                  <SelectItem value="legume">Legume</SelectItem>
                  <SelectItem value="vegetable">Vegetable</SelectItem>
                  <SelectItem value="fruit">Fruit</SelectItem>
                  <SelectItem value="cash">Cash Crop</SelectItem>
                  <SelectItem value="forage">Forage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="scientific" className="text-sm font-medium text-gray-700">
                Scientific Name
              </Label>
              <Input 
                id="scientific" 
                placeholder="Auto-populated based on selection"
                className="bg-gray-50"
                readOnly
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="family" className="text-sm font-medium text-gray-700">
                Crop Family
              </Label>
              <Input 
                id="family" 
                placeholder="e.g., Gramineae, Leguminosae"
                className="bg-gray-50"
                readOnly
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Planting Details */}
      <Card className="card-shadow">
        <CardHeader className="bg-gradient-to-r from-ocean-blue to-ocean-blue/80 text-white">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            Planting Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="plantingMethod" className="text-sm font-medium text-gray-700">
                Planting Method *
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select planting method..." />
                </SelectTrigger>
                <SelectContent>
                  {plantingMethods.map((method) => (
                    <SelectItem key={method} value={method.toLowerCase().replace(' ', '-')}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="seedSource" className="text-sm font-medium text-gray-700">
                Seed Source/Supplier
              </Label>
              <Input 
                id="seedSource" 
                placeholder="Supplier name and contact"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lotNumber" className="text-sm font-medium text-gray-700">
                Seed Lot Number
              </Label>
              <div className="flex gap-2">
                <Input 
                  id="lotNumber" 
                  placeholder="Lot number"
                  className="flex-1"
                />
                <Button variant="outline" size="sm">
                  <QrCode className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Planting Date *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Expected Germination Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !expectedGermination && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {expectedGermination ? format(expectedGermination, "PPP") : <span>Auto-calculated</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={expectedGermination}
                    onSelect={setExpectedGermination}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="plantingDepth" className="text-sm font-medium text-gray-700">
                Planting Depth
              </Label>
              <div className="flex gap-2">
                <Input 
                  id="plantingDepth" 
                  type="number"
                  placeholder="1.5"
                  className="flex-1"
                />
                <Select defaultValue="inches">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inches">in</SelectItem>
                    <SelectItem value="cm">cm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rowSpacing" className="text-sm font-medium text-gray-700">
                Row Spacing
              </Label>
              <div className="flex gap-2">
                <Input 
                  id="rowSpacing" 
                  type="number"
                  placeholder="30"
                  className="flex-1"
                />
                <Select defaultValue="inches">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inches">in</SelectItem>
                    <SelectItem value="cm">cm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="plantSpacing" className="text-sm font-medium text-gray-700">
                Plant Spacing Within Rows
              </Label>
              <div className="flex gap-2">
                <Input 
                  id="plantSpacing" 
                  type="number"
                  placeholder="6"
                  className="flex-1"
                />
                <Select defaultValue="inches">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inches">in</SelectItem>
                    <SelectItem value="cm">cm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-4 h-4 text-ocean-blue" />
              <span className="font-medium text-ocean-blue">Seeding Rate Calculator</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">Seeds per unit</Label>
                <Input type="number" placeholder="25,000" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Unit</Label>
                <Select defaultValue="acre">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acre">per acre</SelectItem>
                    <SelectItem value="hectare">per hectare</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Calculated Rate</Label>
                <Input value="56 lbs/acre" readOnly className="bg-gray-50" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Soil Requirements */}
      <Card className="card-shadow">
        <CardHeader className="bg-gradient-to-r from-earthy-brown to-earthy-brown/80 text-white">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            Soil Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="soilType" className="text-sm font-medium text-gray-700">
                Preferred Soil Type
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select soil type..." />
                </SelectTrigger>
                <SelectContent>
                  {soilTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                pH Range
              </Label>
              <div className="space-y-3">
                <div className="flex gap-4 items-center">
                  <div className="flex-1">
                    <Label className="text-xs text-gray-500">Minimum pH</Label>
                    <Input type="number" step="0.1" placeholder="5.5" />
                  </div>
                  <div className="flex-1">
                    <Label className="text-xs text-gray-500">Maximum pH</Label>
                    <Input type="number" step="0.1" placeholder="7.0" />
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-full relative">
                  <div className="absolute left-1/4 w-1/2 h-full bg-farm-green/30 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>4.0</span>
                  <span>7.0</span>
                  <span>10.0</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="drainage" className="text-sm font-medium text-gray-700">
                Drainage Requirements
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select drainage..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="well-drained">Well-drained</SelectItem>
                  <SelectItem value="moist">Moist</SelectItem>
                  <SelectItem value="wet">Wet</SelectItem>
                  <SelectItem value="drought-tolerant">Drought tolerant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="soilDepth" className="text-sm font-medium text-gray-700">
                Soil Depth Requirements
              </Label>
              <div className="flex gap-2">
                <Input 
                  id="soilDepth" 
                  type="number"
                  placeholder="18"
                  className="flex-1"
                />
                <Select defaultValue="inches">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inches">in</SelectItem>
                    <SelectItem value="cm">cm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Notes */}
      <Card className="card-shadow">
        <CardHeader className="bg-gradient-to-r from-sunshine-yellow to-harvest-orange text-white">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            Additional Notes & Attachments
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
                Special Growing Instructions
              </Label>
              <Textarea 
                id="notes"
                placeholder="Enter any special instructions, varietal characteristics, or notes..."
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Certifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="organic" />
                    <Label htmlFor="organic" className="text-sm">Organic Certified</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nongmo" />
                    <Label htmlFor="nongmo" className="text-sm">Non-GMO</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sustainable" />
                    <Label htmlFor="sustainable" className="text-sm">Sustainable Agriculture</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Attachments</Label>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Camera className="w-4 h-4 mr-2" />
                    Seed Packet Photos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <QrCode className="w-4 h-4 mr-2" />
                    Scan Seed QR Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Actions */}
      <Card className="border-farm-green/30">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex gap-3">
              <Button variant="outline">
                Save as Draft
              </Button>
              <Button variant="outline">
                Save as Template
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                Preview
              </Button>
              <Button className="bg-farm-green hover:bg-farm-green/90">
                <Save className="w-4 h-4 mr-2" />
                Save Crop Record
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
