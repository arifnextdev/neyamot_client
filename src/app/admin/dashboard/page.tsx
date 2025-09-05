'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';
import { NEXT_PUBLIC_API_URL } from '@/lib/config';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

export default function AdminDashboard() {
  const [kpis, setKpis] = useState({
    users: 1542,
    products: 87,
    orders: 643,
    revenue: 27639.25,
  });
  const [orderData, setOrderData] = useState([
    { month: 'Nov', count: 32 },
    { month: 'Dec', count: 45 },
    { month: 'Jan', count: 38 },
    { month: 'Feb', count: 51 },
    { month: 'Mar', count: 60 },
    { month: 'Apr', count: 72 },
  ]);
  const [statusData, setStatusData] = useState([
    { _id: 'PENDING', count: 42 },
    { _id: 'PAID', count: 89 },
    { _id: 'CANCELLED', count: 17 },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      const [kpiRes, orderRes, statusRes] = await Promise.all([
        fetch(`${NEXT_PUBLIC_API_URL}/orders/admin/kpis`),
        fetch(`${NEXT_PUBLIC_API_URL}/orders/admin/monthly-stats`),
        fetch(`${NEXT_PUBLIC_API_URL}/orders/admin/status-stats`),
      ]);

      const [kpis, orderData, statusData] = await Promise.all([
        kpiRes.json(),
        orderRes.json(),
        statusRes.json(),
      ]);

      setKpis(kpis);
      setOrderData(orderData);
      setStatusData(statusData);
      setLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
        <Skeleton className="col-span-2 h-96 rounded-xl" />
        <Skeleton className="col-span-2 h-96 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <Card className="col-span-1">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">{kpis.users}</p>
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl font-bold">{kpis.products}</p>
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">{kpis.orders}</p>
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold">${kpis.orders && kpis.revenue.toFixed(2)}</p>
        </CardContent>
      </Card>

      <Card className="col-span-2 h-96">
        <CardContent className="h-full p-4">
          <h2 className="text-lg font-semibold mb-2">Orders Last 6 Months</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={orderData}>
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-2 h-96">
        <CardContent className="h-full p-4">
          <h2 className="text-lg font-semibold mb-2">Orders by Status</h2>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {statusData.length > 0 && statusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
