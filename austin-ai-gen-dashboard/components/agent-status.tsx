import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const agents = [
  { name: "Appointment Bot", status: "active" },
  { name: "Social Media Bot", status: "active" },
  { name: "Lead Re-Engage", status: "idle" },
]

export function AgentStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Agent Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {agents.map((agent, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{agent.name}</span>
              <Badge variant={agent.status === "active" ? "default" : "secondary"}>{agent.status}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

