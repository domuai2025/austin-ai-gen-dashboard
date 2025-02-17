import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const leads = [
  { name: "John Doe", email: "john@example.com", status: "New", source: "Website", color: "bg-vibrant-blue" },
  { name: "Jane Smith", email: "jane@example.com", status: "Contacted", source: "Referral", color: "bg-vibrant-green" },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Qualified",
    source: "Social Media",
    color: "bg-vibrant-yellow",
  },
  { name: "Bob Williams", email: "bob@example.com", status: "New", source: "Website", color: "bg-vibrant-blue" },
]

export default function LeadManagement() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Lead Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>
                      <Badge className={`${lead.color} text-white`}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
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

