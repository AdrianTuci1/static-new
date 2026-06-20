# Componente Reutilizabile

## Index Componente

1. [Navbar](#navbar)
2. [Nav Overlay](#nav-overlay)
3. [Footer](#footer)
4. [Section Label](#section-label)
5. [Feature Card](#feature-card)
6. [Statistic Card](#statistic-card)
7. [Case Study Row](#case-study-row)
8. [Article Card](#article-card)
9. [Button Primary](#button-primary)
10. [Button Split](#button-split)
11. [Input Field](#input-field)
12. [Select Dropdown](#select-dropdown)
13. [Textarea](#textarea)
14. [Tab Navigation](#tab-navigation)
15. [Accordion](#accordion)
16. [Gauge Chart](#gauge-chart)
19. [Avatar Stack](#avatar-stack)
20. [Social Icon](#social-icon)
21. [](#)
22. [Grid Lines](#grid-lines)
23. [Noise Texture](#noise-texture)
24. [Gradient Text](#gradient-text)
25. [Workflow Node](#workflow-node)

---

## Navbar

### Layout
- Position: fixed
- Top: 0, Left: 0, Right: 0
- Z-index: 50
- Height: 64-80px
- Padding: 32-40px horizontal
- Background: transparent (default), solid on scroll (optional)

### Elemente
| Element | Stil |
|---------|------|
| Logo | Stânga, "staticlabs" + icon fulger, 20-24px, bold, alb/negru |
| Hamburger | Dreapta, 2 linii, 24px wide, 2px grosime, 6-8px gap |

### Logo
```
[⚡] staticlabs
```
- Icon: fulger SVG, 20-24px
- Text: "staticlabs", lowercase, sans-serif, 20-24px, weight 700
- Color: `#FFFFFF` (dark bg) sau `#000000` (light bg)
- Letter-spacing: -0.02em

### Hamburger
```
━
━
```
- 2 linii orizontale (nu 3)
- Width: 24px
- Height per linie: 2px
- Gap: 6-8px
- Color: `#FFFFFF` (dark bg) sau `#000000` (light bg)
- Border-radius: 0 (sharp)

### Comportament
- Scroll: optional add background blur/solid
- Hamburger click: open Nav Overlay
- Logo click: navigate to homepage

---

## Nav Overlay

### Layout
- Position: fixed
- Top: 0, Left: 0
- Width: 100vw, Height: 100vh
- Z-index: 100
- Background: `#0A0A0A`
- Display: flex

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [X CLOSE]        │
│                                                             │
│                    ┌─────────────────────┐                 │
│                    │   AI Strategy         │                 │
│                    │   Custom Agents       │                 │
│                    │   Process Automation  │                 │
│                    │   Data Intelligence   │                 │
│                    │                       │                 │
│                    │  [thunder] [octomus]     │                 │
│                    └─────────────────────┘                 │
│                                                             │
│  ┌──────────────────┐                     │                 │
│  │  future with AI" │                     │ []│
│  └──────────────────┘                     │                 │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Stil |
|---------|------|
| Logo | Stânga-sus, 20-24px, bold, alb |
| Close | Dreapta-sus, icon X, 24px, alb |
| Nav Links | Centrat vertical în jumătatea dreaptă |
| Partner Logos | Sub link-uri, thunder + octomus |
| Hero Text | Stânga-jos, headline + subheadline + CTA |

### Nav Links
| Link | Stil |
|------|------|
| AI Strategy | 48-64px, weight 300, `#FFFFFF` |
| Custom Agents | 48-64px, weight 300, `#FFFFFF` |
| Process Automation | 48-64px, weight 300, `#FFFFFF` |
| Data Intelligence | 48-64px, weight 300, `#FFFFFF` |

- Gap: 16-24px vertical
- Hover: opacity 0.7, translateX(8px)
- Transition: 300ms ease-out

### Partner Logos
- thunder: inimă + text, gri deschis
- octomus: floare/soare + text, gri deschis
- Gap: 32-48px horizontal
- Opacity: 0.5-0.7

### Animation
- Open: fade-in sau slide-in, 300-400ms, ease-out
- Close: fade-out sau slide-out, 300-400ms, ease-in
- Links: stagger animation, 50-100ms delay per link

---

## Footer

### Layout
- Full-width
- Background: `#0A0A0A`
- Padding: 60-80px horizontal, 40-60px vertical (top)

### Grid Link-uri
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐           │
│  │ QUICK  │  │ COMPANY│  │POLICIES│  │ SOCIAL │           │
│  │        │  │        │  │        │  │        │           │
│  │ Home   │  │ About  │  │ Terms  │  │ [X]    │           │
│  │ Product│  │ Team   │  │ Privacy│  │ [in]   │           │
│  │ Blog   │  │ Careers│  │ Cookies│  │ [GH]   │           │
│  │ Contact│  │ Press  │  │ License│  │ [YT]   │           │
│  └────────┘  └────────┘  └────────┘  └────────┘           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              a r m o r y   ( 200-300px)           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  © 2026 StaticLabs AI                                    [CTA] │
└─────────────────────────────────────────────────────────────┘
```

### Coloane
| Coloană | Links |
|---------|-------|
| Quick | Home, Product, Blog, Contact |
| Company | About, Team, Careers, Press |
| Policies | Terms, Privacy, Cookies, License |
| Social | X, LinkedIn, GitHub, YouTube |

### Stil per Coloană
| Element | Stil |
|---------|------|
| Titlu | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Link-uri | 18-22px, weight 400, `#A0A0A0` |
| Hover | `#FFFFFF`, translateX(4px) |
| Transition | 200ms ease-out |

### 
- Text: "staticlabs"
- Font: display (Clash Display, Monument Extended, Neue Machina)
- Size: 200-300px sau viewport-relative (`clamp()`)
- Weight: 900 (Black/Extra Bold)
- Color: `#E8E8E8` / `#F0F0F0`
- Letter-spacing: -0.05em
- Lowercase
- Overflow: crop la margini
- Full-width, centrat

### Copyright
- Text: "© 2026 StaticLabs AI"
- Font: monospace, 12-14px
- Color: `#666666`
- Position: stânga-jos

### CTA Card
- Position: dreapta-jos
- Same stil ca 

---

## Section Label

### Layout
- Horizontal: icon + text
- Gap: 8-12px

### Stil
| Element | Stil |
|---------|------|
| Icon | 3-4 linii înclinate (////), 16-20px wide, `#808080` sau `#666666` |
| Text | 11-12px, uppercase, tracking 0.1em, weight 500, `#808080` sau `#666666` |

### Variante
- Dark bg: icon + text `#808080`
- Light bg: icon + text `#666666`

---

## Feature Card

### Layout
- Vertical: icon → titlu → descriere
- Aliniere: stânga

### Stil
| Element | Stil |
|---------|------|
| Icon | SVG line art, 180-220px height, centrat, stroke 1-1.5px, `#FFFFFF` (dark) sau `#0A0A0A` (light) |
| Titlu | Monospace, 20-24px, weight 500, Title Case, `#FFFFFF` (dark) sau `#0A0A0A` (light) |
| Descriere | Sans-serif, 14-16px, weight 400, `#A0A0A0` (dark) sau `#4A4A4A` (light), line-height 1.6 |

### Spațiere
- Icon → Titlu: 60-80px
- Titlu → Descriere: 16-24px

---

## Statistic Card

### Layout
- Vertical: număr → descriere
- Aliniere: stânga
- Corner accent: L-shape în dreapta-sus

### Stil
| Element | Stil |
|---------|------|
| Număr | 64-80px, weight 300, `#FFFFFF`, line-height 1.0 |
| Descriere | Monospace, 14-16px, weight 400, `#A0A0A0`, line-height 1.5 |
| Corner accent | L-shape, 2 linii perpendiculare, 16-20px, `#666666` |

### Corner Accent
```
┌──
│
```
- 2 linii perpendiculare
- Lungime: 16-20px
- Grosime: 1-2px
- Color: `#666666`
- Position: absolute, top-right

---

## Case Study Row

### Layout
- Horizontal: 4 zone
- Grid: logo (~25%), an (~25%), titlu+desc (~40%), săgeată (~10%)
- Separator: 1px solid `#D0D0D0` (light) sau `#1A1A1A` (dark)

### Stil
| Element | Stil |
|---------|------|
| Logo | Imagine sau text-based, centrat vertical |
| An | "//2026", monospace, 14-16px, `#666666` (light) sau `#A0A0A0` (dark) |
| Titlu | Sans-serif, 24-28px, weight 500, `#0A0A0A` (light) sau `#FFFFFF` (dark) |
| Descriere | Monospace, 13-14px, weight 400, `#4A4A4A` (light) sau `#A0A0A0` (dark) |
| Săgeată | "»", 24-32px, weight 300, `#0A0A0A` (light) sau `#FFFFFF` (dark) |

### Hover
- Background: `#F0F0F0` (light) sau `#141414` (dark)
- Săgeată: translateX(8px)
- Transition: 300ms ease-out

---

## Article Card

### Variante

#### Variant 1: Featured (Large)
- Full-bleed image
- Gradient overlay bottom
- Title + meta pe imagine
- Aspect ratio: 16:10 sau 4:3
- Border-radius: 0

#### Variant 2: Standard (Horizontal)
- Thumbnail left (~30%)
- Text right (~70%)
- Title + excerpt + meta
- Aspect ratio thumbnail: 4:3 sau 1:1
- Border-radius: 0

#### Variant 3: Compact (Vertical)
- Image top
- Text bottom
- Title + meta
- Aspect ratio: 16:9
- Border-radius: 0

#### Variant 4: Image-Only
- Full-bleed image
- Title overlay on image
- Minimal meta
- Aspect ratio: 16:9
- Border-radius: 0

### Meta Component
```
[CATEGORIE] // [DATE] // [READ TIME]
```
- Font: monospace, 12px, uppercase
- Tracking: 0.05em
- Color: `#666666` (light) sau `#A0A0A0` (dark)

---

## Button Primary

### Layout
- Horizontal: icon (optional) + text
- Border-radius: 0 (sharp corners)
- Overflow: hidden

### Stiluri

#### Dark BG
| Element | Stil |
|---------|------|
| Background | `#F5F5F5` sau `#FFFFFF` |
| Text | `#000000`, 14-16px, weight 500 |
| Icon | `#000000`, 20-24px |
| Padding | 12-16px vertical, 24-32px horizontal |

#### Light BG
| Element | Stil |
|---------|------|
| Background | `#0A0A0A` |
| Text | `#FFFFFF`, 14-16px, weight 500 |
| Icon | `#FFFFFF`, 20-24px |
| Padding | 12-16px vertical, 24-32px horizontal |

### Hover
- Dark BG: bg `#FFFFFF`, translateY(-2px)
- Light BG: bg `#1A1A1A`, translateY(-2px)
- Transition: 200ms ease-out

### Icon Variants
- Grid/puzzle (Build A Workflow)
- Arrow right (→)
- Download (↓)
- Plus (+)

---

## Button Split

### Layout
- Horizontal: icon pătrat + text
- Border-radius: 0
- Overflow: hidden

### Stil
| Element | Background | Text | Size |
|---------|-----------|------|------|
| Icon container | `#FFFFFF` | `#000000` | 48-56px pătrat |
| Text container | `#0A0A0A` | `#FFFFFF` | flex 1 |

### Icon
- Arrow right (→), plus (+), sau custom
- Size: 20-24px
- Centrat în pătrat

### Text
- "More Projects", "Contact Us", etc.
- Font: 14-16px, weight 500
- Padding: 12-16px vertical, 24-32px horizontal

### Hover
- Icon container: translateX(4px) sau scale(1.05)
- Text container: opacity 0.9
- Transition: 200ms ease-out

---

## Input Field

### Layout
- Full-width
- Border-radius: 0
- Height: 56-64px

### Stil Dark
| State | Border | Background | Text | Placeholder |
|-------|--------|-----------|------|-------------|
| Default | 1px `#4A4A4A` | `#2A2A2A` | `#FFFFFF` | `#666666` |
| Focus | 1px `#FFFFFF` | `#2A2A2A` | `#FFFFFF` | `#666666` |
| Error | 1px `#FF4444` | `#2A2A2A` | `#FFFFFF` | `#666666` |

### Stil Light
| State | Border | Background | Text | Placeholder |
|-------|--------|-----------|------|-------------|
| Default | 1px `#D0D0D0` | `#FFFFFF` | `#0A0A0A` | `#666666` |
| Focus | 1px `#000000` | `#FFFFFF` | `#0A0A0A` | `#666666` |
| Error | 1px `#FF4444` | `#FFFFFF` | `#0A0A0A` | `#666666` |

### Padding
- 16-20px horizontal
- 16-20px vertical

---

## Select Dropdown

### Layout
- Same ca input field
- Icon: chevron down, 20-24px, `#666666`
- Position: absolute, right 16-20px, top 50%

### Dropdown
- Background: `#2A2A2A` (dark) sau `#FFFFFF` (light)
- Border: 1px solid `#4A4A4A` (dark) sau `#D0D0D0` (light)
- Text: `#FFFFFF` (dark) sau `#0A0A0A` (light)
- Option hover: `#333333` (dark) sau `#F5F5F0` (light)
- Border-radius: 0

---

## Textarea

### Layout
- Same ca input field
- Min-height: 120-160px
- Resize: vertical
- Padding: 16-20px

### Stil
- Same ca input field

---

## Tab Navigation

### Layout
- Horizontal flex sau grid
- Full-width în container
- Border-bottom: 1px solid `#D0D0D0` (container)

### Tab Stil
| Stare | Background | Text | Border |
|-------|-----------|------|--------|
| Active | `#000000` | `#FFFFFF` | none |
| Inactive | transparent | `#666666` | bottom 1px `#D0D0D0` |
| Hover | transparent | `#0A0A0A` | bottom 1px `#0A0A0A` |

### Tab Content
- Icon + label
- Icon: 20-24px
- Label: 14-16px, uppercase, weight 500
- Gap: 8-12px

### Transition
- Background: 200ms ease-out
- Color: 200ms ease-out
- Border: 200ms ease-out

---

## Accordion

### Layout
- Vertical stack
- Full-width
- Border: 1px solid `#D0D0D0` între items

### Header
| Element | Stil |
|---------|------|
| Icon | Custom SVG, 20-24px, `#0A0A0A` (light) sau `#FFFFFF` (dark) |
| Title | 18-20px, weight 500, `#0A0A0A` (light) sau `#FFFFFF` (dark) |
| Toggle | X icon sau chevron, 20-24px, `#666666` |
| Padding | 20-24px vertical |

### Content
| Element | Stil |
|---------|------|
| Text | 16px, weight 400, `#4A4A4A` (light) sau `#A0A0A0` (dark), line-height 1.6 |
| Padding | 0 0 24px 0 (doar bottom) |

### Animation
- Open: height 0 → auto, 300ms ease-out
- Close: height auto → 0, 300ms ease-in
- Icon: rotate 45° (X) sau flip 180° (chevron)

---

## Gauge Chart

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
- Active color: `#1A1A1A` (light) sau `#FFFFFF` (dark)
- Inactive color: `#B0B0B0` (light) sau `#333333` (dark)
- Text: 20-24px, weight 500, `#1A1A1A` (light) sau `#FFFFFF` (dark)
- Animation: stroke-dashoffset transition 1s ease-out

---

## 

### Layout
- Position: fixed
- Bottom: 16-24px
- Right: 16-24px
- Z-index: 40
- Horizontal: thumbnail + text + preț

### Stil
| Element | Stil |
|---------|------|
| Background | `#E8E8E8` sau `#F0F0F0` |
| Border | 1px solid `#DDDDDD` |
| Border-radius | 12-16px |
| Padding | 12-16px |
| Thumbnail | 40-48px, border-radius 4-8px, object-fit cover |
| Preț | "", 12-14px, weight 400, `#666666` |

### Hover
- Scale: 1.02
- Shadow: 0 4px 12px rgba(0,0,0,0.1)
- Transition: 200ms ease-out

---

### Layout
- Position: fixed
- Bottom: 16-24px (sau 80-90px dacă  e deasupra)
- Right: 16-24px
- Z-index: 40
- Horizontal: icon + text

### Stil
| Element | Stil |
|---------|------|
| Background | alb sau transparent |
| Border | 1px solid `#E0E0E0` |
| Border-radius | 8-12px (pill shape) |
| Padding | 8-12px vertical, 16px horizontal |
| Icon | Logo  (săgeată/F stilizată), 16-20px |
| Text | "", 12-14px, weight 500 |

### Hover
- Opacity: 0.8
- Transition: 200ms ease-out

---

## Avatar Stack

### Layout
- Horizontal
- Direction: left to right
- Overlap: -8px (negative margin)

### Stil
| Element | Stil |
|---------|------|
| Size | 40-48px diameter |
| Border | 2px solid `#F5F5F0` (matching bg) |
| Border-radius | 50% (circular) |
| Object-fit | cover |
| Z-index | incremental (left to right) |

### Comportament
- Hover: translateX(-4px) per avatar (expand on hover)
- Transition: 200ms ease-out
- Optional: tooltip with name on hover

---

## Social Icon

### Layout
- Squircle shape
- Size: 40-44px

### Stil
| Element | Stil |
|---------|------|
| Background | `#1A1A1A` (dark bg) sau `#E8E8E8` (light bg) |
| Icon | `#FFFFFF` (dark bg) sau `#0A0A0A` (light bg), 20-24px |
| Border-radius | 8px |

### Hover
- Background: `#333333` (dark) sau `#D0D0D0` (light)
- Scale: 1.05
- Transition: 200ms ease-out

### Icons
- X (Twitter): X icon
- LinkedIn: in icon
- GitHub: GH icon
- YouTube: play icon

---

## 

### Layout
- Full-width
- Centrat
- Overflow: hidden (crop la margini)

### Stil
| Element | Stil |
|---------|------|
| Text | "staticlabs" |
| Font | Display (Clash Display, Monument Extended, Neue Machina) |
| Size | 200-300px sau viewport-relative (`clamp()`) |
| Weight | 900 (Black/Extra Bold) |
| Color | `#E8E8E8` / `#F0F0F0` (subtil) |
| Letter-spacing | -0.05em |
| Transform | lowercase |

### Responsive
- Desktop: 200-300px
- Tablet: 150-200px
- Mobile: 100-150px

---

## Grid Lines

### Layout
- Absolute positioned
- Full-width/height
- Z-index: 0 (behind content)
- Pointer-events: none

### Stil
| Element | Stil |
|---------|------|
| Vertical lines | 1px, `#1A1A1A` (dark) sau `#D0D0D0` (light) |
| Horizontal lines | 1px, `#1A1A1A` (dark) sau `#D0D0D0` (light) |
| Gap | 20-40px (desktop), 16px (tablet), 12px (mobile) |

### Implementation
```css
.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  background-image: 
    linear-gradient(to right, #1A1A1A 1px, transparent 1px),
    linear-gradient(to bottom, #1A1A1A 1px, transparent 1px);
  background-size: 80px 80px;
}
```

---

## Noise Texture

### Layout
- Absolute positioned
- Full-width/height
- Z-index: 1 (above bg, below content)
- Pointer-events: none
- Opacity: 3-5%

### Implementation
```css
.noise-texture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.03;
  background-image: url('/noise.png'); /* seamless PNG */
  background-repeat: repeat;
}
```

### Alternative (CSS)
```css
.noise-texture {
  background: 
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
}
```

---

## Gradient Text

### Layout
- Inline sau block
- Background-clip: text

### Stil
```css
.gradient-text {
  background: linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Variante
- Fade to bottom: `#FFFFFF` → `#333333`
- Fade to right: `#FFFFFF` → `#333333`
- Multi-stop: `#FFFFFF` → `#A0A0A0` → `#333333`

---

## Workflow Node

### Layout
- Absolute sau relative positioned
- Border-radius: 8-12px

### Stil
| Element | Stil |
|---------|------|
| Background | `#1A1A1A` |
| Border | 1px solid `#333333` |
| Border-radius | 8-12px |
| Padding | 12-16px vertical, 16-20px horizontal |
| Icon | 20-24px, `#FFFFFF` |
| Titlu | Monospace, 13-14px, weight 500, `#FFFFFF` |
| Subtitlu | Monospace, 11-12px, weight 400, `#A0A0A0` |

### Stare Activă
- Border: 1px solid `#FFFFFF`
- Shadow: 0 0 0 2px rgba(255,255,255,0.1)

### Conectori
- Linii: 1px, `#555555`
- Curbe: bezier sau straight
- Labels: "1 item", monospace, 10px, `#666666`

### Noduri Exemple
1. **Email Trigger (IMAP)** - icon plic
2. **Edit Fields Manual** - icon creion
3. **AI Agent Tools Agent** - icon fulger (activ)
4. **Code** - icon `</>`
5. **Telegram sendAndWait message** - icon avion hârtie
6. **If** - icon săgeată condițională
7. **Send Email Send** - icon săgeată/play

---

## Stats Grid Item

### Layout
- Vertical: icon container → număr → descriere
- Aliniere: stânga

### Stil
| Element | Stil |
|---------|------|
| Icon container | 48-56px pătrat, bg `#1A1A1A`, border-radius 0 |
| Icon | SVG line-art, 24px, `#FFFFFF` |
| Număr | 36-48px, weight 500-600, `#FFFFFF`, line-height 1.1 |
| Descriere | 14-16px, weight 400, `#A0A0A0`, line-height 1.5-1.6 |

### Gap
- Icon → număr: 24-32px
- Număr → descriere: 12-16px

### Iconițe Exemple
1. **Baze de date/coin stack** - Finanțare/Funding
2. **@/spirală** - Engagement/Digital
3. **Grafic cu săgeată în sus** - Growth/ROI
4. **Strângere de mâini** - Parteneriate/Colaborare

---

## Blockquote

### Layout
- Full-width în container
- Margin: 0
- Padding: 0

### Stil
| Element | Stil |
|---------|------|
| Citat | 42-52px, weight 300-400, `#FFFFFF`, line-height 1.2-1.3, letter-spacing -0.01em |
| Autor | 18-20px, weight 400-500, `#FFFFFF`, margin-top 32-40px |
| Titlu funcție | 12-14px, weight 400, uppercase, monospace, letter-spacing 0.1em, `#A0A0A0` |

### Comportament
- Optional: quotes decorative ("„" sau "«") înaintea citatului
- Font: sans-serif geometric, posibil italic pentru citat

---

## Sidebar Info

### Layout
- Vertical stack de label-value pairs
- Separator: 1px solid `#1A1A1A` între items (optional)
- Padding: 24-32px

### Stil
| Element | Stil |
|---------|------|
| Label | 11-12px, uppercase, monospace, letter-spacing 0.1em, `#808080` |
| Valoare | 16-18px, weight 400, `#FFFFFF` |
| Link | `#FFFFFF`, hover: underline |

### Gap
- Label → valoare: 8-12px
- Grupuri: 32-40px

### Items Exemple
| Label | Valoare |
|-------|---------|
| INDUSTRY | Healthcare AI |
| TIMELINE | 4 Months |
| PLATFORM | Web & Mobile |
| LIVE WEBSITE | octomus.com/ai-innovation |
