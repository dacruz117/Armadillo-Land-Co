# Armadillo Landscaping & Co. — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 2-page static HTML/CSS/JS website for Armadillo Landscaping & Co. with a homepage (Hero, About, Services, Testimonials, Contact) and a dedicated Gallery page with category filtering and lightbox.

**Architecture:** Two standalone HTML pages share a common nav and footer. All styles live in one `css/main.css` organized by component with CSS custom properties for the brand palette. Three focused JS files handle nav behavior, gallery filtering/lightbox, and form submission independently.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript (ES6+), Font Awesome 6 (CDN), GLightbox (CDN), Google Fonts (CDN), Formspree (contact form backend).

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | Homepage — all scrollable sections |
| `gallery.html` | Dedicated project photo gallery page |
| `css/main.css` | All styles, organized by component |
| `js/nav.js` | Sticky nav scroll shadow + mobile hamburger |
| `js/gallery.js` | Filter tab switching + GLightbox init |
| `js/form.js` | Formspree async submission + success/error states |
| `images/logo/logo.png` | Client logo (client to provide) |
| `images/hero/hero.jpg` | Hero background photo (client to provide) |
| `images/about/christian.jpg` | Owner photo for About section (client to provide) |
| `images/projects/landscaping/` | Landscaping project photos |
| `images/projects/hardscaping/` | Hardscaping project photos |
| `images/projects/outdoor-living/` | Outdoor living project photos |
| `images/projects/irrigation/` | Irrigation project photos |

---

## Task 1: Project Scaffold

**Files:**
- Create: `index.html`
- Create: `gallery.html`
- Create: `css/main.css`
- Create: `js/nav.js`
- Create: `js/gallery.js`
- Create: `js/form.js`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p css js images/logo images/hero images/about \
  images/projects/landscaping \
  images/projects/hardscaping \
  images/projects/outdoor-living \
  images/projects/irrigation
```

- [ ] **Step 2: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Armadillo Landscaping & Co. | Central Texas Landscaping</title>
  <meta name="description" content="Locally-owned landscaping and yard remodel services in Austin, Jarrell, Georgetown & Round Rock, Texas. Free estimates available. Call (512) 948-1734.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>

  <nav class="nav" id="nav"><!-- filled in Task 3 --></nav>

  <main>
    <section class="hero" id="hero"><!-- filled in Task 5 --></section>
    <section class="about" id="about"><!-- filled in Task 6 --></section>
    <section class="services" id="services"><!-- filled in Task 7 --></section>
    <section class="testimonials" id="testimonials"><!-- filled in Task 8 --></section>
    <section class="contact" id="contact"><!-- filled in Task 9 --></section>
  </main>

  <footer class="footer"><!-- filled in Task 4 --></footer>

  <script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/form.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create `gallery.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Work | Armadillo Landscaping & Co.</title>
  <meta name="description" content="Browse completed landscaping, hardscaping, outdoor living, and irrigation projects by Armadillo Landscaping & Co. across Central Texas.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
<body>

  <nav class="nav" id="nav"><!-- filled in Task 3 --></nav>

  <main>
    <section class="gallery-page"><!-- filled in Task 10 --></section>
  </main>

  <footer class="footer"><!-- filled in Task 4 --></footer>

  <script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/gallery.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create empty JS files**

```bash
touch js/nav.js js/gallery.js js/form.js
```

- [ ] **Step 5: Verify in browser**

Open `index.html` in a browser. Expected: blank white page, no console errors.
Open `gallery.html`. Expected: same blank page, no errors.

- [ ] **Step 6: Commit**

```bash
git add index.html gallery.html css/main.css js/nav.js js/gallery.js js/form.js
git commit -m "feat: scaffold project structure"
```

---

## Task 2: CSS Foundation

**Files:**
- Modify: `css/main.css`

- [ ] **Step 1: Write CSS variables, reset, base styles, and shared components to `css/main.css`**

```css
/* ===== VARIABLES ===== */
:root {
  --color-burgundy: #7B2D3E;
  --color-burgundy-dark: #5C1F2D;
  --color-sand: #C9A07A;
  --color-sand-light: #F2E8D5;
  --color-charcoal: #2C2C2C;
  --color-charcoal-light: #666666;
  --color-white: #FFFFFF;
  --color-off-white: #FAF7F0;

  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Lato', Arial, sans-serif;

  --max-width: 1200px;
  --nav-height: 72px;
  --section-pad: 5rem 0;
  --radius: 6px;
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }

/* ===== BASE ===== */
body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-charcoal);
  background: var(--color-white);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  line-height: 1.25;
}

h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); margin-bottom: 1.5rem; }
h3 { font-size: 1.25rem; margin-bottom: 0.75rem; }
p  { margin-bottom: 1rem; color: var(--color-charcoal-light); }

/* ===== CONTAINER ===== */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== SECTION LABEL ===== */
.section-label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-burgundy);
  margin-bottom: 0.5rem;
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  text-align: center;
}

.btn--primary {
  background: var(--color-burgundy);
  color: var(--color-white);
  border: 2px solid var(--color-burgundy);
}
.btn--primary:hover {
  background: var(--color-burgundy-dark);
  border-color: var(--color-burgundy-dark);
}

.btn--outline {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}
.btn--outline:hover {
  background: rgba(255,255,255,0.15);
}

.btn--full { width: 100%; }
```

