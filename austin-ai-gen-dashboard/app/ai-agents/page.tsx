import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Play, Pause, Settings } from "lucide-react"

const agents = [
  { name: "Appointment Bot", status: "Active", type: "Scheduling", color: "bg-vibrant-blue" },
  { name: "Social Media Bot", status: "Active", type: "Content Creation", color: "bg-vibrant-green" },
  { name: "Lead Re-Engage", status: "Idle", type: "Lead Nurturing", color: "bg-vibrant-yellow" },
  { name: "Customer Support Bot", status: "Active", type: "Support", color: "bg-vibrant-purple" },
]

export default function AIAgents() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">AI Agents Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agents.map((agent, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${agent.color}`}></div>
                        {agent.name}
                      </div>
                    </TableCell>
                    <TableCell>{agent.type}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${agent.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                      >
                        {agent.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant={agent.status === "Active" ? "destructive" : "default"}
                        size="sm"
                        className="mr-2"
                      >
                        {agent.status === "Active" ? (
                          <Pause className="mr-2 h-4 w-4" />
                        ) : (
                          <Play className="mr-2 h-4 w-4" />
                        )}
                        {agent.status === "Active" ? "Stop" : "Start"}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

