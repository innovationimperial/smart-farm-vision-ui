
import { ReactNode } from "react"
import { FarmSidebar } from "./FarmSidebar"
import { FarmHeader } from "./FarmHeader"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <FarmSidebar />
      <div className="flex-1 flex flex-col">
        <FarmHeader />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
