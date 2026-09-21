'use client';

import React from 'react';
import { X, Play, Shield, Maximize2 } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

export default function VirtualTourModal({ isOpen, onClose, propertyTitle }: VirtualTourModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-5xl h-[80vh] rounded-3xl border border-gold-glow flex flex-col justify-between overflow-hidden relative shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-border/60 flex items-center justify-between bg-surface/80">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-display font-bold text-white text-lg">
              3D Virtual Tour • {propertyTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-surface-muted border border-border"
          >
            <X className="w-5 h-5 text-gold-400" />
          </button>
        </div>

        {/* 3D Walkthrough Viewport Frame */}
        <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="3D Virtual Walkthrough"
            className="w-full h-full border-0 opacity-85"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 glass-panel rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest border border-gold-glow">
            Interactive Matterport 3D Render
          </div>
        </div>

        {/* Footer controls */}
        <div className="p-4 border-t border-border/60 bg-surface/80 flex items-center justify-between text-xs text-zinc-400">
          <span>Use mouse or touch gestures to rotate 360° pan.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gold-gradient text-black font-semibold uppercase tracking-wider rounded-lg"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
