'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black border-t border-border/60 text-zinc-400 pt-20 pb-12 relative overflow-hidden">
      {/* Glow effect backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border/50">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3">
              <span className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center font-display font-bold text-black text-2xl">
                X
              </span>
              <span className="font-display tracking-widest text-3xl font-bold text-white">
                ESTATE<span className="text-gold-400">X</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed">
              Curating architectural masterpieces and off-market trophy estates across the world’s most coveted financial & coastal capitals.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-light font-semibold mb-3">
              Private Private Client Intelligence
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              Receive confidential quarterly reports on global prime real estate markets.
            </p>
            {subscribed ? (
              <div className="p-3 bg-surface-hover border border-gold-glow rounded-md text-gold-300 text-xs flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Thank you. You have been added to our private advisory list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md space-x-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter confidential email..."
                    className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-md hover:brightness-110 transition-all flex items-center space-x-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-border/50 text-xs">
          <div>
            <h5 className="text-white font-semibold tracking-wider uppercase mb-4 text-[11px]">
              Prime Locations
            </h5>
            <ul className="space-y-2.5">
              {['Mumbai (Worli & Bandra)', 'Dubai (Downtown & Palm)', 'London (Kensington & Mayfair)', 'Bangalore (UB City)', 'Ahmedabad (Science City)', 'Delhi NCR (Lutyens)'].map((loc) => (
                <li key={loc}>
                  <Link href="/properties" className="hover:text-gold-light transition-colors">
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold tracking-wider uppercase mb-4 text-[11px]">
              Portfolio Types
            </h5>
            <ul className="space-y-2.5">
              {['Oceanfront Villas', 'Skyline Penthouses', 'Historic Victorian Manors', 'Botanical Compounds', 'Commercial Towers', 'New Developments'].map((type) => (
                <li key={type}>
                  <Link href="/properties" className="hover:text-gold-light transition-colors">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold tracking-wider uppercase mb-4 text-[11px]">
              Company & Advisory
            </h5>
            <ul className="space-y-2.5">
              {['About EstateX', 'Architectural Partners', 'Private Client Desk', 'Market Insights', 'Saved Properties', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="/insights" className="hover:text-gold-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold tracking-wider uppercase mb-4 text-[11px]">
              Global Offices
            </h5>
            <div className="space-y-3 text-zinc-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>London: 14 Mayfair Square, W1J</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Dubai: Level 48, DIFC Gate Tower</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Mumbai: 42 Worli Sea Face</span>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-white font-mono">+1 (800) 890-ESTATEX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Admin Login link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} EstateX Luxury Real Estate Group. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300">Terms of Service</Link>
            <Link href="/admin" className="text-gold-400/80 hover:text-gold-300 font-mono tracking-wider flex items-center space-x-1">
              <span>[ Admin Portal ]</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
