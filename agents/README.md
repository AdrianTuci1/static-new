# StaticLabs AI - Design System Master Index

## Structura Fișierelor

Acest folder conține documentația completă a design system-ului pentru "StaticLabs" - un site AI/Automation Agency.

### Fișiere

| # | Fișier | Conținut | Dimensiune |
|---|--------|----------|------------|
| 00 | [00-design-system.md](00-design-system.md) | Design System General - paletă, tipografie, spațiere, layout-uri, checklist | 23KB |
| 01 | [01-homepage.md](01-homepage.md) | Pagina Homepage - toate secțiunile, grid-uri, componente | 29KB |
| 02 | [02-blog.md](02-blog.md) | Pagina Blog - hero, featured grid, article cards, list | 11KB |
| 03 | [03-article-detail.md](03-article-detail.md) | Pagina Articol - hero gradient, content, typography scale | 11KB |
| 04 | [04-case-study-detail.md](04-case-study-detail.md) | Pagina Case Study - hero glitch, overview, results | 8KB |
| 05 | [05-about.md](05-about.md) | Pagina About - mission, stats, gallery, team, gauges | 16KB |
| 06 | [06-faq.md](06-faq.md) | Pagina FAQ - tabs, accordion, split button | 8KB |
| 07 | [07-contact.md](07-contact.md) | Pagina Contact - form, map, info, validation | 13KB |
| 08 | [08-components.md](08-components.md) | Componente Reutilizabile - 28+ componente UI detaliate | 22KB |
| 09 | [09-all-projects.md](09-all-projects.md) | Pagina All Projects - "CASE STUDIES", project list | 10KB |
| 10 | [10-all-articles.md](10-all-articles.md) | Pagina All Articles - "ALL ARTICLES", article grid | 9KB |
| assets | [assets-icons-README.md](assets-icons-README.md) | Instrucțiuni iconițe SVG pentru proiectul React | 5KB |

**Total: ~170KB de documentație**

---

## Sumar Design System

### Paleta Cromatica
- **Monocromă strictă**: black & white + griuri
- **Fără culori de accent**
- **Dark mode dominant**
- **Light mode pentru contrast** (about, blog, case studies)

### Tipografia
- **Font principal**: Geist/Inter (sans-serif geometric)
- **Font monospace**: Geist Mono/JetBrains Mono (pentru meta, labels, cod)
- **Font display**: Clash Display/Monument Extended ()
- **Scale dramatică**: 11px (labels) → 300px ()

### Layout
- **Grid 12 coloane** (desktop), 8 (tablet), 4 (mobile)
- **Asymmetric layouts** - content ancorat stânga
- **Generous whitespace** - padding 80-120px vertical
- **Sharp corners** - border-radius 0 by default
- **Grid lines vizibile** - 1px, #1A1A1A, element decorativ structural

### Iconițe
- **SVG line-art**, monocrom, stroke-based
- Vezi `assets-icons-README.md` pentru lista completă și instrucțiuni

