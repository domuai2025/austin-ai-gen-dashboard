import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const agents = [
  { name: "Content Creator Agent", avatar: "/placeholder.svg" },
  { name: "Social Media Posting Agent", avatar: "/placeholder.svg" },
  { name: "Meta Messenger Agent", avatar: "/placeholder.svg" },
  { name: "Appointment setter Agent", avatar: "/placeholder.svg" },
]

export function AgentsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          {agents.map((agent, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src={agent.avatar} alt={agent.name} />
                <AvatarFallback>{agent.name[0]}</AvatarFallback>
              </Avatar>
              <span className="mt-2 text-sm text-center">{agent.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

