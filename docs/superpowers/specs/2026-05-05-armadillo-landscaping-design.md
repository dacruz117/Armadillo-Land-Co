# Armadillo Landscaping & Co. — Website Design Spec

**Date:** 2026-05-05
**Client:** Armadillo Landscaping & Co.
**Owner:** Christian Arrellano
**Phone:** (512) 948-1734
**Location:** Jarrell, Texas
**Service Area:** Austin, Jarrell, Georgetown, Round Rock

---

## Project Overview

A static HTML/CSS/JS website for a locally-owned landscaping and yard remodel business serving Central Texas. The site targets B2C customers aged 40+ and leads with approachability, trust, and quality of work. Design is inspired by completelandscapetx.com — clean, professional, photo-forward, and earth-toned.

---

## Brand

- **Colors:** Desert burgundy (primary), sand/warm off-white (secondary), dark charcoal (text)
- **Logo:** Provided by client
- **Tagline:** "Central Texas Landscaping, Built With Pride"
- **Tone:** Warm, personal, trustworthy — neighbor-to-neighbor, not corporate
- **Social media:** Placeholder icons for Facebook and Instagram (no live links yet)

---

## Site Structure

Two HTML pages:

| Page | File | Description |
|---|---|---|
| Homepage | `index.html` | Full scrollable experience |
| Gallery | `gallery.html` | Dedicated project photo grid |

### Shared Elements

**Sticky Navigation Bar**
- Left: Client logo
- Center: Home · About · Services · Gallery · Contact (Home/About/Services/Contact are anchor links to sections on `index.html`; Gallery links to `gallery.html`)
- Right: "Get a Free Estimate" CTA button (burgundy, anchor links to `#contact` on `index.html`)

**Footer**
- Logo + tagline
- Quick nav links
- Phone number: (512) 948-1734
- Placeholder social icons (Facebook, Instagram — grayed out, no href yet)
- Service areas: Austin · Jarrell · Georgetown · Round Rock
- Copyright line

---

## Homepage Sections (`index.html`)

### 1. Hero
- Full-width background photo (best completed project from client's library)
- Tagline: **"Central Texas Landscaping, Built With Pride"**
- Subtext: *"Serving Austin, Jarrell, Georgetown & Round Rock — Free Estimates Available"*
- Two buttons:
  - "Get a Free Estimate" (burgundy, filled)
  - "See Our Work" (sand, outlined — links to gallery.html)

### 2. About
- Two-column layout: photo of Christian (left) + text (right)
- Short paragraph emphasizing approachability and locally-owned roots ("We treat every client like a neighbor, not a number")
- 3 stat badges: years of experience, cities served, 5-star reviews
- Warm, personal tone throughout

### 3. Services
- Banner above grid: *"Free Estimates on All Services"*
- 4-category card grid, each with icon (burgundy), category title, and bullet list of services:

| Category | Services |
|---|---|
| Landscaping & Yard Care | Garden remodels, lawn maintenance, decorative plants & beds |
| Hardscaping | Concrete repair & installation, patio extensions, paver installations, stone masonry, driveway repair |
| Outdoor Living | Fencing, outdoor lighting, water features (ponds & waterfalls), stucco |
| Irrigation & Drainage | Irrigation systems & modifications, drainage solutions |

- Cards: sand/warm off-white background, burgundy accents

### 4. Testimonials
- 3 review cards in a row (pulled from Nextdoor):
  - L.O. — Georgetown — stone waterfall repair, praised communication
  - A.B. — Jarrell — patio/gazebo extension, praised patience and thoroughness
  - T.B. — Jarrell — quality work and genuine customer service
- Each card: reviewer initials, city, 5-star rating, quote
- Link beneath: *"Read more reviews on Nextdoor"* (links to Nextdoor page)

### 5. Contact
- Two-column layout:
  - **Left:** Phone number large and bold, warm invitation copy, service area cities listed
  - **Right:** Quote request form
    - Fields: Name, Phone, Email, City, Service Needed (dropdown of 4 categories), Message
    - Submit button: "Request My Free Estimate" (burgundy)

---

## Gallery Page (`gallery.html`)

- Same sticky nav and footer as homepage
- Page header: "Our Work" + subline: *"Real projects, real results — across Central Texas"*
- Filter tabs: All · Landscaping · Hardscaping · Outdoor Living · Irrigation
  - Tab clicks filter the grid client-side (no page reload)
  - Photos tagged with category via data attributes
- Responsive masonry photo grid:
  - 3 columns desktop, 2 columns tablet, 1 column mobile
  - Populated with client-provided project photos
- Lightbox on photo click: full-screen overlay for close inspection (no page navigation required)
- Bottom CTA: *"Like what you see? Get a free estimate today."* + burgundy button linking to `index.html#contact`

---

## Technical Spec

- **Stack:** Static HTML, CSS, vanilla JavaScript — no frameworks, no CMS, no build tools required
- **Fonts:** Google Fonts (legible, warm serif or semi-serif for headings; clean sans-serif for body — to be finalized during implementation)
- **Icons:** Font Awesome or SVG icons for service categories and social placeholders
- **Lightbox:** Lightweight vanilla JS library (e.g., GLightbox or PhotoSwipe) — no jQuery
- **Contact form:** Static form submission via Formspree or Netlify Forms (no server required)
- **Hosting:** Client to determine (GitHub Pages, Netlify, or similar static host recommended)
- **Mobile:** Fully responsive across all breakpoints
- **Performance:** Images optimized for web before deployment; lazy loading on gallery grid

---

## Content To Be Provided By Client

- [ ] Logo file (SVG or PNG with transparency preferred)
- [ ] Project photos (organized by service category if possible)
- [ ] Christian's headshot or on-site photo for About section
- [ ] Years in business / number of completed projects (for stat badges)
- [ ] Any additional reviews beyond the 3 Nextdoor reviews
- [ ] Email address for form submission routing (when available)
