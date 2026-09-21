'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { MockProperty } from '@/lib/mock-data';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: MockProperty;
}

export default function ScheduleVisitModal({ isOpen, onClose, property }: ScheduleVisitModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '06:00 PM'];

  const handleSubmitVisit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId: property.id,
          date: selectedDate || new Date().toISOString().split('T')[0],
          timeSlot: selectedTime,
          name,
          email,
          phone,
          notes,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to schedule visit.');

      setReferenceCode(data.visit?.referenceNumber || `EX-${Math.floor(100000 + Math.random() * 900000)}`);
      setStatus('success');
      setStep(3);
    } catch (err: any) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-gold-glow relative shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-muted text-zinc-400 hover:text-white border border-border"
        >
          <X className="w-4 h-4 text-gold-400" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="text-gold-400 text-[10px] font-semibold uppercase tracking-widest">
            Chauffeur-Driven Property Visit
          </span>
          <h3 className="font-display font-bold text-2xl text-white">
            Schedule Viewing • {property.title}
          </h3>
          <p className="text-xs text-zinc-400">
            {property.address}, {property.city}
          </p>
        </div>

        {/* Progress Step Bar */}
        <div className="flex items-center space-x-2 border-b border-border/50 pb-4">
          <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-gold-400' : 'bg-border'}`} />
          <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-gold-400' : 'bg-border'}`} />
          <div className={`flex-1 h-1 rounded-full ${step === 3 ? 'bg-gold-400' : 'bg-border'}`} />
        </div>

        {/* Step 1: Date & Time */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>Select Preferred Date</span>
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>Select Preferred Time Slot</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 rounded-lg text-xs font-medium border transition-all ${
                      selectedTime === slot
                        ? 'bg-gold-gradient text-black border-gold-400 font-semibold'
                        : 'bg-surface text-zinc-400 border-border hover:border-zinc-600'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:brightness-110"
            >
              Continue to Personal Information
            </button>
          </div>
        )}

        {/* Step 2: Contact Info Form */}
        {step === 2 && (
          <form onSubmit={handleSubmitVisit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                Full Name *
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lord / Lady / Mr. / Ms..."
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@estate.com"
                  className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                  Phone *
                </label>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300">
                Special Logistics / Security Requests
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Private chauffeur pickup location, airport helipad transfer, security team details..."
                className="w-full bg-surface border border-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 bg-surface border border-border text-zinc-400 text-xs font-semibold uppercase rounded-lg"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-1 py-3 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:brightness-110 flex items-center justify-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'submitting' ? 'Confirming Visit...' : 'Confirm Private Viewing'}</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation State */}
        {step === 3 && (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-gold-400 mx-auto animate-bounce" />
            <h4 className="font-display font-bold text-2xl text-white">
              Viewing Appointment Confirmed
            </h4>
            <div className="p-4 bg-surface rounded-xl border border-gold-glow space-y-2 text-xs text-zinc-300 max-w-sm mx-auto">
              <div className="text-gold-light font-mono font-bold text-sm">
                Reference Code: {referenceCode}
              </div>
              <div>Date: {selectedDate || 'Upcoming'}</div>
              <div>Time Slot: {selectedTime}</div>
              <div>Assigned Advisor: {property.agent.name}</div>
            </div>
            <p className="text-xs text-zinc-400">
              A private calendar invitation and chauffeur confirmation link have been sent to your email address.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
