import React from 'react';
import Hero from '@/components/home/hero';
import FeaturedProperties from '@/components/home/featured-properties';
import PropertyCategories from '@/components/home/property-categories';
import ImmersiveShowcase from '@/components/home/immersive-showcase';
import InteractiveMapSection from '@/components/home/interactive-map-section';
import LocationsGrid from '@/components/home/locations-grid';
import WhyChooseUs from '@/components/home/why-choose-us';
import AnimatedStats from '@/components/home/animated-stats';
import EditorialQuote from '@/components/home/editorial-quote';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import AgentShowcase from '@/components/home/agent-showcase';
import InsightsPreview from '@/components/home/insights-preview';
import FinalCTA from '@/components/home/final-cta';
import LeadContactSection from '@/components/home/lead-contact-section';

import {
  getAllProperties,
  getLocations,
  getAgents,
  getBlogPosts,
  getFeaturedProperties,
} from '@/lib/data-service';

export const revalidate = 60;

export default async function HomePage() {
  const [allProps, featuredProps, locations, agents, blogPosts] = await Promise.all([
    getAllProperties(),
    getFeaturedProperties(),
    getLocations(),
    getAgents(),
    getBlogPosts(),
  ]);

  const showcaseProperty = featuredProps[0] || allProps[0];

  return (
    <div className="bg-background text-primary selection:bg-gold-400 selection:text-black">
      {/* 1. Full-screen Hero with floating multi-parameter search */}
      <Hero />

      {/* 2. Asymmetric Featured Properties Grid */}
      <FeaturedProperties properties={allProps} />

      {/* 3. Property Categories with Smooth Image Hover Transitions */}
      <PropertyCategories />

      {/* 4. Immersive Featured Property Showcase */}
      {showcaseProperty && <ImmersiveShowcase property={showcaseProperty} />}

      {/* 5. Synchronized Interactive Map Discovery */}
      <InteractiveMapSection properties={allProps} />

      {/* 6. Prime Locations Grid */}
      <LocationsGrid locations={locations} />

      {/* 7. Why Choose Us 4 Pillars */}
      <WhyChooseUs />

      {/* 8. Animated Scroll Counters */}
      <AnimatedStats />

      {/* 9. Luxury Magazine Editorial Quote Section */}
      <EditorialQuote />

      {/* 10. How It Works 4 Steps */}
      <HowItWorks />

      {/* 11. Client Testimonials Carousel */}
      <Testimonials />

      {/* 12. Managing Partners Agent Showcase */}
      <AgentShowcase agents={agents} />

      {/* 13. Insights / Publications Preview */}
      <InsightsPreview posts={blogPosts} />

      {/* 14. Final Dramatic CTA */}
      <FinalCTA />

      {/* 15. Lead Generation Contact Form */}
      <LeadContactSection />
    </div>
  );
}
