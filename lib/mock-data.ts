export interface MockProperty {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  type: 'APARTMENT' | 'VILLA' | 'PENTHOUSE' | 'FAMILY_HOME' | 'COMMERCIAL' | 'NEW_DEVELOPMENT';
  status: 'FOR_SALE' | 'FOR_RENT' | 'SOLD';
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  yearBuilt: number;
  featured: boolean;
  published: boolean;
  viewsCount: number;
  virtualTourUrl?: string;
  floorPlanUrl?: string;
  createdAt: string;
  location: {
    id: string;
    name: string;
    city: string;
    country: string;
  };
  agent: {
    id: string;
    name: string;
    title: string;
    email: string;
    phone: string;
    portraitUrl: string;
    experienceYears: number;
  };
  images: {
    id: string;
    url: string;
    caption: string;
    isPrimary: boolean;
  }[];
  amenities: string[];
}

export interface MockLocation {
  id: string;
  name: string;
  slug: string;
  city: string;
  country: string;
  imageUrl: string;
  propertyCount: number;
  avgPrice: string;
  marketInfo: string;
}

export interface MockAgent {
  id: string;
  name: string;
  title: string;
  specialization: string;
  email: string;
  phone: string;
  portraitUrl: string;
  experienceYears: number;
  rating: number;
  bio: string;
  activeListings: number;
}

export interface MockBlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  coverImageUrl: string;
  readTimeMinutes: number;
  publishedAt: string;
}

export const MOCK_LOCATIONS: MockLocation[] = [
  {
    id: 'loc-1',
    name: 'Mumbai',
    slug: 'mumbai',
    city: 'Mumbai',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 42,
    avgPrice: '$8.5M',
    marketInfo: '+14.2% YoY growth in luxury sea-facing residences',
  },
  {
    id: 'loc-2',
    name: 'Dubai',
    slug: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 88,
    avgPrice: '$12.4M',
    marketInfo: 'Global hub for ultra-high-net-worth penthouses',
  },
  {
    id: 'loc-3',
    name: 'London',
    slug: 'london',
    city: 'London',
    country: 'United Kingdom',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 56,
    avgPrice: '$16.8M',
    marketInfo: 'Timeless architectural heritage in Mayfair & Kensington',
  },
  {
    id: 'loc-4',
    name: 'Bangalore',
    slug: 'bangalore',
    city: 'Bangalore',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 34,
    avgPrice: '$4.2M',
    marketInfo: 'High-tech luxury sky-villas and green urban retreats',
  },
  {
    id: 'loc-5',
    name: 'Ahmedabad',
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 29,
    avgPrice: '$3.5M',
    marketInfo: 'Emerging hub for expansive private estate compounds',
  },
  {
    id: 'loc-6',
    name: 'Delhi',
    slug: 'delhi',
    city: 'Delhi NCR',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    propertyCount: 39,
    avgPrice: '$11.2M',
    marketInfo: 'Lutyens bungalow zone and ultra-modern golf estates',
  },
];

export const MOCK_AGENTS: MockAgent[] = [
  {
    id: 'agent-1',
    name: 'Elena Rostova',
    title: 'Senior Managing Partner',
    specialization: 'Ultra-Luxury Penthouses & Waterfront Estates',
    email: 'elena@estatex.luxury',
    phone: '+1 (555) 234-8901',
    portraitUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    experienceYears: 16,
    rating: 4.98,
    bio: 'Specializing in off-market trophy assets across Dubai, London, and Mumbai.',
    activeListings: 14,
  },
  {
    id: 'agent-2',
    name: 'Vikramaditya Singhania',
    title: 'Director of Residential Acquisition',
    specialization: 'Heritage Estates & Private Compounds',
    email: 'vikram@estatex.luxury',
    phone: '+91 98200 11223',
    portraitUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    experienceYears: 14,
    rating: 4.95,
    bio: 'Advising royal families, tech founders, and global CEOs on strategic real estate portfolios.',
    activeListings: 11,
  },
  {
    id: 'agent-3',
    name: 'Sophia Sterling',
    title: 'Head of Architectural Advisory',
    specialization: 'Modernist Villas & Sustainable Luxury',
    email: 'sophia@estatex.luxury',
    phone: '+44 20 7946 0912',
    portraitUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    experienceYears: 12,
    rating: 4.92,
    bio: 'Architectural historian turned luxury broker connecting discerning buyers with structural masterpieces.',
    activeListings: 9,
  },
];

