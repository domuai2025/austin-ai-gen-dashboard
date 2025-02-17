import Link from "next/link"
import { Home, Users, MessageSquare, Calendar, BarChart, Settings, LogOut } from "lucide-react"

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gradient-to-b from-vibrant-blue to-vibrant-purple text-white">
      <div className="flex items-center justify-center h-16 border-b border-white/20">
        <span className="text-2xl font-semibold">AI Agent Dashboard</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-2">
          <li>
            <Link href="/" className="flex items-center p-2 hover:bg-white/10 rounded transition-colors duration-200">
              <Home className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/ai-agents"
              className="flex items-center p-2 hover:bg-white/10 rounded transition-colors duration-200"
            >
              <Users className="w-5 h-5 mr-3" />
              <span>AI Agents</span>
            </Link>
          </li>
          <li>
            <Link
              href="/lead-management"
              className="flex items-center p-2 hover:bg-white/10 rounded transition-colors duration-200"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              <span>Lead Management</span>
            </Link>
          </li>
          <li>
            <Link
              href="/social-media"
              className="flex items-center p-2 hover:bg-white/10 rounded transition-colors duration-200"
            >
              <Calendar className="w-5 h-5 mr-3" />
              <span>Social Media</span>
            </Link>
          </li>
          <li>
            <Link
              href="/reports"
              className="flex items-center p-2 hover:bg-white/10 rounded transition-colors duration-200"
            >
              <BarChart className="w-5 h-5 mr-3" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center p-2 hover:bg-white/10 rounded transition-colors duration-200"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-white/20">
        <button className="flex items-center w-full p-2 hover:bg-white/10 rounded transition-colors duration-200">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  )
}

