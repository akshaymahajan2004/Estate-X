import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getPropertyById,
  getSimilarProperties,
} from '@/lib/data-service';
import PropertyGallery from '@/components/properties/property-gallery';
import FloorPlanViewer from '@/components/properties/floor-plan-viewer';
import PropertyCard from '@/components/properties/property-card';
import { formatCurrency, formatArea } from '@/lib/utils';
import PropertyDetailActions from './detail-actions';
import { MapPin, BedDouble, Bath, Maximize2, Calendar, ShieldCheck, Phone, Mail, Award } from 'lucide-react';

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  const similarProperties = await getSimilarProperties(property.id);

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    price: property.price,
    priceCurrency: property.currency,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressCountry: property.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.latitude,
      longitude: property.longitude,
    },
  };

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-gold-light">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-gold-light">Properties</Link>
          <span>/</span>
          <span className="text-gold-400 font-semibold">{property.title}</span>
        </div>

        {/* Title & Price Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-gold-gradient text-black font-semibold text-[10px] uppercase tracking-widest rounded-md">
                {property.type}
              </span>
              <span className="text-xs text-gold-light font-semibold uppercase tracking-wider flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.address}, {property.city}</span>
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              {property.title}
            </h1>
          </div>

          <div className="space-y-1 text-left md:text-right">
            <span className="text-xs text-zinc-400 uppercase tracking-widest block">Acquisition Price</span>
            <div className="font-display font-bold text-3xl sm:text-4xl text-gold-gradient">
              {formatCurrency(property.price, property.currency)}
            </div>
          </div>
        </div>

        {/* Photo Gallery Component */}
        <PropertyGallery images={property.images} title={property.title} />

        {/* Specs Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl border border-gold-glow text-center">
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center justify-center space-x-1">
              <BedDouble className="w-3.5 h-3.5 text-gold-400" />
              <span>Bedrooms</span>
            </span>
            <div className="font-display text-2xl font-bold text-white">{property.bedrooms} Grand Suites</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center justify-center space-x-1">
              <Bath className="w-3.5 h-3.5 text-gold-400" />
              <span>Bathrooms</span>
            </span>
            <div className="font-display text-2xl font-bold text-white">{property.bathrooms} Ensuite Baths</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center justify-center space-x-1">
              <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
              <span>Total Area</span>
            </span>
            <div className="font-display text-2xl font-bold text-white">{formatArea(property.areaSqFt)}</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Completion</span>
            </span>
            <div className="font-display text-2xl font-bold text-white">{property.yearBuilt || 2025}</div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white">Architectural Overview</h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Key Amenities */}
            <div className="space-y-4 pt-6 border-t border-border/50">
              <h3 className="font-display text-2xl font-bold text-white">Private Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="p-3.5 bg-surface rounded-xl border border-border/60 text-xs text-zinc-200 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan Viewer */}
            <FloorPlanViewer
              propertyTitle={property.title}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              areaSqFt={property.areaSqFt}
            />
          </div>

          {/* Right Sidebar Desktop Booking Widget */}
          <div className="lg:col-span-4 space-y-6">
            <PropertyDetailActions property={property} />

            {/* Agent Info Card */}
            <div className="glass-panel p-6 rounded-2xl border border-border space-y-4">
              <div className="text-[10px] text-gold-light uppercase tracking-widest font-semibold">
                Managing Partner Advisory
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gold-400">
                  <Image
                    src={property.agent.portraitUrl}
                    alt={property.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{property.agent.name}</h4>
                  <p className="text-xs text-gold-light">{property.agent.title}</p>
                </div>
              </div>
              <div className="pt-2 flex flex-col space-y-2 text-xs">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="w-full py-2.5 bg-surface-muted hover:bg-surface border border-border text-white text-center rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{property.agent.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Recommendation Grid */}
        {similarProperties.length > 0 && (
          <div className="pt-16 border-t border-border/60 space-y-8">
            <div className="space-y-2">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                Curated Recommendations
              </span>
              <h3 className="font-display text-3xl font-bold text-white">
                Similar Trophy Residences
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
