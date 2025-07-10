
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    sales: 234,
    revenue: "$11,700",
    image: "🎧",
    rating: 4.8,
    growth: "+12%",
    progress: 85
  },
  {
    id: 2,
    name: "Smart Watch",
    sales: 189,
    revenue: "$9,450",
    image: "⌚",
    rating: 4.6,
    growth: "+8%",
    progress: 70
  },
  {
    id: 3,
    name: "Laptop Stand",
    sales: 156,
    revenue: "$4,680",
    image: "💻",
    rating: 4.9,
    growth: "+15%",
    progress: 60
  },
  {
    id: 4,
    name: "Phone Case",
    sales: 142,
    revenue: "$2,840",
    image: "📱",
    rating: 4.5,
    growth: "+5%",
    progress: 55
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    sales: 98,
    revenue: "$4,900",
    image: "🔊",
    rating: 4.7,
    growth: "+20%",
    progress: 40
  }
];

export const TopProducts = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Top Products</CardTitle>
        <CardDescription>Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product, index) => (
            <div key={product.id} className="group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-lg">
                    {product.image}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <span>{product.sales} sold</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{product.revenue}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {product.growth}
                  </div>
                </div>
              </div>
              <div className="ml-13">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Sales Progress</span>
                  <span>{product.progress}%</span>
                </div>
                <Progress value={product.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
