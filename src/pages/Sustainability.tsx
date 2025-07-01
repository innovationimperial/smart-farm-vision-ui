
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Recycle, Sun, TreePine, TrendingUp, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Sustainability = () => {
  const carbonData = [
    { month: "Jan", emissions: 120, offset: 80 },
    { month: "Feb", emissions: 115, offset: 85 },
    { month: "Mar", emissions: 110, offset: 90 },
    { month: "Apr", emissions: 105, offset: 95 },
    { month: "May", emissions: 100, offset: 100 },
    { month: "Jun", emissions: 95, offset: 105 }
  ];

  const resourceUsage = [
    { name: "Water Conservation", value: 35, color: "#3b82f6" },
    { name: "Energy Efficiency", value: 28, color: "#10b981" },
    { name: "Waste Reduction", value: 22, color: "#f59e0b" },
    { name: "Soil Health", value: 15, color: "#8b5cf6" }
  ];

  const sustainabilityModules = [
    {
      title: "Carbon Footprint",
      description: "Track and reduce carbon emissions",
      icon: Leaf,
      href: "/sustainability/carbon-footprint",
      color: "bg-green-500",
      status: "Active"
    },
    {
      title: "Water Management",
      description: "Monitor water usage and conservation",
      icon: Droplets,
      href: "/sustainability/water-management",
      color: "bg-blue-500",
      status: "Active"
    },
    {
      title: "Waste Management",
      description: "Track waste reduction and recycling",
      icon: Recycle,
      href: "/sustainability/waste-management",
      color: "bg-orange-500",
      status: "Active"
    },
    {
      title: "Energy Efficiency",
      description: "Monitor renewable energy usage",
      icon: Sun,
      href: "/sustainability/energy-efficiency",
      color: "bg-yellow-500",
      status: "Active"
    },
    {
      title: "Biodiversity",
      description: "Track ecosystem health and wildlife",
      icon: TreePine,
      href: "/sustainability/biodiversity",
      color: "bg-emerald-500",
      status: "Active"
    },
    {
      title: "Certifications",
      description: "Manage sustainability certifications",
      icon: Award,
      href: "/sustainability/certifications",
      color: "bg-purple-500",
      status: "Active"
    }
  ];

  const sustainabilityGoals = [
    {
      id: 1,
      title: "Reduce Carbon Emissions by 25%",
      progress: 68,
      target: "2024-12-31",
      status: "On Track"
    },
    {
      id: 2,
      title: "Achieve 50% Renewable Energy",
      progress: 42,
      target: "2024-10-31",
      status: "Needs Attention"
    },
    {
      id: 3,
      title: "Zero Waste to Landfill",
      progress: 78,
      target: "2024-09-30",
      status: "On Track"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sustainability Dashboard</h1>
            <p className="text-gray-600">Monitor and improve your farm's environmental impact</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Target className="h-4 w-4 mr-2" />
            Set New Goal
          </Button>
        </div>

        {/* Sustainability Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Carbon Footprint</p>
                  <p className="text-3xl font-bold text-green-600">-15%</p>
                </div>
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Water Saved</p>
                  <p className="text-3xl font-bold text-blue-600">2.3M L</p>
                </div>
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Waste Diverted</p>
                  <p className="text-3xl font-bold text-orange-600">85%</p>
                </div>
                <Recycle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Renewable Energy</p>
                  <p className="text-3xl font-bold text-yellow-600">42%</p>
                </div>
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Emissions vs Offset</CardTitle>
              <CardDescription>Monthly tracking of emissions and carbon offset</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={carbonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="emissions" stroke="#ef4444" name="Emissions (tons)" />
                  <Line dataKey="offset" stroke="#22c55e" name="Offset (tons)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Conservation</CardTitle>
              <CardDescription>Distribution of sustainability efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={resourceUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {resourceUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Sustainability Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Sustainability Goals</CardTitle>
            <CardDescription>Track progress towards environmental targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sustainabilityGoals.map((goal) => (
                <div key={goal.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{goal.title}</h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{goal.progress}%</span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm text-gray-500">Target: {goal.target}</p>
                    <Badge variant={goal.status === 'On Track' ? 'default' : 'secondary'}>
                      {goal.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityModules.map((module) => (
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

export default Sustainability;
