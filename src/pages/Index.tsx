
import { DashboardLayout } from "@/components/DashboardLayout"
import { DashboardCard } from "@/components/DashboardCard"
import { WeatherWidget } from "@/components/WeatherWidget"
import { QuickActions } from "@/components/QuickActions"
import {
  Sprout,
  Beef,
  DollarSign,
  TrendingUp,
  MapPin,
  Droplets,
  Zap,
  AlertTriangle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-farm-green to-growth-green rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">Welcome back, John!</h1>
              <p className="text-green-100 text-lg">Here's what's happening at Green Valley Farm today</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold font-mono">May 23, 2025</div>
              <div className="text-green-100">Growing Season Day 143</div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Acreage"
            value="1,247"
            description="acres under cultivation"
            icon={MapPin}
            iconColor="text-farm-green"
          />
          <DashboardCard
            title="Active Crops"
            value="8"
            change="+2 from last season"
            changeType="positive"
            icon={Sprout}
            iconColor="text-growth-green"
          />
          <DashboardCard
            title="Livestock Count"
            value="342"
            change="+15 this month"
            changeType="positive"
            icon={Beef}
            iconColor="text-earthy-brown"
          />
          <DashboardCard
            title="Monthly Revenue"
            value="$48,750"
            change="+12.5% vs last month"
            changeType="positive"
            icon={DollarSign}
            iconColor="text-harvest-gold"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <QuickActions />

          {/* Weather Widget */}
          <WeatherWidget />

          {/* Farm Status */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-heading">Farm Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Irrigation Coverage</span>
                  <span className="font-mono">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Soil Moisture</span>
                  <span className="font-mono">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Equipment Operational</span>
                  <span className="font-mono">94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-growth-green rounded-full"></div>
                    <span>5 tasks completed today</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sunshine-yellow rounded-full"></div>
                    <span>3 tasks pending</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-harvest-orange rounded-full"></div>
                    <span>1 alert requires attention</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-heading">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Corn field irrigated", time: "2 hours ago", type: "irrigation" },
                  { action: "Cattle health check completed", time: "4 hours ago", type: "livestock" },
                  { action: "Tomato harvest recorded", time: "6 hours ago", type: "harvest" },
                  { action: "Equipment maintenance scheduled", time: "1 day ago", type: "maintenance" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'irrigation' ? 'bg-ocean-blue' :
                      activity.type === 'livestock' ? 'bg-earthy-brown' :
                      activity.type === 'harvest' ? 'bg-harvest-gold' :
                      'bg-harvest-orange'
                    }`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                      <div className="text-xs text-gray-600">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-heading">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { task: "Apply fertilizer to Field A", due: "Tomorrow", priority: "high" },
                  { task: "Livestock vaccination due", due: "2 days", priority: "medium" },
                  { task: "Equipment service check", due: "3 days", priority: "low" },
                  { task: "Harvest soybeans Field C", due: "1 week", priority: "high" },
                ].map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        task.priority === 'high' ? 'bg-tomato-red' :
                        task.priority === 'medium' ? 'bg-sunshine-yellow' :
                        'bg-growth-green'
                      }`} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{task.task}</div>
                        <div className="text-xs text-gray-600">Due: {task.due}</div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
