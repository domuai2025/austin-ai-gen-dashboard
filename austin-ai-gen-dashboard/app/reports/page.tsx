import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const performanceData = [
  { name: "Jan", leads: 40, appointments: 24, conversions: 18 },
  { name: "Feb", leads: 30, appointments: 18, conversions: 12 },
  { name: "Mar", leads: 50, appointments: 30, conversions: 22 },
  { name: "Apr", leads: 45, appointments: 27, conversions: 20 },
  { name: "May", leads: 60, appointments: 36, conversions: 28 },
  { name: "Jun", leads: 55, appointments: 33, conversions: 25 },
]

const leadSourceData = [
  { name: "Website", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Social Media", value: 300 },
  { name: "Other", value: 200 },
]

const COLORS = ["#3B82F6", "#10B981", "#FBBF24", "#EF4444"]

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Performance Report</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="leads" fill="#3B82F6" />
                <Bar dataKey="appointments" fill="#10B981" />
                <Bar dataKey="conversions" fill="#FBBF24" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

