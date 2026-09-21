'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MockProperty } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { MapPin, BedDouble, Bath, ArrowUpRight } from 'lucide-react';

interface RealEstateMapProps {
  properties: MockProperty[];
  selectedPropertyId?: string;
  onSelectProperty?: (id: string) => void;
}

export default function RealEstateMap({
  properties,
  selectedPropertyId,
  onSelectProperty,
}: RealEstateMapProps) {
  const [mounted, setMounted] = useState(false);
  const [activeProperty, setActiveProperty] = useState<MockProperty | null>(
    properties[0] || null
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedPropertyId) {
      const found = properties.find((p) => p.id === selectedPropertyId);
      if (found) setActiveProperty(found);
    }
  }, [selectedPropertyId, properties]);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[450px] bg-surface rounded-2xl border border-border flex items-center justify-center text-zinc-500 text-xs">
        Initializing Dark Satellite Discovery Map...
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[480px] relative rounded-2xl overflow-hidden glass-panel border border-border/80 flex flex-col justify-between">
      {/* Dark Leaflet Interactive Map Container */}
      <div className="absolute inset-0 bg-surface z-0">
        <iframe
          title="EstateX Property Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={`https://maps.google.com/maps?q=${activeProperty?.latitude || 19.0176},${
            activeProperty?.longitude || 72.8173
          }&z=12&output=embed`}
          className="opacity-75 filter grayscale invert contrast-125 hover:grayscale-0 hover:invert-0 transition-all duration-500"
        />
      </div>

      {/* Floating Marker Selection Toolbar Overlay */}
      <div className="relative z-10 p-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent flex items-center justify-between">
        <div className="flex items-center space-x-2 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-glow text-gold-300 text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>Synchronized Marker Engine ({properties.length} Estates)</span>
        </div>
      </div>

      {/* Selected Marker Popup Card Preview */}
      {activeProperty && (
        <div className="relative z-10 m-4 max-w-sm glass-panel p-4 rounded-xl border border-gold-glow shadow-2xl shadow-black space-y-3">
          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden">
            <Image
              src={activeProperty.images[0]?.url || ''}
              alt={activeProperty.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-gold-gradient text-black font-semibold text-[10px] rounded uppercase">
              {activeProperty.type}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-wider text-gold-light font-semibold">
              {activeProperty.city}, {activeProperty.country}
            </div>
            <h4 className="font-display font-bold text-white text-base leading-tight">
              {activeProperty.title}
            </h4>
            <div className="text-gold-400 font-display font-bold text-lg">
              {formatCurrency(activeProperty.price, activeProperty.currency)}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-300 pt-2 border-t border-border/50">
            <div className="flex items-center space-x-3">
              <span className="flex items-center space-x-1">
                <BedDouble className="w-3.5 h-3.5 text-gold-400" />
                <span>{activeProperty.bedrooms}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Bath className="w-3.5 h-3.5 text-gold-400" />
                <span>{activeProperty.bathrooms}</span>
              </span>
            </div>

            <Link
              href={`/properties/${activeProperty.id}`}
              className="px-3 py-1.5 bg-gold-gradient text-black font-semibold text-[11px] uppercase tracking-wider rounded flex items-center space-x-1 hover:brightness-110"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
