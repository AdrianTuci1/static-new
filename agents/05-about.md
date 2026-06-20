# Pagina: About

## Structură Completă

Pagina About conține următoarele secțiuni:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **About Hero Section** (light bg, "OUR MISSION")
3. **Stats Section** (light bg, 3 metrici)
4. **Image Gallery** (light bg, 3 imagini asimetrice)
5. **Features/Capabilities Section** (light bg, 4 piloni cu gauge charts)
6. **Our Team Section** (light bg, grid 2×2)
7. **Footer** (dark bg)

---

## About Hero Section

### Layout
- Full-width
- Background: `#F5F5F0` (warm off-white) cu noise texture
- Padding: 120-160px top, 80-120px bottom
- Grid: asimetric ~60/40 (text stânga / imagine dreapta)

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│  ┌────────────────────────────┐  ┌──────────────────────┐  │
│  │                            │  │                      │  │
│  │  //// OUR MISSION          │  │   [IMAGE]            │  │
│  │                            │  │   Dark bg zone        │  │
│  │  "Building on machine      │  │   with CTA buttons   │  │
│  │   intelligence"            │  │                      │  │
│  │                            │  │   [Get started]      │  │
│  │  We architect neural       │  │                      │  │
│  │  ecosystems that power     │  │                      │  │
│  │  modern enterprises...     │  │                      │  │
│  │                            │  │                      │  │
│  │  [Avatars]                 │  │                      │  │
│  │                            │  │                      │  │
│  │  8 yrs    3x    12 Core    │  │                      │  │
│  │  ████     ███   AI         │  │                      │  │
│  │  ████     ███   Frameworks │  │                      │  │
│  │                            │  │                      │  │
│  └────────────────────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Elemente Stânga
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// OUR MISSION" | 11-12px, uppercase, tracking 0.1em, `#4A4A4A` |
| Headline | "Building on machine intelligence" | 72-96px, weight 700, `#0A0A0A`, line-height 1.0 |
| Subheadline | "We architect neural ecosystems that power modern enterprises, combining deep research with production-ready engineering." | 18-20px, weight 400, `#4A4A4A`, line-height 1.6 |
| Avatar Stack | 5 avatare circulare, suprapuse | ~40-48px each, border 2px `#F5F5F0`, overlap -8px |
| Stats | "8 yrs", "3x", "12 Core AI Frameworks" | Vezi Stats Section |

### Elemente Dreapta (Image Zone)
| Element | Stil |
|---------|------|
| Imagine | Abstract, dark bg, monocromă sau colorată |
| CTA Button | "Get started", buton primary, poziționat pe imagine |
| Overlay | Gradient subtil pentru contrast buton |

---

## Stats Section (în Hero)

### Layout
- Inline, în partea de jos a coloanei stânga
- Grid: 3 coloane egale sau flex cu gap

### Elemente
| Stat | Valoare | Stil |
|------|---------|------|
| "8 yrs" | "8" + "yrs" | Număr: 48-64px, weight 700, `#0A0A0A`. Label: 14-16px, `#4A4A4A` |
| "3x" | "3" + "x" | Număr: 48-64px, weight 700, `#0A0A0A`. Label: 14-16px, `#4A4A4A` |
| "12 Core AI Frameworks" | "12" + "Core AI Frameworks" | Număr: 48-64px, weight 700, `#0A0A0A`. Label: 14-16px, `#4A4A4A` |

### Layout Stats
```
┌─────────────────┬─────────────────┬─────────────────────────┐
│  8              │  3              │  12                     │
│  yrs            │  x              │  Core AI Frameworks       │
│                 │                 │                         │
│  ████           │  ███            │  ████                   │
│  ████           │  ███            │  ████                   │
└─────────────────┴─────────────────┴─────────────────────────┘
```

- Separator: 1px vertical `#D0D0D0` (optional)
- Gap: 40-60px

---

## Image Gallery

### Layout
- Full-width
- Background: `#F5F5F0`
- Padding: 80-120px vertical
- Grid: 3 coloane asimetrice (proporții ~1 : 2.5 : 1.2)

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────┐  ┌────────────────────────┐  ┌──────────┐          │
│  │    │  │                        │  │          │          │
│  │IMG │  │         IMG            │  │   IMG    │          │
│  │tall│  │       wide             │  │  medium  │          │
│  │    │  │                        │  │          │          │
│  └────┘  └────────────────────────┘  └──────────┘          │
└─────────────────────────────────────────────────────────────┘
```

- Coloana 1: ~15-20% lățime, imagine verticală
- Coloana 2: ~50-55% lățime, imagine wide
- Coloana 3: ~25-30% lățime, imagine medium
- Gap: 16-24px
- Border-radius: 0 (sharp corners)

### Imagini
- Stil: abstract, tech, monocrom sau colorat subtil
- Aspect ratios: variate (portrait, landscape, square)
- Object-fit: cover

---

## Features/Capabilities Section

### Layout
- Full-width
- Background: `#E8E8E8` cu grain texture
- Padding: 80-120px vertical
- Header: centrat, ~60% lățime
- Grid: 4 coloane egale

