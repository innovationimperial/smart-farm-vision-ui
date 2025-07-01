
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp, Users, Globe, Target, Share2, ShoppingCart, Calendar, MapPin, Phone, Mail, Star, ArrowUpRight, ArrowDownRight, Eye, Heart, MessageSquare, BarChart3, PieChart, FileText, Camera, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPieChart, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, AreaChart, Area } from "recharts";

const Marketing = () => {
  const quickStats = [
    { title: "Total Customers", count: "1,247", change: "+18.5%", trend: "up", icon: Users },
    { title: "Monthly Revenue", amount: "$42,350", change: "+12.3%", trend: "up", icon: TrendingUp },
    { title: "Social Media Reach", count: "8,420", change: "-2.1%", trend: "down", icon: Globe },
    { title: "Active Campaigns", count: "7", change: "0%", trend: "neutral", icon: Target },
  ];

  const marketingModules = [
    {
      title: "Customer Management",
      description: "Manage customer relationships and profiles",
      icon: Users,
      color: "bg-blue-500",
      link: "/marketing/customers"
    },
    {
      title: "Product Catalog",
      description: "Manage farm products and pricing",
      icon: ShoppingCart,
      color: "bg-green-500",
      link: "/marketing/products"
    },
    {
      title: "Sales Channels",
      description: "Manage farmers markets, online sales, CSA",
      icon: Share2,
      color: "bg-purple-500",
      link: "/marketing/channels"
    },
    {
      title: "Marketing Campaigns",
      description: "Create and manage marketing campaigns",
      icon: Megaphone,
      color: "bg-orange-500",
      link: "/marketing/campaigns"
    },
    {
      title: "Social Media",
      description: "Manage social media presence and content",
      icon: Globe,
      color: "bg-pink-500",
      link: "/marketing/social-media"
    },
    {
      title: "Events & Markets",
      description: "Manage farmers markets and events",
      icon: Calendar,
      color: "bg-indigo-500",
      link: "/marketing/events"
    },
    {
      title: "Brand Management",
      description: "Manage farm brand and visual identity",
      icon: Camera,
      color: "bg-teal-500",
      link: "/marketing/brand"
    },
    {
      title: "Analytics & Reports",
      description: "Track marketing performance and ROI",
      icon: BarChart3,
      color: "bg-red-500",
      link: "/marketing/analytics"
    }
  ];

  const recentActivities = [
    { id: 1, type: "Sale", description: "Organic vegetables sold at Farmers Market", amount: "$245.00", time: "2 hours ago" },
    { id: 2, type: "Campaign", description: "Summer harvest campaign launched", amount: "", time: "1 day ago" },
    { id: 3, type: "Customer", description: "New CSA member signed up", amount: "$520.00", time: "2 days ago" },
    { id: 4, type: "Social", description: "Instagram post reached 1,200 people", amount: "", time: "3 days ago" },
  ];

  // Chart data
  const salesTrendData = [
    { month: "Jan", sales: 18500, customers: 45 },
    { month: "Feb", sales: 22400, customers: 52 },
    { month: "Mar", sales: 28900, customers: 68 },
    { month: "Apr", sales: 35200, customers: 78 },
    { month: "May", sales: 42100, customers: 89 },
    { month: "Jun", sales: 48300, customers: 95 },
  ];

  const salesChannelData = [
    { name: "Farmers Markets", value: 45, color: "#8884d8" },
    { name: "Online Sales", value: 25, color: "#82ca9d" },
    { name: "CSA Program", value: 20, color: "#ffc658" },
    { name: "Restaurants", value: 10, color: "#ff7c7c" },
  ];

  const socialMediaData = [
    { platform: "Instagram", followers: 2400, engagement: 8.5, posts: 45 },
    { platform: "Facebook", followers: 1800, engagement: 6.2, posts: 32 },
    { platform: "Twitter", followers: 680, engagement: 4.1, posts: 28 },
    { platform: "TikTok", followers: 950, engagement: 12.3, posts: 15 },
  ];

  const chartConfig = {
    sales: { label: "Sales", color: "#10b981" },
    customers: { label: "Customers", color: "#3b82f6" },
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Farm Marketing Hub</h1>
          <p className="text-purple-100 text-lg">Grow your farm business with smart marketing strategies</p>
          <div className="mt-6 flex space-x-4">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">
              <Target className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 ${
                  stat.trend === "up" ? "bg-green-500/10" : 
                  stat.trend === "down" ? "bg-red-500/10" : "bg-gray-500/10"
                } rounded-full -mr-8 -mt-8`} />
                <CardContent className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                    <div className="flex items-center space-x-1">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : stat.trend === "down" ? (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      ) : null}
                      <span className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-green-500" : 
                        stat.trend === "down" ? "text-red-500" : "text-gray-500"
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.amount || stat.count}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Sales & Customer Growth
              </CardTitle>
              <CardDescription>6-month sales and customer acquisition trend</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <LineChart data={salesTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="customers" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Sales Channels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                Sales Channel Distribution
              </CardTitle>
              <CardDescription>Revenue breakdown by sales channel</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <RechartsPieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <RechartsPieChart data={salesChannelData} cx="50%" cy="50%" outerRadius={100}>
                    {salesChannelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                  <Legend />
                </RechartsPieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-purple-600" />
              Social Media Performance
            </CardTitle>
            <CardDescription>Social media reach and engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialMediaData.map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">{platform.platform}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Followers</span>
                      <span className="font-bold">{platform.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Engagement</span>
                      <span className="font-bold text-green-600">{platform.engagement}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Posts</span>
                      <span className="font-bold">{platform.posts}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Marketing Modules Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Marketing Management Modules</CardTitle>
            <CardDescription>Access all your marketing tools and features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Link to={module.link} key={index}>
                    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 border-2 hover:border-purple-200">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className={`${module.color} p-4 rounded-full`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Marketing Activities</CardTitle>
                <CardDescription>Latest marketing activities and sales</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary">{activity.type}</Badge>
                    <div>
                      <p className="font-medium">{activity.description}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                  {activity.amount && (
                    <span className="font-bold text-green-600">{activity.amount}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">Quick Marketing Actions</CardTitle>
            <CardDescription>Frequently used marketing operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                <Users className="h-6 w-6" />
                <span>Add Customer</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-pink-600 hover:bg-pink-700">
                <ShoppingCart className="h-6 w-6" />
                <span>Add Product</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-indigo-600 hover:bg-indigo-700">
                <Megaphone className="h-6 w-6" />
                <span>Create Campaign</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-teal-600 hover:bg-teal-700">
                <Calendar className="h-6 w-6" />
                <span>Schedule Event</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Marketing;