- [ ] **Step 2: Verify in browser**

Open `index.html`. Expected: still blank, but `<body>` background is white (`#FAF7F0`) — confirm in DevTools that the CSS variables and font-face are loaded (Network tab shows fonts loading from Google).

- [ ] **Step 3: Commit**

```bash
git add css/main.css
git commit -m "feat: add CSS variables, reset, and base styles"
```

---

## Task 3: Navigation

**Files:**
- Modify: `index.html`
- Modify: `gallery.html`
- Modify: `css/main.css`
- Modify: `js/nav.js`

- [ ] **Step 1: Replace the nav placeholder in `index.html` and `gallery.html`**

Replace `<nav class="nav" id="nav"><!-- filled in Task 3 --></nav>` in **both files** with:

```html
<nav class="nav" id="nav">
  <div class="nav__container">
    <a href="index.html" class="nav__logo">
      <img src="images/logo/logo.png" alt="Armadillo Landscaping & Co." height="48">
    </a>
    <ul class="nav__links" id="navLinks">
      <li><a href="index.html#hero">Home</a></li>
      <li><a href="index.html#about">About</a></li>
      <li><a href="index.html#services">Services</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
    <a href="index.html#contact" class="btn btn--primary nav__cta">Get a Free Estimate</a>
    <button class="nav__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

- [ ] **Step 2: Add nav CSS to `css/main.css`**

```css
/* ===== NAV ===== */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-height);
  background: var(--color-white);
  z-index: 1000;
  transition: box-shadow 0.3s;
}

.nav--scrolled {
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
}

.nav__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__logo img { height: 48px; width: auto; }

.nav__links {
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav__links a {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-charcoal);
  transition: color 0.2s;
}
.nav__links a:hover { color: var(--color-burgundy); }

.nav__cta { white-space: nowrap; }

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  margin-left: auto;
}
.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-charcoal);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

/* Hamburger open state */
.nav__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__hamburger.open span:nth-child(2) { opacity: 0; }
.nav__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
```

- [ ] **Step 3: Write `js/nav.js`**

```javascript
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
```

- [ ] **Step 4: Verify in browser**

Open `index.html`. Expected:
- Nav bar visible at the top, white background, logo space visible (broken image placeholder is fine — logo not placed yet)
- Nav links centered: Home, About, Services, Gallery, Contact
- Burgundy "Get a Free Estimate" button on the right
- Scroll down: nav gets a drop shadow
- Resize window to < 768px: hamburger icon should be visible (not yet wired to hide links — responsive CSS comes in Task 11)

- [ ] **Step 5: Commit**

```bash
git add index.html gallery.html css/main.css js/nav.js
git commit -m "feat: add sticky navigation with mobile hamburger"
```

---

## Task 4: Footer

**Files:**
- Modify: `index.html`
- Modify: `gallery.html`
- Modify: `css/main.css`

- [ ] **Step 1: Replace the footer placeholder in `index.html` and `gallery.html`**

Replace `<footer class="footer"><!-- filled in Task 4 --></footer>` in **both files** with:

```html
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <img src="images/logo/logo.png" alt="Armadillo Landscaping & Co." class="footer__logo" height="48">
        <p class="footer__tagline">Central Texas Landscaping, Built With Pride</p>
        <div class="footer__social">
          <span class="footer__social-icon" title="Facebook (coming soon)">
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span class="footer__social-icon" title="Instagram (coming soon)">
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
      <div class="footer__nav">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html#hero">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer__contact">
        <h4>Contact Us</h4>
        <a href="tel:5129481734" class="footer__phone">(512) 948-1734</a>
        <p>Jarrell, Texas</p>
        <p class="footer__areas">Austin · Jarrell · Georgetown · Round Rock</p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2026 Armadillo Landscaping &amp; Co. All rights reserved.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Add footer CSS to `css/main.css`**

