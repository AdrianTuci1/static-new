# Pagina: All Articles

## Structură Completă

Pagina de listare a tuturor articolelor conține:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Hero Section** (dark bg, "ALL ARTICLES")
3. **Article Grid** (dark bg, carduri articole)
4. **Footer** (dark bg)

**Notă:** Grid lines foarte subțiri (1px, `#1A1A1A`) sunt vizibile în toate secțiunile dark bg. Vezi `00-design-system.md` - Grid Lines.

---

## Hero Section

### Layout
- Full-width, ~60-80vh
- Background: `#0A0A0A` sau `#0D1117` (very dark navy/black)
- Content: aliniat stânga, începe la ~25% din lățime
- Padding: 100-140px top, 60-80px bottom

### Grid Lines
- Linii verticale subțiri vizibile: `#1A1A1A` sau `#1E2530`
- Grid de 12 coloane (estimat)
- Margine stânga: ~5-6% din viewport
- Margine dreapta: ~5-6% din viewport

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│              ≡ ALL ARTICLES                                 │
│                                                             │
│           Ideas shaping the future                          │
│           of AI systems                                     │
│                                                             │
│     Explore practical insights on AI automation,           │
│     intelligent workflows, product strategy, and the         │
│     systems helping modern teams move faster.               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Section Label | "ALL ARTICLES" cu icon hamburger abstract (3 linii înclinate) | 12-14px, uppercase, weight 500, letter-spacing larg (~0.1em), `#FFFFFF` |
| Headline | "Ideas shaping the future of AI systems" | 56-72px (desktop), weight 400 sau 300, `#FFFFFF`, line-height ~1.1 |
| Subheadline | "Explore practical insights on AI automation, intelligent workflows, product strategy, and the systems helping modern teams move faster." | 16-18px, weight 400, `#B0B0B0` sau `#A0A0A0`, line-height ~1.6, max-width ~700-800px |

### Tipografie
- Font: sans-serif modern, geometric (Inter, Satoshi, Geist, sau similar)
- Headline: display size, weight 400, line-height tight
- Section label: uppercase, tracked, cu icon abstract (3 linii înclinate paralele, stil hamburger)

### Spațiere
- Header padding: ~24-32px top
- Hero top padding: ~80-120px
- Hero bottom padding: ~60-80px
- Gap label → headline: ~16-20px
- Gap headline → subheadline: ~24-32px
- Subheadline max-width: ~700-800px

---

## Article Grid

### Layout
- Full-width
- Background: `#0A0A0A` sau `#0D1117`
- Padding: 0 top (continuă din hero), 80-120px bottom
- Grid: 2 coloane (desktop), gap ~24-32px
- Container: max-width ~1400px, centrat, padding lateral 48-64px

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐ │
│  │                     │  │                             │ │
│  │   [ARTICLE CARD 1]  │  │    [ARTICLE CARD 2]         │ │
│  │   (imagine abstractă)│  │   (imagine abstractă)       │ │
│  │   tonuri gri         │  │   tonuri gri                │ │
│  │   textură granulară  │  │   textură granulară         │ │
│  │                     │  │                             │ │
│  └─────────────────────┘  └─────────────────────────────┘ │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐ │
│  │   [ARTICLE CARD 3]  │  │    [ARTICLE CARD 4]         │ │
│  │                     │  │                             │ │
│  └─────────────────────┘  └─────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Article Card Component

#### Layout
- Aspect ratio: ~16:9 sau ~4:3
- Border-radius: 0 (sharp corners, stil brutalist)
- Overflow: hidden
- Position: relative

#### Imagine
- Full-bleed în card
- Object-fit: cover
- Tonuri: gri-monocrom, abstractă, generativă/AI art
- Textură: granulară, dot pattern, noise
- Gradient overlay: `#0A0A0A` (opac 60-80%) → transparent (sus)

#### Text Overlay (opțional, la hover sau permanent)
| Element | Stil |
|---------|------|
| Categorie | 11-12px, uppercase, monospace, `#A0A0A0` |
| Titlu | 20-24px, weight 500, `#FFFFFF` |
| Data | 12-14px, weight 400, `#808080` |

#### Hover State
- Imagine: scale(1.02)
- Overlay: opacitate crește
- Text: devine vizibil (dacă era hidden)
- Transition: 400ms ease-out
- Cursor: pointer

### Spațiere
- Gap între carduri: ~24-32px
- Padding container: 48-64px orizontal
- Padding bottom: 80-120px

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Headline: 56-72px
- Article grid: 2 coloane
- Card aspect ratio: 16:9
- Grid lines: vizibile

### Tablet (768-1023px)
- Headline: 40-48px
- Article grid: 2 coloane (mai mici)
- Card aspect ratio: 4:3
- Grid lines: vizibile

### Mobile (< 768px)
- Headline: 32-40px
- Article grid: 1 coloană
- Card aspect ratio: 16:9
- Grid lines: vizibile
- Padding: 20-24px

---

## Checklist All Articles Page

- [ ] Navbar (fixed, transparent)
- [ ] Hero Section (dark bg, "ALL ARTICLES")
- [ ] Section Label ("ALL ARTICLES" cu icon abstract)
- [ ] Headline ("Ideas shaping the future of AI systems")
- [ ] Subheadline (descriere)
- [ ] Article Grid (2 coloane)
- [ ] Article Cards (imagini abstracte, gri-monocrom)
- [ ] Card hover states (scale, overlay, text)
- [ ] Grid lines (vertical + horizontal)
- [ ] Footer

---

## Article Card Component

### Layout
- Width: 100% în grid column
- Aspect ratio: 16:9 (desktop), 4:3 (tablet), 16:9 (mobile)
- Border-radius: 0
- Overflow: hidden
- Position: relative

### Stil
| Element | Stil |
|---------|------|
| Background | `#0A0A0A` |
| Imagine | Object-fit: cover, 100% width, 100% height |
| Overlay | Gradient `#0A0A0A` (opac 60-80%) → transparent (sus) |
| Categorie | 11-12px, uppercase, monospace, letter-spacing 0.1em, `#A0A0A0` |
| Titlu | 20-24px, weight 500, `#FFFFFF`, line-height 1.3 |
| Data | 12-14px, weight 400, `#808080` |

### Hover
- Imagine: transform scale(1.02)
- Overlay: background-opacity crește la 80-90%
- Text: opacity 0 → 1 (dacă era hidden)
- Transition: all 400ms ease-out
- Cursor: pointer

---

## Grid Lines (All Articles)

### Layout
- Container: full-width, position relative
- Pseudo-elements: ::before, ::after pentru linii verticale
- Sau: div-uri absolute positioned

### Stil
- Linii verticale: 1px solid `#1A1A1A` sau `#1E2530`
- Opacity: 100% (vizibile, nu doar subtile)
- Z-index: 0 (sub content)
- Pointer-events: none

### Implementare
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

---

## Referință Imagine

| Imagine | Secțiune | Descriere |
|---------|----------|-----------|
| 03.52.58 | All Articles Hero | "ALL ARTICLES" + headline + subheadline + 2 carduri |
| 03.52.58 | Article Grid | 2 carduri mari cu imagini abstracte gri-monocrom |
