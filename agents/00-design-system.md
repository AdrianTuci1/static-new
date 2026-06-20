# StaticLabs AI - Design System

## Informații Generale

**Produs:** StaticLabs - AI/Automation Agency Website  
**Platformă:** React + Vite + CSS pur (fără Tailwind, fără TypeScript)  
**Estetică:** Neo-brutalist / Minimalist Tech / Dark Mode dominant  
**Paleta:** Monocromă strictă (black & white + griuri) - FĂRĂ culori de accent  
**An:** 2026

**Grid Lines:** Linii de grid foarte subțiri (1px, `#1A1A1A`) sunt vizibile în toate secțiunile cu background dark. Vezi secțiunea "Grid Lines".

**Iconițe:** Toate iconițele sunt SVG line-art, monocrom. Vezi `assets/icons/README.md` pentru instrucțiuni complete.

---

## Arhitectura Site-ului

### Pagini Identificate

1. **Homepage** (Landing Page)
   - Hero Section (cu meniu overlay fullscreen)
   - Integrations/Partners Section
   - Features Section (4 piloni - Secure Guard, Agent Build, Cloud Scale, Data Mining)
   - Statistics Section (12ms, 10x, 99%)
   - Case Studies Section (Octomus, Thunder, StatsParrot, PixTooth)
   - Product Demo Section (UI mockup workflow)
   - Features Tabs Section (Discovery, Analysis, Training, Deploy)
   - Our Approach Section (split-screen)
   - CTA / Newsletter Section
   - Footer

2. **All Projects Page** (pagină separată "More Projects")
   - Hero "CASE STUDIES"
   - Project List (Octomus, Thunder, StatsParrot, PixTooth)

3. **Blog / Articles Page**
   - Hero "ALL ARTICLES"
   - Featured Article Grid (asimetric 2/3 + 1/3)
   - Article Cards List

4. **Article Detail Page**
   - Article Hero (gradient + noise)
   - Content Body
   - Metadata (reading time, date)

5. **Case Study Detail Page**
   - Project Hero (imagine cinematografică + gradient overlay, stats grid)
   - Project Testimonial + Overview (2 coloane: citat stânga + info sidebar dreapta)
   - Project Image (full-bleed, arhitecturală)
   - Project Content (rich text)

6. **About Page**
   - Hero "OUR MISSION"
   - Stats (8 yrs, 3x, 12 Core AI Frameworks)
   - Image Gallery
   - Features/Capabilities (4 piloni cu gauge charts)
   - Our Team Section

7. **FAQ Page**
   - Tabs (Overview, Security, Protocols, Licensing)
   - Accordion Questions

8. **Contact Page**
   - Split-screen: Formular stânga / Hartă dreapta
   - Info Contact (4 coloane)
   - Nav + Contact Form care 
---

## Paleta Cromatica

### Culori Fundamentale

| Token | Hex | Utilizare |
|-------|-----|-----------|
| `--bg-primary` | `#0A0A0A` | Fundal secțiuni dark (hero, footer, CTA dark) |
| `--bg-secondary` | `#111111` | Fundal alternativ dark |
| `--bg-tertiary` | `#141414` | Canvas, card-uri dark |
| `--bg-light` | `#E8E8E8` | Fundal secțiuni light (about, features light) |
| `--bg-light-warm` | `#F5F5F0` | Fundal warm off-white (about hero, team) |
| `--bg-card-dark` | `#1A1A1A` | Noduri, card-uri în dark mode |
| `--bg-card-light` | `#F0F0F0` | Card-uri în light mode |
| `--bg-input` | `#2A2A2A` | Input-uri dark mode |
| `--bg-input-light` | `#FFFFFF` | Input-uri light mode |

### Culori Text