```css
/* ===== FOOTER ===== */
.footer {
  background: var(--color-charcoal);
  color: var(--color-white);
  padding: 4rem 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
}

.footer__logo { height: 48px; width: auto; margin-bottom: 1rem; }

.footer__tagline {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  margin-bottom: 1.25rem;
}

.footer__social { display: flex; gap: 1rem; }

.footer__social-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.4);
  font-size: 0.9rem;
  cursor: default;
}

.footer__nav h4,
.footer__contact h4 {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-sand);
  margin-bottom: 1rem;
}

.footer__nav ul { display: flex; flex-direction: column; gap: 0.5rem; }
.footer__nav a {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  transition: color 0.2s;
}
.footer__nav a:hover { color: var(--color-white); }

.footer__phone {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}
.footer__phone:hover { color: var(--color-sand); }

.footer__contact p {
  color: rgba(255,255,255,0.65);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.footer__areas { font-size: 0.85rem !important; }

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.25rem 0;
  text-align: center;
}
.footer__bottom p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
  margin: 0;
}
```

- [ ] **Step 3: Verify in browser**

Open `index.html`. Expected:
- Dark charcoal footer at the bottom
- 3-column layout: brand/social, quick links, contact
- Phone number visible and large
- Sand-colored heading labels
- Grayed-out Facebook and Instagram icons (not clickable links)

- [ ] **Step 4: Commit**

```bash
git add index.html gallery.html css/main.css
git commit -m "feat: add footer with nav, contact, and social placeholders"
```

---

## Task 5: Hero Section

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Add a placeholder hero image**

Copy any landscape photo into `images/hero/hero.jpg` temporarily. This will be replaced with the client's photo. If no photo is available yet, create a solid color placeholder:

```bash
# Only if you have ImageMagick installed:
convert -size 1920x1080 xc:#4a6741 images/hero/hero.jpg
# Otherwise just drop any .jpg into images/hero/ and name it hero.jpg
```

- [ ] **Step 2: Replace the hero placeholder in `index.html`**

Replace `<section class="hero" id="hero"><!-- filled in Task 5 --></section>` with:

```html
<section class="hero" id="hero">
  <div class="hero__overlay"></div>
  <img src="images/hero/hero.jpg" alt="Completed landscaping project by Armadillo Landscaping & Co." class="hero__bg">
  <div class="hero__content">
    <h1 class="hero__title">Central Texas Landscaping,<br>Built With Pride</h1>
    <p class="hero__sub">Serving Austin, Jarrell, Georgetown &amp; Round Rock — Free Estimates Available</p>
    <div class="hero__ctas">
      <a href="#contact" class="btn btn--primary">Get a Free Estimate</a>
      <a href="gallery.html" class="btn btn--outline">See Our Work</a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add hero CSS to `css/main.css`**

```css
/* ===== HERO ===== */
.hero {
  position: relative;
  height: 100vh;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  margin-top: var(--nav-height);
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%);
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 820px;
  padding: 0 1.5rem;
  color: var(--color-white);
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.hero__sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2.5rem;
  opacity: 0.92;
  text-shadow: 0 1px 6px rgba(0,0,0,0.4);
  color: var(--color-white);
}

.hero__ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
```

- [ ] **Step 4: Verify in browser**

Open `index.html`. Expected:
- Full-viewport hero below the nav
- Dark overlay on the photo, white text legible
- Tagline and subtext centered
- Two buttons side by side: burgundy "Get a Free Estimate" and outlined "See Our Work"
- Buttons scroll/navigate correctly

- [ ] **Step 5: Commit**

```bash
git add index.html css/main.css images/hero/
git commit -m "feat: add hero section with full-viewport background"
```

---

## Task 6: About Section

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Replace the about placeholder in `index.html`**

Replace `<section class="about" id="about"><!-- filled in Task 6 --></section>` with:

```html
<section class="about" id="about">
  <div class="container">
    <div class="about__grid">
      <div class="about__image">
        <img src="images/about/christian.jpg" alt="Christian Arrellano, owner of Armadillo Landscaping & Co.">
      </div>
      <div class="about__content">
        <span class="section-label">About Us</span>
        <h2>We Treat Every Client Like a Neighbor</h2>
        <p>Armadillo Landscaping &amp; Co. is a small, locally-owned business serving Central Texas. Owner Christian Arrellano built this company on a simple belief: every yard deserves skilled hands and honest service.</p>
        <p>We don't treat you like a dollar sign — we treat you like a genuine person who trusts us to care for your home. From the first call to the final walkthrough, expect clear communication and quality you can see.</p>
        <div class="about__stats">
          <div class="about__stat">
            <span class="about__stat-number">5+</span>
            <span class="about__stat-label">Years of Experience</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number">4</span>
            <span class="about__stat-label">Cities Served</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number">5★</span>
            <span class="about__stat-label">Star Rating</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS to `css/main.css`**

