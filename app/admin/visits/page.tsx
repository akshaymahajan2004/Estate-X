import React from 'react';
import AdminSidebar from '@/components/layout/admin-sidebar';
import { Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';

export const revalidate = 0;

export default async function AdminVisitsPage() {
  const mockVisits = [
    { id: 'v-1', ref: 'EX-982145', propertyTitle: 'The Grand Pavilion Ocean Villa', date: '2026-03-02', timeSlot: '11:00 AM', clientName: 'Lady Catherine Spencer', phone: '+44 7700 900077', status: 'PENDING' },
    { id: 'v-2', ref: 'EX-441029', propertyTitle: 'Skyline Horizon Triplex Penthouse', date: '2026-03-05', timeSlot: '02:00 PM', clientName: 'Tariq Al-Sabah', phone: '+971 50 123 4567', status: 'CONFIRMED' },
  ];

  return (
    <div className="bg-background min-h-screen flex text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-border/60">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Logistics Scheduling
            </span>
            <h1 className="font-display text-3xl font-bold text-white">
              Chauffeur & Property Visit Requests
            </h1>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-border">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/60 text-gold-light uppercase text-[10px]">
                <th className="py-3.5 px-4">Ref Code</th>
                <th className="py-3.5 px-4">Property Residence</th>
                <th className="py-3.5 px-4">Date & Time Slot</th>
                <th className="py-3.5 px-4">Client Contact</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-zinc-300">
              {mockVisits.map((v) => (
                <tr key={v.id} className="hover:bg-surface-hover/50">
                  <td className="py-3.5 px-4 font-mono text-gold-400 font-bold">{v.ref}</td>
                  <td className="py-3.5 px-4 font-semibold text-white">{v.propertyTitle}</td>
                  <td className="py-3.5 px-4">{v.date} at {v.timeSlot}</td>
                  <td className="py-3.5 px-4">
                    <div>{v.clientName}</div>
                    <div className="text-[10px] text-zinc-500">{v.phone}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold ${
                      v.status === 'CONFIRMED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-gold-500/20 text-gold-300 border border-gold-400/40'
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <button className="px-3 py-1 bg-gold-gradient text-black rounded font-semibold text-[10px] uppercase">
                      Confirm
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
