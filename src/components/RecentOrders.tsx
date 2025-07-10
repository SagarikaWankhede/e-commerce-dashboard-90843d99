
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Package, Clock, CheckCircle, XCircle } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$129.99",
    status: "completed",
    date: "2024-01-15",
    items: 3
  },
  {
    id: "ORD-002",
    customer: "Sarah Smith",
    email: "sarah@example.com",
    amount: "$79.50",
    status: "processing",
    date: "2024-01-15",
    items: 2
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    amount: "$249.00",
    status: "shipped",
    date: "2024-01-14",
    items: 5
  },
  {
    id: "ORD-004",
    customer: "Emma Wilson",
    email: "emma@example.com",
    amount: "$89.99",
    status: "cancelled",
    date: "2024-01-14",
    items: 1
  },
  {
    id: "ORD-005",
    customer: "Alex Brown",
    email: "alex@example.com",
    amount: "$159.75",
    status: "completed",
    date: "2024-01-13",
    items: 4
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'processing':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'shipped':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'cancelled':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-3 h-3" />;
    case 'processing':
      return <Clock className="w-3 h-3" />;
    case 'shipped':
      return <Package className="w-3 h-3" />;
    case 'cancelled':
      return <XCircle className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

export const RecentOrders = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-semibold">Recent Orders</CardTitle>
          <CardDescription>Latest orders from your customers</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div 
              key={order.id} 
              className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {order.customer.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{order.customer}</p>
                  <p className="text-sm text-slate-500">{order.email}</p>
                  <p className="text-xs text-slate-400">{order.items} items • {order.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{order.amount}</p>
                  <Badge 
                    className={`text-xs font-medium border ${getStatusColor(order.status)} flex items-center gap-1`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