```css
/* ===== ABOUT ===== */
.about {
  padding: var(--section-pad);
  background: var(--color-off-white);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about__image img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.about__content h2 { color: var(--color-charcoal); }

.about__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0,0,0,0.08);
}

.about__stat { text-align: center; }

.about__stat-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-burgundy);
  line-height: 1;
  margin-bottom: 0.35rem;
}

.about__stat-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-charcoal-light);
}
```

- [ ] **Step 3: Verify in browser**

Expected:
- Light sand background section below the hero
- Two-column layout: image placeholder left, text right
- "About Us" label in burgundy above heading
- Three stat badges (5+, 4, 5★) in a row with burgundy numbers
- Text is readable and warm in tone

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: add about section with two-column layout and stat badges"
```

---

## Task 7: Services Section

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Replace the services placeholder in `index.html`**

Replace `<section class="services" id="services"><!-- filled in Task 7 --></section>` with:

```html
<section class="services" id="services">
  <div class="container">
    <div class="services__banner">
      <i class="fa-solid fa-tag"></i> Free Estimates on All Services
    </div>
    <span class="section-label">What We Do</span>
    <h2>Our Services</h2>
    <div class="services__grid">

      <div class="services__card">
        <div class="services__icon"><i class="fa-solid fa-leaf"></i></div>
        <h3>Landscaping &amp; Yard Care</h3>
        <ul>
          <li>Garden remodels</li>
          <li>Lawn maintenance</li>
          <li>Decorative plants &amp; beds</li>
        </ul>
      </div>

      <div class="services__card">
        <div class="services__icon"><i class="fa-solid fa-trowel-bricks"></i></div>
        <h3>Hardscaping</h3>
        <ul>
          <li>Concrete repair &amp; installation</li>
          <li>Patio extensions</li>
          <li>Paver installations</li>
          <li>Stone masonry &amp; stonework</li>
          <li>Driveway repair</li>
        </ul>
      </div>

      <div class="services__card">
        <div class="services__icon"><i class="fa-solid fa-house-chimney"></i></div>
        <h3>Outdoor Living</h3>
        <ul>
          <li>Fencing</li>
          <li>Outdoor lighting</li>
          <li>Water features (ponds &amp; waterfalls)</li>
          <li>Stucco</li>
        </ul>
      </div>

      <div class="services__card">
        <div class="services__icon"><i class="fa-solid fa-droplet"></i></div>
        <h3>Irrigation &amp; Drainage</h3>
        <ul>
          <li>Irrigation system installation</li>
          <li>Irrigation modifications</li>
          <li>Drainage solutions</li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add services CSS to `css/main.css`**

```css
/* ===== SERVICES ===== */
.services {
  padding: var(--section-pad);
  background: var(--color-white);
}

.services__banner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-sand-light);
  color: var(--color-burgundy);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  margin-bottom: 2rem;
  border: 1px solid rgba(123,45,62,0.15);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.services__card {
  background: var(--color-sand-light);
  border-radius: var(--radius);
  padding: 2rem 1.5rem;
  border: 1px solid rgba(0,0,0,0.06);
  transition: box-shadow 0.2s, transform 0.2s;
}
.services__card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transform: translateY(-3px);
}

.services__icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-burgundy);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: var(--color-white);
  font-size: 1.2rem;
}

.services__card h3 { color: var(--color-charcoal); }

.services__card ul {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.services__card li {
  font-size: 0.9rem;
  color: var(--color-charcoal-light);
  padding-left: 1rem;
  position: relative;
}

.services__card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-burgundy);
}
```

- [ ] **Step 3: Verify in browser**

Expected:
- 4-column card grid below About
- Each card: round burgundy icon, bold heading, bullet list of services with burgundy dots
- "Free Estimates on All Services" pill badge above the heading
- Cards lift slightly on hover

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: add services section with 4-category card grid"
```

---

## Task 8: Testimonials Section

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Replace the testimonials placeholder in `index.html`**

Replace `<section class="testimonials" id="testimonials"><!-- filled in Task 8 --></section>` with:

```html
<section class="testimonials" id="testimonials">
  <div class="container">
    <span class="section-label">What Clients Say</span>
    <h2>Trusted by Central Texas Homeowners</h2>
    <div class="testimonials__grid">

      <div class="testimonials__card">
        <div class="testimonials__stars" aria-label="5 stars">★★★★★</div>
        <blockquote>"Excellent communication throughout the entire project. Their expertise in stone waterfall repair was impressive — they knew exactly what to do and got it done right the first time."</blockquote>
        <div class="testimonials__author">
          <span class="testimonials__initials">L.O.</span>
          <span class="testimonials__city">Georgetown, TX</span>
        </div>
      </div>

      <div class="testimonials__card">
        <div class="testimonials__stars" aria-label="5 stars">★★★★★</div>
        <blockquote>"Christian took the time to thoroughly explain every step of our patio and gazebo extension. His patience and attention to detail made the whole process smooth and stress-free."</blockquote>
        <div class="testimonials__author">
          <span class="testimonials__initials">A.B.</span>
          <span class="testimonials__city">Jarrell, TX</span>
        </div>
      </div>

      <div class="testimonials__card">
        <div class="testimonials__stars" aria-label="5 stars">★★★★★</div>
        <blockquote>"Quality work combined with genuine customer service. You can tell they actually care about doing a great job — not just getting paid and moving on."</blockquote>
        <div class="testimonials__author">
          <span class="testimonials__initials">T.B.</span>
          <span class="testimonials__city">Jarrell, TX</span>
        </div>
      </div>

    </div>
    <p class="testimonials__more">
      <a href="https://nextdoor.com/pages/armadillo-concrete-services-jarrell-tx/" target="_blank" rel="noopener noreferrer">Read more reviews on Nextdoor →</a>
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add testimonials CSS to `css/main.css`**

