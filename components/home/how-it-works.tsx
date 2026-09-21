'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, CalendarCheck, Key } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Define Directive',
      icon: Search,
      description: 'Tell us your location, architectural preferences, and acquisition criteria.',
    },
    {
      number: '02',
      title: 'Discover Curated Estates',
      icon: Compass,
      description: 'Receive confidential portfolios including off-market private listings.',
    },
    {
      number: '03',
      title: 'Private Property Visit',
      icon: CalendarCheck,
      description: 'Experience chauffeur-driven or helicopter viewings with our managing partners.',
    },
    {
      number: '04',
      title: 'Seamless Acquisition',
      icon: Key,
      description: 'Finalize legal structure, escrow, and key handover with total peace of mind.',
    },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
            Client Journey
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            How Private Acquisition Works
          </h2>
          <p className="text-zinc-400 text-sm font-light">
            A discreet 4-step workflow engineered for clarity, speed, and absolute confidentiality.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card p-6 rounded-2xl relative space-y-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-gold-400">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-gold-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
