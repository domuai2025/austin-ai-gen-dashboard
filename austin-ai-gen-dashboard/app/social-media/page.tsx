import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

const posts = [
  { content: "Check out our new product line!", scheduled: new Date(2023, 5, 15, 10, 0), platform: "Twitter" },
  { content: "Summer sale starts tomorrow!", scheduled: new Date(2023, 5, 16, 9, 0), platform: "Facebook" },
  { content: "Tips for better sleep", scheduled: new Date(2023, 5, 17, 14, 0), platform: "Instagram" },
]

export default function SocialMedia() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Social Media Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar className="rounded-md border" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Scheduled Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm">
                    <p className="mb-2 font-medium">{post.content}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">Scheduled: {post.scheduled.toLocaleString()}</p>
                      <Badge
                        className={
                          post.platform === "Twitter"
                            ? "bg-vibrant-blue"
                            : post.platform === "Facebook"
                              ? "bg-vibrant-purple"
                              : "bg-vibrant-red"
                        }
                      >
                        {post.platform}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