export const MOCK_PROPERTIES: MockProperty[] = [
  {
    id: 'prop-1',
    title: 'The Grand Pavilion Ocean Villa',
    slug: 'grand-pavilion-ocean-villa',
    description: 'An architectural tour de force situated directly along the coastline. Featuring cantilevered infinity pools, triple-height glass galleries, private yacht docking, and imported Italian travertine finishes throughout.',
    price: 14500000,
    currency: 'USD',
    address: '42 Worli Sea Face Promenade',
    city: 'Mumbai',
    country: 'India',
    latitude: 19.0176,
    longitude: 72.8173,
    type: 'VILLA',
    status: 'FOR_SALE',
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 9500,
    yearBuilt: 2024,
    featured: true,
    published: true,
    viewsCount: 3420,
    virtualTourUrl: 'https://my.matterport.com/show/?m=sample',
    createdAt: '2026-01-15T10:00:00Z',
    location: { id: 'loc-1', name: 'Mumbai', city: 'Mumbai', country: 'India' },
    agent: MOCK_AGENTS[0],
    images: [
      { id: 'img-1-1', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', caption: 'Front facade with water mirror', isPrimary: true },
      { id: 'img-1-2', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', caption: 'Living hall view to sunset', isPrimary: false },
      { id: 'img-1-3', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', caption: 'Master suite with sea horizon', isPrimary: false },
      { id: 'img-1-4', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', caption: 'Private infinity pool terrace', isPrimary: false },
    ],
    amenities: ['Private Infinity Pool', 'Direct Sea View', 'Private Helipad access', 'Smart Home Automation', 'Wine Cellar', 'Private Elevator', '24/7 Concierge', 'Staff Quarters'],
  },
  {
    id: 'prop-2',
    title: 'Skyline Horizon Triplex Penthouse',
    slug: 'skyline-horizon-triplex-penthouse',
    description: 'Hovering on the 72nd floor with unobstructed 360-degree views of Downtown and the Burj Khalifa. Crowned with a private rooftop plunge pool, sky lounge, and private wellness spa.',
    price: 22000000,
    currency: 'USD',
    address: 'One Central Tower, Downtown',
    city: 'Dubai',
    country: 'UAE',
    latitude: 25.1972,
    longitude: 55.2744,
    type: 'PENTHOUSE',
    status: 'FOR_SALE',
    bedrooms: 4,
    bathrooms: 5.5,
    areaSqFt: 8200,
    yearBuilt: 2025,
    featured: true,
    published: true,
    viewsCount: 5120,
    createdAt: '2026-02-01T10:00:00Z',
    location: { id: 'loc-2', name: 'Dubai', city: 'Dubai', country: 'UAE' },
    agent: MOCK_AGENTS[0],
    images: [
      { id: 'img-2-1', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', caption: 'Sky Lounge terrace looking at Dubai skyline', isPrimary: true },
      { id: 'img-2-2', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', caption: 'Double height dining hall', isPrimary: false },
      { id: 'img-2-3', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', caption: 'Panoramic master bedroom', isPrimary: false },
    ],
    amenities: ['Sky Plunge Pool', 'Private Elevator Key', 'Burj Khalifa View', 'Sauna & Steam Room', 'Custom Poggenpohl Kitchen', 'Automated Curtains', 'Valet Parking'],
  },
  {
    id: 'prop-3',
    title: 'Kensington Crest Victorian Manor',
    slug: 'kensington-crest-victorian-manor',
    description: 'A restored Grade II listed Victorian manor combined with ultra-modern subterranean spa, private theater, and automated underground garage for 4 vehicles.',
    price: 18900000,
    currency: 'USD',
    address: '14 Palace Gate Gardens',
    city: 'London',
    country: 'United Kingdom',
    latitude: 51.5014,
    longitude: -0.1837,
    type: 'VILLA',
    status: 'FOR_SALE',
    bedrooms: 6,
    bathrooms: 7,
    areaSqFt: 11000,
    yearBuilt: 1892,
    featured: true,
    published: true,
    viewsCount: 2890,
    createdAt: '2026-01-20T10:00:00Z',
    location: { id: 'loc-3', name: 'London', city: 'London', country: 'United Kingdom' },
    agent: MOCK_AGENTS[2],
    images: [
      { id: 'img-3-1', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', caption: 'Victorian facade and manicured gardens', isPrimary: true },
      { id: 'img-3-2', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80', caption: 'Formal parlor with marble fireplace', isPrimary: false },
    ],
    amenities: ['Subterranean Swimming Pool', 'Private Cinema', 'Landscaped English Garden', 'Wine Tasting Cellar', 'Underfloor Heating', 'High Security Suite'],
  },
  {
    id: 'prop-4',
    title: 'The Sanctuary Botanical Compound',
    slug: 'the-sanctuary-botanical-compound',
    description: 'Spanning 2.5 acres of private botanical gardens, this modern minimalist estate merges raw concrete aesthetics, tropical courtyards, and net-zero solar power systems.',
    price: 4800000,
    currency: 'USD',
    address: 'Science City Boulevard Extension',
    city: 'Ahmedabad',
    country: 'India',
    latitude: 23.0768,
    longitude: 72.5081,
    type: 'VILLA',
    status: 'FOR_SALE',
    bedrooms: 5,
    bathrooms: 5.5,
    areaSqFt: 8000,
    yearBuilt: 2024,
    featured: false,
    published: true,
    viewsCount: 1940,
    createdAt: '2026-02-10T10:00:00Z',
    location: { id: 'loc-5', name: 'Ahmedabad', city: 'Ahmedabad', country: 'India' },
    agent: MOCK_AGENTS[1],
    images: [
      { id: 'img-4-1', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', caption: 'Central courtyard reflection pool', isPrimary: true },
      { id: 'img-4-2', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', caption: 'Open concept pavilion lounge', isPrimary: false },
    ],
    amenities: ['2.5 Acre Botanical Grounds', 'Solar Net-Zero Microgrid', 'Outdoor Firepit Lounge', 'Organic Fruit Orchard', 'Saltwater Lap Pool', 'Guard House'],
  },
  {
    id: 'prop-5',
    title: 'Silicon Heights Sky Sanctuary',
    slug: 'silicon-heights-sky-sanctuary',
    description: 'Designed for visionary technology executives, featuring private fiber-optic data server suite, biophilic living walls, thermal spa pools, and panoramic park views.',
    price: 5200000,
    currency: 'USD',
    address: 'UB City Boulevard Penthouse Deck',
    city: 'Bangalore',
    country: 'India',
    latitude: 12.9716,
    longitude: 77.5946,
    type: 'PENTHOUSE',
    status: 'FOR_SALE',
    bedrooms: 4,
    bathrooms: 4.5,
    areaSqFt: 6400,
    yearBuilt: 2025,
    featured: true,
    published: true,
    viewsCount: 2210,
    createdAt: '2026-01-28T10:00:00Z',
    location: { id: 'loc-4', name: 'Bangalore', city: 'Bangalore', country: 'India' },
    agent: MOCK_AGENTS[1],
    images: [
      { id: 'img-5-1', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80', caption: 'Great room overlooking Cubbon Park', isPrimary: true },
      { id: 'img-5-2', url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80', caption: 'Boffi chef kitchen', isPrimary: false },
    ],
    amenities: ['Private Server Suite', 'Biophilic Vertical Gardens', 'Electric Vehicle Fast Chargers', 'Heated Indoor Lap Pool', 'Cigar Room', 'Concierge Service'],
  },
  {
    id: 'prop-6',
    title: 'Lutyens Heritage Imperial Mansion',
    slug: 'lutyens-heritage-imperial-mansion',
    description: 'One of the rare private freehold estates in the prestigious Lutyens zone. Surrounded by century-old banyan trees, private tennis courts, and grand ballroom hall.',
    price: 16500000,
    currency: 'USD',
    address: '8 Golf Links Avenue',
    city: 'Delhi',
    country: 'India',
    latitude: 28.5983,
    longitude: 77.2343,
    type: 'FAMILY_HOME',
    status: 'FOR_SALE',
    bedrooms: 6,
    bathrooms: 6,
    areaSqFt: 12500,
    yearBuilt: 2023,
    featured: true,
    published: true,
    viewsCount: 4100,
    createdAt: '2026-02-05T10:00:00Z',
    location: { id: 'loc-6', name: 'Delhi', city: 'Delhi', country: 'India' },
    agent: MOCK_AGENTS[1],
    images: [
      { id: 'img-6-1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', caption: 'Colonial modernist entrance gallery', isPrimary: true },
      { id: 'img-6-2', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80', caption: 'Private tennis court garden', isPrimary: false },
    ],
    amenities: ['Private Lawn Tennis Court', 'Grand Ballroom', 'Freehold Ownership', 'Staff Quarters for 10', 'High Security Perimeter', 'Helipad Access'],
  },
];

export const MOCK_BLOG_POSTS: MockBlogPost[] = [
  {
    id: 'post-1',
    title: 'The Evolution of Biophilic Architecture in Ultra-Luxury Residential Design',
    slug: 'evolution-of-biophilic-architecture',
    summary: 'How leading international architects are integrating living ecosystems, natural light wells, and thermal micro-climates into contemporary mansions.',
    content: `Architecture in 2026 is no longer defined merely by monumental scale or opulence. Discerning global homeowners demand spaces that heal, rejuvenate, and connect seamlessly with natural ecosystems.

Biophilic design—the practice of connecting human spaces with nature—has evolved from a design trend into a foundational requirement for high-end residential real estate.

### The Key Pillars of Modern Biophilic Luxury
1. **Integrated Water Mirrors**: Microclimate cooling through natural reflection pools that reduce air conditioning energy loads by up to 35%.
2. **Double-Height Living Conservatories**: Vertical gardens featuring rare oxygenating botanicals integrated into HVAC purification systems.
3. **Subterranean Light Shafts**: Sculptural light wells bringing sunlight 40 feet below ground level to illuminate private spas and galleries.`,
    category: 'Architecture & Design',
    author: 'Sophia Sterling',
    coverImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    readTimeMinutes: 5,
    publishedAt: '2026-02-12T10:00:00Z',
  },
  {
    id: 'post-2',
    title: '2026 Global Wealth & Real Estate Investment Trends Report',
    slug: '2026-global-wealth-real-estate-report',
    summary: 'Key insights into where Family Offices and Ultra-High-Net-Worth Individuals are placing capital across primary markets in London, Dubai, and India.',
    content: `Real estate remains the premier hedge against market volatility for international family offices. Our 2026 Q1 Investment Analysis highlights unprecedented capital movement into prime urban penthouses and trophy coastal compounds.

### High-Growth Corridors
* **Dubai Waterfront**: +18.4% annual capital appreciation driven by tax-neutral residency incentives.
* **Mumbai Sea Frontage**: Scarcity of freehold sea-facing plots creating resilient double-digit value preservation.
* **London Prime Central**: Flight to quality in Mayfair, Kensington, and Belgravia.`,
    category: 'Market Insights',
    author: 'Elena Rostova',
    coverImageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    readTimeMinutes: 7,
    publishedAt: '2026-01-25T10:00:00Z',
  },
  {
    id: 'post-3',
    title: 'Navigating Off-Market Luxury Acquisitions: A Buyer’s Guide',
    slug: 'navigating-off-market-luxury-acquisitions',
    summary: 'Over 40% of trophy properties never hit public listings. Discover how private advisory networks curate quiet sales for high-profile clients.',
    content: `Privacy is the ultimate luxury. For prominent buyers, purchasing real estate without public media exposure or public registry leaks is paramount.

In this guide, we demystify off-market residential acquisitions and explain how confidential matching platforms operate.`,
    category: 'Buying Guide',
    author: 'Vikramaditya Singhania',
    coverImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    readTimeMinutes: 6,
    publishedAt: '2026-02-01T10:00:00Z',
  },
];
