
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
import { Calendar, FileText, Plus, Search } from "lucide-react";

const AuditManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showScheduleForm, setShowScheduleForm] = useState(false);

  const audits = [
    {
      id: 1,
      title: "Food Safety Audit",
      auditor: "SafeFood Inspections Inc.",
      type: "External",
      status: "Scheduled",
      scheduledDate: "2024-07-15",
      completedDate: null,
      findings: null,
      score: null
    },
    {
      id: 2,
      title: "Environmental Compliance Review",
      auditor: "Green Compliance Corp",
      type: "External",
      status: "Completed",
      scheduledDate: "2024-06-01",
      completedDate: "2024-06-03",
      findings: "2 minor issues identified",
      score: 92
    },
    {
      id: 3,
      title: "Internal Safety Audit",
      auditor: "Internal Team",
      type: "Internal",
      status: "In Progress",
      scheduledDate: "2024-06-15",
      completedDate: null,
      findings: null,
      score: null
    },
    {
      id: 4,
      title: "OSHA Compliance Audit",
      auditor: "Safety First Auditors",
      type: "External",
      status: "Completed",
      scheduledDate: "2024-05-10",
      completedDate: "2024-05-12",
      findings: "All requirements met",
      score: 98
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'In Progress': return 'secondary';
      case 'Scheduled': return 'outline';
      case 'Overdue': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Audit Management</h1>
            <p className="text-gray-600">Schedule and track compliance audits</p>
          </div>
          <Button 
            onClick={() => setShowScheduleForm(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Schedule Audit
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Audits</p>
                  <p className="text-3xl font-bold">{audits.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {audits.filter(a => a.status === 'Completed').length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {audits.filter(a => a.status === 'In Progress').length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-3xl font-bold text-purple-600">95</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Audit Form */}
        {showScheduleForm && (
          <Card>
            <CardHeader>
              <CardTitle>Schedule New Audit</CardTitle>
              <CardDescription>Plan a compliance audit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="auditTitle">Audit Title</Label>
                  <Input id="auditTitle" placeholder="Enter audit title" />
                </div>
                <div>
                  <Label htmlFor="auditor">Auditor</Label>
                  <Input id="auditor" placeholder="Auditor name or company" />
                </div>
                <div>
                  <Label htmlFor="auditType">Audit Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internal">Internal</SelectItem>
                      <SelectItem value="external">External</SelectItem>
                      <SelectItem value="regulatory">Regulatory</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="scheduledDate">Scheduled Date</Label>
                  <Input id="scheduledDate" type="date" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="auditScope">Audit Scope</Label>
                  <Textarea 
                    id="auditScope" 
                    placeholder="Describe the areas and processes to be audited"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setShowScheduleForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Schedule Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle>Search Audits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search audits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Audits Table */}
        <Card>
          <CardHeader>
            <CardTitle>Audit Schedule</CardTitle>
            <CardDescription>
              Overview of all scheduled and completed audits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Audit Title</TableHead>
                  <TableHead>Auditor</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Scheduled Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {audits.map((audit) => (
                  <TableRow key={audit.id}>
                    <TableCell>
                      <div className="font-medium">{audit.title}</div>
                    </TableCell>
                    <TableCell>{audit.auditor}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{audit.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        {audit.scheduledDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(audit.status)}>
                        {audit.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {audit.score ? (
                        <span className="font-medium">{audit.score}%</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {audit.status === 'Completed' && (
                          <Button variant="outline" size="sm">
                            View Report
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

export default AuditManagement;