```css
/* ===== TESTIMONIALS ===== */
.testimonials {
  padding: var(--section-pad);
  background: var(--color-sand-light);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.testimonials__card {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.testimonials__stars {
  color: var(--color-sand);
  font-size: 1.1rem;
  letter-spacing: 0.1em;
}

.testimonials__card blockquote {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-charcoal-light);
  font-style: italic;
  flex: 1;
  margin: 0;
}

.testimonials__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.07);
}

.testimonials__initials {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-burgundy);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

.testimonials__city {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-charcoal);
}

.testimonials__more {
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 0;
}

.testimonials__more a {
  color: var(--color-burgundy);
  font-weight: 700;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}
.testimonials__more a:hover { opacity: 0.75; }
```

- [ ] **Step 3: Verify in browser**

Expected:
- 3 white review cards on a sand background
- Gold star ratings, italic quote, initials avatar in burgundy, city name
- "Read more reviews on Nextdoor →" link below the cards

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: add testimonials section with 3 Nextdoor reviews"
```

---

## Task 9: Contact Section + Form

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`
- Modify: `js/form.js`

- [ ] **Step 1: Set up Formspree**

1. Go to https://formspree.io and create a free account
2. Create a new form and note your form endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`)
3. Replace `YOUR_FORM_ID` in the HTML below with your actual form ID

- [ ] **Step 2: Replace the contact placeholder in `index.html`**

Replace `<section class="contact" id="contact"><!-- filled in Task 9 --></section>` with:

```html
<section class="contact" id="contact">
  <div class="container">
    <span class="section-label">Get In Touch</span>
    <h2>Request a Free Estimate</h2>
    <div class="contact__grid">

      <div class="contact__info">
        <p class="contact__invite">Prefer to talk? Give us a call — we'd love to hear from you.</p>
        <a href="tel:5129481734" class="contact__phone">(512) 948-1734</a>
        <div class="contact__areas">
          <p class="contact__areas-label">Currently serving:</p>
          <ul>
            <li><i class="fa-solid fa-location-dot"></i> Austin</li>
            <li><i class="fa-solid fa-location-dot"></i> Jarrell</li>
            <li><i class="fa-solid fa-location-dot"></i> Georgetown</li>
            <li><i class="fa-solid fa-location-dot"></i> Round Rock</li>
          </ul>
        </div>
      </div>

      <form class="contact__form" id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="form__row">
          <div class="form__group">
            <label for="name">Full Name *</label>
            <input type="text" id="name" name="name" required placeholder="John Smith">
          </div>
          <div class="form__group">
            <label for="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required placeholder="(512) 000-0000">
          </div>
        </div>
        <div class="form__row">
          <div class="form__group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com">
          </div>
          <div class="form__group">
            <label for="city">Your City</label>
            <input type="text" id="city" name="city" placeholder="Georgetown">
          </div>
        </div>
        <div class="form__group">
          <label for="service">Service Needed *</label>
          <select id="service" name="service" required>
            <option value="">Select a service...</option>
            <option value="Landscaping & Yard Care">Landscaping &amp; Yard Care</option>
            <option value="Hardscaping">Hardscaping</option>
            <option value="Outdoor Living">Outdoor Living</option>
            <option value="Irrigation & Drainage">Irrigation &amp; Drainage</option>
          </select>
        </div>
        <div class="form__group">
          <label for="message">Tell us about your project</label>
          <textarea id="message" name="message" rows="4" placeholder="Describe what you're looking to do..."></textarea>
        </div>
        <button type="submit" class="btn btn--primary btn--full">Request My Free Estimate</button>
      </form>

    </div>
  </div>
</section>
```

- [ ] **Step 3: Add contact CSS to `css/main.css`**

```css
/* ===== CONTACT ===== */
.contact {
  padding: var(--section-pad);
  background: var(--color-white);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 4rem;
  align-items: start;
  margin-top: 1rem;
}

