# 🎨 Styles & Animations Guide
## Portfolio — Karthik Manivel (Angular 19 + SCSS)

This document explains every design pattern, CSS variable, and animation technique used in this project so you can adopt the same structure in any other Angular (or plain HTML/CSS) project.

---

## 📁 File Structure Overview

```
src/
├── styles.scss                          ← Global tokens, reset, scrollbar, selection
├── index.html                           ← Google Fonts + Font Awesome CDN links
└── app/
    ├── app.component.scss               ← Host-level display:block / background
    ├── directives/
    │   └── scroll-reveal.directive.ts   ← Intersection Observer–based scroll animation
    ├── services/
    │   └── theme.service.ts             ← Dark / light toggle, localStorage persistence
    └── components/
        ├── navbar/
        ├── hero/
        ├── about/
        ├── skills/
        ├── projects/
        ├── experience/
        ├── testimonials/
        ├── contact/
        └── footer/
```

---

## 1. Design Tokens — CSS Custom Properties

All colors, spacing, typography, shadows, and transitions live as **CSS variables** on `:root`. Components never use raw hex values — they always reference a token.

### 1.1 How the Dual Theme Works

```scss
// src/styles.scss

/* ── DARK THEME (default) ── */
:root,
[data-theme="dark"] {
  --primary: #ff5416;
  --primary-dark: #e04a10;
  --accent: #fe5b20;
  --accent-warm: #fe5b20;

  /* Backgrounds */
  --dark: #0a0a0a;
  --dark-secondary: #111111;
  --dark-tertiary: #1a1a1a;

  /* Text */
  --light: #ffffff;
  --light-muted: #b0b0b0;
  --gray: #888;

  /* Surfaces (cards, borders, inputs) */
  --surface: rgba(255, 255, 255, 0.02);
  --surface-border: rgba(255, 255, 255, 0.06);
  --surface-hover: rgba(255, 255, 255, 0.04);
  --surface-elevated: rgba(255, 255, 255, 0.03);

  /* Navbar */
  --nav-bg: rgba(10, 10, 10, 0.92);
  --nav-border: rgba(255, 255, 255, 0.05);
  --mobile-menu-bg: rgba(10, 10, 10, 0.98);

  /* Overlays (hero image sections) */
  --overlay-heavy: rgba(10, 10, 10, 0.85);
  --overlay-medium: rgba(10, 10, 10, 0.7);

  /* Inputs */
  --input-bg: rgba(255, 255, 255, 0.04);
  --input-border: rgba(255, 255, 255, 0.08);
  --input-focus-bg: rgba(255, 107, 107, 0.05);

  /* Scrollbar */
  --scrollbar-track: #0a0a0a;

  /* Gradients */
  --gradient-accent: linear-gradient(135deg, #ff5416, #fe5b20);
  --gradient-warm: linear-gradient(135deg, #ff5416, #ff3366);
  --gradient-cool: linear-gradient(135deg, #ff6b6b, #e05555);

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Space Grotesk', sans-serif;

  /* Motion */
  --transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* Shadows */
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(255, 107, 107, 0.3);

  /* RGBA version of primary for use inside rgba() */
  --primary-rgb: 255, 107, 107;
}

/* ── LIGHT THEME ── */
[data-theme="light"] {
  /* Only override what changes — accent/primary stay the same coral */
  --dark: #f8f8f8;
  --dark-secondary: #ffffff;
  --dark-tertiary: #f0f0f0;
  --light: #1a1a1a;
  --light-muted: #555555;
  --gray: #777;
  --surface: rgba(0, 0, 0, 0.02);
  --surface-border: rgba(0, 0, 0, 0.08);
  --nav-bg: rgba(255, 255, 255, 0.92);
  --nav-border: rgba(0, 0, 0, 0.08);
  --input-bg: rgba(0, 0, 0, 0.03);
  --input-border: rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.12);
  --scrollbar-track: #f8f8f8;
}
```

### 1.2 `--primary-rgb` Pattern

This pattern lets you use the primary color inside `rgba()` without hard-coding the value:

```scss
// ✅ Correct — responds to theme changes
background: rgba(var(--primary-rgb), 0.12);
box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.4);

// ❌ Wrong — hard-coded, won't update with theme
background: rgba(255, 107, 107, 0.12);
```

### 1.3 Switching the Theme

The `ThemeService` sets `data-theme` on `document.documentElement`:

```typescript
// src/app/services/theme.service.ts
toggleTheme() {
  const next = this.currentTheme() === 'dark' ? 'light' : 'dark';
  this.currentTheme.set(next);
  localStorage.setItem('theme', next);
  document.documentElement.setAttribute('data-theme', next);
}
```

