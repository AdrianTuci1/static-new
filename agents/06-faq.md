# Pagina: FAQ

## Structură Completă

Pagina FAQ conține următoarele secțiuni:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **FAQ Hero Section** (light bg)
3. **FAQ Content** (tabs + accordion)
4. **Footer** (dark bg)

---

## FAQ Hero Section

### Layout
- Full-width
- Background: `#E8E8E8` (light gray)
- Padding: 120-160px top, 60-80px bottom
- Grid: 2 coloane asimetrice (~40/60)

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│  ┌────────────────────┐  ┌────────────────────────────┐  │
│  │                    │  │                            │  │
│  │  //// FAQ          │  │  [TAB 1] [TAB 2] [TAB 3] [TAB 4]│
│  │                    │  │  Overview Security Protocols License│
│  │  "Common           │  │                            │  │
│  │   inquiries"       │  │  ┌────────────────────────┐  │  │
│  │                    │  │  │ Question 1?           ▼  │  │  │
│  │  Find answers to   │  │  ├────────────────────────┤  │  │
│  │  frequently asked  │  │  │ Question 2?           ▼  │  │  │
│  │  questions about   │  │  ├────────────────────────┤  │  │
│  │  our platform...   │  │  │ Question 3?           ▼  │  │  │
│  │                    │  │  ├────────────────────────┤  │  │
│  │  [Contact Us →]    │  │  │ Question 4?           ▼  │  │  │
│  │                    │  │  ├────────────────────────┤  │  │
│  │                    │  │  │ Question 5?           ▼  │  │  │
│  │                    │  │  ├────────────────────────┤  │  │
│  │                    │  │  │ Question 6?           ▼  │  │  │
│  └────────────────────┘  └────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Elemente Stânga
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// FAQ" | 11-12px, uppercase, tracking 0.1em, `#666666` |
| Headline | "Common inquiries" | 48-56px, weight 400, `#0A0A0A`, line-height 1.1 |
| Descriere | "Find answers to frequently asked questions about our platform, security, and enterprise solutions." | 16-18px, weight 400, `#4A4A4A`, line-height 1.6 |
| CTA Button | "Contact Us →" | Buton split: icon pătrat alb + text negru |

### CTA Button "Contact Us"
- Layout: icon pătrat + text
- Icon container: pătrat, bg `#FFFFFF`, icon negru
- Text container: bg `#0A0A0A`, text `#FFFFFF`
- Border-radius: 0
- Padding: 12-16px vertical, 24-32px horizontal

---

## FAQ Content (Tabs + Accordion)

### Layout
- Full-width
- Background: `#E8E8E8`
- Padding: 40-60px vertical (continuare)
- Grid: 2 coloane asimetrice (~40/60) - continuare din hero

### Tab Navigation
| Tab | Icon | Stil |
|-----|------|------|
| Overview | Icon grid/summary | 14-16px, uppercase, weight 500 |
| Security | Icon shield | 14-16px, uppercase, weight 500 |
| Protocols | Icon document/flow | 14-16px, uppercase, weight 500 |
| Licensing | Icon infinity | 14-16px, uppercase, weight 500 |

### Tab Stil
- Layout: horizontal, 4 tab-uri egale
- Height: 48-56px
- Stare activă: bg `#000000`, text `#FFFFFF`, border-radius 0
- Stare inactivă: bg transparent, text `#666666`, border-bottom 1px `#D0D0D0`
- Hover: text `#0A0A0A`
- Transition: 200ms ease-out

### Accordion
| Element | Stil |
|---------|------|
| Header | 18-20px, weight 500, `#0A0A0A`, padding 20-24px vertical |
| Icon | Custom per item (■, ○, ⊞, ☁, Ⓟ, ∞) + toggle X/chevron |
| Content | 16px, weight 400, `#4A4A4A`, line-height 1.6, padding 0 0 24px 0 |
| Border | 1px solid `#D0D0D0` între items |

