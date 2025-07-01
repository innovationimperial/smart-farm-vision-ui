
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Leaf, Plus, TrendingDown, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const CarbonFootprint = () => {
  const [showEmissionForm, setShowEmissionForm] = useState(false);

  const emissionData = [
    { month: "Jan", total: 120, fuel: 45, electricity: 30, livestock: 25, transport: 20 },
    { month: "Feb", total: 115, fuel: 42, electricity: 28, livestock: 25, transport: 20 },
    { month: "Mar", total: 110, fuel: 40, electricity: 26, livestock: 24, transport: 20 },
    { month: "Apr", total: 105, fuel: 38, electricity: 25, livestock: 22, transport: 20 },
    { month: "May", total: 100, fuel: 35, electricity: 23, livestock: 22, transport: 20 },
    { month: "Jun", total: 95, fuel: 32, electricity: 21, livestock: 22, transport: 20 }
  ];

  const offsetProjects = [
    {
      id: 1,
      name: "Solar Panel Installation",
      type: "Renewable Energy",
      offsetAmount: 50,
      status: "Active",
      startDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Tree Planting Initiative",
      type: "Reforestation",
      offsetAmount: 30,
      status: "Completed",
      startDate: "2024-03-01"
    },
    {
      id: 3,
      name: "Biogas Digester",
      type: "Waste Management",
      offsetAmount: 25,
      status: "Planning",
      startDate: "2024-08-01"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Carbon Footprint Management</h1>
            <p className="text-gray-600">Track and reduce your farm's carbon emissions</p>
          </div>
          <Button 
            onClick={() => setShowEmissionForm(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Record Emissions
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Emissions</p>
                  <p className="text-3xl font-bold">95 tons</p>
                  <p className="text-sm text-green-600">-21% this month</p>
                </div>
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Carbon Offset</p>
                  <p className="text-3xl font-bold">105 tons</p>
                  <p className="text-sm text-green-600">+10 tons offset</p>
                </div>
                <TrendingDown className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Impact</p>
                  <p className="text-3xl font-bold text-green-600">Carbon Negative</p>
                  <p className="text-sm text-green-600">-10 tons CO2</p>
                </div>
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Reduction Target</p>
                  <p className="text-3xl font-bold">25%</p>
                  <p className="text-sm text-orange-600">68% achieved</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emission Recording Form */}
        {showEmissionForm && (
          <Card>
            <CardHeader>
              <CardTitle>Record Carbon Emissions</CardTitle>
              <CardDescription>Add new emission data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="emissionSource">Emission Source</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fuel">Fuel Consumption</SelectItem>
                      <SelectItem value="electricity">Electricity</SelectItem>
                      <SelectItem value="livestock">Livestock</SelectItem>
                      <SelectItem value="transport">Transportation</SelectItem>
                      <SelectItem value="fertilizer">Fertilizers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount (tons CO2)</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowEmissionForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Record Emission
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Emission Trends</CardTitle>
              <CardDescription>Monthly carbon emission tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={emissionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="total" stroke="#ef4444" name="Total Emissions" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emission Sources</CardTitle>
              <CardDescription>Breakdown by emission source</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={emissionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="fuel" stackId="a" fill="#ef4444" name="Fuel" />
                  <Bar dataKey="electricity" stackId="a" fill="#f59e0b" name="Electricity" />
                  <Bar dataKey="livestock" stackId="a" fill="#10b981" name="Livestock" />
                  <Bar dataKey="transport" stackId="a" fill="#3b82f6" name="Transport" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Carbon Offset Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Carbon Offset Projects</CardTitle>
            <CardDescription>Active and planned carbon offset initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {offsetProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-gray-500">{project.type}</p>
                    <p className="text-sm text-gray-500">Started: {project.startDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{project.offsetAmount} tons CO2</p>
                    <Badge variant={
                      project.status === 'Active' ? 'default' : 
                      project.status === 'Completed' ? 'default' : 'secondary'
                    }>
                      {project.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CarbonFootprint;
