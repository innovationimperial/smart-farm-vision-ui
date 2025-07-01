
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Share2, Plus, MapPin, Calendar, DollarSign, Users, Clock, Globe, Store, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SalesChannels = () => {
  const { toast } = useToast();
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "Downtown Farmers Market",
      type: "Farmers Market",
      location: "Main Street Plaza",
      schedule: "Saturdays 8AM-2PM",
      commission: 10,
      status: "Active",
      monthlyRevenue: 3250,
      customerCount: 45,
      description: "Weekly farmers market in downtown area"
    },
    {
      id: 2,
      name: "Farm Stand",
      type: "On-Farm Sales",
      location: "Farm Property",
      schedule: "Daily 9AM-6PM",
      commission: 0,
      status: "Active",
      monthlyRevenue: 1800,
      customerCount: 25,
      description: "On-site farm stand for direct sales"
    },
    {
      id: 3,
      name: "Online Store",
      type: "E-commerce",
      location: "Online",
      schedule: "24/7",
      commission: 3,
      status: "Active",
      monthlyRevenue: 2100,
      customerCount: 78,
      description: "Online sales platform for direct-to-consumer"
    },
    {
      id: 4,
      name: "Community CSA",
      type: "CSA Program",
      location: "Multiple Pickup Points",
      schedule: "Weekly",
      commission: 0,
      status: "Active",
      monthlyRevenue: 4200,
      customerCount: 35,
      description: "Community Supported Agriculture program"
    }
  ]);

  const [newChannel, setNewChannel] = useState({
    name: "",
    type: "Farmers Market",
    location: "",
    schedule: "",
    commission: 0,
    description: ""
  });

  const channelTypes = [
    "Farmers Market",
    "On-Farm Sales",
    "E-commerce",
    "CSA Program",
    "Restaurant",
    "Retail Store",
    "Wholesale",
    "Food Hub",
    "Delivery Service"
  ];

  const handleAddChannel = () => {
    if (!newChannel.name || !newChannel.location) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive",
      });
      return;
    }

    const channel = {
      id: channels.length + 1,
      ...newChannel,
      status: "Active",
      monthlyRevenue: 0,
      customerCount: 0
    };

    setChannels([...channels, channel]);
    setNewChannel({
      name: "",
      type: "Farmers Market",
      location: "",
      schedule: "",
      commission: 0,
      description: ""
    });

    toast({
      title: "Success",
      description: "Sales channel added successfully",
    });
  };

  const totalRevenue = channels.reduce((sum, c) => sum + c.monthlyRevenue, 0);
  const totalCustomers = channels.reduce((sum, c) => sum + c.customerCount, 0);
  const avgCommission = channels.reduce((sum, c) => sum + c.commission, 0) / channels.length;

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "Farmers Market": return Store;
      case "On-Farm Sales": return Store;
      case "E-commerce": return Globe;
      case "CSA Program": return Users;
      case "Restaurant": return Store;
      case "Delivery Service": return Truck;
      default: return Share2;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sales Channels</h1>
            <p className="text-gray-600">Manage your farm sales channels and distribution</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Channel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Sales Channel</DialogTitle>
                <DialogDescription>
                  Add a new sales channel to expand your reach
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Channel Name *</Label>
                  <Input
                    id="name"
                    value={newChannel.name}
                    onChange={(e) => setNewChannel({...newChannel, name: e.target.value})}
                    placeholder="Channel name"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Channel Type</Label>
                  <Select value={newChannel.type} onValueChange={(value) => setNewChannel({...newChannel, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {channelTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={newChannel.location}
                    onChange={(e) => setNewChannel({...newChannel, location: e.target.value})}
                    placeholder="Address or location"
                  />
                </div>
                <div>
                  <Label htmlFor="schedule">Schedule</Label>
                  <Input
                    id="schedule"
                    value={newChannel.schedule}
                    onChange={(e) => setNewChannel({...newChannel, schedule: e.target.value})}
                    placeholder="e.g., Saturdays 8AM-2PM"
                  />
                </div>
                <div>
                  <Label htmlFor="commission">Commission (%)</Label>
                  <Input
                    id="commission"
                    type="number"
                    step="0.1"
                    value={newChannel.commission}
                    onChange={(e) => setNewChannel({...newChannel, commission: parseFloat(e.target.value) || 0})}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newChannel.description}
                    onChange={(e) => setNewChannel({...newChannel, description: e.target.value})}
                    placeholder="Channel description..."
                  />
                </div>
                <Button onClick={handleAddChannel} className="w-full">
                  Add Channel
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Channels</p>
                  <p className="text-3xl font-bold">{channels.filter(c => c.status === 'Active').length}</p>
                </div>
                <Share2 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Customers</p>
                  <p className="text-3xl font-bold">{totalCustomers}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Commission</p>
                  <p className="text-3xl font-bold">{avgCommission.toFixed(1)}%</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((channel) => {
            const IconComponent = getChannelIcon(channel.type);
            return (
              <Card key={channel.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{channel.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{channel.type}</Badge>
                      </div>
                    </div>
                    <Badge variant={channel.status === 'Active' ? 'default' : 'secondary'}>
                      {channel.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{channel.location}</span>
                    </div>
                    
                    {channel.schedule && (
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{channel.schedule}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Revenue</p>
                        <p className="font-bold text-green-600">${channel.monthlyRevenue.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Customers</p>
                        <p className="font-bold">{channel.customerCount}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Commission</p>
                        <p className="font-bold text-orange-600">{channel.commission}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit Channel
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Channel Performance Summary</CardTitle>
            <CardDescription>Overview of all sales channels performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-semibold">Channel</th>
                    <th className="text-left py-3 font-semibold">Type</th>
                    <th className="text-right py-3 font-semibold">Monthly Revenue</th>
                    <th className="text-right py-3 font-semibold">Customers</th>
                    <th className="text-right py-3 font-semibold">Avg Order</th>
                    <th className="text-right py-3 font-semibold">Commission</th>
                    <th className="text-center py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {channels.map((channel) => (
                    <tr key={channel.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 font-medium">{channel.name}</td>
                      <td className="py-4">
                        <Badge variant="secondary">{channel.type}</Badge>
                      </td>
                      <td className="py-4 text-right font-bold text-green-600">
                        ${channel.monthlyRevenue.toLocaleString()}
                      </td>
                      <td className="py-4 text-right">{channel.customerCount}</td>
                      <td className="py-4 text-right">
                        ${channel.customerCount > 0 ? (channel.monthlyRevenue / channel.customerCount).toFixed(0) : '0'}
                      </td>
                      <td className="py-4 text-right font-bold text-orange-600">
                        {channel.commission}%
                      </td>
                      <td className="py-4 text-center">
                        <Badge variant={channel.status === 'Active' ? 'default' : 'secondary'}>
                          {channel.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SalesChannels;
