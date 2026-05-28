'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react'

const salesData = [
  { month: 'Jan', sales: 4000, profit: 2400, customers: 240 },
  { month: 'Feb', sales: 3000, profit: 1398, customers: 221 },
  { month: 'Mar', sales: 2000, profit: 9800, customers: 229 },
  { month: 'Apr', sales: 2780, profit: 3908, customers: 200 },
  { month: 'May', sales: 1890, profit: 4800, customers: 221 },
  { month: 'Jun', sales: 2390, profit: 3800, customers: 250 },
  { month: 'Jul', sales: 3490, profit: 4300, customers: 210 },
]

const categoryData = [
  { name: 'Skincare', value: 35 },
  { name: 'Makeup', value: 25 },
  { name: 'Haircare', value: 20 },
  { name: 'Perfume', value: 12 },
  { name: 'Korean Cosmetics', value: 8 },
]

const productData = [
  { name: 'Lipstick Pro', sales: 420 },
  { name: 'Face Cream', sales: 380 },
  { name: 'Serum Elite', sales: 350 },
  { name: 'Mascara Black', sales: 320 },
  { name: 'Foundation', sales: 280 },
]

const COLORS = ['#F5E6D3', '#F5D5D8', '#E8D5C4', '#FFF8F3', '#EFCACE']

export default function Dashboard() {
  const { t } = useTranslation()

  const StatCard = ({ icon: Icon, label, value, change }: any) => (
    <div className="card-soft p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className="text-xs text-green-600 mt-2">↑ {change} from last month</p>
        </div>
        <div className="w-14 h-14 bg-gradient-soft rounded-full flex items-center justify-center">
          <Icon size={28} className="text-gray-700" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-light-gray p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{t('common.dashboard')}</h1>
          <p className="text-gray-600 mt-2">Real-time analytics and business insights</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={DollarSign}
            label={t('dashboard.totalSales')}
            value="$45.2K"
            change="12%"
          />
          <StatCard
            icon={TrendingUp}
            label={t('dashboard.monthlyProfit')}
            value="$12.8K"
            change="8%"
          />
          <StatCard
            icon={ShoppingCart}
            label={t('dashboard.dailyOrders')}
            value="284"
            change="5%"
          />
          <StatCard
            icon={Users}
            label={t('dashboard.customers')}
            value="2,341"
            change="15%"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Line Chart */}
          <div className="lg:col-span-2 card-soft p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Monthly Sales Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#F5E6D3" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="#EFCACE" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="card-soft p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Category Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Row Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="card-soft p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Top Products</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#F5E6D3" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart */}
          <div className="card-soft p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Customer Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="customers"
                  fill="#F5D5D8"
                  stroke="#EFCACE"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}