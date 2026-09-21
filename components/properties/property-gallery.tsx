'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, Grid } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

interface PropertyGalleryProps {
  images: GalleryImage[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentImage = images[selectedIndex] || images[0];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullscreenOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setFullscreenOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenOpen, images.length]);

  return (
    <div className="space-y-4">
      {/* Grid Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 rounded-3xl overflow-hidden glass-panel border border-border p-2">
        {/* Main Large Image */}
        <div
          onClick={() => {
            setSelectedIndex(0);
            setFullscreenOpen(true);
          }}
          className="md:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group bg-black"
        >
          <Image
            src={images[0]?.url || ''}
            alt={title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-xs text-gold-light uppercase tracking-wider font-semibold flex items-center space-x-2">
              <Maximize2 className="w-4 h-4 text-gold-400" />
              <span>Expand Gallery View</span>
            </span>
          </div>
        </div>

        {/* Side Stack Thumbnail Images */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
          {images.slice(1, 3).map((img, idx) => (
            <div
              key={img.id || idx}
              onClick={() => {
                setSelectedIndex(idx + 1);
                setFullscreenOpen(true);
              }}
              className="relative aspect-[16/10] md:aspect-auto md:h-full rounded-2xl overflow-hidden cursor-pointer group bg-black"
            >
              <Image
                src={img.url}
                alt={img.caption || title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {idx === 1 && images.length > 3 && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white font-display text-lg font-bold">
                  +{images.length - 3} Photos
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal View */}
      {fullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8">
          {/* Header Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="text-xs text-gold-light uppercase tracking-widest font-semibold">
              {title} • Photo {selectedIndex + 1} of {images.length}
            </div>
            <button
              onClick={() => setFullscreenOpen(false)}
              className="p-3 bg-surface rounded-full text-zinc-400 hover:text-white border border-border"
            >
              <X className="w-6 h-6 text-gold-400" />
            </button>
          </div>

          {/* Viewport Image */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            <Image
              src={currentImage?.url || ''}
              alt={currentImage?.caption || title}
              fill
              className="object-contain"
            />

            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-surface/80 hover:bg-gold-gradient hover:text-black text-white border border-border transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-surface/80 hover:bg-gold-gradient hover:text-black text-white border border-border transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Bar Footer */}
          <div className="flex items-center justify-center space-x-3 overflow-x-auto py-2 z-10">
            {images.map((img, idx) => (
              <button
                key={img.id || idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  selectedIndex === idx ? 'border-gold-400 scale-105' : 'border-transparent opacity-50'
                }`}
              >
                <Image src={img.url} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
