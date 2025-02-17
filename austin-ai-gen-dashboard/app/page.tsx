"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import LoginPage from "@/components/login-page"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Users, MessageSquare, Calendar, TrendingUp, Bell } from "lucide-react"
import {
  getUserData,
  getAgentStatuses,
  getChartData,
  type UserData,
  type AgentStatus,
  type ChartData,
} from "@/lib/database"

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [agentStatuses, setAgentStatuses] = useState<AgentStatus[]>([])
  const [chartData, setChartData] = useState<ChartData[]>([])

  useEffect(() => {
    if (user) {
      fetchUserData()
    } else {
      router.push("/login")
    }
  }, [user, router])

  const fetchUserData = async () => {
    if (user) {
      const data = await getUserData(user.id)
      setUserData(data)
      const statuses = await getAgentStatuses(user.id)
      setAgentStatuses(statuses)
      const chart = await getChartData(user.id)
      setChartData(chart)
    }
  }

  if (!user || !userData) {
    return <LoginPage />
  }

  const metrics = [
    { name: "Total Leads", value: userData.total_leads, icon: Users, color: "text-vibrant-blue" },
    { name: "New Messages", value: userData.new_messages, icon: MessageSquare, color: "text-vibrant-green" },
    { name: "Appointments", value: userData.appointments, icon: Calendar, color: "text-vibrant-yellow" },
    { name: "Conversion Rate", value: `${userData.conversion_rate}%`, icon: TrendingUp, color: "text-vibrant-red" },
  ]

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="flex items-center p-6">
                <metric.icon className={`w-12 h-12 ${metric.color}`} />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{metric.name}</p>
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>AI Agent Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {agentStatuses.map((agent, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{agent.name}</span>
                    <Badge
                      variant={agent.status === "active" ? "default" : "secondary"}
                      className={agent.status === "active" ? "bg-vibrant-green" : "bg-gray-300"}
                    >
                      {agent.status}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-vibrant-yellow" />
                  <span>New lead assigned: John Doe</span>
                </li>
                <li className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-vibrant-blue" />
                  <span>Appointment scheduled: 2:00 PM</span>
                </li>
                <li className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-vibrant-green" />
                  <span>Social media post published</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="leads" fill="#3B82F6" />
                <Bar dataKey="appointments" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