---

## 2. Typography

### Fonts (loaded via CDN in `index.html`)

```html
<!-- Body text -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900" rel="stylesheet">
<!-- Headings / Display -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700" rel="stylesheet">
<!-- Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

### Typographic Scale

```scss
/* All headings use display font */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.1;
}

/* Fluid sizing with clamp() */
.hero-title      { font-size: clamp(3rem, 7vw, 6rem); }
.section-title   { font-size: clamp(2rem, 4vw, 3rem); }
.section-subtitle { font-size: 1.05rem; }
.about-text      { font-size: 1.05rem; line-height: 1.8; }
```

### Gradient Text

```scss
.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Section Tag (label above every section heading)

```scss
.section-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 2rem;

  /* Decorative line before the tag */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 1.2rem;
    height: 2px;
    background: var(--gradient-accent);
    transform: translateY(-50%);
  }
}
```

---

## 3. Layout Patterns

### Max-width Container

```scss
.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

### Section Spacing

```scss
.section {
  padding: 8rem 2rem;   /* desktop */

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
}
```

### Two-Column Grid (About, Contact)

```scss
.two-col {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
```

### Three-Column Card Grid (Projects)

```scss
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px)  { grid-template-columns: 1fr; }
}
```

---

## 4. Component-Specific Animations

### 4.1 Hero — Full-Screen Slideshow

**Technique:** All slides are stacked absolutely in `z-index: 0`. The active slide gets `z-index: 1` and `opacity: 1` so it fades over the outgoing one.

```scss
.hero-slideshow {
  position: absolute;
  inset: 0;
  z-index: 0;

  .slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: 0;
    transition: opacity 1.5s ease-in-out;

    &.active {
      opacity: 1;
      z-index: 1;

      .slide-image {
        animation: kenBurns 8s ease-in-out forwards;
      }
    }
  }
}

/* Ken Burns — slow zoom out for depth */
@keyframes kenBurns {
  0%   { transform: scale(1.1); }
  100% { transform: scale(1);   }
}
```

**Angular template:**
```html
@for (slide of slides; track slide.title; let i = $index) {
  <div class="slide" [class.active]="currentSlide() === i">
    <div class="slide-image" [style.backgroundImage]="'url(' + slide.image + ')'"></div>
  </div>
}
```

### 4.2 Hero — Slide Text Cross-Fade with Stagger

**Technique:** All text blocks share one grid cell (`grid-area: 1/1`). The `.active` block becomes `opacity:1`. Each child has an `--i` CSS variable that staggers its `animation-delay`.

```scss
/* Stack all text blocks in same cell */
.hero-text-stack {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: 26rem;         /* prevents height jump between slides */
}

.hero-text-block {
  grid-area: 1 / 1;          /* all occupy same cell */
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;

  &.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;

    /* Re-run child animation every time this block becomes active */
    .anim-child {
      opacity: 0;
      animation: childReveal 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      animation-delay: calc(var(--i) * 120ms + 200ms);
    }
  }
}

@keyframes childReveal {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0);    }
}
```

**HTML — staggered children with `--i` index:**
```html
<div class="hero-badge anim-child" style="--i:0"> ... </div>
<h1 class="hero-title  anim-child" style="--i:1"> ... </h1>
<p  class="hero-desc   anim-child" style="--i:2"> ... </p>
<div class="hero-actions anim-child" style="--i:3"> ... </div>
```

### 4.3 Hero — Page-Load Fade In

**Technique:** `.hero-content` starts hidden. A `signal` flips to `true` after 300ms in `ngAfterViewInit`, adding `.visible` class.

```scss
.hero-content {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stats animate in with delay after content appears */
.anim-stats {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s 0.9s ease, transform 0.8s 0.9s ease;

  .hero-content.visible & {
    opacity: 1;
    transform: translateY(0);
  }
}
```

```typescript
ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => this.showContent.set(true), 300);
    this.startSlideshow();
  }
}
```

### 4.4 Floating Particles

```scss
.particle {
  position: absolute;
  bottom: -10px;
  left: var(--x);           /* set per-particle via style="--x: 8%" */
  width: 3px; height: 3px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0;
  animation: floatUp 8s var(--delay) infinite;
}

@keyframes floatUp {
  0%   { opacity: 0; transform: translateY(0); }
  10%  { opacity: 0.6; }
  90%  { opacity: 0.2; }
  100% { opacity: 0; transform: translateY(-100vh) translateX(30px); }
}
```

---

## 5. Scroll-Reveal Directive

Every section's headings and cards animate in as you scroll. The directive uses the native **IntersectionObserver API**.

### How to Apply

```html
<!-- Basic (fade up from below) -->
<div appScrollReveal>...</div>

