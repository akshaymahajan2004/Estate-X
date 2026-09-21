'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Star, ShieldCheck, Award } from 'lucide-react';
import { MockAgent } from '@/lib/mock-data';

interface AgentShowcaseProps {
  agents: MockAgent[];
}

export default function AgentShowcase({ agents }: AgentShowcaseProps) {
  const [selectedAgent, setSelectedAgent] = useState<MockAgent | null>(null);

  return (
    <section className="py-24 bg-surface relative overflow-hidden border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
            Private Client Roster
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Managing Partners & Advisory
          </h2>
          <p className="text-zinc-400 text-sm font-light">
            Direct access to seasoned international brokers with multi-billion dollar transacted track records.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group p-6 space-y-6"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                  <Image
                    src={agent.portraitUrl}
                    alt={agent.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold flex items-center space-x-1 border border-white/10">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    <span>{agent.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                    {agent.name}
                  </h3>
                  <div className="text-xs text-gold-400 font-medium">
                    {agent.title}
                  </div>
                  <p className="text-xs text-zinc-400 font-light mt-2 line-clamp-2">
                    {agent.bio}
                  </p>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{agent.experienceYears} Years Advisory</span>
                  <span className="text-gold-light font-semibold">{agent.activeListings} Active Assets</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedAgent(agent)}
                    className="flex-1 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow hover:brightness-110 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Advisor</span>
                  </button>
                  <a
                    href={`tel:${agent.phone}`}
                    className="p-2.5 bg-surface-muted text-zinc-200 hover:text-gold-400 border border-border rounded-lg transition-colors"
                    title="Call Partner"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Direct Contact Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full p-6 rounded-2xl border border-gold-glow space-y-4 relative">
            <h3 className="font-display font-bold text-2xl text-white">
              Connect with {selectedAgent.name}
            </h3>
            <p className="text-xs text-zinc-400">
              Direct private inquiry for off-market access and consultation.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${selectedAgent.email}`}
                className="w-full py-3 bg-surface-muted text-white text-xs font-medium rounded-lg border border-border flex items-center justify-center space-x-2 hover:border-gold-400"
              >
                <Mail className="w-4 h-4 text-gold-400" />
                <span>{selectedAgent.email}</span>
              </a>
              <a
                href={`tel:${selectedAgent.phone}`}
                className="w-full py-3 bg-gold-gradient text-black text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{selectedAgent.phone}</span>
              </a>
            </div>
            <button
              onClick={() => setSelectedAgent(null)}
              className="w-full py-2 text-xs text-zinc-400 hover:text-white pt-2"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
