
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, CheckCircle } from "lucide-react"

const certifications = [
  {
    name: "USDA Organic",
    status: "Active",
    issueDate: "2021-03-15",
    expiryDate: "2025-03-15",
    authority: "CCOF",
    color: "bg-growth-green"
  },
  {
    name: "California Sustainable Winegrowing",
    status: "Active",
    issueDate: "2022-01-10",
    expiryDate: "2025-01-10",
    authority: "CSWP",
    color: "bg-ocean-blue"
  },
  {
    name: "Global GAP",
    status: "Active",
    issueDate: "2023-06-20",
    expiryDate: "2026-06-20",
    authority: "SCS Global",
    color: "bg-harvest-gold"
  },
  {
    name: "Rainforest Alliance",
    status: "Pending Renewal",
    issueDate: "2020-08-15",
    expiryDate: "2024-08-15",
    authority: "RA-Cert",
    color: "bg-sunshine-yellow"
  }
]

export function CertificationBadges() {
  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-farm-green">
          <Award className="h-5 w-5" />
          Certifications & Standards
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-600">Issued by {cert.authority}</p>
              </div>
              <Badge 
                variant={cert.status === "Active" ? "default" : "secondary"}
                className={cert.status === "Active" ? "bg-growth-green hover:bg-growth-green/90" : ""}
              >
                {cert.status === "Active" && <CheckCircle className="h-3 w-3 mr-1" />}
                {cert.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="flex items-center gap-1 text-gray-600 mb-1">
                  <Calendar className="h-3 w-3" />
                  <span>Issued</span>
                </div>
                <div className="font-mono">{new Date(cert.issueDate).toLocaleDateString()}</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gray-600 mb-1">
                  <Calendar className="h-3 w-3" />
                  <span>Expires</span>
                </div>
                <div className="font-mono">{new Date(cert.expiryDate).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
