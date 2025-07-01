
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Download, Calculator, Calendar, Users, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PayrollManagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2024-06");
  
  const payrollData = [
    { month: "Jan", amount: 38500 },
    { month: "Feb", amount: 39200 },
    { month: "Mar", amount: 41800 },
    { month: "Apr", amount: 45200 },
    { month: "May", amount: 52600 },
    { month: "Jun", amount: 58400 }
  ];

  const payrollRecords = [
    {
      id: 1,
      employee: "John Smith",
      position: "Farm Manager",
      grossPay: 4583.33,
      overtime: 320.00,
      deductions: 1245.50,
      netPay: 3657.83,
      status: "Processed"
    },
    {
      id: 2,
      employee: "Maria Garcia", 
      position: "Livestock Supervisor",
      grossPay: 4000.00,
      overtime: 180.00,
      deductions: 1089.20,
      netPay: 3090.80,
      status: "Processed"
    },
    {
      id: 3,
      employee: "David Johnson",
      position: "Equipment Operator",
      grossPay: 3500.00,
      overtime: 425.00,
      deductions: 987.50,
      netPay: 2937.50,
      status: "Pending"
    }
  ];

  const totalGross = payrollRecords.reduce((sum, record) => sum + record.grossPay + record.overtime, 0);
  const totalNet = payrollRecords.reduce((sum, record) => sum + record.netPay, 0);
  const totalDeductions = payrollRecords.reduce((sum, record) => sum + record.deductions, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Payroll Management</h1>
            <p className="text-gray-600">Process and manage employee payroll</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Calculator className="h-4 w-4 mr-2" />
              Process Payroll
            </Button>
          </div>
        </div>

        {/* Payroll Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Gross Pay</p>
                  <p className="text-3xl font-bold">${totalGross.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Deductions</p>
                  <p className="text-3xl font-bold">${totalDeductions.toLocaleString()}</p>
                </div>
                <FileText className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Net Pay</p>
                  <p className="text-3xl font-bold">${totalNet.toLocaleString()}</p>
                </div>
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Employees</p>
                  <p className="text-3xl font-bold">{payrollRecords.length}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payroll Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Trends</CardTitle>
            <CardDescription>Monthly payroll expenses over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={payrollData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Payroll']} />
                <Bar dataKey="amount" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Payroll Period Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Period</CardTitle>
            <CardDescription>Select payroll period to view details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div>
                <Label htmlFor="period">Pay Period</Label>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-06">June 2024</SelectItem>
                    <SelectItem value="2024-05">May 2024</SelectItem>
                    <SelectItem value="2024-04">April 2024</SelectItem>
                    <SelectItem value="2024-03">March 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payroll Records Table */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Records - {selectedPeriod}</CardTitle>
            <CardDescription>
              Detailed payroll information for selected period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Gross Pay</TableHead>
                  <TableHead>Overtime</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Pay</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div className="font-medium">{record.employee}</div>
                    </TableCell>
                    <TableCell>{record.position}</TableCell>
                    <TableCell>${record.grossPay.toLocaleString()}</TableCell>
                    <TableCell>${record.overtime.toLocaleString()}</TableCell>
                    <TableCell>${record.deductions.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="font-semibold">${record.netPay.toLocaleString()}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={record.status === 'Processed' ? 'default' : 'secondary'}>
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
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

export default PayrollManagement;
