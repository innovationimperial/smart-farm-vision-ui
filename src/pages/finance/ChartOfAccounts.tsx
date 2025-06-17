
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const ChartOfAccounts = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["assets", "income"]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const accountStructure = [
    {
      id: "assets",
      name: "ASSETS",
      type: "category",
      balance: "$284,500",
      children: [
        {
          id: "current-assets",
          name: "Current Assets",
          type: "subcategory",
          children: [
            { id: "1000", name: "Cash & Bank Accounts", type: "account", balance: "$45,280" },
            { id: "1100", name: "Accounts Receivable - Crop Sales", type: "account", balance: "$8,420" },
            { id: "1110", name: "Accounts Receivable - Livestock Sales", type: "account", balance: "$4,420" },
            { id: "1200", name: "Inventory - Seeds & Planting Materials", type: "account", balance: "$12,500" },
            { id: "1210", name: "Inventory - Fertilizers & Chemicals", type: "account", balance: "$18,200" },
            { id: "1220", name: "Inventory - Feed & Supplies", type: "account", balance: "$9,800" },
            { id: "1230", name: "Inventory - Fuel & Energy", type: "account", balance: "$5,600" },
            { id: "1240", name: "Inventory - Harvested Crops", type: "account", balance: "$45,000" },
            { id: "1250", name: "Inventory - Livestock", type: "account", balance: "$85,000" },
            { id: "1300", name: "Prepaid Expenses", type: "account", balance: "$8,500" }
          ]
        },
        {
          id: "fixed-assets",
          name: "Fixed Assets",
          type: "subcategory",
          children: [
            { id: "1500", name: "Land & Buildings", type: "account", balance: "$450,000" },
            { id: "1600", name: "Machinery & Equipment", type: "account", balance: "$125,000" },
            { id: "1700", name: "Vehicles", type: "account", balance: "$45,000" },
            { id: "1800", name: "Irrigation Systems", type: "account", balance: "$25,000" },
            { id: "1900", name: "Breeding Livestock", type: "account", balance: "$35,000" }
          ]
        }
      ]
    },
    {
      id: "liabilities",
      name: "LIABILITIES",
      type: "category",
      balance: "$158,200",
      children: [
        {
          id: "current-liabilities",
          name: "Current Liabilities",
          type: "subcategory",
          children: [
            { id: "2000", name: "Accounts Payable", type: "account", balance: "$12,500" },
            { id: "2100", name: "Short-term Loans", type: "account", balance: "$25,000" },
            { id: "2200", name: "Accrued Expenses", type: "account", balance: "$8,700" },
            { id: "2300", name: "Current Portion of Long-term Debt", type: "account", balance: "$15,000" }
          ]
        },
        {
          id: "long-term-liabilities",
          name: "Long-term Liabilities",
          type: "subcategory",
          children: [
            { id: "2500", name: "Equipment Loans", type: "account", balance: "$45,000" },
            { id: "2600", name: "Land Mortgages", type: "account", balance: "$52,000" }
          ]
        }
      ]
    },
    {
      id: "equity",
      name: "EQUITY",
      type: "category",
      balance: "$126,300",
      children: [
        { id: "3000", name: "Owner's Equity", type: "account", balance: "$100,000" },
        { id: "3100", name: "Retained Earnings", type: "account", balance: "$18,500" },
        { id: "3200", name: "Current Year Earnings", type: "account", balance: "$7,800" }
      ]
    },
    {
      id: "income",
      name: "INCOME",
      type: "category",
      balance: "$185,400",
      children: [
        { id: "4000", name: "Crop Sales Revenue", type: "account", balance: "$125,000" },
        { id: "4100", name: "Livestock Sales Revenue", type: "account", balance: "$45,000" },
        { id: "4200", name: "Government Subsidies & Grants", type: "account", balance: "$8,500" },
        { id: "4300", name: "Insurance Claims", type: "account", balance: "$3,200" },
        { id: "4400", name: "Custom Work Income", type: "account", balance: "$2,800" },
        { id: "4500", name: "Other Farm Income", type: "account", balance: "$900" }
      ]
    },
    {
      id: "expenses",
      name: "EXPENSES",
      type: "category",
      balance: "$142,600",
      children: [
        {
          id: "operating-expenses",
          name: "Operating Expenses",
          type: "subcategory",
          children: [
            { id: "5000", name: "Seeds & Planting", type: "account", balance: "$18,500" },
            { id: "5100", name: "Fertilizers & Chemicals", type: "account", balance: "$32,400" },
            { id: "5200", name: "Feed & Supplements", type: "account", balance: "$28,200" },
            { id: "5300", name: "Fuel & Energy", type: "account", balance: "$15,800" },
            { id: "5400", name: "Repairs & Maintenance", type: "account", balance: "$12,500" },
            { id: "5500", name: "Labor & Benefits", type: "account", balance: "$22,000" },
            { id: "5600", name: "Insurance", type: "account", balance: "$8,500" },
            { id: "5700", name: "Professional Services", type: "account", balance: "$3,200" },
            { id: "5800", name: "Marketing & Transportation", type: "account", balance: "$4,800" }
          ]
        },
        { id: "6000", name: "Depreciation", type: "account", balance: "$12,000" },
        { id: "6100", name: "Interest Expenses", type: "account", balance: "$4,700" }
      ]
    }
  ];

  const renderAccountItem = (item: any, level: number = 0) => {
    const isExpanded = expandedCategories.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <div 
          className={`flex items-center justify-between p-3 border-b hover:bg-gray-50 cursor-pointer ${
            level === 0 ? 'bg-gray-100 font-semibold' : 
            level === 1 ? 'bg-gray-50 font-medium' : ''
          }`}
          style={{ paddingLeft: `${(level * 20) + 12}px` }}
          onClick={() => hasChildren && toggleCategory(item.id)}
        >
          <div className="flex items-center space-x-3">
            {hasChildren ? (
              isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
            ) : <div className="w-4" />}
            <span className={item.type === 'account' ? 'text-gray-700' : 'text-gray-900'}>
              {item.type === 'account' && `${item.id} - `}{item.name}
            </span>
            {item.type === 'account' && (
              <Badge variant="outline" className="ml-2">Active</Badge>
            )}
          </div>
          <div className="flex items-center space-x-3">
            {item.balance && (
              <span className="font-mono text-right min-w-[100px]">{item.balance}</span>
            )}
            {item.type === 'account' && (
              <div className="flex space-x-1">
                <Button size="sm" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children.map((child: any) => renderAccountItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Chart of Accounts</h1>
            <p className="text-gray-600 mt-2">Manage your farm's financial account structure</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Account
          </Button>
        </div>

        {/* Search and Controls */}
        <Card>
          <CardContent className="p-4">
            <div className="flex space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search accounts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Export</Button>
              <Button variant="outline">Import</Button>
            </div>
          </CardContent>
        </Card>

        {/* Accounts Tree */}
        <Card>
          <CardHeader>
            <CardTitle>Account Structure</CardTitle>
            <CardDescription>
              Agricultural-focused chart of accounts for comprehensive farm financial management
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div>
              {accountStructure.map((category) => renderAccountItem(category))}
            </div>
          </CardContent>
        </Card>

        {/* Account Summary */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">$284,500</div>
              <div className="text-sm text-gray-600">Total Assets</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">$158,200</div>
              <div className="text-sm text-gray-600">Total Liabilities</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">$126,300</div>
              <div className="text-sm text-gray-600">Total Equity</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">$185,400</div>
              <div className="text-sm text-gray-600">Total Income</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">$142,600</div>
              <div className="text-sm text-gray-600">Total Expenses</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChartOfAccounts;
