'use client';

import { Button } from "@/components/ui/button";
import { useSupabase } from "@/components/supabase/provider";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/auth'); // or wherever your login page is
      router.refresh();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Button onClick={handleLogout} variant="ghost">
      Logout
    </Button>
  );
}