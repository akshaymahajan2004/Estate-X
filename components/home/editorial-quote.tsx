'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EditorialQuote() {
  return (
    <section className="py-32 bg-black relative overflow-hidden text-white border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Statement Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold">
              The EstateX Philosophy
            </span>
            <blockquote className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              “Architecture isn’t just about where you live.{' '}
              <span className="text-gold-gradient font-serif italic">It’s about how you live.”</span>
            </blockquote>
            <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl">
              We curate residences where structural geometry, micro-climate orientation, and emotional sanctuary intersect—creating private worlds engineered for legacy and tranquility.
            </p>
            <div className="pt-4 flex items-center space-x-4 border-t border-border/40">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border border-gold-400">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Elena Rostova"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">Elena Rostova</div>
                <div className="text-[11px] text-gold-light uppercase tracking-wider font-mono">
                  Founder & Principal Architect Advisory
                </div>
              </div>
            </div>
          </motion.div>

          {/* Architectural Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-gold-glow"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Architectural Masterpiece"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl text-xs text-zinc-300">
              <span className="text-gold-light font-semibold block uppercase tracking-wider text-[10px] mb-1">
                Architectural Monograph • 2026
              </span>
              <span>The Sanctum House, Worli Sea Face Promenade</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
