# Pagina: Case Study Detail

## Structură Completă

Pagina de detaliu case study conține următoarele secțiuni:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Case Study Hero** (imagine cinematografică cu gradient overlay, stats grid)
3. **Project Testimonial + Overview** (dark bg, 2 coloane: citat stânga + info sidebar dreapta)
4. **Project Image** (full-bleed, arhitecturală)
5. **Project Content** (light bg, rich text)
6. **Results/Statistics** (dark bg, optional)
7. **Next Project** (light bg, optional)
8. **Footer** (dark bg)

---

## Case Study Hero

### Layout
- Full-width, ~80-100vh
- Background: imagine cinematografică (pădure cu ceață, figură siluetată) + gradient overlay întunecat jos
- Content: centrat orizontal, aliniat vertical în partea superioară
- Padding: 100-140px top, 0 bottom (imaginea se extinde până jos)

### Gradient Overlay
- Gradient: `#000000` (opac 100% jos) → transparent (sus)
- Efect: "dissolve" în imaginea de fundal
- Z-index: 1 (deasupra imaginii, sub content)

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│                                                             │
│              [CIGNA LOGO]                                   │
│                                                             │
│         "Octomus Smart Health                                 │
│            Systems"                                         │
│                                                             │
│    Revolutionizing patient care through predictive         │
│    analytics and seamless AI-driven diagnostic             │
│    integration tools.                                       │
│                                                             │
│  [Spațiu generos - imagine de fundal pădure/ceață]        │
│                                                             │
├────────┬────────┬────────┬────────────────────────────────┤
│ [ICON] │ [ICON] │ [ICON] │ [ICON]                        │
│        │        │        │                                │
│ $45M   │ 700%   │  41x   │ 84                            │
│ [text] │ [text] │ [text] │ [text]                        │
└────────┴────────┴────────┴────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Logo Client | "octomus healthcare" cu icon floare/soare | 12-14px, centrat, `#FFFFFF` |
| Headline | "Octomus AI Assistant" | 56-72px, weight 400-500, `#FFFFFF`, centrat, line-height 1.1 |
| Subheadline | "Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools." | 16-18px, weight 400, `#A0A0A0`, centrat, line-height 1.6, max-width 600-700px |

### Stats Grid (4 coloane)
| Element | Stil |
|---------|------|
| Icon container | Pătrat 48-56px, bg `#1A1A1A`, border-radius 0, icon line-art alb 24px |
| Număr | 36-48px, weight 500-600, `#FFFFFF`, line-height 1.1 |
| Descriere | 14-16px, weight 400, `#A0A0A0`, line-height 1.5-1.6 |
| Gap icon → număr | 24-32px |
| Gap număr → descriere | 12-16px |

### Statistici
1. **$45M** - "Funding secured for AI infrastructure expansion"
2. **700%** - "Increase in patient data processing efficiency"
3. **41x** - "ROI within first fiscal year of deployment"
4. **84** - "Healthcare providers integrated into the network"

### Iconițe Stats
1. **Baze de date/coin stack** - Finanțare/Funding
2. **@/spirală** - Engagement/Digital
3. **Grafic cu săgeată în sus** - Growth/ROI
4. **Strângere de mâini** - Parteneriate/Colaborare

### Grid Stats
- 4 coloane egale (25% fiecare)
- Aliniere: stânga per coloană
- Gap coloane: 32-48px
- Padding secțiune: 48-64px top, 48-64px bottom
- Border-top: 1px solid `#1A1A1A` (separator subtil)
- Container: max-width 1200-1400px, centrat

---

## Project Testimonial + Overview

