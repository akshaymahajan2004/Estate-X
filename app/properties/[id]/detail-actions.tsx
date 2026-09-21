'use client';

import React, { useState } from 'react';
import { Calendar, Play, Bookmark, Share2 } from 'lucide-react';
import { MockProperty } from '@/lib/mock-data';
import { useFavorites } from '@/lib/favorites-context';
import ScheduleVisitModal from '@/components/properties/schedule-visit-modal';
import VirtualTourModal from '@/components/properties/virtual-tour-modal';

interface PropertyDetailActionsProps {
  property: MockProperty;
}

export default function PropertyDetailActions({ property }: PropertyDetailActionsProps) {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Property link copied to clipboard.');
    }
  };

  return (
    <>
      <div className="glass-panel p-6 rounded-2xl border border-gold-glow space-y-4 shadow-xl">
        <h3 className="font-display font-bold text-xl text-white">Private Acquisition Desk</h3>
        <p className="text-xs text-zinc-400">
          Arrange a confidential viewing or request complete financial and legal documentation.
        </p>

        <div className="space-y-3 pt-2">
          <button
            onClick={() => setScheduleOpen(true)}
            className="w-full py-3.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:brightness-110 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Private Viewing</span>
          </button>

          <button
            onClick={() => setTourOpen(true)}
            className="w-full py-3.5 bg-surface-muted hover:bg-surface border border-border text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4 text-gold-400" />
            <span>Launch 3D Virtual Walkthrough</span>
          </button>

          <div className="flex items-center space-x-2 pt-2">
            <button
              onClick={() => toggleFavorite(property.id)}
              className={`flex-1 py-2.5 rounded-lg border text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                favorite
                  ? 'bg-gold-400 text-black border-gold-400'
                  : 'bg-surface text-zinc-300 border-border hover:border-gold-glow'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${favorite ? 'fill-black' : ''}`} />
              <span>{favorite ? 'Saved' : 'Save Property'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 bg-surface text-zinc-300 hover:text-white border border-border rounded-lg"
              title="Share Residence"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <ScheduleVisitModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} property={property} />
      <VirtualTourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} propertyTitle={property.title} />
    </>
  );
}
