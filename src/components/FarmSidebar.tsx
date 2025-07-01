
import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  Home,
  Sprout,
  Beef,
  Fish,
  Truck,
  Package,
  CloudRain,
  Bot,
  DollarSign,
  Users,
  ShieldCheck,
  Leaf,
  BarChart3,
  Settings,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Farm Profile", href: "/farm-profile", icon: Settings },
  { name: "Crop Management", href: "/crops", icon: Sprout },
  { name: "Livestock", href: "/livestock", icon: Beef },
  { name: "Aquaculture", href: "/aquaculture", icon: Fish },
  { name: "Equipment", href: "/equipment", icon: Truck },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Weather", href: "/weather", icon: CloudRain },
  { name: "AI Assistant", href: "/ai-assistant", icon: Bot },
  { name: "Finances", href: "/finance", icon: DollarSign },
  { name: "Marketing", href: "/marketing", icon: BarChart3 },
  { name: "Human Resources", href: "/hr", icon: Users },
  { name: "Compliance", href: "/compliance", icon: ShieldCheck },
  { name: "Sustainability", href: "/sustainability", icon: Leaf },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
]

export function FarmSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-farm-green rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-gray-900">Smart Farmer</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-gray-100"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                isActive
                  ? "bg-farm-green text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )
            }
          >
            <item.icon
              className={cn(
                "flex-shrink-0 w-5 h-5",
                collapsed ? "mx-auto" : "mr-3"
              )}
            />
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            Smart Farmer v1.0
          </div>
        </div>
      )}
    </div>
  )
}
