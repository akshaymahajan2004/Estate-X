'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Home, DollarSign, BedDouble, SlidersHorizontal } from 'lucide-react';

export default function PropertySearchBar() {
  const router = useRouter();
  const [intent, setIntent] = useState<'BUY' | 'RENT'>('BUY');
  const [location, setLocation] = useState('ALL');
  const [type, setType] = useState('ALL');
  const [priceRange, setPriceRange] = useState('ALL');
  const [bedrooms, setBedrooms] = useState('ALL');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('intent', intent);
    if (location !== 'ALL') params.set('location', location);
    if (type !== 'ALL') params.set('type', type);
    if (bedrooms !== 'ALL') params.set('bedrooms', bedrooms);

    if (priceRange === 'under-5m') {
      params.set('maxPrice', '5000000');
    } else if (priceRange === '5m-15m') {
      params.set('minPrice', '5000000');
      params.set('maxPrice', '15000000');
    } else if (priceRange === 'above-15m') {
      params.set('minPrice', '15000000');
    }

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl shadow-black/80 relative z-20">
      {/* Intent Switcher (Buy / Rent) */}
      <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-border/40">
        <button
          type="button"
          onClick={() => setIntent('BUY')}
          className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
            intent === 'BUY'
              ? 'bg-gold-gradient text-black shadow-md shadow-gold-500/20'
              : 'text-zinc-400 hover:text-white bg-surface-muted/50'
          }`}
        >
          Buy Portfolio
        </button>
        <button
          type="button"
          onClick={() => setIntent('RENT')}
          className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
            intent === 'RENT'
              ? 'bg-gold-gradient text-black shadow-md shadow-gold-500/20'
              : 'text-zinc-400 hover:text-white bg-surface-muted/50'
          }`}
        >
          Rent Private Lease
        </button>
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Location Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-gold-light font-medium flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>Location</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-surface border border-border/80 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
          >
            <option value="ALL">All Global Cities</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Dubai">Dubai</option>
            <option value="London">London</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Delhi">Delhi NCR</option>
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-gold-light font-medium flex items-center space-x-1">
            <Home className="w-3 h-3" />
            <span>Property Type</span>
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-surface border border-border/80 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
          >
            <option value="ALL">All Estate Types</option>
            <option value="VILLA">Oceanfront Villa</option>
            <option value="PENTHOUSE">Sky Penthouse</option>
            <option value="APARTMENT">Luxury Apartment</option>
            <option value="FAMILY_HOME">Private Manor</option>
          </select>
        </div>

        {/* Price Range Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-gold-light font-medium flex items-center space-x-1">
            <DollarSign className="w-3 h-3" />
            <span>Price Bracket</span>
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full bg-surface border border-border/80 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
          >
            <option value="ALL">Any Budget</option>
            <option value="under-5m">Under $5M USD</option>
            <option value="5m-15m">$5M – $15M USD</option>
            <option value="above-15m">$15M+ USD Ultra-Trophy</option>
          </select>
        </div>

        {/* Bedrooms Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-gold-light font-medium flex items-center space-x-1">
            <BedDouble className="w-3 h-3" />
            <span>Bedrooms</span>
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full bg-surface border border-border/80 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
          >
            <option value="ALL">Any Suites</option>
            <option value="3">3+ Suites</option>
            <option value="4">4+ Suites</option>
            <option value="5">5+ Grand Suites</option>
          </select>
        </div>

        {/* Search CTA Button */}
        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="w-full py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>Explore Estates</span>
          </button>
        </div>
      </form>
    </div>
  );
}