### Header
| Element | Conținut | Stil |
|---------|----------|------|
| Intro | "We combine deep research with production-ready engineering to deliver systems that think, learn, and scale." | 16-18px, weight 400, `#4A4A4A`, centrat |

### Grid Features
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  //01    │  │  //02    │  │  //03    │  │  //04    │  │
│  │          │  │          │  │          │  │          │  │
│  │  [GAUGE] │  │  [GAUGE] │  │  [GAUGE] │  │  [GAUGE] │  │
│  │   95%    │  │   90%    │  │   92%    │  │  100%    │  │
│  │          │  │          │  │          │  │          │  │
│  │  Neural  │  │  Agent   │  │  Data    │  │  Cloud   │  │
│  │  Engine  │  │  Core    │  │  Mining  │  │  Scale   │  │
│  │          │  │          │  │          │  │          │  │
│  │  We build│  │  Autonomous│  │  Secure │  │  Elastic │  │
│  │  custom..│  │  agents...│  │  pipelines│  │  infra...│  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Elemente per Feature
| Element | Stil |
|---------|------|
| Număr | "//01", "//02", etc. Monospace, 14-16px, `#4A4A4A` |
| Gauge Chart | Radial progress, 2-3px stroke, `#1A1A1A` active, `#B0B0B0` inactive |
| Procent | 20-24px, weight 500, `#1A1A1A` |
| Titlu | Monospace, 18-20px, weight 500, `#1A1A1A` |
| Descriere | Sans-serif, 14-15px, weight 400, `#4A4A4A`, line-height 1.6 |

### Feature Items
1. **//01 - Neural Engine - 95%** - "We build custom neural architectures tailored to your data and domain."
2. **//02 - Agent Core - 90%** - "Autonomous agents that reason, plan, and execute complex workflows."
3. **//03 - Data Mining - 92%** - "Secure pipelines that extract, transform, and load high-fidelity data."
4. **//04 - Cloud Scale - 100%** - "Elastic infrastructure that scales from prototype to enterprise."

### Gauge Chart Specs
- Tip: radial/circular progress
- Diameter: ~80-120px
- Stroke width: 2-3px
- Active color: `#1A1A1A`
- Inactive color: `#B0B0B0`
- Background: transparent
- Text center: procent, 20-24px, weight 500

---

## Our Team Section

### Layout
- Full-width
- Background: `#F5F5F0` cu noise texture
- Padding: 80-120px vertical
- Grid: 2×2 asimetric

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────┐  ┌────────────────────────────┐  │
│  │  //// OUR TEAM     │  │                            │  │
│  │                    │  │  [PHOTO 1]                 │  │
│  │  "The people       │  │  Blue bg                   │  │
│  │   behind the       │  │                            │  │
│  │   neural networks" │  │                            │  │
│  │                    │  ├────────────────────────────┤  │
│  │  We are a team of  │  │                            │  │
│  │  researchers,      │  │  [PHOTO 2]                 │  │
│  │  engineers, and    │  │  Coral bg                  │  │
│  │  designers...      │  │                            │  │
│  │                    │  │                            │  │
│  │  [Apply Now →]     │  ├────────────────────────────┤  │
│  │                    │  │                            │  │
│  └────────────────────┘  │  [PHOTO 3]                 │  │
│                          │  Teal bg                   │  │
│  ┌────────────────────┐  │                            │  │
│  │  [PHOTO 4]           │  │                            │  │
│  │  Amber bg            │  │                            │  │
│  │                      │  └────────────────────────────┘  │
│  │                      │                                │
│  └────────────────────┘                                │
└─────────────────────────────────────────────────────────────┘
```

- Zonă text: stânga-sus, ~40% din grid
- Fotografii: 4 portrete, grid 2×2 asimetric
- Gap: 0px (fotografiile ating liniile grid-ului)
- Border-radius: 0 (sharp corners)

### Elemente Text
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// OUR TEAM" | 11-12px, uppercase, tracking 0.1em, `#4A4A4A` |
| Headline | "The people behind the neural networks" | 56-72px, weight 400, `#0A0A0A`, line-height 1.1 |
| Descriere | "We are a team of researchers, engineers, and designers building the future of AI infrastructure." | 16-18px, weight 400, `#4A4A4A`, line-height 1.6 |
| CTA Button | "Apply Now →" | Buton primary, icon + text |