.contact__invite {
  font-size: 1rem;
  color: var(--color-charcoal-light);
  margin-bottom: 0.75rem;
}

.contact__phone {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-burgundy);
  margin-bottom: 2rem;
  transition: opacity 0.2s;
}
.contact__phone:hover { opacity: 0.8; }

.contact__areas-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-charcoal);
  margin-bottom: 0.5rem;
}

.contact__areas ul {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact__areas li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--color-charcoal-light);
}

.contact__areas li i { color: var(--color-burgundy); font-size: 0.8rem; }

/* Form */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form__group label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-charcoal);
}

.form__group input,
.form__group select,
.form__group textarea {
  padding: 0.75rem 1rem;
  border: 1.5px solid rgba(0,0,0,0.15);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-charcoal);
  background: var(--color-white);
  transition: border-color 0.2s;
  width: 100%;
}

.form__group input:focus,
.form__group select:focus,
.form__group textarea:focus {
  outline: none;
  border-color: var(--color-burgundy);
}

.form__group textarea { resize: vertical; min-height: 100px; }

.form__success {
  background: #eaf7ea;
  color: #2d6a2d;
  padding: 1.25rem;
  border-radius: var(--radius);
  font-weight: 700;
  text-align: center;
}

.form__error {
  color: var(--color-burgundy);
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 0.5rem;
}
```

- [ ] **Step 4: Write `js/form.js`**

```javascript
const form = document.getElementById('quoteForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const existingError = form.querySelector('.form__error');
    if (existingError) existingError.remove();

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.innerHTML = '<p class="form__success">Thanks! We\'ll be in touch within 24 hours to schedule your free estimate.</p>';
      } else {
        throw new Error('Server error');
      }
    } catch {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      const error = document.createElement('p');
      error.className = 'form__error';
      error.textContent = 'Something went wrong. Please call us directly at (512) 948-1734.';
      form.appendChild(error);
    }
  });
}
```

- [ ] **Step 5: Verify in browser**

Expected:
- Two-column section: left has phone number in large burgundy, service area cities with pin icons; right has the 6-field quote form
- Form fields have clean borders, focus turns border burgundy
- Submit button is full-width burgundy
- Submitting the form (with Formspree endpoint set) should show the success message

- [ ] **Step 6: Commit**

```bash
git add index.html css/main.css js/form.js
git commit -m "feat: add contact section with phone, service areas, and quote form"
```

---

## Task 10: Gallery Page

**Files:**
- Modify: `gallery.html`
- Modify: `css/main.css`
- Modify: `js/gallery.js`

- [ ] **Step 1: Add placeholder project photos**

Drop at least 2 photos per category into the appropriate folders. Name them sequentially:
- `images/projects/landscaping/01.jpg`, `02.jpg`, etc.
- `images/projects/hardscaping/01.jpg`, `02.jpg`, etc.
- `images/projects/outdoor-living/01.jpg`, `02.jpg`, etc.
- `images/projects/irrigation/01.jpg`, `02.jpg`, etc.

Client will replace these with actual project photos.

- [ ] **Step 2: Replace the gallery-page placeholder in `gallery.html`**

Replace `<section class="gallery-page"><!-- filled in Task 10 --></section>` with the block below. Add one `<a>` block per photo you placed in Step 1, following the pattern shown — adjust `data-category`, `href`, and `src` for each photo:

```html
<section class="gallery-page">
  <div class="container">

    <div class="gallery-page__header">
      <span class="section-label">Portfolio</span>
      <h1>Our Work</h1>
      <p>Real projects, real results — across Central Texas</p>
    </div>

    <div class="gallery-page__filters">
      <button class="gallery__filter-btn active" data-filter="all">All</button>
      <button class="gallery__filter-btn" data-filter="landscaping">Landscaping</button>
      <button class="gallery__filter-btn" data-filter="hardscaping">Hardscaping</button>
      <button class="gallery__filter-btn" data-filter="outdoor-living">Outdoor Living</button>
      <button class="gallery__filter-btn" data-filter="irrigation">Irrigation</button>
    </div>

    <div class="gallery-page__grid" id="galleryGrid">

      <!-- LANDSCAPING -->
      <a href="images/projects/landscaping/01.jpg"
         class="gallery__item glightbox"
         data-category="landscaping"
         data-gallery="projects"
         data-title="Garden Remodel">
        <img src="images/projects/landscaping/01.jpg" alt="Garden remodel by Armadillo Landscaping" loading="lazy">
      </a>

      <!-- HARDSCAPING -->
      <a href="images/projects/hardscaping/01.jpg"
         class="gallery__item glightbox"
         data-category="hardscaping"
         data-gallery="projects"
         data-title="Patio Extension">
        <img src="images/projects/hardscaping/01.jpg" alt="Patio extension by Armadillo Landscaping" loading="lazy">
      </a>

      <!-- OUTDOOR LIVING -->
      <a href="images/projects/outdoor-living/01.jpg"
         class="gallery__item glightbox"
         data-category="outdoor-living"
         data-gallery="projects"
         data-title="Outdoor Lighting">
        <img src="images/projects/outdoor-living/01.jpg" alt="Outdoor lighting by Armadillo Landscaping" loading="lazy">
      </a>

      <!-- IRRIGATION -->
      <a href="images/projects/irrigation/01.jpg"
         class="gallery__item glightbox"
         data-category="irrigation"
         data-gallery="projects"
         data-title="Drip Irrigation">
        <img src="images/projects/irrigation/01.jpg" alt="Drip irrigation by Armadillo Landscaping" loading="lazy">
      </a>

      <!-- Add more <a> blocks following the same pattern for every additional photo -->

    </div>

    <div class="gallery-page__cta">
      <p>Like what you see?</p>
      <a href="index.html#contact" class="btn btn--primary">Get a Free Estimate Today</a>
    </div>

  </div>