### Layout
- Full-width
- Background: `#0A0A0A` sau `#111111`
- Grid: 2 coloane asimetrice (~70/30)
- Separator vertical: 1px solid `#1A1A1A` sau `#222222`
- Padding: 80-120px vertical

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌────────────────────────────┐  │  ┌────────────────────┐  │
│  │                            │  │  │                    │  │
│  │  "The AI implementation    │  │  │  INDUSTRY          │  │
│  │   transformed how we       │  │  │  Healthcare AI     │  │
│  │   interact with patient   │  │  │                    │  │
│  │   data. It is not just    │  │  │  TIMELINE          │  │
│  │   a tool; it is a         │  │  │  4 Months          │  │
│  │   fundamental shift in     │  │  │                    │  │
│  │   healthcare efficiency   │  │  │  PLATFORM          │  │
│  │   and accuracy for our     │  │  │  Web & Mobile      │  │
│  │   global network."        │  │  │                    │  │
│  │                            │  │  │  LIVE WEBSITE      │  │
│  │  Sarah Jenkins            │  │  │  octomus.com/ai...   │  │
│  │  HEAD OF INNOVATION,      │  │  │                    │  │
│  │  CIGNA                    │  │  │                    │  │
│  │                            │  │  │                    │  │
│  │  The challenge was to     │  │  │                    │  │
│  │  modernize a legacy       │  │  │                    │  │
│  │  healthcare infrastructure│  │  │                    │  │
│  │  with cutting-edge        │  │  │                    │  │
│  │  artificial intelligence. │  │  │                    │  │
│  │                            │  │  │                    │  │
│  └────────────────────────────┘  │  └────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Coloana Stânga (~70%)
| Element | Conținut | Stil |
|---------|----------|------|
| Blockquote | "The AI implementation transformed how we interact with patient data. It is not just a tool; it is a fundamental shift in healthcare efficiency and accuracy for our global network." | 42-52px, weight 300-400, `#FFFFFF`, line-height 1.2-1.3, letter-spacing ușor negativ |
| Autor | "Sarah Jenkins" | 18-20px, weight 400-500, `#FFFFFF` |
| Titlu funcție | "HEAD OF INNOVATION, CIGNA" | 12-14px, weight 400, uppercase, monospace, letter-spacing larg, `#A0A0A0` |
| Paragraf descriptiv | "The challenge was to modernize a legacy healthcare infrastructure with cutting-edge artificial intelligence. We focused on bridging the gap between complex medical data and actionable patient insights for providers." | 16-18px, weight 400, `#A0A0A0`, line-height 1.6 |

### Coloana Dreapta (~30%) - Sidebar Info
| Element | Conținut | Stil |
|---------|----------|------|
| Label "INDUSTRY" | 11-12px, uppercase, monospace, letter-spacing larg, `#6B6B6B` sau `#808080` |
| Valoare "Healthcare AI" | 16-18px, weight 400, `#FFFFFF` |
| Label "TIMELINE" | 11-12px, uppercase, monospace, letter-spacing larg, `#6B6B6B` sau `#808080` |
| Valoare "4 Months" | 16-18px, weight 400, `#FFFFFF` |
| Label "PLATFORM" | 11-12px, uppercase, monospace, letter-spacing larg, `#6B6B6B` sau `#808080` |
| Valoare "Web & Mobile" | 16-18px, weight 400, `#FFFFFF` |
| Label "LIVE WEBSITE" | 11-12px, uppercase, monospace, letter-spacing larg, `#6B6B6B` sau `#808080` |
| Valoare "octomus.com-ai-innovation" | 16-18px, weight 400, `#FFFFFF`, posibil link |

### Spațiere Sidebar
- Gap între grupuri: 32-40px
- Gap între etichetă și valoare: 8-12px
- Padding-left față de separator: 48-64px

---

## Project Image

### Layout
- Full-width sau container-width
- Background: `#0A0A0A`
- Padding: 0 (full-bleed) sau 40-60px (container)

### Imagine
- Fotografie arhitecturală în tonuri de gri
- Clădire modernă cu geometrie abstractă (fațadă cu panouri geometrice, umbre dramatice)
- Aspect ratio: ~16:9 sau mai lată
- Object-fit: cover
- Border-radius: 0 (sharp corners)
- Full-bleed în coloana stângă, se extinde parțial în dreapta

---

## Project Content

### Layout
- Full-width
- Background: `#F5F5F0` sau `#E8E8E8` (light)
- Padding: 80-120px vertical
- Container: max-width ~900-1000px, centrat sau stânga-aliniat

### Typography
Vezi `03-article-detail.md` - Article Content pentru scale tipografică.

---

## Results/Statistics (Optional)

### Layout
- Full-width
- Background: `#0A0A0A`
- Padding: 80-120px vertical
- Grid: 3-4 coloane egale

### Elemente
| Element | Stil |
|---------|------|
| Număr | 64-80px, weight 300, `#FFFFFF` |
| Label | 14-16px, weight 400, `#A0A0A0` |

---

## Next Project (Optional)

### Layout
- Full-width
- Background: `#E8E8E8`
- Padding: 80-120px vertical
- Grid: 2 coloane (text stânga, preview dreapta)

