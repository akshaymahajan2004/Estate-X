'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
  estateAcquired: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Lord Alistair Sterling',
    role: 'Technology Investor',
    location: 'London & Dubai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'EstateX negotiated our off-market acquisition of a Kensington manor with unmatched precision. Their confidential advisory and legal structuring were utterly flawless.',
    estateAcquired: 'Victorian Manor, London ($18.9M)',
  },
  {
    id: 'test-2',
    name: 'Priya Sharma-Merchant',
    role: 'Managing Director, Horizon Capital',
    location: 'Mumbai & Singapore',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Finding a sea-facing oceanfront villa in Worli with direct helipad rights seemed impossible. The EstateX team delivered within 14 days.',
    estateAcquired: 'Grand Ocean Pavilion, Mumbai ($14.5M)',
  },
  {
    id: 'test-3',
    name: 'Tareq Al-Mansoor',
    role: 'Founder & Principal Executive',
    location: 'Dubai & Zurich',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The level of curation and architectural understanding is what sets EstateX apart from traditional luxury brokers. They speak the language of trophy real estate.',
    estateAcquired: 'Skyline Triplex Penthouse, Dubai ($22.0M)',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
            Private Client Endorsements
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Client Perspectives
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-gold-glow relative">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-gold-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg sm:text-2xl text-white italic leading-relaxed">
                “{current.quote}”
              </blockquote>

              {/* Client Info Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-border/50 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold-400">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">
                      {current.name}
                    </h4>
                    <p className="text-xs text-gold-light">
                      {current.role} • {current.location}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 bg-surface-muted rounded-full border border-border text-[11px] text-zinc-300 font-mono">
                  {current.estateAcquired}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-end space-x-3 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-surface hover:bg-gold-gradient hover:text-black text-white border border-border transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-full bg-surface hover:bg-gold-gradient hover:text-black text-white border border-border transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
