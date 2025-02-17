import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  { name: "Leads", value: 50 },
  { name: "Appointments", value: 10 },
  { name: "Engagement", value: 200 },
]

export function KeyMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {metrics.map((metric, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{metric.name}</span>
              <span className="font-semibold">{metric.value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

