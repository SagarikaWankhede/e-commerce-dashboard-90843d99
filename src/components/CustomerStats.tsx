
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'New Customers', value: 45, color: '#3b82f6' },
  { name: 'Returning Customers', value: 35, color: '#10b981' },
  { name: 'Inactive Customers', value: 20, color: '#f59e0b' }
];

const customerMetrics = [
  {
    label: "Customer Retention Rate",
    value: "87.5%",
    trend: "+2.1%",
    color: "text-green-600"
  },
  {
    label: "Average Order Value",
    value: "$127.50",
    trend: "+5.4%",
    color: "text-green-600"
  },
  {
    label: "Customer Lifetime Value",
    value: "$2,340",
    trend: "+8.2%",
    color: "text-green-600"
  }
];

export const CustomerStats = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Customer Insights</CardTitle>
        <CardDescription>Customer behavior and metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Pie Chart */}
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Percentage']}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            {customerMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-slate-600">{metric.label}</span>
                <div className="text-right">
                  <div className="font-semibold text-slate-900">{metric.value}</div>
                  <div className={`text-xs ${metric.color}`}>{metric.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
