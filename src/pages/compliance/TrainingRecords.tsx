
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Award, BookOpen, Calendar, Plus, Search } from "lucide-react";

const TrainingRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const trainingRecords = [
    {
      id: 1,
      employee: "John Smith",
      trainingTitle: "Food Safety Certification",
      category: "Food Safety",
      completionDate: "2024-03-15",
      expiryDate: "2025-03-15",
      status: "Active",
      score: 95,
      certificationBody: "SafeFood Institute"
    },
    {
      id: 2,
      employee: "Maria Garcia",
      trainingTitle: "OSHA Safety Training",
      category: "Safety",
      completionDate: "2024-04-10",
      expiryDate: "2025-04-10",
      status: "Active",
      score: 88,
      certificationBody: "OSHA Training Center"
    },
    {
      id: 3,
      employee: "David Johnson",
      trainingTitle: "Pesticide Application License",
      category: "Operations",
      completionDate: "2024-01-20",
      expiryDate: "2024-07-20",
      status: "Expiring Soon",
      score: 92,
      certificationBody: "State Agriculture Dept"
    },
    {
      id: 4,
      employee: "Sarah Wilson",
      trainingTitle: "Environmental Compliance",
      category: "Environmental",
      completionDate: "2024-05-05",
      expiryDate: "2026-05-05",
      status: "Active",
      score: 90,
      certificationBody: "Green Training Corp"
    }
  ];

  const trainingCategories = ["Food Safety", "Safety", "Environmental", "Operations", "Quality Control"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Expiring Soon': return 'destructive';
      case 'Expired': return 'secondary';
      default: return 'secondary';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Training Records</h1>
            <p className="text-gray-600">Track compliance training and certifications</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Training Record
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Records</p>
                  <p className="text-3xl font-bold">{trainingRecords.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Certifications</p>
                  <p className="text-3xl font-bold text-green-600">
                    {trainingRecords.filter(r => r.status === 'Active').length}
                  </p>
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {trainingRecords.filter(r => r.status === 'Expiring Soon').length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-3xl font-bold text-purple-600">91%</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Training Form */}
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Add Training Record</CardTitle>
              <CardDescription>Record a new training completion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="employee">Employee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="maria">Maria Garcia</SelectItem>
                      <SelectItem value="david">David Johnson</SelectItem>
                      <SelectItem value="sarah">Sarah Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="trainingTitle">Training Title</Label>
                  <Input id="trainingTitle" placeholder="Enter training title" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainingCategories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="completionDate">Completion Date</Label>
                  <Input id="completionDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="score">Score (%)</Label>
                  <Input id="score" type="number" min="0" max="100" placeholder="Enter score" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="certificationBody">Certification Body</Label>
                  <Input id="certificationBody" placeholder="Training provider or certification body" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Add Record
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle>Search Training Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by employee or training title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Training Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Training Compliance Overview</CardTitle>
            <CardDescription>Department-wise training completion status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Food Safety Training</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-32" />
                  <span className="text-sm text-gray-600">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Safety Training</span>
                <div className="flex items-center space-x-2">
                  <Progress value={92} className="w-32" />
                  <span className="text-sm text-gray-600">92%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Environmental Training</span>
                <div className="flex items-center space-x-2">
                  <Progress value={78} className="w-32" />
                  <span className="text-sm text-gray-600">78%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Operations Training</span>
                <div className="flex items-center space-x-2">
                  <Progress value={88} className="w-32" />
                  <span className="text-sm text-gray-600">88%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Records Table */}
        <Card>
          <CardHeader>
            <CardTitle>Training Records</CardTitle>
            <CardDescription>
              Complete list of employee training and certifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Training</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Completion Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trainingRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div className="font-medium">{record.employee}</div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{record.trainingTitle}</div>
                        <div className="text-sm text-gray-500">{record.certificationBody}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{record.category}</Badge>
                    </TableCell>
                    <TableCell>{record.completionDate}</TableCell>
                    <TableCell>{record.expiryDate}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${getScoreColor(record.score)}`}>
                        {record.score}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Certificate
                        </Button>
                        <Button variant="outline" size="sm">
                          Renew
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

export default TrainingRecords;
