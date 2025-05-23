
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Leaf } from "lucide-react"

export function FarmHeroSection() {
  return (
    <Card className="relative overflow-hidden card-shadow-lg">
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <CardContent className="relative h-full flex flex-col justify-end p-8 text-white">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold font-heading mb-2">Green Valley Organic Farm</h1>
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Oakville, California</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Est. 1987</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-farm-green hover:bg-farm-green/90 text-white px-4 py-2">
                <Leaf className="h-4 w-4 mr-2" />
                1,250 Acres Total
              </Badge>
              <Badge className="bg-ocean-blue hover:bg-ocean-blue/90 text-white px-4 py-2">
                Mixed Crop Production
              </Badge>
              <Badge className="bg-harvest-orange hover:bg-harvest-orange/90 text-white px-4 py-2">
                Organic Certified
              </Badge>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
