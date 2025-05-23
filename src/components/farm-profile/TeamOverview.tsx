
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Phone, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Robert Johnson",
    role: "Farm Owner & Operations Manager",
    email: "robert@greenvalleyorganic.com",
    phone: "(707) 555-0123",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Management",
    experience: "35+ years"
  },
  {
    name: "Maria Rodriguez",
    role: "Crop Production Supervisor",
    email: "maria@greenvalleyorganic.com",
    phone: "(707) 555-0124",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Crop Management",
    experience: "12 years"
  },
  {
    name: "David Chen",
    role: "Livestock Manager",
    email: "david@greenvalleyorganic.com",
    phone: "(707) 555-0125",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Livestock",
    experience: "8 years"
  },
  {
    name: "Sarah Thompson",
    role: "Organic Certification Coordinator",
    email: "sarah@greenvalleyorganic.com",
    phone: "(707) 555-0126",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Compliance",
    experience: "6 years"
  },
  {
    name: "Michael Foster",
    role: "Equipment & Maintenance Supervisor",
    email: "michael@greenvalleyorganic.com",
    phone: "(707) 555-0127",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Equipment",
    experience: "15 years"
  },
  {
    name: "Lisa Park",
    role: "Sales & Marketing Manager",
    email: "lisa@greenvalleyorganic.com",
    phone: "(707) 555-0128",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    department: "Sales",
    experience: "9 years"
  }
]

export function TeamOverview() {
  return (
    <Card className="card-shadow hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-farm-green">
          <Users className="h-5 w-5" />
          Team Directory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover-scale">
              <div className="flex items-start gap-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {member.department}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-3 w-3" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-3 w-3" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