<!-- Slide from a direction -->
<div appScrollReveal revealDirection="left">...</div>
<div appScrollReveal revealDirection="right">...</div>

<!-- Custom delay (ms) -->
<div appScrollReveal [revealDelay]="200">...</div>
```

### Directive Implementation

```typescript
// src/app/directives/scroll-reveal.directive.ts
import { Directive, ElementRef, Input, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements AfterViewInit {
  @Input() revealDirection: 'up' | 'left' | 'right' | 'fade' = 'up';
  @Input() revealDelay: number = 0;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.el.nativeElement as HTMLElement;

    // Set initial (hidden) state
    el.style.opacity = '0';
    el.style.transition = `opacity 0.7s ease ${this.revealDelay}ms, transform 0.7s ease ${this.revealDelay}ms`;

    const offsets: Record<string, string> = {
      up: 'translateY(40px)',
      left: 'translateX(-40px)',
      right: 'translateX(40px)',
      fade: 'translateY(0)',
    };
    el.style.transform = offsets[this.revealDirection];

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0)';
        observer.unobserve(el);   // fire once only
      }
    }, { threshold: 0.15 });

    observer.observe(el);
  }
}
```

---

## 6. Navbar Patterns

### Scroll-Activated Blur

```scss
.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.2rem 0;
  background: transparent;
  transition: var(--transition);

  &.scrolled {
    background: var(--nav-bg);                  /* rgba with 0.92 alpha */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--nav-border);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  }
}
```

```typescript
@HostListener('window:scroll')
onScroll() {
  this.isScrolled = window.scrollY > 50;
}
```

### Nav Link Underline Hover

```scss
.nav-link {
  position: relative;
  color: var(--light-muted);
  transition: var(--transition);

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 50%;
    width: 0; height: 2px;
    background: var(--gradient-accent);
    transition: var(--transition);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: var(--light);
    &::after { width: 70%; }
  }
}
```

### Theme Toggle Track

```scss
.toggle-track {
  width: 52px; height: 28px;
  background: rgba(var(--primary-rgb), 0.15);
  border: 1px solid rgba(var(--primary-rgb), 0.3);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  transition: var(--transition);

  .toggle-thumb {
    position: absolute;
    top: 3px; left: 3px;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: var(--gradient-accent);
    transition: var(--transition);
  }

  &.light .toggle-thumb {
    left: calc(100% - 23px);   /* slide to the right */
  }
}
```

---

## 7. Card Patterns

### Surface Card (Skills, Projects, Timeline)

```scss
.card {
  background: var(--surface);
  border: 1px solid var(--surface-border);
  border-radius: 20px;
  padding: 2rem;
  transition: var(--transition);

  &:hover {
    background: var(--surface-hover);
    border-color: rgba(var(--primary-rgb), 0.15);
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
}
```

### Card with Colored Top Accent Bar

```scss
.timeline-card {
  border-radius: 16px;
  overflow: hidden;

  .card-accent {
    height: 4px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
  }

  .card-body { padding: 2rem; }
}
```

### Project Card Hover Overlay

```scss
.project-card {
  &:hover .card-overlay { opacity: 1; }
  &:hover .card-image img { transform: scale(1.08); }
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
}

.card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.3));
}
```

---

## 8. Animated Skill Progress Bars

```scss
.skill-bar {
  width: 100%; height: 6px;
  background: var(--surface-border);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 3px;
  width: 0;                       /* starts at 0 */
  animation: progressFill 1.5s ease-out forwards;
  animation-delay: inherit;       /* parent sets delay for stagger */
}

@keyframes progressFill {
  0%   { width: 0; }
  /* final width is set inline: style="width: 92%" */
}
```

> **Note:** Because the animation goes from 0 to the inline `width` value, you set `width` in the inline style and the keyframe still starts from 0 due to `from { width: 0 }`. To be explicit, set the target in the component:
> ```html
> <div class="skill-progress"
>      [style.width]="skill.level + '%'"
>      [style.animationDelay]="i * 0.1 + 's'">
> ```

---

## 9. Full-Width Hero Band Sections

Used in Experience, Testimonials, Contact — background image with overlay + centered text.

```scss
.section-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  .hero-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;    /* parallax effect */
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
      rgba(10, 10, 10, 0.7),
      rgba(10, 10, 10, 0.85));
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
  }
}

/* Light theme override */
:host-context([data-theme="light"]) .section-hero .hero-overlay {
  background: linear-gradient(to bottom,
    rgba(255, 255, 255, 0.75),
    rgba(248, 248, 248, 0.9));
}
```

> `background-attachment: fixed` creates a **parallax scroll** effect. Disable it on mobile (`background-attachment: scroll`) as it can be choppy.

---

## 10. Floating Badge Animation

```scss
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  background: var(--dark-secondary);
  backdrop-filter: blur(10px);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  font-size: 0.85rem;
  animation: floatBadge 6s ease-in-out infinite;

  i { color: var(--primary); }
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

