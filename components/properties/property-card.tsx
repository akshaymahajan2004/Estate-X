'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark, BedDouble, Bath, Maximize2, MapPin, ArrowUpRight } from 'lucide-react';
import { MockProperty } from '@/lib/mock-data';
import { formatCurrency, formatArea } from '@/lib/utils';
import { useFavorites } from '@/lib/favorites-context';

interface PropertyCardProps {
  property: MockProperty;
  featuredLayout?: boolean;
}

export default function PropertyCard({ property, featuredLayout = false }: PropertyCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  const primaryImage = property.images.find((img) => img.isPrimary)?.url || property.images[0]?.url;

  return (
    <div className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full relative">
      {/* Image Header with Badges & Bookmark */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        <Image
          src={primaryImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            {property.featured && (
              <span className="px-2.5 py-1 bg-gold-gradient text-black font-semibold text-[10px] uppercase tracking-widest rounded-md shadow-md">
                Featured
              </span>
            )}
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-zinc-200 text-[10px] font-semibold uppercase tracking-wider border border-white/10 rounded-md">
              {property.status === 'FOR_RENT' ? 'For Lease' : 'For Sale'}
            </span>
          </div>

          {/* Favorite Toggle Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all ${
              favorite
                ? 'bg-gold-400 text-black shadow-lg shadow-gold-500/40'
                : 'bg-black/50 text-white hover:bg-black/80 hover:text-gold-light border border-white/10'
            }`}
            aria-label="Save Property"
          >
            <Bookmark className={`w-4 h-4 ${favorite ? 'fill-black' : ''}`} />
          </button>
        </div>

        {/* Bottom Price Tag on Image */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="font-display font-bold text-2xl text-white tracking-wide">
            {formatCurrency(property.price, property.currency)}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center space-x-1.5 text-xs text-gold-light mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.address}, {property.city}</span>
          </div>

          <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-light transition-colors line-clamp-1">
            {property.title}
          </h3>

          <p className="text-xs text-zinc-400 font-light mt-1.5 line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-border/50 text-xs text-zinc-300">
          <div className="flex items-center space-x-1.5">
            <BedDouble className="w-4 h-4 text-gold-400" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Bath className="w-4 h-4 text-gold-400" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Maximize2 className="w-4 h-4 text-gold-400" />
            <span>{formatArea(property.areaSqFt)}</span>
          </div>
        </div>

        {/* View Property CTA Link */}
        <Link
          href={`/properties/${property.id}`}
          className="w-full py-2.5 rounded-lg bg-surface-muted hover:bg-gold-gradient hover:text-black text-zinc-200 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 border border-border group-hover:border-gold-glow"
        >
          <span>View Residence</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
