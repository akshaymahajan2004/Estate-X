'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-black text-white">
      {/* Background Architectural Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury Architectural Estate"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-dark-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-[0.3em]">
            Private Portfolio Access
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Your next address <br />
            <span className="text-gold-gradient italic font-serif">is waiting.</span>
          </h2>
          <p className="text-zinc-300 text-base font-light leading-relaxed max-w-xl mx-auto">
            Connect with our global managing partners for off-market access and confidential viewings across London, Dubai, Mumbai, and world capitals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/properties"
            className="px-8 py-4 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest rounded-lg shadow-2xl shadow-gold-500/30 hover:scale-105 transition-all flex items-center space-x-2"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-surface-hover/90 border border-gold-glow text-white hover:text-gold-light text-xs font-semibold uppercase tracking-widest rounded-lg backdrop-blur-md transition-all flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            <span>Talk to an Expert</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
