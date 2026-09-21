'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FilterClientProps {
  currentFilters: any;
  totalResults: number;
}

export default function PropertyFilterClient({ currentFilters, totalResults }: FilterClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(currentFilters.search || '');
  const [location, setLocation] = useState(currentFilters.location || 'ALL');
  const [type, setType] = useState(currentFilters.type || 'ALL');
  const [sortBy, setSortBy] = useState(currentFilters.sortBy || 'newest');

  const updateFilters = (key: string, val: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (val && val !== 'ALL') {
      params.set(key, val);
    } else {
      params.delete(key);
    }
    router.push(`/properties?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch('');
    setLocation('ALL');
    setType('ALL');
    setSortBy('newest');
    router.push('/properties');
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-border/80 space-y-4">
      {/* Search Input Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && updateFilters('search', search)}
            placeholder="Search by keywords, city, address, or amenity..."
            className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
          />
        </div>

        <button
          onClick={() => updateFilters('search', search)}
          className="w-full sm:w-auto px-6 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow hover:brightness-110"
        >
          Filter Search
        </button>

        <button
          onClick={handleReset}
          className="w-full sm:w-auto px-4 py-2.5 bg-surface-muted border border-border text-zinc-400 hover:text-white rounded-lg text-xs flex items-center justify-center space-x-1.5"
          title="Reset Filters"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-border/40 text-xs">
        <div>
          <label className="text-[10px] text-gold-light uppercase font-semibold block mb-1">
            Target Location
          </label>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              updateFilters('location', e.target.value);
            }}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-400"
          >
            <option value="ALL">All Cities</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Dubai">Dubai</option>
            <option value="London">London</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Delhi">Delhi NCR</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-gold-light uppercase font-semibold block mb-1">
            Property Type
          </label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              updateFilters('type', e.target.value);
            }}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-400"
          >
            <option value="ALL">All Types</option>
            <option value="VILLA">Villa</option>
            <option value="PENTHOUSE">Penthouse</option>
            <option value="APARTMENT">Apartment</option>
            <option value="FAMILY_HOME">Private Manor</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-gold-light uppercase font-semibold block mb-1">
            Sort Order
          </label>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              updateFilters('sortBy', e.target.value);
            }}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-400"
          >
            <option value="newest">Newest Listed</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popular">Most Viewed</option>
          </select>
        </div>

        <div className="flex items-end justify-end">
          <span className="text-xs text-zinc-400 font-mono pb-2">
            Showing <strong className="text-white font-bold">{totalResults}</strong> Residences
          </span>
        </div>
      </div>
    </div>
  );
}
