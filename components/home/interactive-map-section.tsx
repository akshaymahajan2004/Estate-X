'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, BedDouble, Bath, Compass } from 'lucide-react';
import RealEstateMap from '@/components/maps/real-estate-map';
import { MockProperty } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

interface InteractiveMapSectionProps {
  properties: MockProperty[];
}

export default function InteractiveMapSection({ properties }: InteractiveMapSectionProps) {
  const [selectedId, setSelectedId] = useState<string>(properties[0]?.id || '');

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Cartographic Discovery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Interactive Global Estate Map
            </h2>
            <p className="text-zinc-400 text-sm font-light">
              Locate ultra-prime trophy assets across financial centers and coastal sanctuaries.
            </p>
          </div>
        </div>

        {/* Map & List Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Scrollable List */}
          <div className="lg:col-span-5 space-y-4 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
            {properties.map((prop) => {
              const isSelected = prop.id === selectedId;
              return (
                <div
                  key={prop.id}
                  onClick={() => setSelectedId(prop.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 glass-card flex space-x-4 ${
                    isSelected ? 'border-gold-glow bg-surface-hover shadow-lg shadow-gold-500/10' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="relative w-28 h-24 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={prop.images[0]?.url || ''}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-gold-light uppercase tracking-wider font-semibold">
                        {prop.city}, {prop.country}
                      </div>
                      <h4 className="font-display font-bold text-white text-base line-clamp-1">
                        {prop.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-display font-bold text-gold-400 text-sm">
                        {formatCurrency(prop.price, prop.currency)}
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        {prop.bedrooms} Beds • {prop.bathrooms} Baths
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Interactive Map Frame */}
          <div className="lg:col-span-7 h-[550px]">
            <RealEstateMap
              properties={properties}
              selectedPropertyId={selectedId}
              onSelectProperty={(id) => setSelectedId(id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
