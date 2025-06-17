
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Upload, Download, Calendar, DollarSign, Tag, MapPin } from "lucide-react";
import { useState } from "react";

const ExpenseManagement = () => {
  const [selectedTab, setSelectedTab] = useState("add-expense");

  const expenseCategories = [
    "Seeds & Planting",
    "Fertilizers & Chemicals", 
    "Feed & Supplements",
    "Fuel & Energy",
    "Repairs & Maintenance",
    "Labor & Benefits",
    "Insurance",
    "Professional Services",
    "Marketing & Transportation",
    "Equipment Purchase",
    "Other"
  ];

  const paymentMethods = ["Cash", "Check", "Credit Card", "Bank Transfer", "ACH"];

  const recentExpenses = [
    {
      id: 1,
      date: "2024-01-15",
      description: "John Deere Fertilizer Spreader Repair",
      category: "Repairs & Maintenance",
      amount: 450.00,
      paymentMethod: "Credit Card",
      vendor: "John Deere Service",
      field: "North Field",
      status: "Paid",
      receiptAttached: true
    },
    {
      id: 2,
      date: "2024-01-14",
      description: "Diesel Fuel for Harvest Operations",
      category: "Fuel & Energy",
      amount: 1250.00,
      paymentMethod: "Credit Card",
      vendor: "Farm Fuel Co.",
      field: "All Fields",
      status: "Paid",
      receiptAttached: true
    },
    {
      id: 3,
      date: "2024-01-12",
      description: "Corn Seed for Spring Planting",
      category: "Seeds & Planting",
      amount: 2800.00,
      paymentMethod: "Check",
      vendor: "Pioneer Seeds",
      field: "East Field",
      status: "Pending",
      receiptAttached: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Expense Management</h1>
            <p className="text-gray-600 mt-2">Track and manage all farm-related expenses</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-red-600">$8,450</p>
                </div>
                <DollarSign className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">YTD Total</p>
                  <p className="text-2xl font-bold text-orange-600">$142,600</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">$5,200</p>
                </div>
                <Tag className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg/Month</p>
                  <p className="text-2xl font-bold text-blue-600">$11,883</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="add-expense">Add Expense</TabsTrigger>
            <TabsTrigger value="expense-list">Expense List</TabsTrigger>
            <TabsTrigger value="bulk-entry">Bulk Entry</TabsTrigger>
          </TabsList>

          {/* Add Expense Tab */}
          <TabsContent value="add-expense">
            <Card>
              <CardHeader>
                <CardTitle>Add New Expense</CardTitle>
                <CardDescription>Record a new farm expense with all relevant details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="expense-date">Date *</Label>
                      <Input
                        id="expense-date"
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <Label htmlFor="expense-category">Category *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select expense category" />
                        </SelectTrigger>
                        <SelectContent>
                          {expenseCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="expense-description">Description *</Label>
                      <Input
                        id="expense-description"
                        placeholder="Enter expense description"
                      />
                    </div>

                    <div>
                      <Label htmlFor="expense-amount">Amount *</Label>
                      <Input
                        id="expense-amount"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <Label htmlFor="payment-method">Payment Method</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          {paymentMethods.map((method) => (
                            <SelectItem key={method} value={method}>
                              {method}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="vendor">Vendor</Label>
                      <Input
                        id="vendor"
                        placeholder="Enter vendor name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="reference-number">Reference # (Check/Invoice)</Label>
                      <Input
                        id="reference-number"
                        placeholder="Enter reference number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="field-enterprise">Field/Enterprise</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select field or enterprise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north-field">North Field - Corn</SelectItem>
                          <SelectItem value="south-field">South Field - Soybeans</SelectItem>
                          <SelectItem value="east-field">East Field - Wheat</SelectItem>
                          <SelectItem value="livestock">Livestock Operation</SelectItem>
                          <SelectItem value="general">General Farm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="tax-deductible">Tax Deductible</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="partial">Partial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="attachments">Attachments</Label>
                      <Input
                        id="attachments"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <p className="text-sm text-gray-500 mt-1">Upload receipts, invoices, or other documents</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Additional notes or details about this expense"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button>Save Expense</Button>
                  <Button variant="outline">Save & Add Another</Button>
                  <Button variant="ghost">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Expense List Tab */}
          <TabsContent value="expense-list">
            <Card>
              <CardHeader>
                <CardTitle>Expense History</CardTitle>
                <CardDescription>View and manage all recorded expenses</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filter Controls */}
                <div className="flex space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search expenses..."
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {expenseCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>

                {/* Expense Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Date</th>
                        <th className="text-left py-3">Description</th>
                        <th className="text-left py-3">Category</th>
                        <th className="text-left py-3">Vendor</th>
                        <th className="text-left py-3">Field</th>
                        <th className="text-right py-3">Amount</th>
                        <th className="text-center py-3">Status</th>
                        <th className="text-center py-3">Receipt</th>
                        <th className="text-center py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentExpenses.map((expense) => (
                        <tr key={expense.id} className="border-b hover:bg-gray-50">
                          <td className="py-3">{expense.date}</td>
                          <td className="py-3">{expense.description}</td>
                          <td className="py-3">
                            <Badge variant="outline">{expense.category}</Badge>
                          </td>
                          <td className="py-3">{expense.vendor}</td>
                          <td className="py-3">{expense.field}</td>
                          <td className="py-3 text-right font-medium text-red-600">
                            ${expense.amount.toFixed(2)}
                          </td>
                          <td className="py-3 text-center">
                            <Badge variant={expense.status === "Paid" ? "default" : "secondary"}>
                              {expense.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-center">
                            {expense.receiptAttached ? (
                              <Badge variant="outline" className="text-green-600">✓</Badge>
                            ) : (
                              <Badge variant="outline" className="text-gray-400">✗</Badge>
                            )}
                          </td>
                          <td className="py-3 text-center">
                            <div className="flex space-x-1 justify-center">
                              <Button size="sm" variant="ghost">Edit</Button>
                              <Button size="sm" variant="ghost">Delete</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">Load More Expenses</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bulk Entry Tab */}
          <TabsContent value="bulk-entry">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Expense Entry</CardTitle>
                <CardDescription>Import multiple expenses from spreadsheet or enter in grid format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">Upload Expense File</p>
                    <p className="text-gray-600 mb-4">Drag and drop your CSV or Excel file here, or click to browse</p>
                    <Button>Choose File</Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported formats: CSV, XLSX. Maximum file size: 10MB
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600">Or use our spreadsheet-style grid</p>
                    <Button variant="outline" className="mt-2">Open Grid Entry</Button>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Template Download</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Download our template to ensure your data imports correctly
                      </p>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Template
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ExpenseManagement;
