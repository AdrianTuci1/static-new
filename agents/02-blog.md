# Pagina: Blog / Articles

## Structură Completă

Pagina blog conține următoarele secțiuni:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Blog Hero Section** (dark bg)
3. **Featured Articles Grid** (asimetric 2/3 + 1/3)
4. **Articles List** (standard cards)
5. **Footer** (dark bg)

---

## Blog Hero Section

### Layout
- Full-width, ~60-80vh
- Background: `#0A0A0A` cu noise texture și grid lines
- Content: aliniat stânga, ~50-60% din lățime
- Padding: 120-160px top, 60-80px bottom

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│  //// ALL ARTICLES                                          │
│                                                             │
│  "Explore the latest in neural                             │
│   systems, agent architecture,                             │
│   and enterprise AI."                                       │
│                                                             │
│  ┌────────┐  ┌────────┐                                    │
│  │IMG     │  │IMG     │  ← 2 imagini halftone/dithered    │
│  │halftone│  │halftone│                                    │
│  └────────┘  └────────┘                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// ALL ARTICLES" | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Headline | "Explore the latest in neural systems, agent architecture, and enterprise AI." | 64-80px, weight 400, `#FFFFFF`, line-height 1.1 |
| Imagini decorative | 2 imagini halftone/dithered, monocrome | ~200-280px width, poziționate în dreapta-jos |

### Imagini Halftone
- Efect: dithered/halftone, monocrom
- Stil: abstract, tech, noise
- Dimensiune: ~200-280px width
- Poziție: absolute, bottom-right, overlapping
- Opacity: 60-80%

---

## Featured Articles Grid

### Layout
- Full-width
- Background: `#F5F5F0` (warm off-white) sau `#E8E8E8`
- Padding: 80-120px vertical
- Grid asimetric: 2/3 + 1/3

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────┐  ┌──────────────────────┐  │
│  │                            │  │                      │  │
│  │  FEATURED ARTICLE         │  │  ARTICLE 2           │  │
│  │  (full-bleed image)       │  │  (thumbnail + text)  │  │
│  │                            │  │                      │  │
│  │  Title + Meta             │  │  Title + Meta        │  │
│  │                            │  └──────────────────────┘  │
│  │                            │  ┌──────────────────────┐  │
│  │                            │  │                      │  │
│  │                            │  │  ARTICLE 3           │  │
│  │                            │  │  (image-only card)   │  │
│  │                            │  │                      │  │
│  └────────────────────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- Coloana stângă: ~60-65% lățime (featured article)
- Coloana dreapta: ~35-40% lățime (2 articles stacked)
- Gap: 24-32px

### Featured Article Card (Left)
| Element | Stil |
|---------|------|
| Imagine | Full-bleed, aspect ratio ~16:10 sau ~4:3, border-radius 0 |
| Overlay | Gradient întunecat jos (pentru text) |
| Titlu | 28-32px, weight 500, `#FFFFFF` |
| Meta | Monospace, 12-14px, uppercase, `#A0A0A0` |

### Standard Article Card (Right, Top)
| Element | Stil |
|---------|------|
| Thumbnail | ~120-160px width, aspect ratio 1:1 sau 4:3, border-radius 0 |
| Titlu | 18-20px, weight 500, `#0A0A0A` |
| Meta | Monospace, 12px, uppercase, `#666666` |
| Layout | Horizontal (thumbnail left, text right) |

### Image-Only Article Card (Right, Bottom)
| Element | Stil |
|---------|------|
| Imagine | Full-bleed în card, aspect ratio ~16:9, border-radius 0 |
| Overlay | Gradient subtil |
| Titlu | 18-20px, weight 500, `#FFFFFF` (pe imagine) |
| Layout | Vertical, imagine dominantă |

### Meta Format
- Pattern: "CATEGORIE // DATE // READ TIME"
- Ex: "NEURAL OPS // JAN 15, 2026 // 8 MIN READ"
- Font: monospace, 12px, uppercase, tracking 0.05em

---

## Articles List

### Layout
- Full-width
- Background: `#F5F5F0` sau `#E8E8E8`
- Padding: 40-60px vertical (continuare după featured)
- Grid: single column sau 2 coloane

