
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  iconColor?: string
  description?: string
  className?: string
}

export function DashboardCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = "text-farm-green",
  description,
  className
}: DashboardCardProps) {
  return (
    <Card className={cn("card-shadow hover-scale cursor-pointer", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <Icon className={cn("h-5 w-5", iconColor)} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-mono text-gray-900">{value}</div>
        {change && (
          <p className={cn(
            "text-xs mt-1 flex items-center",
            changeType === 'positive' ? "text-growth-green" : 
            changeType === 'negative' ? "text-tomato-red" : "text-gray-600"
          )}>
            {change}
          </p>
        )}
        {description && (
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
