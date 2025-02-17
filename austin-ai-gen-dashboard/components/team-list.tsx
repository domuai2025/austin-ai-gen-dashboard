import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  { name: "Anthony", avatar: "/placeholder.svg" },
  { name: "DeeJAY", avatar: "/placeholder.svg" },
  { name: "Abdul", avatar: "/placeholder.svg" },
  { name: "James", avatar: "/placeholder.svg" },
]

export function TeamList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <span className="mt-2 text-sm">{member.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

