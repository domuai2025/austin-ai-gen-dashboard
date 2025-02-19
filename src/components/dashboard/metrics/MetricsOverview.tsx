'use client';

import { useEffect, useState } from 'react';
import { MetricCard } from './MetricCard';
import { useSupabase } from '@/components/supabase/provider';
import { Users, MessageSquare, Target, TrendingUp } from 'lucide-react';

interface Metrics {
  totalLeads: number;
  activeAgents: number;
  messagesSent: number;
  conversionRate: number;
  weeklyGrowth: {
    leads: number;
    messages: number;
  };
}

export function MetricsOverview() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalLeads: 0,
    activeAgents: 0,
    messagesSent: 0,
    conversionRate: 0,
    weeklyGrowth: {
      leads: 0,
      messages: 0,
    },
  });
  const { supabase } = useSupabase();

  useEffect(() => {
    const fetchMetrics = async () => {
      // Replace this with your actual Supabase queries
      const { data: agents } = await supabase
        .from('agents')
        .select('*')
        .eq('status', 'active');

      const { data: leads } = await supabase
        .from('leads')
        .select('*');

      // Update metrics with real data
      setMetrics({
        totalLeads: leads?.length || 0,
        activeAgents: agents?.length || 0,
        messagesSent: 1234, // Replace with actual data
        conversionRate: 15.2, // Replace with actual data
        weeklyGrowth: {
          leads: 12,
          messages: 8,
        },
      });
    };

    fetchMetrics();
  }, [supabase]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Leads"
        value={metrics.totalLeads}
        icon={<Users className="h-4 w-4" />}
        trend={{ value: metrics.weeklyGrowth.leads, isPositive: true }}
      />
      <MetricCard
        title="Active Agents"
        value={metrics.activeAgents}
        icon={<Target className="h-4 w-4" />}
      />
      <MetricCard
        title="Messages Sent"
        value={metrics.messagesSent}
        icon={<MessageSquare className="h-4 w-4" />}
        trend={{ value: metrics.weeklyGrowth.messages, isPositive: true }}
      />
      <MetricCard
        title="Conversion Rate"
        value={`${metrics.conversionRate}%`}
        icon={<TrendingUp className="h-4 w-4" />}
        description="Leads converted to customers"
      />
    </div>
  );
}