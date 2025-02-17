import { AgentStatus } from "./agent-status"
import { KeyMetrics } from "./key-metrics"
import { Notifications } from "./notifications"
import { AgentControlPanel } from "./agent-control-panel"
import { LeadManagement } from "./lead-management"
import { SocialMediaManagement } from "./social-media-management"

export function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AgentStatus />
        <KeyMetrics />
        <Notifications />
      </div>
      <AgentControlPanel />
      <div className="grid gap-6 md:grid-cols-2">
        <LeadManagement />
        <SocialMediaManagement />
      </div>
    </div>
  )
}

