'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inquirySchema, InquiryFormValues } from '@/lib/validators';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function LeadContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      intent: 'BUY',
      preferredLocation: 'Mumbai',
      propertyType: 'VILLA',
      budget: '$5M - $15M',
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to transmit inquiry. Please try again.');
      }

      setStatus('success');
      reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
              Private Client Desk
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Inquire Confidential Portfolio Access
            </h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Submit your property directive below. An executive managing partner will contact you directly within two hours under strict non-disclosure terms.
            </p>

            <div className="space-y-4 pt-4 border-t border-border/50 text-xs text-zinc-300">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-gold-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Direct Advisory Desk</div>
                  <div className="text-zinc-400">+1 (800) 890-ESTATEX</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-gold-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Encrypted Email Desk</div>
                  <div className="text-zinc-400">advisory@estatex.luxury</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-gold-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Global Headquarters</div>
                  <div className="text-zinc-400">Mayfair, London • DIFC, Dubai • Worli, Mumbai</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-gold-glow shadow-2xl shadow-black">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-gold-400 mx-auto animate-bounce" />
                <h3 className="font-display font-bold text-2xl text-white">
                  Inquiry Transmitted Successfully
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Thank you. Your directive has been encrypted and routed to our Senior Managing Partner. We will reach out shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg"
                >
                  Submit Another Directive
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      placeholder="Lord / Lady / Mr. / Ms..."
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                    />
                    {errors.name && <p className="text-[10px] text-red-400">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Private Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="client@familyoffice.com"
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                    />
                    {errors.email && <p className="text-[10px] text-red-400">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                    />
                    {errors.phone && <p className="text-[10px] text-red-400">{errors.phone.message}</p>}
                  </div>

                  {/* Preferred Location */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Target City / Market *
                    </label>
                    <select
                      {...register('preferredLocation')}
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Dubai">Dubai</option>
                      <option value="London">London</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Delhi">Delhi NCR</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Intent */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Intent
                    </label>
                    <select
                      {...register('intent')}
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="BUY">Purchase / Buy</option>
                      <option value="RENT">Lease / Rent</option>
                    </select>
                  </div>

                  {/* Property Type */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Type
                    </label>
                    <select
                      {...register('propertyType')}
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="VILLA">Ocean Villa</option>
                      <option value="PENTHOUSE">Sky Penthouse</option>
                      <option value="APARTMENT">Apartment</option>
                      <option value="FAMILY_HOME">Private Manor</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                      Target Budget
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Under $5M">Under $5M USD</option>
                      <option value="$5M - $15M">$5M – $15M USD</option>
                      <option value="$15M+">$15M+ USD Ultra-Trophy</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                    Acquisition Directive & Specific Requirements *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Specify architectural style, preferred sea frontage, Helipad requirements, NDA requirements..."
                    className="w-full bg-surface border border-border/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
                  />
                  {errors.message && <p className="text-[10px] text-red-400">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-gold-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'loading' ? 'Encrypting Directive...' : 'Transmit Confidential Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