| Token | Hex | Utilizare |
|-------|-----|-----------|
| `--text-primary` | `#FFFFFF` | Text principal pe dark bg |
| `--text-primary-dark` | `#000000` | Text principal pe light bg |
| `--text-secondary` | `#A0A0A0` | Descrieri, subtitluri dark |
| `--text-secondary-dark` | `#4A4A4A` | Descrieri, subtitluri light |
| `--text-tertiary` | `#666666` | Placeholder, meta text |
| `--text-muted` | `#808080` | Labels, captions |

### Culori Border / Grid

| Token | Hex | Utilizare |
|-------|-----|-----------|
| `--border-dark` | `#333333` | Border noduri, separatoare subtile |
| `--border-light` | `#D0D0D0` | Grid lines pe light bg |
| `--border-subtle` | `#1A1A1A` | Separatoare verticale între coloane |
| `--border-card` | `#DDDDDD` | Border card-uri  |

### Culori UI

| Token | Hex | Utilizare |
|-------|-----|-----------|
| `--accent-white` | `#FFFFFF` | Fulger logo, elemente active |
| `--button-bg-light` | `#F5F5F5` | Butoane primary pe dark bg |
| `--button-bg-dark` | `#0A0A0A` | Butoane primary pe light bg |
| `--button-text-light` | `#000000` | Text butoane light bg |
| `--button-text-dark` | `#FFFFFF` | Text butoane dark bg |

---

## Tipografia

### Font Family

**Font Principal:** `Geist` (Vercel) sau `Inter` - sans-serif geometric modern  
**Font Monospace:** `Geist Mono`, `JetBrains Mono`, `SF Mono`, `IBM Plex Mono` - pentru meta, labels, cod, descrieri tehnice  
**Font Display ():** `Clash Display`, `Monument Extended`, `Neue Machina` - pentru  footer masiv

### Scale Tipografică

| Element | Font | Dimensiune | Greutate | Line-height | Letter-spacing | Transform |
|---------|------|-----------|----------|-------------|----------------|-----------|
| **H1 Hero** | Sans | 72-96px | 300-400 | 1.0-1.1 | -0.02em | none |
| **H1 Section** | Sans | 56-72px | 400 | 1.1 | -0.01em | none |
| **H2** | Sans | 48-56px | 400 | 1.2 | normal | none |
| **H3** | Sans | 32-40px | 500 | 1.2 | normal | none |
| **H4 / Feature Title** | Mono | 20-24px | 500 | 1.3 | -0.02em | none |
| **Body** | Sans | 16-18px | 400 | 1.6 | normal | none |
| **Body Small** | Mono | 13-14px | 400 | 1.6 | normal | none |
| **Label** | Sans | 11-12px | 500 | 1.0 | 0.1em | uppercase |
| **Meta / Date** | Mono | 12-14px | 400 | 1.4 | 0.05em | uppercase |
| **Button** | Sans | 14-16px | 500 | 1.0 | normal | none |
| **Nav Link** | Sans | 48-64px | 300-400 | 1.2 | normal | none |
| **** | Display | 200-300px | 900 | 0.9 | -0.05em | lowercase |
| **Stats Number** | Sans | 64-80px | 300 | 1.0 | normal | none |
| **Logo** | Sans | 20-24px | 700 | 1.0 | -0.02em | lowercase |

### Reguli Tipografice

1. **Contrast de greutate dramatic**: Headline-uri light (300) vs. UI elements medium (500)
2. **Uppercase + tracking larg** pentru toate label-urile de secțiune ("OUR PRODUCT", "STATISTICS", "CASE STUDIES")
3. **Monospace pentru elemente tehnice**: metadata, descrieri proiecte, labels, cod
4. **Tight tracking** pe display text pentru impact editorial
5. **Title Case** pentru titluri feature ("Secure Guard", "Agent Build")
6. **Lowercase** pentru logo "staticlabs" și 

---

## Spațierea

### Grid System

