import React from 'react';
import AdminSidebar from '@/components/layout/admin-sidebar';
import { getAllProperties } from '@/lib/data-service';
import { Plus, Edit, Trash2, Eye, Star } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 0;

export default async function AdminPropertiesPage() {
  const properties = await getAllProperties();

  return (
    <div className="bg-background min-h-screen flex text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-border/60">
          <div>
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Listing Operations
            </span>
            <h1 className="font-display text-3xl font-bold text-white">
              Property Inventory Management
            </h1>
          </div>
          <button className="px-5 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center space-x-1.5">
            <Plus className="w-4 h-4" />
            <span>Create New Listing</span>
          </button>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-border">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/60 text-gold-light uppercase text-[10px]">
                <th className="py-3.5 px-4">Residence Title</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Valuation Price</th>
                <th className="py-3.5 px-4">Beds / Baths / SqFt</th>
                <th className="py-3.5 px-4">Featured</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-zinc-300">
              {properties.map((p) => (
                <tr key={p.id} className="hover:bg-surface-hover/50">
                  <td className="py-3.5 px-4 font-semibold text-white">{p.title}</td>
                  <td className="py-3.5 px-4">{p.city}, {p.country}</td>
                  <td className="py-3.5 px-4 font-mono text-gold-400 font-bold">${(p.price / 1000000).toFixed(2)}M</td>
                  <td className="py-3.5 px-4">{p.bedrooms} Beds • {p.bathrooms} Baths • {p.areaSqFt} SqFt</td>
                  <td className="py-3.5 px-4">
                    {p.featured ? (
                      <span className="inline-flex items-center space-x-1 text-gold-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-gold-400" />
                        <span>Featured</span>
                      </span>
                    ) : (
                      <span className="text-zinc-500">Standard</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-500/30 rounded text-[10px] uppercase font-semibold">
                      Published
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-3">
                    <Link href={`/properties/${p.id}`} className="text-zinc-400 hover:text-white inline-block">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button className="text-gold-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <Trash2 className="w-4 h-4" />
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
