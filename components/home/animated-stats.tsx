'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedStats() {
  const stats = [
    { label: 'Active Trophy Portfolio', value: '$2.5B+' },
    { label: 'Private Clients Served', value: '1,200+' },
    { label: 'Global Cities Covered', value: '18+' },
    { label: 'Total Value Transacted', value: '$4.8B+' },
  ];

  return (
    <section className="py-20 bg-surface border-t border-b border-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center space-y-2 p-6 glass-panel rounded-2xl border border-white/5"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-gold-gradient">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
