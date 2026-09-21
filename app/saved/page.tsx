'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bookmark, ArrowRight, Trash2, Check, Scale } from 'lucide-react';
import { useFavorites } from '@/lib/favorites-context';
import { MOCK_PROPERTIES, MockProperty } from '@/lib/mock-data';
import PropertyCard from '@/components/properties/property-card';
import { formatCurrency, formatArea } from '@/lib/utils';

export default function SavedPropertiesPage() {
  const { favorites, toggleFavorite, favoritesCount } = useFavorites();
  const [savedProperties, setSavedProperties] = useState<MockProperty[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);

  useEffect(() => {
    const list = MOCK_PROPERTIES.filter((p) => favorites.includes(p.id));
    setSavedProperties(list);
  }, [favorites]);

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <Bookmark className="w-3.5 h-3.5 fill-gold-400" />
              <span>Private Shortlist</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Saved Portfolio ({favoritesCount})
            </h1>
            <p className="text-zinc-400 text-sm font-light">
              Your saved architectural residences and estates for comparison and private inquiry.
            </p>
          </div>

          {savedProperties.length > 1 && (
            <button
              onClick={() => setCompareOpen(!compareOpen)}
              className="px-5 py-2.5 bg-surface border border-gold-glow text-gold-light hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center space-x-2"
            >
              <Scale className="w-4 h-4 text-gold-400" />
              <span>{compareOpen ? 'Hide Comparison' : 'Side-by-Side Comparison'}</span>
            </button>
          )}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        {compareOpen && savedProperties.length > 1 && (
          <div className="glass-panel p-6 rounded-3xl border border-gold-glow space-y-4 overflow-x-auto">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Side-by-Side Specifications Comparison
            </h3>
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border/60 text-gold-light uppercase text-[10px]">
                  <th className="py-3 px-4">Feature Metric</th>
                  {savedProperties.map((p) => (
                    <th key={p.id} className="py-3 px-4 font-bold text-white text-sm">
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-zinc-300">
                <tr>
                  <td className="py-3 px-4 font-semibold text-zinc-400">Price</td>
                  {savedProperties.map((p) => (
                    <td key={p.id} className="py-3 px-4 font-bold text-gold-400 font-display text-sm">
                      {formatCurrency(p.price, p.currency)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-zinc-400">Location</td>
                  {savedProperties.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.city}, {p.country}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-zinc-400">Estate Type</td>
                  {savedProperties.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.type}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-zinc-400">Bedrooms / Baths</td>
                  {savedProperties.map((p) => (
                    <td key={p.id} className="py-3 px-4">{p.bedrooms} Beds / {p.bathrooms} Baths</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-zinc-400">Total Footprint</td>
                  {savedProperties.map((p) => (
                    <td key={p.id} className="py-3 px-4">{formatArea(p.areaSqFt)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {savedProperties.length === 0 ? (
          <div className="py-20 glass-panel rounded-3xl text-center space-y-4 max-w-md mx-auto border border-border">
            <Bookmark className="w-12 h-12 text-zinc-600 mx-auto" />
            <h3 className="font-display font-bold text-2xl text-white">No Saved Properties</h3>
            <p className="text-xs text-zinc-400">
              Bookmark your favorite oceanfront villas and sky penthouses while browsing the portfolio.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