### Article Row
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────┐  ┌─────────────────────────────────────────┐  │
│  │        │  │  NEURAL OPS // JAN 15, 2026            │  │
│  │  IMG   │  │                                         │  │
│  │  4:3   │  │  "What It Takes to Turn AI Into         │  │
│  │        │  │   a Business Asset"                     │  │
│  │        │  │                                         │  │
│  │        │  │  We explore the infrastructure...       │  │
│  └────────┘  └─────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌────────┐  ┌─────────────────────────────────────────┐  │
│  │        │  │  AGENT DESIGN // FEB 2, 2026           │  │
│  │  IMG   │  │                                         │  │
│  │  4:3   │  │  "Building Autonomous Agents            │  │
│  │        │  │   That Scale"                           │  │
│  │        │  │                                         │  │
│  │        │  │  The architecture behind...             │  │
│  └────────┘  └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- Layout: horizontal (thumbnail left ~30%, text right ~70%)
- Separator: 1px solid `#D0D0D0` între rânduri
- Padding per rând: 40-60px vertical

### Elemente per Rând
| Element | Stil |
|---------|------|
| Thumbnail | ~200-280px width, aspect ratio 4:3, border-radius 0 |
| Categorie | Monospace, 11-12px, uppercase, tracking 0.1em, `#666666` |
| Titlu | 24-28px, weight 500, `#0A0A0A`, line-height 1.2 |
| Excerpt | 16-18px, weight 400, `#4A4A4A`, line-height 1.6, max 2-3 linii |
| Meta | Monospace, 12px, uppercase, `#666666` |

---

## CTA Banner (Optional)

### Layout
- Full-width, înainte de footer
- Background: `#0A0A0A`
- Padding: 80-120px vertical
- Content: centrat sau stânga-aliniat

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Headline | "Ready to build your AI workflow?" | 48-56px, weight 400, `#FFFFFF` |
| Button | "Get Started →" | Buton primary, icon + text |

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Featured grid: 2/3 + 1/3
- Articles list: 2 coloane sau single column wide
- Thumbnail: 200-280px

### Tablet (768-1023px)
- Featured grid: single column (featured full-width, 2 articles below)
- Articles list: single column
- Thumbnail: 160-200px

### Mobile (< 768px)
- Featured grid: single column, toate cardurile full-width
- Articles list: single column
- Thumbnail: full-width, aspect ratio 16:9, deasupra textului
- Meta: stacked vertical

---

## Checklist Blog Page

- [ ] Navbar (fixed, transparent)
- [ ] Blog Hero Section (dark bg, headline + halftone images)
- [ ] Featured Articles Grid (asimetric 2/3 + 1/3)
- [ ] Featured Article Card (full-bleed image + overlay)
- [ ] Standard Article Card (thumbnail + text)
- [ ] Image-Only Article Card (image dominant)
- [ ] Articles List (horizontal rows)
- [ ] Article Row Component (thumbnail + meta + title + excerpt)
- [ ] CTA Banner (optional)
- [ ] Footer
- [ ] s ( + )

---

## Article Card Variants

### Variant 1: Featured (Large)
- Full-bleed image
- Gradient overlay bottom
- Title + meta pe imagine
- Aspect ratio: 16:10 sau 4:3
- Border-radius: 0

### Variant 2: Standard (Horizontal)
- Thumbnail left (~30%)
- Text right (~70%)
- Title + excerpt + meta
- Aspect ratio thumbnail: 4:3 sau 1:1
- Border-radius: 0

### Variant 3: Compact (Vertical)
- Image top
- Text bottom
- Title + meta
- Aspect ratio: 16:9
- Border-radius: 0

### Variant 4: Image-Only
- Full-bleed image
- Title overlay on image
- Minimal meta
- Aspect ratio: 16:9
- Border-radius: 0

---

## Meta Component

### Format
```
[CATEGORIE] // [DATE] // [READ TIME]
```

### Stil
- Font: monospace, 12px, uppercase
- Tracking: 0.05em
- Culoare: `#666666` (light bg) sau `#A0A0A0` (dark bg)
- Separator: "//" cu spațiere

### Exemple
- "NEURAL OPS // JAN 15, 2026 // 8 MIN READ"
- "AGENT DESIGN // FEB 2, 2026 // 12 MIN READ"
- "CASE STUDY // MAR 10, 2026 // 15 MIN READ"

---

### Stil
- Background: `#000000`
- Text: `#FFFFFF`
- Font: 11-12px, uppercase, tracking 0.1em
- Padding: 4-8px vertical, 8-12px horizontal
- Border-radius: 0 (sharp corners)
- Position: absolute, top-left of image (for featured cards)

---

## Pagination (Optional)

### Stil
- Layout: centered, horizontal
- Items: page numbers + prev/next arrows
- Font: 14-16px, weight 500
- Active: `#000000` bg, `#FFFFFF` text
- Inactive: `#E8E8E8` bg, `#000000` text
- Border-radius: 0
- Size: 40-48px square
