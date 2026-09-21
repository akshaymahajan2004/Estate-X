'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { MockBlogPost } from '@/lib/mock-data';

interface InsightsPreviewProps {
  posts: MockBlogPost[];
}

export default function InsightsPreview({ posts }: InsightsPreviewProps) {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Intellectual Advisory</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Market Insights & Publications
            </h2>
            <p className="text-zinc-400 text-sm font-light max-w-xl">
              Confidential analysis on biophilic architectural shifts, trophy asset liquidity, and international tax-efficient estate planning.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-light font-semibold hover:text-white transition-colors border-b border-gold-400/50 pb-1 self-start md:self-end"
          >
            <span>All Articles ({posts.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/insights/${post.slug}`}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full block"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.coverImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] uppercase font-semibold text-gold-light border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[11px] text-zinc-500">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{post.readTimeMinutes} min read</span>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-light transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs text-gold-400 font-semibold uppercase tracking-wider">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