- **Desktop**: 12 coloane, container max-width ~1200-1400px
- **Tablet**: 8 coloane
- **Mobile**: 4 coloane, single column layout
- **Gutter**: 24px (desktop), 16px (tablet), 12px (mobile)

### Padding-uri

| Context | Valoare |
|---------|---------|
| Container padding lateral | 40-80px (desktop), 24px (tablet), 16px (mobile) |
| Secțiune padding vertical | 80-120px (desktop), 60px (tablet), 40px (mobile) |
| Card padding interior | 24-32px |
| Button padding | 12-16px vertical, 24-32px horizontal |
| Input padding | 16-20px |
| Tab padding | 20-24px vertical |

### Gap-uri

| Context | Valoare |
|---------|---------|
| Gap între label și heading | 16-24px |
| Gap între heading și descriere | 24-32px |
| Gap între descriere și content | 48-64px |
| Gap între feature cards | 40-60px |
| Gap între statistici | 40-60px |
| Gap între noduri (workflow) | 80-120px |
| Gap între articole | 24-32px |

---

## Componente UI

### 1. Logo
- Text: "staticlabs" în lowercase
- Icon: fulger (⚡) stilizat înaintea textului
- Font: sans-serif bold, 20-24px
- Culoare: alb pe dark, negru pe light

### 2. Hamburger Menu
- 2 linii orizontale (nu 3, stil minimalist)
- Grosime linie: 2px
- Lungime: ~24px
- Spațiere între linii: ~6-8px
- Culoare: alb pe dark, negru pe light

### 3. Navigație Overlay (Fullscreen)
- Fullscreen overlay, fundal negru `#0A0A0A`
- Link-uri mari: 48-64px, weight 300
- Link-uri: "AI Strategy", "Custom Agents", "Process Automation", "Data Intelligence"
- Logo-uri parteneri sub link-uri (thunder, octomus)
- Aliniere: stânga, centrat vertical în jumătatea dreaptă

