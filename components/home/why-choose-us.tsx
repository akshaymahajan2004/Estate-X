'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, UserCheck, TrendingUp, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      number: '01',
      title: 'Curated Properties',
      icon: ShieldCheck,
      description: 'Every estate undergoes rigorous architectural vetting, legal title audit, and valuation verification prior to inclusion in our portfolio.',
    },
    {
      number: '02',
      title: 'Local Expertise',
      icon: Award,
      description: 'In-country managing partners with deep insider access to off-market inventory and private owner directives.',
    },
    {
      number: '03',
      title: 'Personalized Guidance',
      icon: UserCheck,
      description: 'Bespoke advisory tailored for private family offices, tech leaders, and global royalty with strict non-disclosure security.',
    },
    {
      number: '04',
      title: 'Smarter Decisions',
      icon: TrendingUp,
      description: 'Proprietary market intelligence, micro-location yield analytics, and long-term capital preservation modelling.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The EstateX Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Four Pillars of Distinction
          </h2>
          <p className="text-zinc-400 text-sm font-light">
            Why discerning private clients trust EstateX for trophy asset acquisition and advisory.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col justify-between space-y-6 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-3xl text-gold-400/40 group-hover:text-gold-400 transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-surface-hover border border-border group-hover:border-gold-glow flex items-center justify-center text-gold-400 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {pillar.description}
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
