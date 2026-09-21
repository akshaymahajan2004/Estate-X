import React from 'react';
import AdminSidebar from '@/components/layout/admin-sidebar';
import { getAdminMetrics } from '@/lib/data-service';
import { Users, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

export const revalidate = 0;

export default async function AdminLeadsPage() {
  const metrics = await getAdminMetrics();

  const mockLeads = [
    { id: 'l-1', name: 'Genevieve Rothschild', email: 'g.rothschild@capital.ch', phone: '+41 22 819 0900', location: 'Dubai', type: 'Penthouse', budget: '$15M+', status: 'QUALIFIED', date: '2026-02-18' },
    { id: 'l-2', name: 'Vikram Mehta', email: 'v.mehta@techfounders.io', phone: '+91 98210 99887', location: 'Mumbai', type: 'Villa', budget: '$5M - $15M', status: 'CONTACTED', date: '2026-02-17' },
    { id: 'l-3', name: 'Sir Rupert Finch', email: 'rupert@finchholdings.co.uk', phone: '+44 20 7123 4567', location: 'London', type: 'Family Home', budget: '$15M+', status: 'NEW', date: '2026-02-16' },
  ];

  return (
    <div className="bg-background min-h-screen flex text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-border/60">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Private Client Desk
            </span>
            <h1 className="font-display text-3xl font-bold text-white">
              Lead & Directive Pipeline
            </h1>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-border">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/60 text-gold-light uppercase text-[10px]">
                <th className="py-3.5 px-4">Client Name</th>
                <th className="py-3.5 px-4">Contact Details</th>
                <th className="py-3.5 px-4">Target Market</th>
                <th className="py-3.5 px-4">Estate Type</th>
                <th className="py-3.5 px-4">Budget</th>
                <th className="py-3.5 px-4">Pipeline Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-zinc-300">
              {mockLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-surface-hover/50">
                  <td className="py-3.5 px-4 font-semibold text-white">{lead.name}</td>
                  <td className="py-3.5 px-4">
                    <div>{lead.email}</div>
                    <div className="text-[10px] text-zinc-500">{lead.phone}</div>
                  </td>
                  <td className="py-3.5 px-4">{lead.location}</td>
                  <td className="py-3.5 px-4">{lead.type}</td>
                  <td className="py-3.5 px-4 font-mono text-gold-400">{lead.budget}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 bg-gold-gradient text-black rounded text-[10px] uppercase font-bold">
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="text-gold-400 hover:text-white font-semibold text-xs">
                      Update Pipeline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
