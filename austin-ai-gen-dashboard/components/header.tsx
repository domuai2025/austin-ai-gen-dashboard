"use client"

import { useEffect, useState } from "react"
import { Bell, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { getUserData, type UserData } from "@/lib/database"

export function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (user) {
      fetchUserData()
    }
  }, [user])

  const fetchUserData = async () => {
    if (user) {
      const data = await getUserData(user.id)
      setUserData(data)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/login")
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h1 className="text-2xl font-semibold">Welcome back, {userData?.name || user?.email}</h1>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg" alt={userData?.name || user?.email} />
          <AvatarFallback>{(userData?.name || user?.email || "")[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  )
}