### Fotografii
| Foto | Culoare BG | Stil |
|------|-----------|------|
| 1 | Blue `#4A7BA7` | Portret, object-fit cover |
| 2 | Coral `#D66B7A` | Portret, object-fit cover |
| 3 | Teal `#3A9B8F` | Portret, object-fit cover |
| 4 | Amber `#E5A84A` | Portret, object-fit cover |

- Dimensiuni: variate, grid asimetric
- Aspect ratio: portrait (~3:4) sau square (~1:1)
- Border-radius: 0
- Object-fit: cover

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Hero: 60/40 split
- Gallery: 3 coloane asimetrice
- Features: 4 coloane
- Team: 2×2 grid asimetric

### Tablet (768-1023px)
- Hero: single column (imagine deasupra sau dedesubt)
- Gallery: 2 coloane (1 wide, 2 stacked)
- Features: 2 coloane (2×2)
- Team: 2×2 grid simetric

### Mobile (< 768px)
- Hero: single column, imagine full-width
- Gallery: single column, imagini full-width
- Features: single column, stivuite
- Team: single column, fotografii full-width
- Stats: single column sau 2×2 grid

---

## Checklist About Page

- [ ] Navbar (fixed, transparent)
- [ ] About Hero Section (split-screen, OUR MISSION)
- [ ] Headline "Building on machine intelligence"
- [ ] Subheadline descriptiv
- [ ] Avatar stack (5 avatare)
- [ ] Stats (8 yrs, 3x, 12 Core AI Frameworks)
- [ ] Image zone (dark bg, CTA button)
- [ ] Image Gallery (3 imagini asimetrice)
- [ ] Features/Capabilities Section (4 piloni)
- [ ] Gauge charts (radial progress)
- [ ] Feature numbers (//01 - //04)
- [ ] Our Team Section (2×2 grid)
- [ ] Team text (label, headline, desc, CTA)
- [ ] Team photos (4 portrete, color bg)
- [ ] Footer
- [ ] s ( + )

---

## Avatar Stack Component

### Layout
- Horizontal, avatare suprapuse
- Direction: left to right
- Overlap: -8px (negative margin)

### Stil
- Size: 40-48px diameter
- Border: 2px solid `#F5F5F0` (matching bg)
- Border-radius: 50% (circular)
- Object-fit: cover
- Z-index: incremental (left to right)

### Comportament
- Hover: translateX(-4px) per avatar (expand on hover)
- Transition: 200ms ease-out
- Optional: tooltip with name on hover

---

## Gauge Chart Component

### SVG Structure
```svg
<svg viewBox="0 0 100 100">
  <!-- Background circle -->
  <circle cx="50" cy="50" r="40" 
          fill="none" 
          stroke="#B0B0B0" 
          stroke-width="3"/>
  
  <!-- Progress circle -->
  <circle cx="50" cy="50" r="40" 
          fill="none" 
          stroke="#1A1A1A" 
          stroke-width="3"
          stroke-dasharray="251.2"
          stroke-dashoffset="12.56" 
          transform="rotate(-90 50 50)"/>
  
  <!-- Text -->
  <text x="50" y="50" 
        text-anchor="middle" 
        dominant-baseline="central"
        font-size="20"
        font-weight="500"
        fill="#1A1A1A">95%</text>
</svg>
```

### Calcul
- Circumferență: 2 * π * 40 ≈ 251.2
- Offset: 251.2 * (1 - procent / 100)
- Ex: 95% → offset = 251.2 * 0.05 = 12.56

### Stil
- Diameter: 80-120px
- Stroke width: 2-3px
- Active color: `#1A1A1A`
- Inactive color: `#B0B0B0`
- Text: 20-24px, weight 500, `#1A1A1A`
- Animation: stroke-dashoffset transition 1s ease-out

---

## Team Photo Grid

### Layout
- CSS Grid: 2×2 asimetric
- Gap: 0px (fotografiile ating liniile)
- Border-radius: 0

### Grid 
```css
.team-grid {
  display: grid;
  grid--columns: 1fr 1.5fr;
  grid--rows: 1fr 1fr;
  gap: 0;
}

.team-photo-1 { grid-column: 2; grid-row: 1; }
.team-photo-2 { grid-column: 2; grid-row: 2; }
.team-photo-3 { grid-column: 2; grid-row: 3; }
.team-photo-4 { grid-column: 1; grid-row: 2; }
.team-text { grid-column: 1; grid-row: 1; }
```

### Stil per Foto
- Background: color solid (blue, coral, teal, amber)
- Image: object-fit cover, 100% width/height
- Border-radius: 0
- Optional: overlay gradient subtil

### Comportament
- Hover: scale(1.02) sau brightness(1.1)
- Transition: 300ms ease-out
- Optional: name/role overlay on hover
