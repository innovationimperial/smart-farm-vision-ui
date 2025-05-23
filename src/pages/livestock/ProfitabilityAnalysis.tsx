import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Download, FileText, Plus, DollarSign, TrendingUp, Calendar } from "lucide-react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const profitabilityFormSchema = z.object({
  totalRevenue: z.string().min(1, "Total revenue is required"),
  totalCosts: z.string().min(1, "Total costs are required"),
  revenueStreams: z.string().optional(),
  costBreakdown: z.string().optional(),
  marketAnalysis: z.string().optional(),
  riskAssessment: z.string().optional(),
})

type ProfitabilityFormValues = z.infer<typeof profitabilityFormSchema>

const defaultValues: Partial<ProfitabilityFormValues> = {
  revenueStreams: "Livestock Sales",
  costBreakdown: "Feed, Vet, Labor",
  marketAnalysis: "Stable demand",
  riskAssessment: "Disease outbreak",
}

// Sample data for demonstration
const historicalAnalysis = [
  {
    period: "2025 Q1",
    revenue: "$25,500.00",
    costs: "$18,200.00",
    profit: "$7,300.00",
    margin: "28.63%"
  },
  {
    period: "2024 Q4",
    revenue: "$22,800.00",
    costs: "$16,500.00",
    profit: "$6,300.00",
    margin: "27.63%"
  },
  {
    period: "2024 Q3",
    revenue: "$21,200.00",
    costs: "$15,000.00",
    profit: "$6,200.00",
    margin: "29.25%"
  },
  {
    period: "2024 Q2",
    revenue: "$20,000.00",
    costs: "$14,000.00",
    profit: "$6,000.00",
    margin: "30.00%"
  }
]

export default function ProfitabilityAnalysis() {
  const { toast } = useToast()
  
  const form = useForm<ProfitabilityFormValues>({
    resolver: zodResolver(profitabilityFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfitabilityFormValues) {
    // Convert string values to numbers for calculations
    const totalRevenue = parseFloat(data.totalRevenue) || 0
    const totalCosts = parseFloat(data.totalCosts) || 0
    const netProfit = totalRevenue - totalCosts
    const profitMargin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(2) : "0"
    
    toast({
      title: "Profitability Analysis Updated",
      description: `Net profit: $${netProfit.toFixed(2)} (${profitMargin}% margin)`,
    })
    console.log(data)
  }

  function handleExport() {
    toast({
      title: "Exporting Analysis",
      description: "Your profitability analysis is being exported to CSV.",
    })
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profitability Analysis</h1>
            <p className="text-gray-600 mt-2">Analyze the financial performance of your livestock operations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Analysis
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Analysis
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue (Month)</p>
                  <h3 className="text-2xl font-bold">$25,500.00</h3>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </div>
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Costs (Month)</p>
                  <h3 className="text-2xl font-bold">$18,200.00</h3>
                  <p className="text-xs text-red-600">+8% from last month</p>
                </div>
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Net Profit (Month)</p>
                  <h3 className="text-2xl font-bold">$7,300.00</h3>
                  <p className="text-xs text-green-600">+20% from last month</p>
                </div>
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Profit Margin (Month)</p>
                  <h3 className="text-2xl font-bold">28.63%</h3>
                  <p className="text-xs text-green-600">+5% from last month</p>
                </div>
                <FileText className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Historical Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Historical Profitability Analysis</CardTitle>
            <CardDescription>Trends in revenue, costs, and profit margins over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 bg-slate-50 p-3 text-sm font-medium text-slate-600">
                <div>Period</div>
                <div>Revenue</div>
                <div>Costs</div>
                <div>Profit</div>
                <div>Margin</div>
              </div>
              <div className="divide-y">
                {historicalAnalysis.map((analysis) => (
                  <div key={analysis.period} className="grid grid-cols-5 p-3 text-sm">
                    <div className="font-medium">{analysis.period}</div>
                    <div>{analysis.revenue}</div>
                    <div>{analysis.costs}</div>
                    <div>{analysis.profit}</div>
                    <div>{analysis.margin}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Analysis Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Create New Profitability Analysis
            </CardTitle>
            <CardDescription>Enter details to calculate profitability metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="totalRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Revenue ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormDescription>
                          Income from livestock sales and other sources
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="totalCosts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Costs ($)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" placeholder="0.00" {...field} />
                        </FormControl>
                        <FormDescription>
                          Expenses including feed, vet, and labor
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="revenueStreams"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Revenue Streams</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Livestock Sales, Milk Production" {...field} />
                        </FormControl>
                        <FormDescription>
                          Sources of income for the livestock operation
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="costBreakdown"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cost Breakdown</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Feed, Veterinary, Labor" {...field} />
                        </FormControl>
                        <FormDescription>
                          Major cost categories in the operation
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="marketAnalysis"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Market Analysis</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Stable demand, Growing market" {...field} />
                        </FormControl>
                        <FormDescription>
                          Current market conditions and trends
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="riskAssessment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Risk Assessment</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Disease outbreak, Price volatility" {...field} />
                        </FormControl>
                        <FormDescription>
                          Potential risks and challenges to profitability
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit">Calculate Profitability</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
