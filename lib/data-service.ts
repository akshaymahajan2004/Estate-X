import {
  MOCK_PROPERTIES,
  MOCK_LOCATIONS,
  MOCK_AGENTS,
  MOCK_BLOG_POSTS,
  MockProperty,
  MockLocation,
  MockAgent,
  MockBlogPost,
} from "./mock-data";
import { generateReferenceNumber } from "./utils";

// In-memory collections for active user inquiries & visits during session
let IN_MEMORY_INQUIRIES: any[] = [];
let IN_MEMORY_VISITS: any[] = [];

export interface PropertyFilters {
  location?: string;
  type?: string;
  intent?: 'BUY' | 'RENT' | 'ALL';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'popular';
}

export async function getFeaturedProperties(): Promise<MockProperty[]> {
  return MOCK_PROPERTIES.filter((p) => p.featured);
}

export async function getAllProperties(filters?: PropertyFilters): Promise<MockProperty[]> {
  let list = [...MOCK_PROPERTIES];

  if (!filters) return list;

  if (filters.search) {
    const q = filters.search.toLowerCase();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (filters.location && filters.location !== 'ALL') {
    list = list.filter(
      (p) => p.location.name.toLowerCase() === filters.location?.toLowerCase() || p.city.toLowerCase() === filters.location?.toLowerCase()
    );
  }

  if (filters.type && filters.type !== 'ALL') {
    list = list.filter((p) => p.type === filters.type);
  }

  if (filters.intent && filters.intent !== 'ALL') {
    const targetStatus = filters.intent === 'RENT' ? 'FOR_RENT' : 'FOR_SALE';
    list = list.filter((p) => p.status === targetStatus);
  }

  if (filters.minPrice) {
    list = list.filter((p) => p.price >= (filters.minPrice || 0));
  }

  if (filters.maxPrice) {
    list = list.filter((p) => p.price <= (filters.maxPrice || Infinity));
  }

  if (filters.bedrooms && filters.bedrooms > 0) {
    list = list.filter((p) => p.bedrooms >= (filters.bedrooms || 0));
  }

  if (filters.bathrooms && filters.bathrooms > 0) {
    list = list.filter((p) => p.bathrooms >= (filters.bathrooms || 0));
  }

  // Sort
  if (filters.sortBy === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'popular') {
    list.sort((a, b) => b.viewsCount - a.viewsCount);
  } else {
    // Newest default
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return list;
}

export async function getPropertyById(id: string): Promise<MockProperty | null> {
  const property = MOCK_PROPERTIES.find((p) => p.id === id || p.slug === id);
  return property || null;
}

export async function getSimilarProperties(propertyId: string, limit: number = 3): Promise<MockProperty[]> {
  const current = await getPropertyById(propertyId);
  if (!current) return MOCK_PROPERTIES.slice(0, limit);

  return MOCK_PROPERTIES
    .filter((p) => p.id !== current.id && (p.type === current.type || p.location.id === current.location.id))
    .slice(0, limit);
}

export async function getLocations(): Promise<MockLocation[]> {
  return MOCK_LOCATIONS;
}

export async function getAgents(): Promise<MockAgent[]> {
  return MOCK_AGENTS;
}

export async function getBlogPosts(): Promise<MockBlogPost[]> {
  return MOCK_BLOG_POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<MockBlogPost | null> {
  const post = MOCK_BLOG_POSTS.find((b) => b.slug === slug || b.id === slug);
  return post || null;
}

export async function createInquiry(data: any) {
  const inquiry = {
    id: `inq-${Date.now()}`,
    ...data,
    status: 'NEW',
    createdAt: new Date().toISOString(),
  };
  IN_MEMORY_INQUIRIES.unshift(inquiry);
  return inquiry;
}

export async function createVisit(data: any) {
  const ref = generateReferenceNumber();
  const visit = {
    id: `vis-${Date.now()}`,
    referenceNumber: ref,
    ...data,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
  };
  IN_MEMORY_VISITS.unshift(visit);
  return visit;
}

export async function getAdminMetrics() {
  return {
    totalProperties: MOCK_PROPERTIES.length,
    activeLeads: IN_MEMORY_INQUIRIES.length + 18,
    scheduledVisits: IN_MEMORY_VISITS.length + 7,
    totalVolume: '$88.4M',
    recentInquiries: IN_MEMORY_INQUIRIES,
    recentVisits: IN_MEMORY_VISITS,
  };
}
