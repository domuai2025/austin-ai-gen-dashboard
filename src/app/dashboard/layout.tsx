'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Users,
  MessageSquare,
  Share2,
  BarChart2,
  Settings,
  Bell,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSupabase } from '@/components/supabase/provider';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'AI Agents', href: '/dashboard/agents' },
  { icon: MessageSquare, label: 'Lead Management', href: '/dashboard/leads' },
  { icon: Share2, label: 'Social Media', href: '/dashboard/social' },
  { icon: BarChart2, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { supabase } = useSupabase();
  const [userName] = useState('Admin User'); // Replace with actual user data

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-gradient-to-b from-blue-500 to-purple-600 text-white">
        <div className="p-6">
          <h1 className="text-xl font-bold">AI Agent Dashboard</h1>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-6 py-3 text-sm font-medium',
                  pathname === item.href
                    ? 'bg-white/10'
                    : 'hover:bg-white/5 transition-colors'
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-sm font-medium hover:bg-white/5 transition-colors px-6 py-3 w-full"
          >
            <LogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-bold">Welcome back, {userName}</h2>
            <div className="flex items-center gap-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="View notifications"
              >
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}