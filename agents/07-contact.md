# Pagina: Contact

## Structură Completă

Pagina de contact conține următoarele secțiuni:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Contact Section** (nav + form coboară din top, split-screen)
3. **Contact Info Section** (dark bg, 4 coloane)
4. **Footer** (dark bg)

**Notă:** Navbar + formular coboară din partea de sus a ecranului (overlay/dropdown). Vezi secțiunea "Contact Dropdown".

---

## Contact Dropdown (Nav + Form)

### Layout
- Poziție: fixed, top: 0, left: 0, right: 0
- Z-index: 100 (deasupra navbar)
- Background: `#0A0A0A` sau `#111111`
- Height: ~80-90vh (coboară din top, nu fullscreen)
- Transform: translateY(-100%) → translateY(0) (la deschidere)
- Transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1)

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [✕ CLOSE]        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌────────────────────────────┐  ┌────────────────────────┐  │
│  │                            │  │                        │  │
│  │  GET IN TOUCH              │  │  [HARTĂ]               │  │
│  │  ─────────────             │  │  Imagine satelit       │  │
│  │                            │  │  gri/monocrom           │  │
│  │  Let's discuss your        │  │  locație birou          │  │
│  │  project and explore       │  │                        │  │
│  │  how we can help.          │  │                        │  │
│  │                            │  │                        │  │
│  │  [Name          ]         │  │                        │  │
│  │  [Email         ]         │  │                        │  │
│  │  [Company       ]         │  │                        │  │
│  │  [Project Details]        │  │                        │  │
│  │                            │  │                        │  │
│  │  [Submit]                  │  │                        │  │
│  │                            │  │                        │  │
│  └────────────────────────────┘  └────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elemente Stânga (Formular)
| Element | Conținut | Stil |
|---------|----------|------|
| Headline | "GET IN TOUCH" | 32-40px, weight 500, `#FFFFFF`, uppercase |
| Separator | Linie subțire | 1px solid `#333333`, width ~100px |
| Subheadline | "Let's discuss your project and explore how we can help." | 16-18px, weight 400, `#A0A0A0`, line-height 1.6 |
| Input Name | Placeholder "Name" | Input field style (vezi 08-components.md) |
| Input Email | Placeholder "Email" | Input field style |
| Input Company | Placeholder "Company" | Input field style |
| Textarea | Placeholder "Project Details" | Textarea style, 4-6 rânduri |
| Submit Button | "Submit" | Button primary style |

### Elemente Dreapta (Hartă)
| Element | Stil |
|---------|------|
| Imagine | Hartă satelit sau imagine locație, gri/monocrom |
| Aspect ratio | ~16:9 sau ~4:3 |
| Object-fit | cover |
| Border-radius | 0 |

### Comportament
- Deschidere: click pe "Contact" în nav overlay sau direct din navbar
- Animatie: coboară din top (translateY)
- Închidere: click pe ✕ sau Escape
- Focus trap: da (accesibilitate)
- Body scroll: blocat când e deschis

---

## Contact Hero Section (Variantă Statică)

### Layout
- Full-width, ~90-100vh
- Background: `#0A0A0A` (dark)
- Split-screen: 50/50 (formular stânga / hartă dreapta)
- Padding: 80-120px vertical

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│  ┌────────────────────────────┐  ┌──────────────────────┐  │
│  │                            │  │                      │  │
│  │  //// CONTACT US           │  │   [MAP]              │  │
│  │                            │  │   Dark mode          │  │
│  │  "Start your AI build"    │  │   Leaflet/Mapbox    │  │
│  │                            │  │   London area       │  │
│  │  Ready to deploy custom   │  │                      │  │
│  │  agents? Let's discuss   │  │   [+] [-]            │  │
│  │  your infrastructure.    │  │   Zoom controls      │  │
│  │                            │  │                      │  │
│  │  ┌────────────────────┐  │  │   [Marker]           │  │
│  │  │ Name               │  │  │   Pulsing dot        │  │
│  │  └────────────────────┘  │  │                      │  │
│  │  ┌────────────────────┐  │  │                      │  │
│  │  │ Email              │  │  │                      │  │
│  │  └────────────────────┘  │  │                      │  │
│  │  ┌────────────────────┐  │  │                      │  │
│  │  │ Location           │  │  │                      │  │
│  │  └────────────────────┘  │  │                      │  │
│  │  ┌────────────────────┐  │  │                      │  │
│  │  │ Budget             │  │  │                      │  │
│  │  └────────────────────┘  │  │                      │  │
│  │  ┌────────────────────┐  │  │                      │  │
│  │  │ Message            │  │  │                      │  │
│  │  │                    │  │  │                      │  │
│  │  │                    │  │  │                      │  │
│  │  └────────────────────┘  │  │                      │  │
│  │                            │  │                      │  │
│  │  [Submit →]                │  │                      │  │
│  │                            │  │                      │  │
│  └────────────────────────────┘  └──────────────────────┘  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  INFO CONTACT (4 coloane)                                   │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐           │
│  │ Email  │  │ Phone  │  │ Address│  │ Social │           │
│  │        │  │        │  │        │  │        │           │
│  │ hello@ │  │ +1     │  │ 123 AI │  │ [X]    │           │
│  │ staticlabs │  │ (555)  │  │ Street │  │ [in]   │           │
│  │ .ai    │  │ 0123   │  │ London │  │ [GH]   │           │
│  │        │  │        │  │ UK     │  │        │           │
│  └────────┘  └────────┘  └────────┘  └────────┘           │
└─────────────────────────────────────────────────────────────┘
```

### Elemente Stânga (Formular)
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// CONTACT US" | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Headline | "Start your AI build" | 64-72px, weight 400, `#FFFFFF`, line-height 1.1 |
| Subheadline | "Ready to deploy custom agents? Let's discuss your infrastructure." | 16-18px, weight 400, `#A0A0A0`, line-height 1.6 |
| Input Name | Placeholder "Name" | Input field dark |
| Input Email | Placeholder "Email" | Input field dark |
| Select Location | Placeholder "Location" | Select dropdown dark |
| Select Budget | Placeholder "Budget" | Select dropdown dark |
| Textarea Message | Placeholder "Message" | Textarea dark |
| Submit Button | "Submit →" | Buton primary, icon + text |

