
import { useState } from "react"
import { Bell, Search, User, MapPin, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function FarmHeader() {
  const [notifications] = useState(3)

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Farm info and search */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-farm-green" />
            <div>
              <h1 className="font-heading font-bold text-xl text-gray-900">Green Valley Farm</h1>
              <p className="text-sm text-gray-600">Riverside County, CA</p>
            </div>
          </div>
          
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search across your farm..."
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        {/* Right side - Weather, notifications, and profile */}
        <div className="flex items-center space-x-4">
          {/* Weather widget */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-sky-50 rounded-lg">
            <Sun className="w-5 h-5 text-sunshine-yellow" />
            <div className="text-sm">
              <span className="font-mono font-medium">72°F</span>
              <span className="text-gray-600 ml-1">Sunny</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-harvest-orange text-white text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>
          </div>

          {/* User profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-farm-green rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">John Smith</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white z-50">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>Farm Settings</DropdownMenuItem>
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
