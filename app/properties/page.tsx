import React from 'react';
import PropertyCard from '@/components/properties/property-card';
import { getAllProperties } from '@/lib/data-service';
import PropertyFilterClient from './filter-client';
import { Search, Compass } from 'lucide-react';

interface PropertiesPageProps {
  searchParams: Promise<{
    location?: string;
    type?: string;
    intent?: 'BUY' | 'RENT' | 'ALL';
    bedrooms?: string;
    minPrice?: string;
    maxPrice?: string;
    search?: string;
    sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'popular';
  }>;
}

export const revalidate = 0;

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams;

  const filters = {
    location: params.location,
    type: params.type,
    intent: params.intent,
    bedrooms: params.bedrooms ? parseInt(params.bedrooms) : undefined,
    minPrice: params.minPrice ? parseFloat(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? parseFloat(params.maxPrice) : undefined,
    search: params.search,
    sortBy: params.sortBy,
  };

  const properties = await getAllProperties(filters);

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title Bar */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Global Portfolio Catalogue</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Discover Exceptional Estates
          </h1>
          <p className="text-zinc-400 text-sm font-light max-w-2xl">
            Browse our verified collection of oceanfront villas, skyline penthouses, and private compounds.
          </p>
        </div>

        {/* Client Interactive Filter Controller */}
        <PropertyFilterClient currentFilters={filters} totalResults={properties.length} />

        {/* Results Grid */}
        {properties.length === 0 ? (
          <div className="py-20 glass-panel rounded-3xl text-center space-y-4 max-w-xl mx-auto border border-border">
            <Search className="w-12 h-12 text-zinc-600 mx-auto" />
            <h3 className="font-display font-bold text-2xl text-white">No Estates Match Criteria</h3>
            <p className="text-xs text-zinc-400">
              Try adjusting your filter selection or clear your search term to view all available listings.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