/* Offset second badge so they don't sync */
.badge-2 { animation-delay: 3s; }
```

---

## 11. Testimonial Carousel

**Pure CSS technique** — track slides horizontally, move with `transform: translateX`.

```scss
.carousel {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  min-width: 100%;    /* each slide takes full width */
  padding: 0 1rem;
}
```

```typescript
// Move track by index
get trackTransform() {
  return `translateX(-${this.currentIndex * 100}%)`;
}
```

### Pill Indicator (expands when active)

```scss
.indicator {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  transition: var(--transition);

  &.active {
    width: 30px;               /* expands to pill shape */
    border-radius: 5px;
    background: var(--primary);
  }
}
```

---

## 12. Timeline

Alternating left/right items with a center vertical gradient line.

```scss
.timeline-container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem 8rem;
}

/* Center gradient line */
.timeline-line {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--accent), var(--primary));
  transform: translateX(-50%);
  opacity: 0.3;
}

/* Left item */
.timeline-item {
  position: relative;
  width: 50%;
  padding-right: 4rem;
  margin-bottom: 4rem;

  /* Dot on the center line */
  .timeline-dot {
    position: absolute;
    top: 30px; right: -22px;
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
}

/* Right item */
.timeline-item.right {
  margin-left: 50%;
  padding-right: 0;
  padding-left: 4rem;

  .timeline-dot { right: auto; left: -22px; }
}

/* Mobile — single column */
@media (max-width: 768px) {
  .timeline-line { left: 20px; }

  .timeline-item,
  .timeline-item.right {
    width: 100%;
    margin-left: 0;
    padding-right: 0;
    padding-left: 60px;
  }

  .timeline-dot,
  .timeline-item.right .timeline-dot {
    left: -2px; right: auto;
  }
}
```

---

## 13. Footer Glow Line

```scss
.footer-glow {
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 2px;
  background: var(--gradient-accent);
  filter: blur(1px);
  opacity: 0.5;

  /* Radial halo beneath the line */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 300px; height: 80px;
    background: radial-gradient(ellipse,
      rgba(var(--primary-rgb), 0.1) 0%,
      transparent 70%);
  }
}
```

---

## 14. Global Utilities

### Custom Scrollbar
```scss
::-webkit-scrollbar       { width: 8px; }
::-webkit-scrollbar-track { background: var(--scrollbar-track); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }
```

### Text Selection
```scss
::selection {
  background: var(--primary);
  color: #fff;
}
```

### Animated Pulse Dot (badge + status indicators)
```scss
.badge-dot {
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.5); }
}
```

### Heartbeat (footer credit icon)
```scss
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.2); }
}

.heart-icon {
  animation: heartbeat 1.5s infinite;
}
```

---

## 15. Performance Tips Used in This Project

| Technique | Why |
|---|---|
| `will-change` omitted intentionally | Added only when profiling shows jank |
| `pointer-events: none` on inactive slides | Prevents invisible elements intercepting clicks |
| `backface-visibility: hidden` not needed | Only needed for 3D transforms |
| Particles use `opacity` + `transform` only | GPU-composited — no layout reflow |
| `IntersectionObserver` unobserved after first trigger | Fires once per element, no continuous polling |
| `background-attachment: scroll` on mobile | `fixed` can cause GPU memory pressure on iOS |
| `prefers-reduced-motion` — recommended to add | Wraps all animations in a media query for accessibility |

### Accessibility Addition (recommended)

```scss
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 16. Quick-Adoption Checklist for a New Project

1. **Copy `styles.scss`** — brings all tokens + reset
2. **Add fonts + FA** in `index.html`
3. **Copy `ThemeService`** and add `data-theme` toggle to a button
4. **Copy `ScrollRevealDirective`** and add `appScrollReveal` to any element you want to animate in
5. **Use `var(--...)` everywhere** — never hard-code colors or transitions
6. **For hero/slideshow**: stack slides absolutely with `z-index` + `opacity` transition
7. **For text cross-fades**: use `display:grid` with `grid-area: 1/1` to overlay text blocks
8. **For stagger**: use `--i` CSS variable + `animation-delay: calc(var(--i) * 120ms)`
9. **For parallax bands**: `background-attachment: fixed` + overlay + `:host-context([data-theme])` overrides
10. **Build check**: run `npx ng build` and verify no budget warnings before deploying

---

*Generated from the live codebase — March 2026*
