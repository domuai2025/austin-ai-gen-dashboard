import { supabase } from "./supabase"

export async function getUserData(userId: string) {
  const { data, error } = await supabase.from("user_data").select("*").eq("user_id", userId).single()

  if (error) {
    console.error("Error fetching user data:", error)
    return null
  }

  return data
}

export async function updateUserData(userId: string, updates: Partial<UserData>) {
  const { data, error } = await supabase.from("user_data").update(updates).eq("user_id", userId)

  if (error) {
    console.error("Error updating user data:", error)
    return null
  }

  return data
}

export interface UserData {
  user_id: string
  name: string
  email: string
  total_leads: number
  new_messages: number
  appointments: number
  conversion_rate: number
}

export interface AgentStatus {
  name: string
  status: "active" | "idle"
}

export async function getAgentStatuses(userId: string) {
  const { data, error } = await supabase.from("agent_statuses").select("*").eq("user_id", userId)

  if (error) {
    console.error("Error fetching agent statuses:", error)
    return []
  }

  return data as AgentStatus[]
}

export interface ChartData {
  name: string
  leads: number
  appointments: number
}

export async function getChartData(userId: string) {
  const { data, error } = await supabase
    .from("chart_data")
    .select("*")
    .eq("user_id", userId)
    .order("name", { ascending: true })

  if (error) {
    console.error("Error fetching chart data:", error)
    return []
  }

  return data as ChartData[]
}

