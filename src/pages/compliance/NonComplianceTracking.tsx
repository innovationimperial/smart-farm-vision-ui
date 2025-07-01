
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
import { AlertTriangle, XCircle, Clock, CheckCircle, Plus, Search } from "lucide-react";

const NonComplianceTracking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const nonComplianceIssues = [
    {
      id: 1,
      title: "Improper Chemical Storage",
      category: "Safety",
      severity: "High",
      identifiedDate: "2024-06-10",
      dueDate: "2024-07-10",
      status: "Open",
      assignedTo: "John Smith",
      description: "Chemicals stored without proper labeling and segregation",
      correctiveActions: "Implement proper labeling system and segregate incompatible chemicals",
      regulatoryBody: "OSHA"
    },
    {
      id: 2,
      title: "Missing Documentation",
      category: "Documentation",
      severity: "Medium",
      identifiedDate: "2024-05-15",
      dueDate: "2024-06-15",
      status: "In Progress",
      assignedTo: "Maria Garcia",
      description: "HACCP documentation incomplete for Q2 2024",
      correctiveActions: "Complete missing HACCP records and implement review process",
      regulatoryBody: "FDA"
    },
    {
      id: 3,
      title: "Water Quality Violation",
      category: "Environmental",
      severity: "High",
      identifiedDate: "2024-04-20",
      dueDate: "2024-05-20",
      status: "Resolved",
      assignedTo: "David Johnson",
      description: "Water discharge exceeded permitted levels",
      correctiveActions: "Installed additional filtration system and implemented monitoring",
      regulatoryBody: "EPA"
    },
    {
      id: 4,
      title: "Training Certification Expired",
      category: "Training",
      severity: "Low",
      identifiedDate: "2024-06-01",
      dueDate: "2024-07-01",
      status: "Overdue",
      assignedTo: "Sarah Wilson",
      description: "5 employees have expired safety certifications",
      correctiveActions: "Schedule renewal training sessions",
      regulatoryBody: "Internal"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'destructive';
      case 'In Progress': return 'secondary';
      case 'Resolved': return 'default';
      case 'Overdue': return 'outline';
      default: return 'secondary';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'In Progress': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Resolved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Overdue': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Non-Compliance Tracking</h1>
            <p className="text-gray-600">Track and resolve non-compliance issues</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Report Issue
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Issues</p>
                  <p className="text-3xl font-bold">{nonComplianceIssues.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Open Issues</p>
                  <p className="text-3xl font-bold text-red-600">
                    {nonComplianceIssues.filter(i => i.status === 'Open').length}
                  </p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {nonComplianceIssues.filter(i => i.status === 'In Progress').length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resolved</p>
                  <p className="text-3xl font-bold text-green-600">
                    {nonComplianceIssues.filter(i => i.status === 'Resolved').length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Issue Form */}
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Report Non-Compliance Issue</CardTitle>
              <CardDescription>Document a new non-compliance issue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="issueTitle">Issue Title</Label>
                  <Input id="issueTitle" placeholder="Brief description of the issue" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="safety">Safety</SelectItem>
                      <SelectItem value="environmental">Environmental</SelectItem>
                      <SelectItem value="documentation">Documentation</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="quality">Quality</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="severity">Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="assignedTo">Assigned To</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assignee" />
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
                  <Label htmlFor="regulatoryBody">Regulatory Body</Label>
                  <Input id="regulatoryBody" placeholder="e.g., OSHA, EPA, FDA" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Detailed description of the non-compliance issue"
                    rows={3}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="correctiveActions">Corrective Actions</Label>
                  <Textarea 
                    id="correctiveActions" 
                    placeholder="Planned corrective actions to resolve the issue"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Report Issue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle>Search Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search non-compliance issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Non-Compliance Issues Table */}
        <Card>
          <CardHeader>
            <CardTitle>Non-Compliance Issues</CardTitle>
            <CardDescription>
              Track all non-compliance issues and their resolution status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Issue</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Identified</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nonComplianceIssues.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{issue.title}</div>
                        <div className="text-sm text-gray-500">{issue.regulatoryBody}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{issue.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getSeverityColor(issue.severity)}>
                        {issue.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{issue.identifiedDate}</TableCell>
                    <TableCell>
                      <div className={issue.status === 'Overdue' ? 'text-red-600 font-medium' : ''}>
                        {issue.dueDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(issue.status)}
                        <Badge variant={getStatusColor(issue.status)}>
                          {issue.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{issue.assignedTo}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Update Status
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

export default NonComplianceTracking;
