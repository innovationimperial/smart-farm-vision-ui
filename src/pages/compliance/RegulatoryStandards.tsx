
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Plus, Search, Filter } from "lucide-react";

const RegulatoryStandards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const standards = [
    {
      id: 1,
      title: "HACCP Food Safety",
      category: "Food Safety",
      authority: "FDA",
      status: "Active",
      renewalDate: "2025-03-15",
      compliance: "Compliant",
      description: "Hazard Analysis Critical Control Points"
    },
    {
      id: 2,
      title: "Organic Certification",
      category: "Food Safety",
      authority: "USDA",
      status: "Active",
      renewalDate: "2024-12-31",
      compliance: "Compliant",
      description: "USDA Organic certification requirements"
    },
    {
      id: 3,
      title: "Water Quality Standards",
      category: "Environmental",
      authority: "EPA",
      status: "Active",
      renewalDate: "2024-09-30",
      compliance: "Non-Compliant",
      description: "Clean Water Act compliance"
    },
    {
      id: 4,
      title: "Worker Safety Standards",
      category: "Labor",
      authority: "OSHA",
      status: "Active",
      renewalDate: "2024-08-15",
      compliance: "Compliant",
      description: "Occupational safety and health standards"
    }
  ];

  const categories = ["Food Safety", "Environmental", "Labor", "Animal Welfare", "Other"];

  const getComplianceColor = (status: string) => {
    switch (status) {
      case 'Compliant': return 'default';
      case 'Non-Compliant': return 'destructive';
      case 'Pending': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Regulatory Standards</h1>
            <p className="text-gray-600">Manage compliance with regulatory requirements</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Standard
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Standards</p>
                  <p className="text-3xl font-bold">{standards.length}</p>
                </div>
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Compliant</p>
                  <p className="text-3xl font-bold text-green-600">
                    {standards.filter(s => s.compliance === 'Compliant').length}
                  </p>
                </div>
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Non-Compliant</p>
                  <p className="text-3xl font-bold text-red-600">
                    {standards.filter(s => s.compliance === 'Non-Compliant').length}
                  </p>
                </div>
                <ShieldCheck className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                  <p className="text-3xl font-bold text-orange-600">2</p>
                </div>
                <ShieldCheck className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Standard Form */}
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Add New Regulatory Standard</CardTitle>
              <CardDescription>Register a new compliance standard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Standard Title</Label>
                  <Input id="title" placeholder="Enter standard title" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="authority">Regulatory Authority</Label>
                  <Input id="authority" placeholder="e.g., FDA, USDA, EPA" />
                </div>
                <div>
                  <Label htmlFor="renewalDate">Renewal Date</Label>
                  <Input id="renewalDate" type="date" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the regulatory standard requirements"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Add Standard
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filter Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search standards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Standards Table */}
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Standards</CardTitle>
            <CardDescription>
              Overview of all regulatory standards and compliance status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Standard</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Authority</TableHead>
                  <TableHead>Renewal Date</TableHead>
                  <TableHead>Compliance Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standards.map((standard) => (
                  <TableRow key={standard.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{standard.title}</div>
                        <div className="text-sm text-gray-500">{standard.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{standard.category}</Badge>
                    </TableCell>
                    <TableCell>{standard.authority}</TableCell>
                    <TableCell>{standard.renewalDate}</TableCell>
                    <TableCell>
                      <Badge variant={getComplianceColor(standard.compliance)}>
                        {standard.compliance}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RegulatoryStandards;
