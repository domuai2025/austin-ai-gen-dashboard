import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [{ message: "New lead: John Doe" }, { message: "Appointment booked: 2:00 PM" }]

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {notifications.map((notification, index) => (
            <li key={index} className="text-sm">
              {notification.message}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

