'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  count: number;
  description: string;
  imageUrl: string;
  slug: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-villas',
    title: 'Oceanfront Villas',
    count: 24,
    description: 'Expansive private sanctuaries with infinity coastal views and private docks.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    slug: 'VILLA',
  },
  {
    id: 'cat-penthouses',
    title: 'Sky Penthouses',
    count: 18,
    description: 'Multi-level high-rise crowns offering 360-degree city views and rooftop plunges.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    slug: 'PENTHOUSE',
  },
  {
    id: 'cat-manors',
    title: 'Private Manors & Estates',
    count: 15,
    description: 'Gated heritage compounds featuring acres of private botanical grounds.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    slug: 'FAMILY_HOME',
  },
  {
    id: 'cat-apartments',
    title: 'Architectural Apartments',
    count: 32,
    description: 'Curated high-spec urban residences situated in world financial centers.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    slug: 'APARTMENT',
  },
];

export default function PropertyCategories() {
  const [activeCategory, setActiveCategory] = useState<CategoryItem>(CATEGORIES[0]);

  return (
    <section className="py-24 bg-surface relative overflow-hidden border-t border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
            Portfolio Classification
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Curated Estate Categories
          </h2>
          <p className="text-zinc-400 text-sm font-light">
            Explore property collections tailored to your lifestyle and investment directives.
          </p>
        </div>

        {/* Split Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Category List */}
          <div className="lg:col-span-5 space-y-3">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory.id === cat.id;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-500 border ${
                    isSelected
                      ? 'bg-surface-hover border-gold-glow shadow-xl shadow-gold-500/5'
                      : 'bg-surface/40 border-border/40 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gold-light uppercase tracking-widest">
                      {cat.count} Residences
                    </span>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSelected ? 'text-gold-400 translate-x-1 -translate-y-1' : 'text-zinc-600'
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-display text-2xl font-bold mt-2 transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {cat.title}
                  </h3>
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-zinc-400 mt-2 font-light leading-relaxed"
                    >
                      {cat.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Image Showcase Frame */}
          <div className="lg:col-span-7 relative h-[450px] rounded-2xl overflow-hidden glass-panel border border-gold-glow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full h-full relative"
              >
                <Image
                  src={activeCategory.imageUrl}
                  alt={activeCategory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-10">
                  <div className="space-y-2">
                    <span className="px-3 py-1 bg-gold-gradient text-black font-semibold text-[10px] uppercase tracking-widest rounded-md">
                      Featured Category
                    </span>
                    <h4 className="font-display text-3xl font-bold text-white">
                      {activeCategory.title}
                    </h4>
                  </div>
                  <Link
                    href={`/properties?type=${activeCategory.slug}`}
                    className="px-6 py-3 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center space-x-1.5"
                  >
                    <span>Browse Collection</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
