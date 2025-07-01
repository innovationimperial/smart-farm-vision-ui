
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const TimeAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const attendanceData = [
    { date: "Mon", present: 42, absent: 5, late: 3 },
    { date: "Tue", present: 45, absent: 3, late: 2 },
    { date: "Wed", present: 44, absent: 4, late: 2 },
    { date: "Thu", present: 46, absent: 2, late: 2 },
    { date: "Fri", present: 47, absent: 1, late: 2 },
    { date: "Sat", present: 35, absent: 12, late: 3 },
    { date: "Sun", present: 28, absent: 15, late: 7 }
  ];

  const timeRecords = [
    {
      id: 1,
      employee: "John Smith",
      department: "Field Operations",
      clockIn: "07:00 AM",
      clockOut: "4:30 PM",
      breakTime: "30 min",
      totalHours: 9.0,
      overtime: 1.0,
      status: "Present"
    },
    {
      id: 2,
      employee: "Maria Garcia",
      department: "Livestock",
      clockIn: "06:30 AM",
      clockOut: "3:00 PM", 
      breakTime: "45 min",
      totalHours: 8.25,
      overtime: 0.25,
      status: "Present"
    },
    {
      id: 3,
      employee: "David Johnson",
      department: "Equipment",
      clockIn: "08:15 AM",
      clockOut: "5:00 PM",
      breakTime: "30 min",
      totalHours: 8.25,
      overtime: 0.25,
      status: "Late"
    },
    {
      id: 4,
      employee: "Sarah Wilson",
      department: "Administration",
      clockIn: "-",
      clockOut: "-",
      breakTime: "-",
      totalHours: 0,
      overtime: 0,
      status: "Absent"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present': return 'default';
      case 'Late': return 'destructive';
      case 'Absent': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Present': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Late': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'Absent': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const totalPresent = timeRecords.filter(r => r.status === 'Present' || r.status === 'Late').length;
  const totalAbsent = timeRecords.filter(r => r.status === 'Absent').length;
  const totalHours = timeRecords.reduce((sum, record) => sum + record.totalHours, 0);
  const totalOvertime = timeRecords.reduce((sum, record) => sum + record.overtime, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Time & Attendance</h1>
            <p className="text-gray-600">Track employee working hours and attendance</p>
          </div>
          <div className="flex space-x-2">
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-40"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              <Clock className="h-4 w-4 mr-2" />
              Clock In/Out
            </Button>
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Present Today</p>
                  <p className="text-3xl font-bold text-green-600">{totalPresent}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Absent Today</p>
                  <p className="text-3xl font-bold text-red-600">{totalAbsent}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Hours</p>
                  <p className="text-3xl font-bold">{totalHours.toFixed(1)}</p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overtime Hours</p>
                  <p className="text-3xl font-bold">{totalOvertime.toFixed(1)}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Attendance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance Trends</CardTitle>
            <CardDescription>Attendance patterns over the week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="present" stroke="#22c55e" name="Present" strokeWidth={2} />
                <Line type="monotone" dataKey="absent" stroke="#ef4444" name="Absent" strokeWidth={2} />
                <Line type="monotone" dataKey="late" stroke="#f59e0b" name="Late" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Time Records Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Time Records - {selectedDate}</CardTitle>
            <CardDescription>
              Employee time tracking for selected date
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Clock In</TableHead>
                  <TableHead>Clock Out</TableHead>
                  <TableHead>Break Time</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead>Overtime</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timeRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div className="font-medium">{record.employee}</div>
                    </TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.clockIn}</TableCell>
                    <TableCell>{record.clockOut}</TableCell>
                    <TableCell>{record.breakTime}</TableCell>
                    <TableCell>{record.totalHours.toFixed(1)}h</TableCell>
                    <TableCell>
                      {record.overtime > 0 ? (
                        <span className="text-orange-600 font-medium">{record.overtime.toFixed(1)}h</span>
                      ) : (
                        <span>-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(record.status)}
                        <Badge variant={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
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

export default TimeAttendance;