### Componente Cheie
- Navbar + Hamburger + Nav Overlay
- Section Label (//// + uppercase)
- Feature Card (icon + title + desc)
- Statistic Card (number + description + corner accent)
- Case Study Row (logo + year + title + desc + arrow)
- Article Card (4 variante)
- Button Primary + Split Button
- Tab Navigation + Accordion
- Gauge Chart (SVG radial)
- Footer + 

### Efecte
- Noise/grain texture (3-5% opacity)
- Dot grid pattern
- Grid lines (1px, subtile)
- Gradient text (fade)
- Glitch art / pixel sorting
- Halftone/dithered images
- Aurora light streaks

---

## Pagini Identificate

1. **Homepage** - 12 secțiuni (hero, integrations, features, stats, case studies, product demo, features tabs, approach, CTA, footer)
2. **All Projects** - "CASE STUDIES" hero, project list (Octomus, Thunder, StatsParrot, PixTooth)
3. **All Articles** - "ALL ARTICLES" hero, article grid
4. **Blog** - hero, featured grid, articles list
5. **Article Detail** - gradient hero, rich content, related articles
6. **Case Study Detail** - hero imagine + stats grid, testimonial, overview, content
7. **About** - mission, stats, gallery, capabilities, team
8. **FAQ** - tabs + accordion
9. **Contact** - dropdown form (coboară din top), split-screen form + map

---

## Workflow pentru Dezvoltare

### Faza 1: Fundație
1. Setup React + Vite (fără Tailwind)
2. Configurare fonturi (Geist/Inter + Mono)
3. Variabile CSS pentru culori (în fișiere .css separate)
4. Grid system (12 coloane) implementat în CSS
5. Componente base: Container, Grid, Section
6. Fiecare componentă are propriul fișier .css asociat

### Faza 2: Layout-uri
1. Navbar (fixed, transparent)
2. Nav Overlay (fullscreen menu)
3. Footer (4 coloane + )
4. Section wrapper (padding, spacing)

### Faza 3: Secțiuni Homepage
1. Hero Section
2. Integrations Section
3. Features Section (4 carduri)
4. Statistics Section
5. Case Studies Section
6. Product Demo Section
7. Features Tabs Section
8. Our Approach Section
9. CTA/Newsletter Section

### Faza 4: Pagini Adiționale
1. Blog Index Page
2. Article Detail Page
3. Case Study Detail Page
4. About Page
5. FAQ Page
6. Contact Page

### Faza 5: Polish
1. Animations (scroll, hover, transitions)
2. Texturi și efecte (noise, grid, gradients)
3. Responsive (mobile, tablet)
4. Performance optimization
5. Accessibility (contrast, focus states, ARIA)

---

## Note pentru Agent

### Când implementezi o secțiune:
1. **Citește fișierul relevant** din acest folder
2. **Verifică 00-design-system.md** pentru fundație (culori, tipografie, spațiere)
3. **Verifică 08-components.md** pentru componente reutilizabile
4. **Implementează exact grid-ul** descris în fișier
5. **Păstrează sharp corners** (border-radius 0) by default
6. **Folosește monocromia strict** - nicio culoare de accent
7. **Alternează dark/light** - dark pentru hero/CTA/footer, light pentru content
8. **Grid lines vizibile** pe toate paginile cu bg dark (1px, #1A1A1A)
9. **Iconițe SVG line-art** monocrom - vezi assets-icons-README.md
10. **Testează responsive** - mobile, tablet, desktop
11. **Folosește fișiere .css separate** pentru fiecare componentă/pagină (nu Tailwind)
12. **Folosește doar JSX** (nu TSX/TypeScript)

### Nu uita:
- Logo "staticlabs" este lowercase
- Label-urile sunt uppercase cu tracking larg
- Headline-urile sunt light weight (300-400)
- Monospace pentru elemente tehnice
- Grid lines vizibile ca element decorativ
- Noise texture pe fundalurile deschise
- Generous whitespace - nu comprima

---

## Referințe Imagini

Imaginile guideline sunt în: `/Users/adriantucicovenco/Proiecte/static-new/guideline/`

| Imagine | Secțiune | Pagină |
|---------|----------|--------|
| 01.53.50 | Hero + Nav Overlay | Homepage |
| 01.54.21 | Integrations | Homepage |
| 01.54.38 | Features (4 piloni) | Homepage |
| 01.54.59 | Statistics | Homepage |
| 01.56.37 | Case Studies | Homepage |
| 01.56.48 | Case Studies (continuare) | Homepage |
| 01.57.04 | Product Demo | Homepage |
| 01.57.21 | Features Tabs | Homepage |
| 01.57.42 | Our Approach | Homepage |
| 01.58.39 | Features Tabs (variantă) | Homepage |
| 01.59.11 | Blog Featured | Blog |
| 01.59.23 | Blog Articles | Blog |
| 01.59.35 | FAQ | FAQ |
| 01.59.56 | CTA Newsletter | Homepage |
| 02.00.08 | Footer | Homepage |
| 02.06.32 | Article Hero | Article Detail |
| 02.09.16 | Footer (variantă) | Footer |
| 02.09.44 | Blog Hero | Blog |
| 02.11.34 | Case Study Mobile | Case Study Detail |
| 02.11.44 | Nav Overlay Mobile | Nav Overlay |
| 02.12.48 | FAQ Mobile | FAQ |
| 02.16.16 | Contact | Contact |
| 02.16.51 | Contact (continuare) | Contact |
| 02.18.39 | About Hero | About |
| 02.18.57 | Features/Capabilities | About |
| 02.19.17 | About Hero (variantă) | About |
| 02.20.29 | Our Team | About |
| 03.27.45 | Case Study Hero (Octomus) | Case Study Detail |
| 03.28.02 | Case Study Testimonial + Overview (Octomus) | Case Study Detail |

---

## Actualizări

Acest design system este documentul de referință. Orice descoperire nouă din imagini trebuie adăugată în fișierul relevant.

**Ultima actualizare:** 2026-06-20
**Imagini analizate:** 30/30
**Pagini documentate:** 7
**Componente documentate:** 28+
