import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

const agents = [
  { name: "Appointment Bot", status: "active" },
  { name: "Social Media Bot", status: "active" },
  { name: "Lead Re-Engage", status: "idle" },
]

export function AgentControlPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Agent Control Panel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agents.map((agent, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{agent.name}</span>
              <Button variant={agent.status === "active" ? "destructive" : "default"}>
                {agent.status === "active" ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {agent.status === "active" ? "Stop" : "Start"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

