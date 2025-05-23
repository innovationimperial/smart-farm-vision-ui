
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react"

export function ContactInformation() {
  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-farm-green">
          <Phone className="h-5 w-5" />
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="h-4 w-4 text-gray-500" />
            <div>
              <div className="font-medium">(707) 555-0123</div>
              <div className="text-sm text-gray-600">Main Office</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-4 w-4 text-gray-500" />
            <div>
              <div className="font-medium">info@greenvalleyorganic.com</div>
              <div className="text-sm text-gray-600">General Inquiries</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Globe className="h-4 w-4 text-gray-500" />
            <div>
              <div className="font-medium">greenvalleyorganic.com</div>
              <div className="text-sm text-gray-600">Website</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <MapPin className="h-4 w-4 text-gray-500" />
            <div>
              <div className="font-medium">2847 Vineyard Road</div>
              <div className="text-sm text-gray-600">Oakville, CA 94562</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Clock className="h-4 w-4 text-gray-500" />
            <div>
              <div className="font-medium">Mon-Fri: 7:00 AM - 6:00 PM</div>
              <div className="text-sm text-gray-600">Office Hours</div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-gray-900 mb-3">Social Media</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">@GreenValleyOrganic</Badge>
            <Badge variant="outline">Facebook</Badge>
            <Badge variant="outline">Instagram</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
