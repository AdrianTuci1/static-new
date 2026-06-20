# Pagina: All Projects

## Structură Completă

Pagina de listare a tuturor proiectelor conține:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Hero Section** (dark bg, "CASE STUDIES")
3. **Project List** (dark bg, lista proiectelor)
4. **Footer** (dark bg)

**Notă:** Grid lines foarte subțiri (1px, `#1A1A1A`) sunt vizibile în toate secțiunile dark bg. Vezi `00-design-system.md` - Grid Lines.

---

## Hero Section

### Layout
- Full-width, ~60-80vh
- Background: `#0A0A0A` sau `#0D1117` (very dark navy/black)
- Content: centrat, începe la ~25% din lățime
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
│              〰 CASE STUDIES                                 │
│                                                             │
│           AI systems we've                                  │
│           designed and                                      │
│           deployed                                          │
│                                                             │
│     Explore real builds across automation, AI agents,       │
│     and custom workflows, designed to solve specific        │
│     problems and deliver measurable results.                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Section Label | "CASE STUDIES" cu icon wave/squiggle (〰) | 12-14px, uppercase, weight 500, letter-spacing larg (~0.1em), `#FFFFFF` |
| Headline | "AI systems we've designed and deployed" | 72-96px, weight 700, `#FFFFFF`, line-height ~0.9-1.0, tight leading, stacked |
| Subheadline | "Explore real builds across automation, AI agents, and custom workflows, designed to solve specific problems and deliver measurable results." | 16-18px, weight 400, `#8B92A5` sau `#9CA3AF`, line-height ~1.5, max-width ~700-800px |

### Tipografie
- Font: sans-serif geometric (Inter, Space Grotesk, sau similar)
- Headline: display size, weight 700, tight line-height
- Section label: uppercase, tracked, cu icon wave decorative

### Spațiere
- Header padding: ~24-32px top
- Hero top padding: ~80-120px
- Hero bottom padding: ~60-80px
- Gap label → headline: ~16-20px
- Gap headline → subheadline: ~24-32px
- Subheadline max-width: ~700-800px

---

## Project List

### Layout
- Full-width
- Background: `#0A0A0A` sau `#0D1117`
- Padding: 0 top (continuă din hero), 80-120px bottom
- Grid lines: linii orizontale subțiri între proiecte (1px, `#1A1A1A`)

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  /2026    [Octomus logo]      Octomus AI Assistant        ↗ │
│                               Revolutionizing...            │
├─────────────────────────────────────────────────────────────┤
│  /2026    [Thunder logo]      Thunder Workflow Engine     ↗ │
│                               Automated workflow...         │
├─────────────────────────────────────────────────────────────┤
│  /2026    [StatsParrot logo]  StatsParrot Analytics       ↗ │
│                               Real-time analytics...        │
├─────────────────────────────────────────────────────────────┤
│  /2026    [PixTooth logo]     PixTooth Image Processing   ↗ │
│                               AI-powered image...           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Project Row Component

#### Layout per Row
- Full-width, border-bottom: 1px solid `#1A1A1A`
- Padding: 32-40px vertical
- Grid intern: 4 coloane (date | logo | title/desc | arrow)

#### Elemente per Row
| Element | Stil |
|---------|------|
| An | "/2026", 14px, weight 400, `#8B92A5` sau `#9CA3AF`, monospace sau sans |
| Logo Client | Logo proiect, ~80-120px width, brand font sau SVG |
| Titlu Proiect | 24-32px, weight 600-700, `#FFFFFF` |
| Descriere | 14-16px, weight 400, `#8B92A5` sau `#9CA3AF`, max-width ~400-500px |
| Săgeată | ↗ (diagonal arrow up-right), 24-32px, `#FFFFFF`, hover: translate |

#### Hover State
- Background: `#0F0F0F` sau `#111827` (subtil)
- Săgeată: translateX(4px) translateY(-4px)
- Transition: 300ms ease-out
- Cursor: pointer

