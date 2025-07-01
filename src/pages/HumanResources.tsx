
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Calendar, DollarSign, FileText, Clock, Award, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const HumanResources = () => {
  const employeeData = [
    { month: "Jan", fullTime: 8, partTime: 12, seasonal: 5 },
    { month: "Feb", fullTime: 8, partTime: 10, seasonal: 3 },
    { month: "Mar", fullTime: 9, partTime: 15, seasonal: 8 },
    { month: "Apr", fullTime: 9, partTime: 18, seasonal: 15 },
    { month: "May", fullTime: 10, partTime: 20, seasonal: 25 },
    { month: "Jun", fullTime: 10, partTime: 22, seasonal: 30 }
  ];

  const departmentData = [
    { name: "Field Operations", value: 35, color: "#22c55e" },
    { name: "Livestock", value: 20, color: "#3b82f6" },
    { name: "Equipment", value: 15, color: "#f59e0b" },
    { name: "Administration", value: 12, color: "#ef4444" },
    { name: "Sales & Marketing", value: 18, color: "#8b5cf6" }
  ];

  const hrModules = [
    {
      title: "Employee Management",
      description: "Manage employee records and information",
      icon: Users,
      href: "/hr/employees",
      color: "bg-blue-500"
    },
    {
      title: "Payroll Management",
      description: "Process payroll and manage compensation",
      icon: DollarSign,
      href: "/hr/payroll",
      color: "bg-green-500"
    },
    {
      title: "Time & Attendance",
      description: "Track working hours and attendance",
      icon: Clock,
      href: "/hr/time-attendance",
      color: "bg-purple-500"
    },
    {
      title: "Training & Development",
      description: "Manage training programs and certifications",
      icon: Award,
      href: "/hr/training",
      color: "bg-orange-500"
    },
    {
      title: "Performance Management",
      description: "Track employee performance and reviews",
      icon: TrendingUp,
      href: "/hr/performance",
      color: "bg-indigo-500"
    },
    {
      title: "Safety & Compliance",
      description: "Manage safety training and compliance",
      icon: AlertTriangle,
      href: "/hr/safety",
      color: "bg-red-500"
    },
    {
      title: "Document Management",
      description: "Store and manage HR documents",
      icon: FileText,
      href: "/hr/documents",
      color: "bg-gray-500"
    },
    {
      title: "Recruitment",
      description: "Manage hiring and recruitment process",
      icon: UserPlus,
      href: "/hr/recruitment",
      color: "bg-teal-500"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Human Resources</h1>
            <p className="text-gray-600">Manage your farm workforce and HR operations</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* HR Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Employees</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Payroll</p>
                  <p className="text-3xl font-bold">$42K</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Training Complete</p>
                  <p className="text-3xl font-bold">89%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                  <p className="text-3xl font-bold">94%</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Employee Trends</CardTitle>
              <CardDescription>Workforce composition over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={employeeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="fullTime" fill="#22c55e" name="Full-Time" />
                  <Bar dataKey="partTime" fill="#3b82f6" name="Part-Time" />
                  <Bar dataKey="seasonal" fill="#f59e0b" name="Seasonal" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
              <CardDescription>Employees by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* HR Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hrModules.map((module) => (
            <Link key={module.title} to={module.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${module.color} p-3 rounded-lg`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{module.description}</p>
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

export default HumanResources;