</section>
```

- [ ] **Step 3: Add gallery CSS to `css/main.css`**

```css
/* ===== GALLERY PAGE ===== */
.gallery-page {
  padding-top: calc(var(--nav-height) + 3rem);
  padding-bottom: 5rem;
  background: var(--color-off-white);
  min-height: 100vh;
}

.gallery-page__header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.gallery-page__header h1 { margin-bottom: 0.5rem; }
.gallery-page__header p  { color: var(--color-charcoal-light); margin-bottom: 0; }

/* Filter tabs */
.gallery-page__filters {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.gallery__filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: 1.5px solid rgba(0,0,0,0.15);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-charcoal-light);
  background: var(--color-white);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.gallery__filter-btn:hover,
.gallery__filter-btn.active {
  background: var(--color-burgundy);
  color: var(--color-white);
  border-color: var(--color-burgundy);
}

/* Masonry grid */
.gallery-page__grid {
  columns: 3;
  column-gap: 1rem;
  margin-bottom: 3rem;
}

.gallery__item {
  display: block;
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
}

.gallery__item img {
  width: 100%;
  display: block;
  transition: transform 0.4s ease;
}

.gallery__item:hover img { transform: scale(1.03); }

/* CTA */
.gallery-page__cta {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0,0,0,0.08);
}

.gallery-page__cta p {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-charcoal);
  margin-bottom: 1rem;
}
```

- [ ] **Step 4: Write `js/gallery.js`**

```javascript
// Initialize GLightbox
GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: false,
  selector: '.glightbox',
});

// Filter tabs
const filterBtns = document.querySelectorAll('.gallery__filter-btn');
const galleryItems = document.querySelectorAll('.gallery__item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.display = show ? 'block' : 'none';
    });
  });
});
```

- [ ] **Step 5: Verify in browser**

Open `gallery.html`. Expected:
- Page header "Our Work" centered, sand background
- 5 filter buttons (All active by default in burgundy)
- Masonry grid showing all placeholder photos
- Clicking "Hardscaping" hides landscaping/outdoor-living/irrigation photos, shows only hardscaping
- Clicking any photo opens GLightbox full-screen overlay with arrow navigation
- "Get a Free Estimate Today" button at bottom links to `index.html#contact`

- [ ] **Step 6: Commit**

```bash
git add gallery.html css/main.css js/gallery.js images/projects/
git commit -m "feat: add gallery page with filter tabs, masonry grid, and lightbox"
```

---

## Task 11: Responsive Design

**Files:**
- Modify: `css/main.css`

- [ ] **Step 1: Add responsive media queries to the bottom of `css/main.css`**

```css
/* ===== RESPONSIVE ===== */

/* Tablet: 768px–1024px */
@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

/* Tablet/Mobile: ≤ 768px */
@media (max-width: 768px) {
  :root { --section-pad: 3.5rem 0; }

  /* Nav */
  .nav__links {
    display: none;
    position: fixed;
    top: var(--nav-height);
    left: 0; right: 0;
    background: var(--color-white);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.25rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    z-index: 999;
  }
  .nav__links.open { display: flex; }
  .nav__cta { display: none; }
  .nav__hamburger { display: flex; }

  /* About */
  .about__grid { grid-template-columns: 1fr; gap: 2rem; }
  .about__image img { height: 320px; }

  /* Services */
  .services__grid { grid-template-columns: repeat(2, 1fr); }

  /* Testimonials */
  .testimonials__grid { grid-template-columns: 1fr; }

  /* Contact */
  .contact__grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .form__row { grid-template-columns: 1fr; }

  /* Gallery */
  .gallery-page__grid { columns: 2; }

  /* Footer */
  .footer__grid { grid-template-columns: 1fr; gap: 2rem; }
}

/* Mobile: ≤ 480px */
@media (max-width: 480px) {
  .services__grid { grid-template-columns: 1fr; }
  .about__stats { grid-template-columns: 1fr; gap: 1.5rem; }
  .hero__ctas { flex-direction: column; align-items: center; }
  .gallery-page__grid { columns: 1; }
}
```

