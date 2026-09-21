'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Calendar, ShieldCheck, MapPin, Maximize2, BedDouble, Bath } from 'lucide-react';
import { MockProperty } from '@/lib/mock-data';
import { formatCurrency, formatArea } from '@/lib/utils';
import VirtualTourModal from '@/components/properties/virtual-tour-modal';
import ScheduleVisitModal from '@/components/properties/schedule-visit-modal';

interface ImmersiveShowcaseProps {
  property: MockProperty;
}

export default function ImmersiveShowcase({ property }: ImmersiveShowcaseProps) {
  const [tourOpen, setTourOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <section id="showcase" className="py-28 bg-black relative overflow-hidden text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em]">
            Architectural Masterpiece Showcase
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
            The Pinnacle of Waterfront Living
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Experience an exclusive walkthrough of our current flagship estate available for immediate private acquisition.
          </p>
        </div>

        {/* Cinematic Main Banner Frame */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden glass-panel border border-gold-glow shadow-2xl shadow-black">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Central 3D / Video Tour Play Trigger Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setTourOpen(true)}
              className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-gradient text-black shadow-2xl shadow-gold-500/40 hover:scale-110 transition-transform duration-300"
            >
              <Play className="w-8 h-8 ml-1 fill-black" />
              <span className="absolute -bottom-8 text-[10px] uppercase tracking-widest font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Launch 3D Virtual Walkthrough
              </span>
            </button>
          </div>

          {/* Bottom Spec Bar overlay */}
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-gold-light text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.address}, {property.city}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {property.title}
              </h3>
              <div className="text-xl font-bold text-gold-400 font-display">
                {formatCurrency(property.price, property.currency)}
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center space-x-6 text-xs text-zinc-300">
              <div className="flex items-center space-x-2">
                <BedDouble className="w-4 h-4 text-gold-400" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="w-4 h-4 text-gold-400" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center space-x-2">
                <Maximize2 className="w-4 h-4 text-gold-400" />
                <span>{formatArea(property.areaSqFt)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                onClick={() => setScheduleOpen(true)}
                className="flex-1 md:flex-none px-5 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Private Visit</span>
              </button>
              <Link
                href={`/properties/${property.id}`}
                className="px-4 py-2.5 bg-surface border border-border text-white hover:text-gold-light text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <VirtualTourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} propertyTitle={property.title} />
      <ScheduleVisitModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} property={property} />
    </section>
  );
}
