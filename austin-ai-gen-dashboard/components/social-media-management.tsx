import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
  { content: "Check out our new mattress!", scheduled: "2023-06-15 10:00 AM" },
  { content: "Summer sale starts tomorrow!", scheduled: "2023-06-16 9:00 AM" },
]

export function SocialMediaManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="border p-4 rounded">
              <p className="mb-2">{post.content}</p>
              <p className="text-sm text-gray-500 mb-2">Scheduled: {post.scheduled}</p>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

