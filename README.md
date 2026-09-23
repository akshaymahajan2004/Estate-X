# EstateX — Ultra-Luxury Architectural Real Estate Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.0_App_Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma_ORM-5.20-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0-4169E1?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

**EstateX** is a production-grade, cinematic luxury real-estate web application engineered to bridge the aesthetic gap between high-end architectural monographs, luxury developer showcases, and modern SaaS platforms. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Prisma ORM, and PostgreSQL.

---

## 🏛️ Architectural Highlights & Features

### 🌟 Landing Page & Discovery Engine
* **Cinematic Hero Experience**: Full-screen luxury architectural backdrop, fluid headline reveals (*"Find a place worth calling home"*), and a floating multi-parameter property search bar (Buy/Rent intent toggle, Location, Property Type, Price Bracket, Suites count).
* **Asymmetric Editorial Grid**: Non-generic property showcase featuring zoom-on-hover luxury imagery, live specs (Beds, Baths, Footprint SqFt), and one-click bookmarking.
* **Interactive Category Showcase**: Smooth image and typography transitions across Oceanfront Villas, Sky Penthouses, Private Manors, and Architectural Apartments.
* **Synchronized Dark Discovery Map**: Embedded Leaflet map with custom dark tiles (`CartoDB Dark Matter`), custom gold pin popups, and real-time selection synchronization with property listing cards.
* **Global Hubs Showcase**: Curated market data cards for London, Dubai, Mumbai, Bangalore, Ahmedabad, and Delhi NCR.
* **Value Pillars & Animated Counters**: 4-pillar architectural philosophy and viewport counters for transacted volume ($4.8B+), active portfolio ($2.5B+), and private clients.
* **Client Stories & Roster**: Accessible 5-star testimonial carousel and direct contact modals for Senior Managing Partners.

### 🏡 Property Detail & Interactive Walkthroughs
* **Fullscreen Lightbox Gallery**: Custom image viewer supporting full-screen zoom, thumbnail navigation, keyboard arrow controls (`Left`, `Right`, `Esc`), and mobile touch swipe.
* **Interactive 2D / 3D Floor Plan Viewer**: Seamless toggle between 2D architectural schematics and 3D spatial cutaways with PDF blueprint download action.
* **Matterport 3D Virtual Tour Modal**: Fullscreen 360° interactive walkthrough player.
* **Chauffeur Visit Booking Workflow**: 3-step appointment wizard (*Select Date → Select Time Slot → Contact & Security Logistics → Reference Code Confirmation*).
* **JSON-LD Structured Data**: Native schema markup (`RealEstateListing`, `SingleFamilyResidence`) for search engine indexation.

### 📑 Saved Properties & Comparison Matrix (`/saved`)
* **Local & Server Persistence**: Favorites saved client-side with seamless DB synchronization.
* **Side-by-Side Comparison Drawer**: Structural comparison matrix evaluating valuation prices, locations, estate types, beds/baths, and total footprint.

### 📰 Real-Estate Insights Blog (`/insights`)
* **SEO-Optimized Publications**: Articles on biophilic architectural trends, off-market purchasing guides, and wealth migration analysis.
* **JSON-LD Article Schema**: Native `Article` schema markup for enhanced Google search snippets.

### 🛡️ Authenticated Admin Control Center (`/admin`)
* **Executive Metrics Dashboard**: Key performance indicators (Total Volume, Active Leads, Scheduled Visits, Portfolio Count).
* **Property Inventory Management**: Full DataTable to create, edit, delete, feature, and publish/unpublish listings.
* **Lead Pipeline Manager**: Status pipeline (`NEW` → `CONTACTED` → `QUALIFIED` → `CLOSED`).
* **Visit Logistics Scheduler**: Viewing appointment manager with reference codes.

---

