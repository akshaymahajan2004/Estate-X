'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, Download, Maximize2, Box } from 'lucide-react';

interface FloorPlanViewerProps {
  propertyTitle: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
}

export default function FloorPlanViewer({
  propertyTitle,
  bedrooms,
  bathrooms,
  areaSqFt,
}: FloorPlanViewerProps) {
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('2D');

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border/80 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
        <div>
          <span className="text-gold-light text-[10px] font-semibold uppercase tracking-widest">
            Architectural Schematics
          </span>
          <h3 className="font-display font-bold text-2xl text-white">
            Floor Plan & Spatial Layout
          </h3>
        </div>

        {/* 2D / 3D Switcher Toggle */}
        <div className="flex items-center space-x-2 bg-surface p-1 rounded-xl border border-border">
          <button
            onClick={() => setViewMode('2D')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${
              viewMode === '2D'
                ? 'bg-gold-gradient text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2D Schematic</span>
          </button>
          <button
            onClick={() => setViewMode('3D')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${
              viewMode === '3D'
                ? 'bg-gold-gradient text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Axonometric</span>
          </button>
        </div>
      </div>

      {/* Viewport Frame */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
        {viewMode === '2D' ? (
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
            alt="2D Floor Plan Schematic"
            fill
            className="object-cover opacity-80"
          />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
            alt="3D Floor Plan Cutaway"
            fill
            className="object-cover opacity-80"
          />
        )}

        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-gold-300 text-[11px] font-mono border border-gold-glow">
          {viewMode === '2D' ? 'Standard Architectural Level 1' : '3D Spatial Cutaway Preview'}
        </div>
      </div>

      {/* Specs Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-300 pt-2 gap-4">
        <div className="flex items-center space-x-6">
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Total Footprint</span>
            <span className="font-semibold text-white">{areaSqFt.toLocaleString()} Sq Ft</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Ensuite Bedrooms</span>
            <span className="font-semibold text-white">{bedrooms} Suites</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Bathrooms</span>
            <span className="font-semibold text-white">{bathrooms} Baths</span>
          </div>
        </div>

        <button
          onClick={() => alert('Architectural Blueprints PDF downloaded successfully.')}
          className="px-4 py-2.5 bg-surface-muted hover:bg-surface border border-border text-gold-light hover:text-white rounded-lg font-semibold text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download High-Res Blueprints</span>
        </button>
      </div>
    </div>
  );
}
