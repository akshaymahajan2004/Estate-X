'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Home, Users, Calendar, BookOpen, Settings, LogOut } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Properties', href: '/admin/properties', icon: Home },
    { name: 'Leads & Inquiries', href: '/admin/leads', icon: Users },
    { name: 'Visit Requests', href: '/admin/visits', icon: Calendar },
    { name: 'Insights / Blog', href: '/admin/insights', icon: BookOpen },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-border min-h-screen p-6 flex flex-col justify-between shrink-0">
      <div className="space-y-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-md bg-gold-gradient flex items-center justify-center font-display font-bold text-black text-lg">
            X
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white tracking-widest text-lg">
              ESTATE<span className="text-gold-400">X</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-gold-light">
              ADMIN CONTROL DESK
            </span>
          </div>
        </Link>

        <nav className="space-y-1.5">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-gold-gradient text-black font-bold shadow-md shadow-gold-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-surface-hover'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-border/50 space-y-3">
        <div className="p-3 rounded-lg bg-surface-muted border border-border/60 text-xs">
          <div className="font-semibold text-white">Alexander Vance</div>
          <div className="text-[10px] text-gold-light">Managing Admin</div>
        </div>
        <Link
          href="/"
          className="w-full py-2 bg-surface hover:bg-surface-hover text-zinc-400 hover:text-white text-xs font-semibold rounded-lg flex items-center justify-center space-x-1.5 border border-border"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit Admin</span>
        </Link>
      </div>
    </aside>
  );
}
