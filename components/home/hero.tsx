'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Compass } from 'lucide-react';
import PropertySearchBar from './property-search-bar';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      {/* Background Image with Subtle Scale Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="w-full h-full relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
            alt="EstateX Luxury Architecture"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Multi-layered Vignette Overlay */}
          <div className="absolute inset-0 bg-dark-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </div>

      {/* Hero Central Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-12">
        <div className="max-w-3xl space-y-6">
          {/* Gold Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface-hover/80 border border-gold-glow backdrop-blur-md text-gold-300 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span>Curated Architectural Portfolio 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Find a place <br />
            <span className="text-gold-gradient italic font-serif">worth calling home.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl leading-relaxed"
          >
            Private oceanfront compounds, skyline penthouses, and modernist sanctuaries curated for global leaders, visionaries, and private family offices.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/properties"
              className="px-7 py-3.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-gold-500/20 hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#showcase"
              className="px-7 py-3.5 bg-surface-hover/80 border border-border/80 text-white hover:text-gold-light text-xs font-semibold uppercase tracking-widest rounded-lg backdrop-blur-md hover:border-gold-glow transition-all flex items-center space-x-2"
            >
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Immersive Showcase</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Floating Search Widget */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full px-4 sm:px-6 lg:px-8 relative z-20"
      >
        <PropertySearchBar />
      </motion.div>
    </section>
  );
}