- [ ] **Step 2: Verify on mobile in Chrome DevTools**

Open `index.html`, open DevTools (F12), toggle device toolbar (Ctrl+Shift+M), select iPhone 12 (390px wide). Expected:
- Nav: links hidden, hamburger visible; tapping hamburger reveals full-width dropdown menu
- Hero: single column, both buttons stack vertically
- About: image above text, single column
- Services: 2 columns at 768px → 1 column at 480px
- Testimonials: single column cards
- Contact: single column (phone info above, form below), form rows unstacked
- Footer: single column

Select iPad (768px). Expected: 2-column services grid, about is single column.

- [ ] **Step 3: Commit**

```bash
git add css/main.css
git commit -m "feat: add responsive breakpoints for tablet and mobile"
```

---

## Task 12: Final Polish

**Files:**
- Modify: `index.html`
- Modify: `gallery.html`
- Modify: `css/main.css`

- [ ] **Step 1: Confirm fonts are loading**

Open `index.html` in browser. In DevTools → Network → filter "font". Expected: 2 font files from fonts.gstatic.com (Playfair Display, Lato). Headings should be in a serif font, body in a clean sans-serif. If not loading, check the `<link>` tags in `<head>`.

- [ ] **Step 2: Add `scroll-margin-top` so anchors aren't hidden behind the sticky nav**

Add this to `css/main.css` (place after the RESET block):

```css
/* Offset anchor links for sticky nav */
#hero, #about, #services, #testimonials, #contact {
  scroll-margin-top: var(--nav-height);
}
```

- [ ] **Step 3: Add Open Graph meta tags for social sharing to `index.html` `<head>`**

```html
<meta property="og:title" content="Armadillo Landscaping & Co. | Central Texas Landscaping">
<meta property="og:description" content="Locally-owned landscaping and yard remodel services in Austin, Jarrell, Georgetown & Round Rock. Free estimates. Call (512) 948-1734.">
<meta property="og:type" content="website">
<meta property="og:image" content="images/hero/hero.jpg">
```

- [ ] **Step 4: Add the same Open Graph tags to `gallery.html` `<head>` (adjusted)**

```html
<meta property="og:title" content="Our Work | Armadillo Landscaping & Co.">
<meta property="og:description" content="Browse completed landscaping, hardscaping, and outdoor living projects across Central Texas.">
<meta property="og:type" content="website">
<meta property="og:image" content="images/hero/hero.jpg">
```

- [ ] **Step 5: Full site walkthrough**

Check every section in the browser at desktop width (1280px):
- [ ] Nav: logo, all links, CTA button visible; scrolling adds shadow
- [ ] Hero: full viewport, photo + overlay, tagline readable, both buttons work
- [ ] About: two columns, owner photo, stat badges
- [ ] Services: 4 cards, icons, bullet lists
- [ ] Testimonials: 3 cards, Nextdoor link works (opens new tab)
- [ ] Contact: phone clickable (opens phone dialer), form renders correctly
- [ ] Footer: all links navigate correctly, phone clickable
- [ ] Gallery: filter buttons work, all photos load, lightbox opens and closes
- [ ] "Get a Free Estimate" from gallery links back to `index.html#contact` and scrolls to the right section

- [ ] **Step 6: Commit**

```bash
git add index.html gallery.html css/main.css
git commit -m "feat: final polish — scroll offset, OG tags, font verification"
```

---

## Content Handoff Checklist

When client delivers assets, slot them in without code changes:

| Asset | Destination |
|---|---|
| Logo file | `images/logo/logo.png` |
| Hero background photo | `images/hero/hero.jpg` |
| Christian's photo | `images/about/christian.jpg` |
| Landscaping project photos | `images/projects/landscaping/01.jpg`, `02.jpg`, ... |
| Hardscaping project photos | `images/projects/hardscaping/01.jpg`, `02.jpg`, ... |
| Outdoor living photos | `images/projects/outdoor-living/01.jpg`, `02.jpg`, ... |
| Irrigation photos | `images/projects/irrigation/01.jpg`, `02.jpg`, ... |

After adding new gallery photos, add a matching `<a>` block to the gallery grid in `gallery.html` following the pattern in Task 10 Step 2.

Update the stat badge numbers in `index.html` (Task 6) once Christian confirms years in business and review count.
