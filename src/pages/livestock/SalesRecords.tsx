import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Download, FileText, Plus, DollarSign, Store, TrendingUp } from "lucide-react"
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

const salesFormSchema = z.object({
  saleDate: z.date({
    required_error: "Sale date is required",
  }),
  buyerName: z.string().min(1, "Buyer name is required"),
  buyerContact: z.string().min(1, "Buyer contact information is required"),
  animalIds: z.string().min(1, "Animal ID(s) are required"),
  saleWeight: z.string().min(1, "Sale weight is required"),
  pricePerUnit: z.string().min(1, "Price per unit is required"),
  commissionFees: z.string().optional(),
  transportationCosts: z.string().optional(),
  netProceeds: z.string().min(1, "Net proceeds is required"),
  marketConditions: z.string().optional(),
  paymentTerms: z.string().optional(),
  paymentStatus: z.string().min(1, "Payment status is required"),
})

type SalesFormValues = z.infer<typeof salesFormSchema>

const defaultValues: Partial<SalesFormValues> = {
  saleDate: new Date(),
  commissionFees: "0",
  transportationCosts: "0",
  marketConditions: "Stable",
  paymentTerms: "Immediate",
  paymentStatus: "Paid"
}

// Sample data for demonstration
const recentSales = [
  {
    id: "SA-2023-001",
    date: "2025-05-15",
    buyer: "Midwest Meat Processing",
    animals: "5 cattle",
    amount: "$6,540.00",
    status: "Paid"
  },
  {
    id: "SA-2023-002",
    date: "2025-05-10",
    buyer: "Local Farmers Market",
    animals: "200 eggs",
    amount: "$320.00",
    status: "Paid"
  },
  {
    id: "SA-2023-003",
    date: "2025-05-05",
    buyer: "Greene Valley Dairy",
    animals: "250 gallons milk",
    amount: "$875.00", 
    status: "Pending"
  },
  {
    id: "SA-2023-004",
    date: "2025-04-28",
    buyer: "Johnson Family Farms",
    animals: "2 breeding heifers",
    amount: "$2,400.00",
    status: "Paid"
  }
]

export default function SalesRecords() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  
  const form = useForm<SalesFormValues>({
    resolver: zodResolver(salesFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: SalesFormValues) {
    toast({
      title: "Sales Record Added",
      description: `Sale to ${data.buyerName} has been recorded.`,
    })
    console.log(data)
    form.reset(defaultValues)
  }

  function handleExport() {
    toast({
      title: "Exporting Records",
      description: "Your sales records are being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sales Records</h1>
            <p className="text-gray-600 mt-2">Track and manage livestock sales information</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Records
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Sale
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Sales (Month)</p>
                  <h3 className="text-2xl font-bold">$10,135.00</h3>
                  <p className="text-xs text-green-600">+15% from last month</p>
                </div>
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Animals Sold (Month)</p>
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-xs text-green-600">+3 from last month</p>
                </div>
                <Store className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Price per Animal</p>
                  <h3 className="text-2xl font-bold">$844.58</h3>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </div>
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                  <h3 className="text-2xl font-bold">$875.00</h3>
                  <p className="text-xs text-yellow-600">1 pending transaction</p>
                </div>
                <CalendarIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>Records of the most recent livestock sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-6 bg-slate-50 p-3 text-sm font-medium text-slate-600">
                <div>Sale ID</div>
                <div>Date</div>
                <div>Buyer</div>
                <div>Animals</div>
                <div>Amount</div>
                <div>Status</div>
              </div>
              <div className="divide-y">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="grid grid-cols-6 p-3 text-sm">
                    <div className="font-medium">{sale.id}</div>
                    <div>{sale.date}</div>
                    <div>{sale.buyer}</div>
                    <div>{sale.animals}</div>
                    <div>{sale.amount}</div>
                    <div>
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        sale.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      )}>
                        {sale.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Sale Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Record New Sale
            </CardTitle>
            <CardDescription>Enter details about a new livestock sale</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="saleDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Sale Date</FormLabel>
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
                    name="animalIds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Animal ID(s)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., C001, C002, C003" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter comma-separated IDs of sold animals
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="buyerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Buyer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter buyer name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="buyerContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Buyer Contact Information</FormLabel>
                        <FormControl>
                          <Input placeholder="Email or phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="saleWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sale Weight (lbs)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pricePerUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price per Unit ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="commissionFees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Commission/Marketing Fees ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="transportationCosts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transportation Costs ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="netProceeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Net Proceeds ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="marketConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Market Conditions</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select market condition" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Strong">Strong</SelectItem>
                            <SelectItem value="Stable">Stable</SelectItem>
                            <SelectItem value="Weak">Weak</SelectItem>
                            <SelectItem value="Volatile">Volatile</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paymentTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Terms</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment terms" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Immediate">Immediate</SelectItem>
                            <SelectItem value="Net 15">Net 15</SelectItem>
                            <SelectItem value="Net 30">Net 30</SelectItem>
                            <SelectItem value="Net 60">Net 60</SelectItem>
                            <SelectItem value="Custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paymentStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Paid">Paid</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Partial">Partial</SelectItem>
                            <SelectItem value="Overdue">Overdue</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit">Record Sale</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