### Elemente
| Element | Stil |
|---------|------|
| Label | "//// NEXT PROJECT" |
| Titlu | 32-40px, weight 500, `#0A0A0A` |
| Săgeată | "→" sau "»", 24-32px |
| Preview | Thumbnail imagine, ~400-500px width |

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Hero headline: 56-72px
- Stats: 4 coloane
- Testimonial: 2 coloane (70/30)
- Sidebar info: vizibil

### Tablet (768-1023px)
- Hero headline: 40-48px
- Stats: 2 coloane (2×2)
- Testimonial: single column (sidebar deasupra sau dedesubt)
- Content: full-width, padding 40-60px

### Mobile (< 768px)
- Hero headline: 32-40px
- Stats: 2 coloane (2×2) sau single column
- Testimonial: single column
- Sidebar: single column, stivuit
- Content: full-width, padding 20-24px

---

## Checklist Case Study Detail Page

- [ ] Navbar (fixed, transparent)
- [ ] Case Study Hero (imagine cinematografică + gradient overlay)
- [ ] Logo Client (octomus healthcare)
- [ ] Headline proiect
- [ ] Subheadline descriptiv
- [ ] Stats Grid (4 coloane: $45M, 700%, 41x, 84)
- [ ] Iconițe stats (database, @, chart, handshake)
- [ ] Project Testimonial Section (dark bg)
- [ ] Blockquote (citat mare)
- [ ] Autor (Sarah Jenkins)
- [ ] Titlu funcție (HEAD OF INNOVATION, CIGNA)
- [ ] Paragraf descriptiv (challenge)
- [ ] Sidebar Info (INDUSTRY, TIMELINE, PLATFORM, LIVE WEBSITE)
- [ ] Separator vertical
- [ ] Project Image (arhitecturală, full-bleed)
- [ ] Project Content (rich text, light bg)
- [ ] Results/Statistics (optional)
- [ ] Next Project (optional)
- [ ] Footer
- [ ] s ( + )

---

## Glitch Art / Pixel Sorting Effect (Variantă Alternativă)

### Descriere
- Efect vizual pe imaginile de hero (variantă alternativă)
- Stil: distorsionat, digital, artistic
- Culori: gradient pink → purple → blue
- Implementare: CSS filter + SVG filter sau WebGL

### CSS Filter (Simplu)
```css
.glitch-image {
  filter: url(#pixel-sort);
  mix-blend-mode: screen;
}
```

---

## Info Box Component (Sidebar)

### Layout
- Vertical stack de label-value pairs
- Separator: 1px solid `#1A1A1A` între items (optional)
- Padding: 24-32px

### Stil
- Background: transparent
- Border: none
- Border-radius: 0

### Items
| Label | Valoare |
|-------|---------|
| INDUSTRY | Healthcare AI |
| TIMELINE | 4 Months |
| PLATFORM | Web & Mobile |
| LIVE WEBSITE | octomus.com/ai-innovation |

### Stil per Item
| Element | Stil |
|---------|------|
| Label | 11-12px, uppercase, monospace, letter-spacing 0.1em, `#808080` |
| Valoare | 16-18px, weight 400, `#FFFFFF` |
| Link | `#FFFFFF`, hover: underline |

---

## Stats Grid Component

### Layout
- Grid: 4 coloane egale (desktop), 2 coloane (tablet), 1 coloană (mobile)
- Border-top: 1px solid `#1A1A1A`
- Padding: 48-64px vertical

### Stil per Item
| Element | Stil |
|---------|------|
| Icon container | 48-56px pătrat, bg `#1A1A1A`, border-radius 0 |
| Icon | SVG line-art, 24px, `#FFFFFF` |
| Număr | 36-48px, weight 500-600, `#FFFFFF` |
| Descriere | 14-16px, weight 400, `#A0A0A0`, line-height 1.5 |

### Gap
- Icon → număr: 24-32px
- Număr → descriere: 12-16px
- Coloane: 32-48px

---

## Blockquote Component

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

## Next Project Component

### Layout
- Horizontal: text stânga (~50%), preview dreapta (~50%)
- Sau vertical: text deasupra, preview dedesubt
- Hover: preview scale up, săgeată move right

### Stil
- Background: `#E8E8E8`
- Text: `#0A0A0A`
- Săgeată: `#0A0A0A`, 24-32px
- Preview: border-radius 0, aspect ratio 16:9

### Comportament
- Click: navigare la următorul proiect
- Hover: săgeată translateX(8px), preview scale(1.02)
- Transition: 300ms ease-out