### 4. Section Label
- Pattern: 3-4 linii înclinate (////) + text uppercase
- Font: 11-12px, weight 500, letter-spacing 0.1em
- Culoare: gri mediu sau alb în funcție de fundal

### 5. Feature Card
- Iconiță: SVG line art, stroke 1-1.5px, stil geometric
- Titlu: font monospace, 20-24px, weight 500
- Descriere: sans-serif, 14-16px, weight 400, line-height 1.6
- Layout: vertical (icon → titlu → descriere)
- Fără border/shadow vizibil - separare prin grid lines

### 6. Statistic Card
- Număr: 64-80px, weight 300, line-height 1.0
- Descriere: monospace, 14-16px, weight 400
- Corner accents: L-shape minimal în colțul dreapta-sus
- Separator vertical subtil între coloane (1px)

### 7. Case Study Row
- Layout: 4 coloane (logo ~25%, an ~25%, titlu+desc ~40%, săgeată ~10%)
- Logo client: imagine sau text-based
- An: "//2026" format special, monospace
- Titlu: sans-serif, 24-28px, weight 500
- Descriere: monospace, 13-14px, weight 400
- Săgeată: » (dublă), 24-32px, weight 300
- Separator orizontal subtil între rânduri

### 8. Tab Navigation
- 4 tab-uri orizontale, full-width
- Fiecare tab: icon + label uppercase
- Stare activă: fundal deschis, text închis
- Stare inactivă: fundal închis, text gri
- Height tab: 60-80px
- Border-radius: 0 (sharp corners)

### 9. Accordion
- Header: icon + titlu + icon toggle (X/chevron)
- Content: text descriptiv, aliniat stânga
- Border subtil între items
- Padding: 20-24px vertical per item

### 10. Button Primary
- Layout: icon (pătrat) + text
- Fundal: negru sau alb în funcție de context
- Text: medium weight
- Icon container: pătrat separat cu fundal inversat
- Border-radius: 0 (sharp corners) sau 4px maxim
- Padding: 12-16px vertical, 24-32px horizontal

### 11. Button Secondary / Split
- Layout: icon în pătrat + text
- Fundal: negru, icon în pătrat alb
- Text: alb pe negru
- Ex: "More Projects" cu icon +

### 12. Input Field
- Fundal: `#2A2A2A` (dark) sau `#FFFFFF` (light)
- Border: 1px solid `#4A4A4A` (dark) sau `#D0D0D0` (light)
- Placeholder: `#666666`
- Text: alb/negru în funcție de fundal
- Padding: 16-20px
- Height: 56-64px
- Border-radius: 0 (sharp corners)

### 13. Textarea
- Similar input field
- Min-height: 120-160px
- Resize: vertical

### 14.  (Floating)
- Poziție: fixed, bottom-right, 16-24px de margini
- Layout: thumbnail + text + preț
- Fundal: gri deschis `#E8E8E8` sau `#F0F0F0`
- Border: 1px solid `#DDDDDD`
- Border-radius: 12-16px
- Padding: 12-16px

- Poziție: fixed, bottom-right, lângă 
- Layout: icon  (F stilizat/săgeată) + text
- Fundal: alb sau transparent
- Border: 1px solid `#E0E0E0`
- Border-radius: 8-12px (pill shape)
- Padding: 8-12px vertical, 16px horizontal

### 16. Article Card (Featured)
- Layout: full-bleed imagine + overlay gradient
- Titlu: 28-32px, weight 500, alb
- Meta: monospace, 12-14px, uppercase
- Border-radius: 0 (sharp corners)

### 17. Article Card (Standard)
- Layout: thumbnail + text (orizontal)
- Thumbnail: ~120-160px width
- Titlu: 18-20px, weight 500
- Meta: monospace, 12px
- Border-radius: 0

### 18. Team Photo Card
- Layout: imagine portret, full-bleed în celulă
- Fără border, fără shadow
- Border-radius: 0 (sharp corners)
- Grid: 2×2 sau asimetric

### 19. Gauge Chart
- Tip: radial/circular progress
- Stroke: 2-3px
- Culoare activă: `#1A1A1A` (dark) sau `#000000`
- Culoare inactivă: `#B0B0B0`
- Text procent: 20-24px, weight 500
- Număr secțiune: "//01" monospace, 14-16px

### 20. Workflow Node (Demo UI)
- Fundal: `#1A1A1A`
- Border: 1px solid `#333333`
- Border activ: 1px solid `#FFFFFF`
- Border-radius: 8-12px
- Padding: 12-16px vertical, 16-20px horizontal
- Icon + titlu + subtitlu
- Conectori: linii 1px, `#555555`

- Formă: squircle (pătrat cu radius mic ~8px)
- Dimensiune: 40-44px
- Fundal: transparent sau `#1A1A1A`
- Icon: 20-24px, alb/negru

### 22.  Footer
- Text: "staticlabs" lowercase
- Font: display, 200-300px, weight 900
- Letter-spacing: -0.05em
- Culoare: `#E8E8E8` / `#F0F0F0` (subtil)
- Overflow: crop la margini
- Full-width, centrat

---

## Layout-uri Specifice

### Homepage Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION (dark bg)                                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ "Power your future with AI"                           │  │
│  │ Description text...                                    │  │
│  │ [◫ Build A Workflow]                                  │  │
│  └──────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  INTEGRATIONS (dark bg)                                     │
│  [⚡] [✦] [◈] [❖]  + headline text                        │
├─────────────────────────────────────────────────────────────┤
│  FEATURES (4 coloane, dark bg)                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│  │ [ICON]  │  │ [ICON]  │  │ [ICON]  │  │ [ICON]  │      │
│  │ Title   │  │ Title   │  │ Title   │  │ Title   │      │
│  │ Desc    │  │ Desc    │  │ Desc    │  │ Desc    │      │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
├─────────────────────────────────────────────────────────────┤
│  STATISTICS (dark bg)                                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │ 12ms       │  │ 10x        │  │ 99%        │           │
│  │ Average... │  │ Increase...│  │ Uptime...  │           │
│  └────────────┘  └────────────┘  └────────────┘           │
├─────────────────────────────────────────────────────────────┤
│  CASE STUDIES (light bg)                                    │
│  ┌──────┐  ┌────────────────────────────────────┐ [»]    │
│  │LOGO  │  │ //2026  Title                      │        │
│  └──────┘  └────────────────────────────────────┘        │
├─────────────────────────────────────────────────────────────┤
│  PRODUCT DEMO (dark bg)                                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ UI Mockup - Workflow Nodes                            │  │
│  └──────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  FEATURES TABS (dark bg)                                    │
│  [DISCOVERY] [ANALYSIS] [TRAINING] [DEPLOY]                │
│  ┌────────────────────┐  ┌─────────────────────────────┐  │
│  │ [Mockup UI]        │  │ Description text...          │  │
│  └────────────────────┘  └─────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  OUR APPROACH (light bg, split-screen)                      │
│  ┌──────────────┐  ┌────────────────────────────────────┐  │
│  │ [IMAGE]      │  │ OUR APPROACH                      │  │
│  │ abstract     │  │ "Built for the long term"         │  │
│  │              │  │ [Feature Grid 2×2]                │  │
│  └──────────────┘  └────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  CTA / NEWSLETTER (dark bg)                                 │
│  "Get smarter about AI systems"                            │
│  [Email input] [Subscribe →]                               │
├─────────────────────────────────────────────────────────────┤
│  FOOTER (dark bg)                                           │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐             │
│  │ Links  │ │ Links  │ │ Links  │ │ Social │             │
│  └────────┘ └────────┘ └────────┘ └────────┘             │
│                                                             │
│              a r m o r y   ( 300px)               │
│                                                             │
│  © 2026 StaticLabs AI                                    [CTA] │
└─────────────────────────────────────────────────────────────┘
```

---

## Efecte și Texturi

### 1. Noise/Grain Texture
- Overlay pe fundalurile deschise (about, features light)
- Opacity: 3-5%
- PNG seamless sau CSS `noise()` filter

### 2. Dot Grid Pattern
- Puncte subtile pe fundal dark
- Culoare: `#333333` sau `rgba(255,255,255,0.05)`
- Dimensiune punct: 1-2px
- Gap: 20-40px

### 3. Grid Lines
- Linii verticale și orizontale subtile
- Culoare: `#1A1A1A` (dark) sau `#D0D0D0` (light)
- Grosime: 1px
- Folosite ca element decorativ structural

### 4. Gradient Text
- Headline-uri cu gradient de fade
- De la `#FFFFFF` la `#333333` (transparent)
- Implementare: `background-clip: text` sau mask

### 5. Gradient Backgrounds (Article Hero)
- Gradient complex: `#0A0A0F` → `#1A1A3E` → `#2D2B6E`
- Noise texture suprapusă
- Pattern de puncte/squares cu densitate variabilă

### 6. Halftone/Dithered Images
- Imagini cu efect halftone/dithered
- Monocrom, contrast ridicat
- Utilizate în blog/article heroes

### 7. Pixel Sorting / Glitch Art
- Efecte de distorsiune pe imaginile de case study
- Utilizate pentru hero-urile de proiect

### 8. Aurora / Light Streaks
- Linii orizontale luminoase subtile
- Utilizate în secțiunea CTA/newsletter
- Opacity redusă, efect de glow

---

## Responsive Breakpoints

| Breakpoint | Lățime | Layout Changes |
|------------|--------|----------------|
| **Desktop XL** | 1440px+ | Grid 12 coloane, split-screen layouts, sidebar vizibil |
| **Desktop** | 1024-1439px | Grid 12 coloane, padding redus |
| **Tablet** | 768-1023px | Grid 8 coloane, 2 coloane → 1 coloană, tab-uri scrollable |
| **Mobile** | < 768px | Grid 4 coloane, single column, hamburger menu, tab-uri vertical |

### Mobile Specific
- Hamburger menu: 2 linii
- Navigație overlay: fullscreen, link-uri 32-40px
- Feature cards: stivuite vertical
- Case studies: stivuite vertical, logo deasupra textului
- Statistics: stivuite vertical sau 2×2 grid
- Form contact: single column, harta deasupra sau ascunsă
- Footer: coloane stivuite

---

## Assets Necesare

### Imagini
- [ ] Hero background (abstract 3D geometric, blur, grayscale)
- [ ] Integration logos (Perplexity, OpenAI, Anthropic, etc.) - SVG
- [ ] Client logos (Thunder, Octomus, StatsParrot) - SVG
- [ ] Feature illustrations (4 iconițe isometrice line-art) - SVG
- [ ] Case study images (Octomus landscape, Thunder logo, StatsParrot logo)
- [ ] Product demo screenshot (workflow UI)
- [ ] About image (abstract digital rain/matrix)
- [ ] Article featured images (dark, abstract)
- [ ] Team photos (4 portrete, colorate)
- [ ] Noise/grain texture (PNG, seamless)

### Iconițe SVG
- [ ] Logo fulger
- [ ] Iconițe feature (lacăt, componente, ventilator, server)
- [ ] Iconițe tab (VR, chart, running, monitor)
- [ ] Iconițe approach (cub, ochi, fulger)
- [ ] Iconițe accordion (variate per item)
- [ ] Iconițe social (Twitter/X, LinkedIn, GitHub, etc.)
- [ ] Săgeți navigare (», →, ↗)
- [ ] Iconițe UI (hamburger, close, plus, download, search)
- [ ] Iconițe workflow (plic, creion, cod, avion, etc.)

---

## Checklist Implementare

### Faza 1: Fundație
- [ ] Setup proiect React + Vite + CSS pur (fără Tailwind, fără TypeScript)
- [ ] Configurare fonturi (Geist/Inter + Mono)
- [ ] Definire variabile CSS pentru culori
- [ ] Setup grid system (12 coloane)
- [ ] Componente base: Container, Grid, Section
- [ ] Componente UI: Logo, Hamburger, Button, Input

### Faza 2: Layout-uri
- [ ] Navbar (fixed, logo + hamburger)
- [ ] Nav Overlay (fullscreen menu)
- [ ] Footer (4 coloane + )
- [ ] Section wrapper (padding, spacing)

### Faza 3: Secțiuni Homepage
- [ ] Hero Section
- [ ] Integrations Section
- [ ] Features Section (4 carduri)
- [ ] Statistics Section
- [ ] Case Studies Section
- [ ] Product Demo Section
- [ ] Features Tabs Section
- [ ] Our Approach Section
- [ ] CTA/Newsletter Section

### Faza 4: Pagini Adiționale
- [ ] Blog Index Page
- [ ] Article Detail Page
- [ ] Case Study Detail Page
- [ ] About Page
- [ ] FAQ Page
- [ ] Contact Page

### Faza 5: Polish
- [ ] Animations (scroll, hover, transitions)
- [ ] Texturi și efecte (noise, grid, gradients)
- [ ] Responsive (mobile, tablet)
- [ ] Performance optimization
- [ ] Accessibility (contrast, focus states, ARIA)

---

## Note pentru Dezvoltatori

1. **Nu folosi culori de accent** - design-ul este strict monocrom
2. **Sharp corners by default** - border-radius 0 pentru majoritatea elementelor
3. **Monospace pentru elemente tehnice** - meta, labels, cod, descrieri proiecte
4. **Generous whitespace** - padding și gap-uri mari pentru feel premium
5. **Asymmetric layouts** - content ancorat stânga, nu centrat
6. **Grid lines vizibile** - element decorativ structural, nu doar ghidaje
7. **Iconițe SVG line-art** - toate iconițele sunt monocrom, line-art, vezi `assets/icons/README.md`
8. **Dark mode dominant** - majoritatea secțiunilor sunt dark, light doar pentru contrast
9. **Font loading** - asigură-te că fonturile se încarcă rapid (subset, preload)
10. **Image optimization** - imaginile sunt mari, folosește lazy loading și WebP

---

## Grid Lines

### Descriere
Linii de grid foarte subțiri vizibile în toate secțiunile cu background dark (`#0A0A0A`). Acestea sunt element decorativ structural, nu doar ghidaje de design.

### Stil
| Proprietate | Valoare |
|-------------|---------|
| Grosime | 1px |
| Culoare | `#1A1A1A` sau `#1E2530` (foarte subtil, dar vizibil) |
| Opacity | 100% (vizibil, nu transparent) |
| Z-index | 0 (sub content) |
| Pointer-events | none |

### Layout
- Grid de 12 coloane (estimat)
- Margine stânga: ~5-6% din viewport
- Margine dreapta: ~5-6% din viewport
- Linii verticale: repeating-linear-gradient sau div-uri absolute
- Linii orizontale: border-bottom pe rows/separatori

### Implementare CSS
```css
.grid-lines {
  position: relative;
}
.grid-lines::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0; left: 5%; right: 5%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent calc(100% / 12 - 1px),
    #1A1A1A calc(100% / 12 - 1px),
    #1A1A1A calc(100% / 12)
  );
  z-index: 0;
  pointer-events: none;
}
```

### Pagini cu Grid Lines
- Homepage (toate secțiunile dark bg)
- All Projects Page
- All Articles Page
- Case Study Detail Page
- About Page
- FAQ Page
- Contact Page (dropdown + static)

---

## Iconițe

### Stil General
- Format: SVG line-art
- Culoare: monocromă (`#FFFFFF` pe dark, `#000000` pe light)
- Grosime linie: 1.5-2px
- Dimensiuni: 20-24px (standard), 48-56px (container icons)
- Corner radius: 0 (sharp)

### Iconițe Necesare
| Iconiță | Utilizare | Dimensiune |
|---------|-----------|------------|
| Fulger/⚡ | Logo staticlabs | 20-24px |
| Hamburger (2 linii) | Navbar menu | 24px |
| X / ✕ | Close (nav overlay, contact dropdown) | 24px |
| Grid / ◫ | Button "Build A Workflow" | 20px |
| Săgeată ↗ | External link, project row | 24-32px |
| Săgeată → | Next project, carousel | 24px |
| Wave / 〰 | Section label decorative | 16-20px |
| Baze de date | Stats grid (funding) | 24px |
| @ / Spirală | Stats grid (engagement) | 24px |
| Grafic ↑ | Stats grid (growth) | 24px |
| Strângere mâini | Stats grid (partnership) | 24px |
| Plic | Workflow node (email) | 20px |
| Creion | Workflow node (edit) | 20px |
| Fulger | Workflow node (AI agent) | 20px |
| Code / </> | Workflow node (code) | 20px |
| Avion hârtie | Workflow node (telegram) | 20px |
| Săgeată condițională | Workflow node (if) | 20px |
| Play | Workflow node (send) | 20px |
| Gauge chart | About page capabilities | 80-120px |
| Social icons | Footer (X, LinkedIn, GitHub) | 20-24px |

### Instrucțiuni pentru Implementare
Vezi `assets/icons/README.md` pentru:
- Lista completă de iconițe SVG
- Dimensiuni și viewBox per iconiță
- Stiluri de stroke (width, linecap, linejoin)
- Variante hover/active
- Instrucțiuni de export din Figma/design tool

### Proprietăți SVG
```css
.icon {
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
```
