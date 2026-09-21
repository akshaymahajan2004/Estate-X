'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import PropertyCard from '@/components/properties/property-card';
import { MockProperty } from '@/lib/mock-data';

interface FeaturedPropertiesProps {
  properties: MockProperty[];
}

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    { label: 'All Residences', value: 'ALL' },
    { label: 'Ocean Villas', value: 'VILLA' },
    { label: 'Sky Penthouses', value: 'PENTHOUSE' },
    { label: 'Private Manors', value: 'FAMILY_HOME' },
  ];

  const filteredProperties = activeCategory === 'ALL'
    ? properties
    : properties.filter((p) => p.type === activeCategory);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Selection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured Residences & Estates
            </h2>
            <p className="text-zinc-400 text-sm font-light max-w-xl">
              Hand-picked trophy properties characterized by uncompromising craftsmanship, prime locations, and architectural distinction.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-light font-semibold hover:text-white transition-colors border-b border-gold-400/50 pb-1 self-start md:self-end"
          >
            <span>View Full Portfolio ({properties.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-gold-gradient text-black shadow-lg shadow-gold-500/20'
                  : 'bg-surface text-zinc-400 border border-border hover:border-gold-glow hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
