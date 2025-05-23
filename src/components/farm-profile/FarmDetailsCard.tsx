
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Calendar, MapPin, Phone, Mail } from "lucide-react"

export function FarmDetailsCard() {
  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-farm-green">
          <Building className="h-5 w-5" />
          Farm Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Farm Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>2847 Vineyard Road, Oakville, CA 94562</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Established: March 15, 1987</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>Johnson Family Farm LLC</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>(707) 555-0123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>info@greenvalleyorganic.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Farm Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Organic Vegetables</Badge>
                <Badge variant="secondary">Fruit Orchards</Badge>
                <Badge variant="secondary">Livestock</Badge>
                <Badge variant="secondary">Sustainable Agriculture</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-mono text-lg font-bold text-farm-green">1,250</div>
                  <div className="text-gray-600">Total Acres</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-mono text-lg font-bold text-ocean-blue">47</div>
                  <div className="text-gray-600">Field Plots</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