### Input Fields Dark
| Element | Stil |
|---------|------|
| Background | `#2A2A2A` |
| Border | 1px solid `#4A4A4A` |
| Text | `#FFFFFF` |
| Placeholder | `#666666` |
| Padding | 16-20px |
| Height | 56-64px (input), 120-160px (textarea) |
| Border-radius | 0 (sharp corners) |
| Focus | border `#FFFFFF` |

### Select Dropdown
- Same stil ca input
- Icon: chevron down, `#666666`
- Options: default + lista de opțiuni

### Submit Button
- Layout: text + icon săgeată
- Background: `#E8E8E8` sau `#F5F5F5`
- Text: `#0A0A0A`, 14-16px, weight 500
- Icon: săgeată, `#0A0A0A`
- Padding: 12-16px vertical, 24-32px horizontal
- Border-radius: 0
- Hover: bg `#FFFFFF`, translateX(4px) pe icon

---

## Hartă Interactivă

### Layout
- Dreapta, ~50% din viewport
- Full-height în secțiune
- Background: `#1A1A1A` / `#2A2A2A` (dark map)

### Stil Hartă
- Provider: Mapbox sau Leaflet (dark mode)
- Stil: dark/grayscale, minimal labels
- Centru: London, UK (aproximativ)
- Zoom: 13-15
- Marker: pulsating dot, `#FFFFFF` sau accent color

### Controale Hartă
- Zoom: + / - buttons
- Stil: pătrat, bg `#2A2A2A`, border `#4A4A4A`, icon `#FFFFFF`
- Position: top-right sau bottom-right
- Border-radius: 0

### Marker
- Tip: pulsating dot sau pin custom
- Culoare: `#FFFFFF` sau `#E8E8E8`
- Size: 12-16px diameter
- Animation: pulse (scale 1 → 1.5 → 1, opacity 1 → 0.5 → 1)
- Duration: 2s, infinite

---

## Info Contact Section

### Layout
- Full-width
- Background: `#0A0A0A`
- Border-top: 1px solid `#1A1A1A`
- Padding: 60-80px vertical
- Grid: 4 coloane egale

### Elemente per Coloană
| Element | Stil |
|---------|------|
| Label | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Valoare | 18-20px, weight 400, `#FFFFFF` |
| Link | 18-20px, weight 400, `#FFFFFF`, hover: underline |

### Coloane
1. **Email** - "hello@staticlabs.ai"
2. **Phone** - "+1 (555) 012-3456"
3. **Address** - "123 AI Street, London, UK"
4. **Social** - Icons: X (Twitter), LinkedIn, GitHub, YouTube

### Social Icons
- Stil: squircle, 40-44px, bg `#1A1A1A`, icon `#FFFFFF` 20-24px
- Hover: bg `#333333`, scale(1.05)
- Border-radius: 8px

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Split-screen: 50/50
- Form: 2 coloane (Name | Email, Location | Budget)
- Hartă: 50% width, full-height
- Info: 4 coloane

### Tablet (768-1023px)
- Split-screen: 60/40 (form mai larg)
- Form: single column
- Hartă: 40% width
- Info: 2 coloane (2×2)