## 🛠️ Tech Stack & Architecture

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router & Server Actions) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict typing everywhere) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Custom luxury dark palette: `#0A0A0A`, `#D4AF37`) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & CSS keyframe transforms |
| **Icons** | [Lucide Icons](https://lucide.dev/) |
| **Database & ORM** | [PostgreSQL](https://www.postgresql.org/) & [Prisma ORM](https://www.prisma.io/) |
| **Form & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Authentication** | [Auth.js / NextAuth v5](https://authjs.dev/) (Credentials & Role-based access) |
| **Interactive Map** | [Leaflet](https://leafletjs.com/) with `CartoDB Dark Matter` tiles |
| **Deployment** | [Vercel](https://vercel.com/) (Serverless App Router architecture) |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.17.0 or higher
* **npm**: v9.0.0 or higher
* **PostgreSQL**: Local instance or free cloud database ([Neon.tech](https://neon.tech) / [Supabase](https://supabase.com))

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/estatex.git
cd estatex
npm install
```

### 2. Environment Setup

Create a `.env` file in the project root:

```env
# PostgreSQL Database Connection String
DATABASE_URL="postgresql://user:password@localhost:5432/estatex?sslmode=require"

# Auth.js / NextAuth Configuration
NEXTAUTH_SECRET="estatex-secret-key"
NEXTAUTH_URL="http://localhost:3000"/"Your site url"
```

> **Note**: EstateX includes a hybrid data service (`lib/data-service.ts`). If `DATABASE_URL` is omitted, the application automatically runs seamlessly out-of-the-box using the rich luxury mock dataset!

### 3. Database Migration & Prisma Generation

Generate the Prisma Client and push database tables:

```bash
# Generate Prisma Client
npx prisma generate

# Push schema tables to PostgreSQL
npx prisma db push
```

### 4. Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Repository Structure

```
estatex/
├── app/
│   ├── layout.tsx                # Root layout, fonts (Inter, Playfair, Cormorant), providers
│   ├── page.tsx                  # Cinematic Landing Page (Hero, Map, Locations, Editorial, etc.)
│   ├── properties/
│   │   ├── page.tsx              # Property Discovery & Search page with dynamic filters
│   │   └── [id]/page.tsx         # Dedicated Property Page (Gallery, Floor Plans, 3D Tour)
│   ├── insights/
│   │   ├── page.tsx              # Architectural & Market Insights Blog
│   │   └── [slug]/page.tsx       # SEO Article page with JSON-LD schema
│   ├── saved/
│   │   └── page.tsx              # Saved Properties & Side-by-Side Spec Comparison
│   ├── admin/
│   │   ├── page.tsx              # Admin Overview Dashboard
│   │   ├── properties/page.tsx   # Admin Property Inventory DataTable
│   │   ├── leads/page.tsx        # Admin Lead Management Pipeline
│   │   └── visits/page.tsx       # Admin Visit Scheduling Manager
│   ├── api/                      # Server API endpoints (Properties, Inquiries, Visits, Auth)
│   ├── icon.svg                  # Dynamic luxury tab logo favicon
│   ├── sitemap.ts                # Dynamic XML Sitemap generator
│   └── robots.txt                # Search engine crawler directives
├── components/
│   ├── layout/                   # Navbar & Footer components
│   ├── home/                     # Hero, Featured, Showcase, Map, Locations, Stats, Testimonials
│   ├── properties/               # Property Cards, Filters, Gallery, Floor Plan, Visit Modal
│   └── maps/                     # Interactive Leaflet Dark Map wrapper
├── lib/
│   ├── data-service.ts           # Hybrid data query service with mock fallback engine
│   ├── mock-data.ts              # Rich luxury property, agent, location, & blog dataset
│   ├── validators.ts             # Zod validation schemas
│   ├── auth.ts                   # Auth.js credentials provider configuration
│   └── utils.ts                  # Currency formatters & helpers
├── prisma/
│   └── schema.prisma             # PostgreSQL normalized Prisma models
└── tailwind.config.js            # Custom luxury dark theme token palette
```

---

## 🌐 Production Deployment (Vercel)

1. Push your repository to **GitHub**.
2. Import the project on **[Vercel](https://vercel.com)**.
3. In **Environment Variables**, add `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL`.
4. In **Build Settings**, set the Build Command to:
   ```bash
   npx prisma db push && next build
   ```
5. Click **Deploy**.

---

## 🔒 Security & Performance Features

* **Server-side & Client-side Validation**: All forms validated via Zod schemas.
* **SQL Injection & XSS Protection**: Parameterized queries via Prisma ORM.
* **Image Optimization**: Powered by Next.js `<Image>` with webp/avif generation.
* **Reduced Motion Support**: Respects `prefers-reduced-motion` settings for all animations.

---

<p align="center">
  Crafted with architectural precision for ultra-luxury real estate experiences.
</p>
