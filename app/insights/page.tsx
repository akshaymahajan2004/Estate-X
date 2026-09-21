import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/data-service';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const revalidate = 60;

export default async function InsightsPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>EstateX Intelligence</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Market Insights & Architectural Publications
          </h1>
          <p className="text-zinc-400 text-sm font-light max-w-2xl">
            Thought leadership, wealth migration dynamics, and biophilic architectural monographs from our global managing partners.
          </p>
        </div>

        {/* Featured Main Article */}
        {posts[0] && (
          <Link
            href={`/insights/${posts[0].slug}`}
            className="group relative rounded-3xl overflow-hidden glass-card border border-gold-glow grid grid-cols-1 lg:grid-cols-12 items-center block"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] w-full">
              <Image
                src={posts[0].coverImageUrl}
                alt={posts[0].title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="px-3 py-1 bg-gold-gradient text-black font-semibold text-[10px] uppercase tracking-widest rounded-md">
                Featured Publication
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-light transition-colors leading-tight">
                {posts[0].title}
              </h2>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {posts[0].summary}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gold-400 font-semibold uppercase tracking-wider pt-2">
                <span>Read Full Monograph</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        )}

        {/* Grid of Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.slug}`}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between block h-full"
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
          ))}
        </div>
      </div>
    </div>
  );
}