### Accordion Items (Exemple)
1. **"What is StaticLabs and how does it work?"** - Icon: ■ (square)
2. **"Is my data secure with StaticLabs?"** - Icon: ○ (circle)
3. **"Can I integrate StaticLabs with my existing tools?"** - Icon: ⊞ (grid)
4. **"What kind of support do you offer?"** - Icon: ☁ (cloud)
5. **"How does pricing work for enterprise?"** - Icon: Ⓟ (P)
6. **"What is your SLA and uptime guarantee?"** - Icon: ∞ (infinity)

### Accordion Comportament
- Single open: doar un item deschis la un moment dat
- Toggle: click pe header deschide/închide
- Animation: height 0 → auto, 300ms ease-out
- Icon toggle: rotate 45° (X) sau flip chevron

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Grid: 2 coloane asimetrice (~40/60)
- Tabs: 4 coloane orizontale
- Accordion: full-width în coloana dreaptă

### Tablet (768-1023px)
- Grid: single column (text deasupra, tabs+accordion dedesubt)
- Tabs: 4 coloane sau scrollable
- Accordion: full-width

### Mobile (< 768px)
- Grid: single column
- Tabs: scrollable horizontal sau dropdown
- Accordion: full-width, padding redus
- CTA button: full-width

---

## Checklist FAQ Page

- [ ] Navbar (fixed, transparent)
- [ ] FAQ Hero Section (2 coloane)
- [ ] Label "//// FAQ"
- [ ] Headline "Common inquiries"
- [ ] Descriere
- [ ] CTA Button "Contact Us" (split button)
- [ ] Tab Navigation (4 tab-uri)
- [ ] Tab Overview
- [ ] Tab Security
- [ ] Tab Protocols
- [ ] Tab Licensing
- [ ] Accordion Component
- [ ] Accordion Items (6+ questions)
- [ ] Custom Icons per item
- [ ] Toggle Animation
- [ ] Footer
- [ ] s ( + )

---

## Tab Component

### Layout
- Horizontal flex sau grid 4 coloane
- Full-width în container
- Border-bottom: 1px solid `#D0D0D0` (container)

### Stil per Tab
| Stare | Background | Text | Border |
|-------|-----------|------|--------|
| Active | `#000000` | `#FFFFFF` | none |
| Inactive | transparent | `#666666` | bottom 1px `#D0D0D0` |
| Hover | transparent | `#0A0A0A` | bottom 1px `#0A0A0A` |

### Transition
- Background: 200ms ease-out
- Color: 200ms ease-out
- Border: 200ms ease-out

---

## Accordion Component

### Layout
- Vertical stack
- Full-width
- Border: 1px solid `#D0D0D0` între items

### Header
| Element | Stil |
|---------|------|
| Icon | Custom SVG, 20-24px, `#0A0A0A` |
| Title | 18-20px, weight 500, `#0A0A0A` |
| Toggle | X icon sau chevron, 20-24px, `#666666` |
| Padding | 20-24px vertical |

### Content
| Element | Stil |
|---------|------|
| Text | 16px, weight 400, `#4A4A4A`, line-height 1.6 |
| Padding | 0 0 24px 0 (doar bottom) |

### Animation
- Open: height 0 → auto, 300ms ease-out
- Close: height auto → 0, 300ms ease-in
- Icon: rotate 45° (X) sau flip 180° (chevron)

---

## Split Button Component

### Layout
- Horizontal: icon container + text container
- Border-radius: 0
- Overflow: hidden

### Stil
| Element | Background | Text | Size |
|---------|-----------|------|------|
| Icon container | `#FFFFFF` | `#000000` | 48-56px pătrat |
| Text container | `#0A0A0A` | `#FFFFFF` | flex 1 |

### Icon
- Arrow right (→) sau custom icon
- Size: 20-24px
- Centrat în pătrat

### Text
- "Contact Us" sau similar
- Font: 14-16px, weight 500
- Padding: 12-16px vertical, 24-32px horizontal

### Hover
- Icon container: translateX(4px) sau scale(1.05)
- Text container: opacity 0.9
- Transition: 200ms ease-out
