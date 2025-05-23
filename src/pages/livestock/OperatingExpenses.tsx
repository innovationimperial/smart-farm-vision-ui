
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Download, FileText, Plus, DollarSign, Bolt, Stethoscope, Users, Wrench, Shield, Home } from "lucide-react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const expenseFormSchema = z.object({
  expenseDate: z.date({
    required_error: "Expense date is required",
  }),
  expenseType: z.string({
    required_error: "Expense type is required",
  }),
  animalGroupId: z.string().optional(),
  amount: z.string().min(1, "Amount is required"),
  description: z.string().min(1, "Description is required"),
  vendor: z.string().optional(),
  paymentMethod: z.string({
    required_error: "Payment method is required",
  }),
  receiptNumber: z.string().optional(),
  expensePeriod: z.string({
    required_error: "Expense period is required",
  }),
})

type ExpenseFormValues = z.infer<typeof expenseFormSchema>

const defaultValues: Partial<ExpenseFormValues> = {
  expenseDate: new Date(),
  expenseType: "Feed",
  paymentMethod: "Credit Card",
  expensePeriod: "Monthly",
}

// Sample data for demonstration
const recentExpenses = [
  {
    id: "EXP-2023-001",
    date: "2025-05-20",
    category: "Feed",
    description: "Premium Cattle Feed (2 tons)",
    amount: "$1,245.00"
  },
  {
    id: "EXP-2023-002",
    date: "2025-05-18",
    category: "Veterinary",
    description: "Monthly wellness check - all cattle",
    amount: "$475.00"
  },
  {
    id: "EXP-2023-003",
    date: "2025-05-15",
    category: "Utilities",
    description: "Electricity bill for barn",
    amount: "$320.00"
  },
  {
    id: "EXP-2023-004",
    date: "2025-05-12",
    category: "Labor",
    description: "Part-time help (80 hours)",
    amount: "$1,200.00"
  },
  {
    id: "EXP-2023-005",
    date: "2025-05-10",
    category: "Equipment",
    description: "Feed mixer repair",
    amount: "$350.00"
  }
]

// Sample expense categories data
const expenseCategories = [
  { name: "Feed", icon: <DollarSign className="h-4 w-4 text-green-500" />, amount: "$2,450.00", percent: "35%" },
  { name: "Veterinary", icon: <Stethoscope className="h-4 w-4 text-red-500" />, amount: "$950.00", percent: "15%" },
  { name: "Labor", icon: <Users className="h-4 w-4 text-blue-500" />, amount: "$1,800.00", percent: "28%" },
  { name: "Utilities", icon: <Bolt className="h-4 w-4 text-yellow-500" />, amount: "$620.00", percent: "10%" },
  { name: "Equipment", icon: <Wrench className="h-4 w-4 text-purple-500" />, amount: "$450.00", percent: "7%" },
  { name: "Insurance", icon: <Shield className="h-4 w-4 text-indigo-500" />, amount: "$200.00", percent: "3%" },
  { name: "Facilities", icon: <Home className="h-4 w-4 text-orange-500" />, amount: "$150.00", percent: "2%" },
]

export default function OperatingExpenses() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  
  const form = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ExpenseFormValues) {
    toast({
      title: "Expense Recorded",
      description: `${data.expenseType} expense of $${data.amount} has been recorded.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Records",
      description: "Your expense records are being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Operating Expenses</h1>
            <p className="text-gray-600 mt-2">Track and manage livestock operating costs</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Records
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Expense
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Expenses (Month)</p>
                  <h3 className="text-2xl font-bold">$6,620.00</h3>
                  <p className="text-xs text-yellow-600">+5% from last month</p>
                </div>
                <DollarSign className="h-5 w-5 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cost per Animal (Avg)</p>
                  <h3 className="text-2xl font-bold">$45.12</h3>
                  <p className="text-xs text-green-600">-2% from last month</p>
                </div>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Largest Expense</p>
                  <h3 className="text-2xl font-bold">Feed</h3>
                  <p className="text-xs text-gray-600">35% of total expenses</p>
                </div>
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Year (Total)</p>
                  <h3 className="text-2xl font-bold">$34,750.00</h3>
                  <p className="text-xs text-gray-600">Budget: $45,000.00</p>
                </div>
                <Calendar className="h-5 w-5 text-indigo-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expense Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
            <CardDescription>Current month expense categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseCategories.map((category) => (
                <div key={category.name} className="flex items-center">
                  <div className="w-12 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.amount} ({category.percent})</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: category.percent }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Expenses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>Latest livestock operating expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 bg-slate-50 p-3 text-sm font-medium text-slate-600">
                <div>ID</div>
                <div>Date</div>
                <div>Category</div>
                <div>Description</div>
                <div>Amount</div>
              </div>
              <div className="divide-y">
                {recentExpenses.map((expense) => (
                  <div key={expense.id} className="grid grid-cols-5 p-3 text-sm">
                    <div className="font-medium">{expense.id}</div>
                    <div>{expense.date}</div>
                    <div>{expense.category}</div>
                    <div>{expense.description}</div>
                    <div className="font-medium text-red-600">{expense.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Expense Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Record New Expense
            </CardTitle>
            <CardDescription>Enter details about a new operating expense</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="expenseDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Expense Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expenseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expense Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select expense category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Feed">Feed Costs</SelectItem>
                            <SelectItem value="Veterinary">Veterinary Expenses</SelectItem>
                            <SelectItem value="Labor">Labor Costs</SelectItem>
                            <SelectItem value="Utilities">Utilities</SelectItem>
                            <SelectItem value="Equipment">Equipment Maintenance</SelectItem>
                            <SelectItem value="Insurance">Insurance Costs</SelectItem>
                            <SelectItem value="Facility">Facility Repairs</SelectItem>
                            <SelectItem value="Other">Other Expenses</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="animalGroupId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Animal/Group ID (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., All Cattle, Dairy Cows, etc." {...field} />
                        </FormControl>
                        <FormDescription>
                          Specify which animals this expense relates to
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Describe the expense" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vendor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vendor/Supplier (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter vendor name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Cash">Cash</SelectItem>
                            <SelectItem value="Credit Card">Credit Card</SelectItem>
                            <SelectItem value="Check">Check</SelectItem>
                            <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="receiptNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Receipt/Invoice Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter receipt number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expensePeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expense Period</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select expense period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="One-time">One-time</SelectItem>
                            <SelectItem value="Daily">Daily</SelectItem>
                            <SelectItem value="Weekly">Weekly</SelectItem>
                            <SelectItem value="Monthly">Monthly</SelectItem>
                            <SelectItem value="Quarterly">Quarterly</SelectItem>
                            <SelectItem value="Annual">Annual</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit">Record Expense</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
