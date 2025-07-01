
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, AlertTriangle, FileText, Calendar, Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Compliance = () => {
  const complianceData = [
    { month: "Jan", compliant: 85, nonCompliant: 15 },
    { month: "Feb", compliant: 88, nonCompliant: 12 },
    { month: "Mar", compliant: 92, nonCompliant: 8 },
    { month: "Apr", compliant: 89, nonCompliant: 11 },
    { month: "May", compliant: 94, nonCompliant: 6 },
    { month: "Jun", compliant: 96, nonCompliant: 4 }
  ];

  const regulatoryAreas = [
    { name: "Food Safety", value: 25, color: "#22c55e" },
    { name: "Environmental", value: 20, color: "#3b82f6" },
    { name: "Labor Standards", value: 18, color: "#f59e0b" },
    { name: "Animal Welfare", value: 17, color: "#ef4444" },
    { name: "Other", value: 20, color: "#8b5cf6" }
  ];

  const complianceModules = [
    {
      title: "Regulatory Standards",
      description: "Manage compliance with local and federal regulations",
      icon: ShieldCheck,
      href: "/compliance/standards",
      color: "bg-blue-500",
      status: "Active"
    },
    {
      title: "Audit Management",
      description: "Schedule and track compliance audits",
      icon: FileText,
      href: "/compliance/audits",
      color: "bg-green-500",
      status: "Active"
    },
    {
      title: "Documentation",
      description: "Store and organize compliance documents",
      icon: FileText,
      href: "/compliance/documentation",
      color: "bg-purple-500",
      status: "Active"
    },
    {
      title: "Training Records",
      description: "Track compliance training and certifications",
      icon: Users,
      href: "/compliance/training",
      color: "bg-orange-500",
      status: "Active"
    },
    {
      title: "Inspection Reports",
      description: "Manage inspection reports and follow-ups",
      icon: CheckCircle,
      href: "/compliance/inspections",
      color: "bg-indigo-500",
      status: "Active"
    },
    {
      title: "Non-Compliance Tracking",
      description: "Track and resolve non-compliance issues",
      icon: AlertTriangle,
      href: "/compliance/non-compliance",
      color: "bg-red-500",
      status: "Active"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      title: "Food Safety Certification Expiring",
      description: "HACCP certification expires in 30 days",
      priority: "High",
      dueDate: "2024-07-15",
      status: "Pending"
    },
    {
      id: 2,
      title: "Environmental Audit Due",
      description: "Annual environmental compliance audit scheduled",
      priority: "Medium",
      dueDate: "2024-08-01",
      status: "Scheduled"
    },
    {
      id: 3,
      title: "Labor Training Required",
      description: "5 employees need safety training updates",
      priority: "Medium",
      dueDate: "2024-07-20",
      status: "In Progress"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Regulatory Compliance</h1>
            <p className="text-gray-600">Monitor and manage farm compliance requirements</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <FileText className="h-4 w-4 mr-2" />
            New Compliance Record
          </Button>
        </div>

        {/* Compliance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Compliance Rate</p>
                  <p className="text-3xl font-bold text-green-600">96%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Issues</p>
                  <p className="text-3xl font-bold text-red-600">4</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Upcoming Audits</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Certifications</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <ShieldCheck className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Trends</CardTitle>
              <CardDescription>Monthly compliance rates</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={complianceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="compliant" fill="#22c55e" name="Compliant" />
                  <Bar dataKey="nonCompliant" fill="#ef4444" name="Non-Compliant" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regulatory Areas</CardTitle>
              <CardDescription>Distribution of compliance requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={regulatoryAreas}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {regulatoryAreas.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Alerts</CardTitle>
            <CardDescription>Recent compliance notifications and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <div>
                      <h4 className="font-medium">{alert.title}</h4>
                      <p className="text-sm text-gray-500">{alert.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">Due: {alert.dueDate}</p>
                      <Badge variant={alert.priority === 'High' ? 'destructive' : 'secondary'}>
                        {alert.priority}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceModules.map((module) => (
            <Link key={module.title} to={module.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${module.color} p-3 rounded-lg`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                      <Badge variant="default" className="mt-2">
                        {module.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Compliance;