### Mobile (< 768px)
- Single column: form deasupra, harta dedesubt
- Form: single column, full-width
- Hartă: full-width, 300-400px height
- Info: single column, stivuite
- Submit button: full-width

---

## Checklist Contact Page

- [ ] Navbar (fixed, transparent)
- [ ] Contact Section (nav + form coboară din top) (split-screen)
- [ ] Label "//// CONTACT US"
- [ ] Headline "Start your AI build"
- [ ] Subheadline
- [ ] Formular (Name, Email, Location, Budget, Message)
- [ ] Input fields (dark style)
- [ ] Select dropdowns (Location, Budget)
- [ ] Textarea (Message)
- [ ] Submit Button ("Submit →")
- [ ] Hartă interactivă (Mapbox/Leaflet dark)
- [ ] Zoom controls (+/-)
- [ ] Pulsing marker
- [ ] Info Contact Section (4 coloane)
- [ ] Email info
- [ ] Phone info
- [ ] Address info
- [ ] Social icons (X, LinkedIn, GitHub, YouTube)
- [ ] Footer
- [ ] s ( + )

---

## Form Component

### Layout
- Vertical stack
- Gap: 0 (inputs ating separator lines)
- Full-width în container

### Input Row (Desktop)
```
┌────────────────────┬────────────────────┐
│ Name               │ Email              │
└────────────────────┴────────────────────┘
┌────────────────────┬────────────────────┐
│ Location           │ Budget             │
└────────────────────┴────────────────────┘
┌─────────────────────────────────────────┐
│ Message                                 │
│                                         │
│                                         │
└─────────────────────────────────────────┘
┌─────────────────┐
│ Submit →        │
└─────────────────┘
```

- 2 coloane pentru Name/Email și Location/Budget
- Textarea full-width
- Submit button left-aligned

### Input Stil
| State | Border | Background | Text |
|-------|--------|-----------|------|
| Default | 1px `#4A4A4A` | `#2A2A2A` | `#FFFFFF` |
| Focus | 1px `#FFFFFF` | `#2A2A2A` | `#FFFFFF` |
| Error | 1px `#FF4444` | `#2A2A2A` | `#FFFFFF` |
| Disabled | 1px `#333333` | `#1A1A1A` | `#666666` |

### Select Stil
- Same ca input
- Icon: chevron down, 20-24px, `#666666`
- Dropdown: bg `#2A2A2A`, border `#4A4A4A`, text `#FFFFFF`
- Option hover: bg `#333333`

### Textarea Stil
- Same ca input
- Min-height: 120-160px
- Resize: vertical
- Padding: 16-20px

---

## Map Component

### Configuration
- Provider: Mapbox GL JS sau Leaflet
- Style: `mapbox://styles/mapbox/dark-v11` sau custom dark style
- Center: [51.5074, -0.1278] (London)
- Zoom: 13
- Scroll zoom: disabled (scroll to zoom off)
- Navigation: zoom controls only

### Dark Style
- Background: `#1A1A1A`
- Water: `#0A0A0A`
- Buildings: `#2A2A2A`
- Roads: `#333333`
- Labels: `#666666`
- Parks: `#1A1A1A`

### Marker
```html
<div class="map-marker">
  <div class="marker-dot"></div>
  <div class="marker-pulse"></div>
</div>
```

```css
.map-marker {
  position: relative;
  width: 16px;
  height: 16px;
}

.marker-dot {
  width: 12px;
  height: 12px;
  background: #FFFFFF;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 2;
}

.marker-pulse {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: absolute;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
```

---

## Info Contact Component

### Layout
- Grid: 4 coloane egale
- Border-top: 1px solid `#1A1A1A`
- Padding: 60-80px vertical

### Stil per Coloană
| Element | Stil |
|---------|------|
| Label | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Value | 18-20px, weight 400, `#FFFFFF` |
| Link | `#FFFFFF`, hover: underline |

### Social Icons
- Container: flex, gap 12-16px
- Icon: squircle 40-44px, bg `#1A1A1A`, icon `#FFFFFF` 20-24px
- Hover: bg `#333333`, scale(1.05)
- Transition: 200ms ease-out

### Icons
- X (Twitter): X icon
- LinkedIn: in icon
- GitHub: GH icon
- YouTube: play icon

---

## Validation States

### Error State
- Border: 1px `#FF4444`
- Error message: 12-14px, `#FF4444`, margin-top 4-8px
- Icon: exclamation circle (optional)

### Success State
- Border: 1px `#44FF44`
- Success message: 12-14px, `#44FF44`
- Icon: check circle (optional)

### Loading State
- Button: opacity 0.7, cursor not-allowed
- Text: "Submitting..."
- Icon: spinner (optional)
