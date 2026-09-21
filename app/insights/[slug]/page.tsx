import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug } from '@/lib/data-service';
import { Clock, Calendar, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface InsightArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Article Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    image: post.coverImageUrl,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EstateX Luxury Advisory',
      logo: {
        '@type': 'ImageObject',
        url: 'https://estatex.luxury/logo.png',
      },
    },
    datePublished: post.publishedAt,
  };

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </Link>

        {/* Category & Title */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs">
            <span className="px-3 py-1 bg-gold-gradient text-black font-semibold uppercase tracking-widest rounded-md text-[10px]">
              {post.category}
            </span>
            <span className="text-zinc-400 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>{post.readTimeMinutes} min read</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-xs text-zinc-400 pt-4 border-t border-border/50">
            <div>Written by <strong className="text-white font-semibold">{post.author}</strong></div>
            <div>Published on {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden glass-panel border border-gold-glow">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert prose-gold max-w-none space-y-6 text-zinc-300 font-light text-base leading-relaxed">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Author Footer */}
        <div className="p-8 glass-panel rounded-2xl border border-border flex items-center justify-between mt-12">
          <div className="space-y-1">
            <div className="text-[10px] uppercase text-gold-light tracking-widest font-semibold">
              Author Profile
            </div>
            <div className="font-display font-bold text-white text-xl">{post.author}</div>
            <div className="text-xs text-zinc-400">Senior Managing Advisor • EstateX International Desk</div>
          </div>

          <Link
            href="/#contact"
            className="px-5 py-2.5 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider rounded-lg"
          >
            Contact Author
          </Link>
        </div>
      </article>
    </div>
  );
}
