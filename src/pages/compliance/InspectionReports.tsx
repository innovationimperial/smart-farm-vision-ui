
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
import { CheckCircle, XCircle, AlertTriangle, FileText, Plus, Search, Eye } from "lucide-react";

const InspectionReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const inspectionReports = [
    {
      id: 1,
      title: "Food Safety Inspection",
      inspector: "Health Department - Jane Doe",
      inspectionDate: "2024-06-15",
      type: "Regulatory",
      status: "Passed",
      score: 95,
      findings: "Minor labeling issue in storage area",
      followUpRequired: true,
      followUpDate: "2024-07-15",
      area: "Food Processing"
    },
    {
      id: 2,
      title: "Environmental Compliance Check",
      inspector: "EPA - Robert Smith",
      inspectionDate: "2024-05-20",
      type: "Regulatory",
      status: "Passed",
      score: 88,
      findings: "Water discharge levels within acceptable limits",
      followUpRequired: false,
      followUpDate: null,
      area: "Waste Management"
    },
    {
      id: 3,
      title: "OSHA Safety Inspection",
      inspector: "OSHA - Michael Johnson",
      inspectionDate: "2024-04-10",
      type: "Safety",
      status: "Failed",
      score: 72,
      findings: "Missing safety guards on equipment, inadequate PPE storage",
      followUpRequired: true,
      followUpDate: "2024-05-10",
      area: "Equipment Operations"
    },
    {
      id: 4,
      title: "Internal Quality Audit",
      inspector: "Internal Team - Sarah Wilson",
      inspectionDate: "2024-06-01",
      type: "Internal",
      status: "Passed",
      score: 92,
      findings: "Documentation needs minor updates",
      followUpRequired: true,
      followUpDate: "2024-06-30",
      area: "Quality Control"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed': return 'default';
      case 'Failed': return 'destructive';
      case 'Conditional': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Passed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Failed': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Conditional': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default: return <FileText className="h-4 w-4 text-gray-600" />;
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
            <h1 className="text-3xl font-bold text-gray-900">Inspection Reports</h1>
            <p className="text-gray-600">Manage inspection reports and follow-ups</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Report
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Inspections</p>
                  <p className="text-3xl font-bold">{inspectionReports.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Passed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {inspectionReports.filter(r => r.status === 'Passed').length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Failed</p>
                  <p className="text-3xl font-bold text-red-600">
                    {inspectionReports.filter(r => r.status === 'Failed').length}
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
                  <p className="text-sm font-medium text-gray-600">Follow-ups Due</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {inspectionReports.filter(r => r.followUpRequired).length}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Report Form */}
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Add Inspection Report</CardTitle>
              <CardDescription>Record a new inspection report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="inspectionTitle">Inspection Title</Label>
                  <Input id="inspectionTitle" placeholder="Enter inspection title" />
                </div>
                <div>
                  <Label htmlFor="inspector">Inspector</Label>
                  <Input id="inspector" placeholder="Inspector name and organization" />
                </div>
                <div>
                  <Label htmlFor="inspectionDate">Inspection Date</Label>
                  <Input id="inspectionDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="inspectionType">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regulatory">Regulatory</SelectItem>
                      <SelectItem value="internal">Internal</SelectItem>
                      <SelectItem value="safety">Safety</SelectItem>
                      <SelectItem value="quality">Quality</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="inspectionArea">Area Inspected</Label>
                  <Input id="inspectionArea" placeholder="e.g., Food Processing, Equipment" />
                </div>
                <div>
                  <Label htmlFor="inspectionScore">Score (%)</Label>
                  <Input id="inspectionScore" type="number" min="0" max="100" placeholder="Enter score" />
                </div>
                <div>
                  <Label htmlFor="inspectionStatus">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passed">Passed</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="conditional">Conditional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="followUpDate">Follow-up Date (if required)</Label>
                  <Input id="followUpDate" type="date" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="findings">Findings</Label>
                  <Textarea 
                    id="findings" 
                    placeholder="Describe inspection findings, issues, and recommendations"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Add Report
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle>Search Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search inspection reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Inspection Reports Table */}
        <Card>
          <CardHeader>
            <CardTitle>Inspection Reports</CardTitle>
            <CardDescription>
              All inspection reports and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Inspection</TableHead>
                  <TableHead>Inspector</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Follow-up</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inspectionReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div className="font-medium">{report.title}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{report.inspector}</div>
                    </TableCell>
                    <TableCell>{report.inspectionDate}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{report.type}</Badge>
                    </TableCell>
                    <TableCell>{report.area}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${getScoreColor(report.score)}`}>
                        {report.score}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(report.status)}
                        <Badge variant={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      {report.followUpRequired ? (
                        <div className="text-sm">
                          <span className="text-orange-600">Due: {report.followUpDate}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {report.followUpRequired && (
                          <Button variant="outline" size="sm">
                            Follow-up
                          </Button>
                        )}
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

export default InspectionReports;
