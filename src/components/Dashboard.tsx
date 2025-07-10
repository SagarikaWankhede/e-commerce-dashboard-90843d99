
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Package,
  Eye,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { SalesChart } from "./SalesChart";
import { RecentOrders } from "./RecentOrders";
import { TopProducts } from "./TopProducts";
import { CustomerStats } from "./CustomerStats";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      gradient: "bg-primary-gradient"
    },
    {
      title: "Orders",
      value: "2,345",
      change: "+15.2%",
      trend: "up",
      icon: ShoppingCart,
      gradient: "bg-success-gradient"
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+5.7%",
      trend: "up",
      icon: Users,
      gradient: "bg-purple-gradient"
    },
    {
      title: "Products",
      value: "456",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      gradient: "bg-warning-gradient"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Welcome back! Here's what's happening with your store.</p>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Eye className="w-4 h-4 mr-2" />
              View Reports
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className={`${stat.gradient} p-6 text-white relative`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <stat.icon className="w-8 h-8 text-white/80" />
                  </div>
                  <div className="flex items-center mt-4">
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 text-white/80" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-white/80" />
                    )}
                    <span className={`text-sm font-medium ml-1 ${
                      stat.trend === 'up' ? 'text-white/90' : 'text-white/90'
                    }`}>
                      {stat.change} from last month
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Data */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-scale-in">
          <div className="xl:col-span-2">
            <SalesChart />
          </div>
          <div>
            <CustomerStats />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-fade-in">
          <RecentOrders />
          <TopProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
