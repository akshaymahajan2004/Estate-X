'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, Menu, X, Calendar, Compass, PhoneCall } from 'lucide-react';
import { useFavorites } from '@/lib/favorites-context';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '/properties' },
    { name: 'Locations', href: '/#locations' },
    { name: 'Projects', href: '/#showcase' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-md py-3.5 border-b border-border/80 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2.5 focus:outline-none">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-light flex items-center justify-center font-display font-bold text-black text-xl shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
              X
            </span>
            <div className="flex flex-col">
              <span className="font-display tracking-widest text-2xl font-semibold text-white group-hover:text-gold-light transition-colors">
                ESTATE<span className="text-gold-400">X</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-muted -mt-1 font-sans font-medium">
                LUXURY ESTATES
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 hover:text-gold-light ${
                    isActive ? 'text-gold-400 font-semibold' : 'text-zinc-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Saved Properties */}
            <Link
              href="/saved"
              className="relative p-2 text-zinc-300 hover:text-gold-light transition-colors focus:outline-none"
              title="Saved Properties"
            >
              <Bookmark className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 text-black font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Schedule a Visit CTA */}
            <Link
              href="/properties#schedule"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-gradient rounded-md shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all duration-300 overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Visit</span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link href="/saved" className="relative p-2 text-zinc-300">
              <Bookmark className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface/95 backdrop-blur-xl border-b border-border/80 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-zinc-300 hover:text-gold-400 transition-colors py-2 border-b border-border/40 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Compass className="w-4 h-4 text-zinc-500" />
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/saved"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-surface-muted text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-border"
                >
                  <Bookmark className="w-4 h-4 text-gold-400" />
                  <span>Saved Properties ({favoritesCount})</span>
                </Link>
                <Link
                  href="/properties#schedule"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gold-gradient text-black text-xs font-semibold uppercase tracking-wider rounded-md shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Property Visit</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