### Proiecte

1. **Octomus AI Assistant**
   - An: /2026
   - Logo: "octomus" (text logo, stilizat)
   - Descriere: "Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools."
   - Link: /projects/octomus

2. **Thunder Workflow Engine**
   - An: /2026
   - Logo: "thunder" (text logo, stilizat)
   - Descriere: "Automated workflow orchestration for enterprise teams with real-time collaboration and AI-powered decision support."
   - Link: /projects/thunder

3. **StatsParrot Analytics**
   - An: /2026
   - Logo: "statsparrot" (text logo, stilizat)
   - Descriere: "Real-time analytics dashboard with intelligent alerting and automated reporting for data-driven teams."
   - Link: /projects/statsparrot

4. **PixTooth Image Processing**
   - An: /2026
   - Logo: "pixtooth" (text logo, stilizat)
   - Descriere: "AI-powered image processing pipeline for creative workflows with automated enhancement and batch processing."
   - Link: /projects/pixtooth

### Spațiere
- Gap între rânduri: 0 (border-separated)
- Padding per rând: 32-40px vertical
- Padding orizontal: 48-64px (container)
- Gap logo → titlu: ~16-24px
- Gap titlu → descriere: ~8-12px

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Headline: 72-96px
- Project rows: 4 coloane (date | logo | title/desc | arrow)
- Grid lines: vizibile

### Tablet (768-1023px)
- Headline: 48-56px
- Project rows: 2 coloane (date+logo | title/desc+arrow)
- Grid lines: vizibile

### Mobile (< 768px)
- Headline: 32-40px
- Project rows: single column (stacked)
- Grid lines: vizibile
- Padding: 20-24px

---

## Checklist All Projects Page

- [ ] Navbar (fixed, transparent)
- [ ] Hero Section (dark bg, "CASE STUDIES")
- [ ] Section Label ("CASE STUDIES" cu icon wave)
- [ ] Headline ("AI systems we've designed and deployed")
- [ ] Subheadline (descriere)
- [ ] Project List (4 proiecte)
- [ ] Project Row: Octomus AI Assistant
- [ ] Project Row: Thunder Workflow Engine
- [ ] Project Row: StatsParrot Analytics
- [ ] Project Row: PixTooth Image Processing
- [ ] Grid lines (vertical + horizontal)
- [ ] Footer
- [ ] Hover states (săgeată translate, bg subtil)

---

## Project Row Component

### Layout
- Full-width, border-bottom: 1px solid `#1A1A1A`
- Grid: 4 coloane (auto | auto | 1fr | auto)
- Padding: 32-40px vertical, 48-64px orizontal
- Align items: center

### Stil
| Element | Stil |
|---------|------|
| An | 14px, weight 400, `#8B92A5`, monospace |
| Logo | ~80-120px width, object-fit: contain |
| Titlu | 24-32px, weight 600-700, `#FFFFFF` |
| Descriere | 14-16px, weight 400, `#8B92A5`, max-width 400-500px |
| Săgeată | ↗, 24-32px, `#FFFFFF` |

### Hover
- Background: `#0F0F0F`
- Săgeată: translate(4px, -4px)
- Transition: all 300ms ease-out
- Cursor: pointer

---

## Grid Lines (All Projects)

### Layout
- Container: full-width, position relative
- Pseudo-elements: ::before, ::after pentru linii verticale
- Sau: div-uri absolute positioned

### Stil
- Linii verticale: 1px solid `#1A1A1A` sau `#1E2530`
- Linii orizontale: 1px solid `#1A1A1A` (border-bottom pe rows)
- Opacity: 100% (vizibile, nu doar subtile)
- Z-index: 0 (sub content)

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
| 03.55.36 | All Projects Hero | "CASE STUDIES" + headline + subheadline |
| 03.55.36 | Project List | 2 rânduri vizibile (Octomus/Thunder în original) |
