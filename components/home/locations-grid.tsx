'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, MapPin } from 'lucide-react';
import { MockLocation } from '@/lib/mock-data';

interface LocationsGridProps {
  locations: MockLocation[];
}

export default function LocationsGrid({ locations }: LocationsGridProps) {
  return (
    <section id="locations" className="py-24 bg-surface relative overflow-hidden border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Global Investment Destinations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Prime International Hubs
            </h2>
            <p className="text-zinc-400 text-sm font-light max-w-xl">
              Strategic residential markets selected for regulatory stability, capital appreciation, and lifestyle excellence.
            </p>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/properties?location=${loc.name}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-card flex flex-col justify-between p-6 block"
              >
                {/* Background Image */}
                <Image
                  src={loc.imageUrl}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-gold-light font-semibold text-[10px] uppercase tracking-wider rounded-md">
                    {loc.propertyCount} Active Residences
                  </span>
                  <div className="w-9 h-9 rounded-full bg-gold-gradient text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
                    {loc.country}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-white group-hover:text-gold-light transition-colors">
                    {loc.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-zinc-300 pt-2 border-t border-white/10">
                    <TrendingUp className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="line-clamp-1">{loc.marketInfo}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
