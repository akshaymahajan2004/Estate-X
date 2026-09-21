import React from 'react';
import AdminSidebar from '@/components/layout/admin-sidebar';
import { getAdminMetrics, getAllProperties } from '@/lib/data-service';
import { Home, Users, Calendar, DollarSign, ArrowUpRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const metrics = await getAdminMetrics();
  const properties = await getAllProperties();

  return (
    <div className="bg-background min-h-screen flex text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/60">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Executive Overview
            </span>
            <h1 className="font-display text-3xl font-bold text-white">
              EstateX Admin Control Center
            </h1>
          </div>
          <Link
            href="/admin/properties"
            className="px-5 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:brightness-110"
          >
            + Create New Property Listing
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 glass-panel rounded-2xl border border-border space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Active Portfolio</span>
              <Home className="w-4 h-4 text-gold-400" />
            </div>
            <div className="font-display text-3xl font-bold text-white">{metrics.totalProperties}</div>
            <div className="text-[10px] text-gold-light">+2 new this week</div>
          </div>

          <div className="p-6 glass-panel rounded-2xl border border-border space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Active Leads</span>
              <Users className="w-4 h-4 text-gold-400" />
            </div>
            <div className="font-display text-3xl font-bold text-white">{metrics.activeLeads}</div>
            <div className="text-[10px] text-emerald-400">+14% conversion</div>
          </div>

          <div className="p-6 glass-panel rounded-2xl border border-border space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Scheduled Visits</span>
              <Calendar className="w-4 h-4 text-gold-400" />
            </div>
            <div className="font-display text-3xl font-bold text-white">{metrics.scheduledVisits}</div>
            <div className="text-[10px] text-gold-light">Pending advisor assignment</div>
          </div>

          <div className="p-6 glass-panel rounded-2xl border border-border space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Total Volume</span>
              <DollarSign className="w-4 h-4 text-gold-400" />
            </div>
            <div className="font-display text-3xl font-bold text-gold-gradient">{metrics.totalVolume}</div>
            <div className="text-[10px] text-emerald-400">+18.4% YoY Growth</div>
          </div>
        </div>

        {/* Recent Properties Management List */}
        <div className="glass-panel p-6 rounded-2xl border border-border space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-white">Recent Listings Management</h3>
            <Link href="/admin/properties" className="text-xs text-gold-400 hover:text-white uppercase font-semibold">
              Manage All Properties ({properties.length})
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border/60 text-gold-light uppercase text-[10px]">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-zinc-300">
                {properties.map((p) => (
                  <tr key={p.id} className="hover:bg-surface-hover/50">
                    <td className="py-3 px-4 font-semibold text-white">{p.title}</td>
                    <td className="py-3 px-4">{p.city}</td>
                    <td className="py-3 px-4 text-gold-400 font-mono font-bold">${(p.price / 1000000).toFixed(1)}M</td>
                    <td className="py-3 px-4">{p.type}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-500/30 rounded text-[10px] uppercase font-semibold">
                        Published
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/properties/${p.id}`}
                        className="text-gold-400 hover:text-white font-semibold flex items-center justify-end space-x-1"
                      >
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
