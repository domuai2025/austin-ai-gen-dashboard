'use client';

import { LogOut, Settings, FileCode, User2, Users2, MessageSquare, Users, Book } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/supabase/provider';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  active?: boolean;
  count?: number;
}

export function Sidebar() {
  const router = useRouter();
  const { supabase } = useSupabase();

  const navItems: NavItem[] = [
    { label: 'Channels', icon: <Settings className="w-4 h-4" />, path: '/dashboard/channels' },
    { label: 'Our API\'s', icon: <FileCode className="w-4 h-4" />, path: '/dashboard/apis', active: true },
    { label: 'My Account', icon: <User2 className="w-4 h-4" />, path: '/dashboard/account' },
    { label: 'Team', icon: <Users2 className="w-4 h-4" />, path: '/dashboard/team' },
    { label: 'Messages', icon: <MessageSquare className="w-4 h-4" />, path: '/dashboard/messages', count: 2 },
    { label: 'Agents', icon: <Users className="w-4 h-4" />, path: '/dashboard/agents' },
    { label: 'User Clients', icon: <Users className="w-4 h-4" />, path: '/dashboard/clients' },
    { label: 'Clients Service Request', icon: <MessageSquare className="w-4 h-4" />, path: '/dashboard/service-requests' },
    { label: 'Technical Docs', icon: <Book className="w-4 h-4" />, path: '/dashboard/docs' },
    { label: 'Agent API\'s', icon: <FileCode className="w-4 h-4" />, path: '/dashboard/agent-apis' },
    { label: 'API Channels', icon: <Settings className="w-4 h-4" />, path: '/dashboard/api-channels' },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  };

  return (
    <aside className="w-64 bg-purple-800 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">@ Austin AI Gen</h1>
      </div>

      <nav className="space-y-1">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between p-2 rounded cursor-pointer",
              item.active ? "bg-purple-900" : "hover:bg-purple-700"
            )}
            onClick={() => handleNavigation(item.path)}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {item.count && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </div>
        ))}

        <div
          className="flex items-center p-2 hover:bg-purple-700 rounded cursor-pointer mt-8"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span>Log out</span>
        </div>
      </nav>
    </aside>
  );
}