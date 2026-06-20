# Pagina: Homepage

## Structură Completă

Pagina homepage conține următoarele secțiuni, în ordine:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Hero Section** (dark bg, fullscreen)
3. **Integrations Section** (dark bg)
4. **Features Section** (4 piloni, dark bg)
5. **Statistics Section** (dark bg)
6. **Case Studies Section** (light bg, 4 proiecte: Octomus, Thunder, StatsParrot, PixTooth)
7. **Product Demo Section** (dark bg, UI mockup)
8. **Features Tabs Section** (dark bg)
9. **Our Approach Section** (light bg, split-screen)
10. **CTA / Newsletter Section** (dark bg)
11. **Footer** (dark bg)

**Notă:** Grid lines foarte subțiri (1px, `#1A1A1A`) sunt vizibile în toate secțiunile dark bg. Vezi `00-design-system.md` - Grid Lines.

---

## Navbar

### Layout
- Poziție: fixed, top: 0, left: 0, right: 0
- Z-index: 50+
- Height: ~64-80px
- Padding: 32-40px orizontal
- Background: transparent (pe hero), poate deveni solid la scroll

### Elemente
| Element | Poziție | Detalii |
|---------|---------|---------|
| Logo "staticlabs" | Stânga | Text + icon fulger, 20-24px, bold |
| Hamburger Menu | Dreapta | 2 linii orizontale, 24px wide, 2px grosime, 6-8px gap |

### Comportament
- La click pe hamburger: deschide **Nav Overlay** (fullscreen)
- Logo: click → navigare la homepage
- Pe scroll: poate adăuga background blur/solid

---

## Hero Section

### Layout
- Full viewport height (100vh) sau ~90vh
- Background: imagine abstractă 3D geometrică, blur, grayscale
- Overlay: gradient întunecat pentru contrast text
- Content: aliniat stânga-jos, ~40% din lățime

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│                                                             │
│  ┌─────────────────────────────────────┐                   │
│  │ "Power your future with AI"          │                   │
│  │                                      │                   │
│  │ Deploy custom enterprise agents...    │                   │
│  │ Scale your intelligence...            │                   │
│  │                                      │                   │
│  │ [◫ Build A Workflow]                  │                   │
│  └─────────────────────────────────────┘                   │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Headline | "Power your future with AI" | 72-96px, weight 300, alb |
| Subheadline | "Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with StaticLabs today." | 16-18px, weight 400, gri deschis `#A0A0A0` |
| CTA Button | "◫ Build A Workflow" | Buton primary, icon grid + text |

### Culori
- Background: `#0A0A0A` cu overlay imagine
- Text: `#FFFFFF`
- Text secundar: `#A0A0A0`
- Button bg: `#F5F5F5`, text: `#000000`

### Spațiere
- Padding stânga: 48-64px
- Padding jos: 48-64px
- Max-width text: ~600-700px
- Gap headline → subheadline: 24px
- Gap subheadline → button: 32px

---

## Integrations Section

### Layout
- Full-width, padding generos
- Background: `#0A0A0A`
- Content: aliniat stânga, ~60% din lățime

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Icon Stack | 4 cercuri suprapuse cu logo-uri (Perplexity, OpenAI, Anthropic, etc.) | Cercuri 48-56px, border 1px `#333333`, suprapunere -8px |
| Headline | "Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. Build agents that don't just process, they understand." | 48-56px, weight 400, gradient text (alb → gri) |
| Subheadline | "Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request." | 16-18px, weight 400, `#A0A0A0` |

### Gradient Text Effect
- Primele rânduri: `#FFFFFF` (opacitate 100%)
- Ultimele rânduri: fade progresiv la `#333333` (opacitate 0)
- Implementare: `background-clip: text` cu gradient linear

### Grid Lines
- 4-5 linii verticale subtile care împart ecranul
- Culoare: `#1A1A1A` sau `rgba(255,255,255,0.05)`
- Grosime: 1px

---

## Features Section (4 Piloni)

### Layout
- Full-width, edge-to-edge
- Background: `#0A0A0A`
- Grid: 4 coloane egale (25% fiecare)
- Separatoare verticale: 1px `#1A1A1A`
- Padding vertical: 80-120px

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│  [Ilustrație]    [Ilustrație]    [Ilustrație]    [Ilustrație] │
│                                                             │
│  Secure Guard    Agent Build     Cloud Scale     Data Mining│
│                                                             │
│  Description...  Description...  Description...  Description│
└─────────────────────────────────────────────────────────────┘
       Col 1          Col 2          Col 3          Col 4
```

### Elemente per Coloană
| Element | Stil |
|---------|------|
| Ilustrație | SVG isometric line-art, 180-220px înălțime, centrat |
| Titlu | Monospace, 24-28px, weight 500, Title Case, `#FFFFFF` |
| Descriere | Sans-serif, 16-18px, weight 400, `#A0A0A0`, line-height 1.6 |

### Feature Items
1. **Secure Guard** - Lacăt cu angrenaj (securitate + mecanism)
2. **Agent Build** - Două componente conectate prin lanț (modularitate)
3. **Cloud Scale** - Ventilator/răcitor de sistem (infrastructură)
4. **Data Mining** - Server/database + card/document (stocare + procesare)

### Background Pattern
- Dot grid subtil pe fundal
- Puncte: `#2A2A2A` sau `#333333`
- Dimensiune punct: 1-2px, gap: 20-40px

---

## Statistics Section

### Layout
- Full-width
- Background: `#0A0A0A`
- Padding: 80-120px vertical

### Header Secțiune
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// STATISTICS" | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Headline | "Quantifiable impact across every deployment. We measure success by the speed and scale of your neural ops." | 32-40px, weight 400, `#FFFFFF` |
| Button | "↓ View Report" | Buton primary, icon săgeată + text |

### Grid Statistici
```
┌────────────────────┬────────────────────┬────────────────────┐
│                    │                    │                    │
│  12ms              │  10x               │  99%               │
│  Average latency   │  Increase in       │  Uptime for        │
│  for real-time     │  manual task         │  critical agent    │
│  inference.        │  processing speed. │  infrastructure. │
│                    │                    │                    │
└────────────────────┴────────────────────┴────────────────────┘
```

- 3 coloane egale
- Separatoare verticale: 1px `#222222`
- Corner accents: L-shape minimal în colțul dreapta-sus al fiecărui card

### Elemente per Statistică
| Element | Stil |
|---------|------|
| Număr | 64-80px, weight 300, `#FFFFFF`, line-height 1.0 |
| Descriere | Monospace, 14-16px, weight 400, `#A0A0A0`, line-height 1.5 |

### Statistici
1. **12ms** - "Average latency for real-time inference."
2. **10x** - "Increase in manual task processing speed."
3. **99%** - "Uptime for critical agent infrastructure."

---

## Case Studies Section

### Layout
- Full-width
- Background: `#E8E8E8` (light gray)
- Padding: 80-120px vertical

### Header Secțiune
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// CASE STUDIES" | 11-12px, uppercase, tracking 0.1em, `#666666` |
| Headline | "Proven neural solutions" | 48-56px, weight 400, `#0A0A0A` |
| Subheadline | "We partner with industry leaders..." | 16-18px, weight 400, `#4A4A4A` |

### Grid Proiecte
```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────┐  ┌─────────────────────────────────────────┐  │
│  │         │  │ //2026                                  │  │
│  │  CIGNA  │  │                                         │  │
│  │  IMAGE  │  │  Octomus AI Assistant      [»]   │  │
│  │         │  │                                         │  │
│  │         │  │  Revolutionizing patient care...         │  │
│  └─────────┘  └─────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────────────────────────────────────┐  │
│  │  thunder  │  │ //2026                                  │  │
│  │  LOGO   │  │                                         │  │
│  │         │  │  Thunder Workflow Engine     [»]   │  │
│  │         │  │                                         │  │
│  │         │  │  We automated Thunder's member...          │  │
│  └─────────┘  └─────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────────────────────────────────────┐  │
│  │         │  │ //2026                                  │  │
│  │  StatsParrot │  │                                         │  │
│  │         │  │  StatsParrot Analytics      [»]   │  │
│  │         │  │                                         │  │
│  └─────────┘  └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- 4 coloane: Logo (~25%), An (~25%), Titlu+Desc (~40%), Săgeată (~10%)
- Separator orizontal subtil între rânduri: 1px `#D0D0D0`

### Elemente per Rând
| Element | Stil |
|---------|------|
| Logo Client | Imagine sau text-based, centrat vertical |
| An | "//2026", monospace, 14-16px, `#666666` |
| Titlu | Sans-serif, 24-28px, weight 500, `#0A0A0A` |
| Descriere | Monospace, 13-14px, weight 400, `#4A4A4A` |
| Săgeată | "»", 24-32px, weight 300, `#0A0A0A` |

### Proiecte
1. **Octomus AI Assistant** - "Revolutionizing patient care..."
2. **Thunder Workflow Engine** - "We automated Thunder's member data management using secure AI to provide personalized care and clinical insights."
3. **StatsParrot Analytics** - "We deployed a custom LLM to automate StatsParrot's provider relations, reducing ticket latency by eighty-five percent."

---

## Product Demo Section

### Layout
- Full-width
- Background: `#0A0A0A`
- Padding: 80-120px vertical

### Header Secțiune
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// OUR PRODUCT" | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Headline | "Build logic at scale" | 64-72px, weight 400, `#FFFFFF` |
| Subheadline | "Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding—just pure logic." | 18px, weight 400, `#A0A0A0` |

### UI Mockup
- Browser mockup cu 3 puncte (traffic lights)
- Bară de adresă/căutare
- Conținut: interfață workflow cu noduri conectate
- Fundal canvas: dot grid `#333333`
- Noduri: `#1A1A1A`, border `#333333`, border-radius 8-12px
- Nod activ: border `#FFFFFF`
- Conectori: linii 1px `#555555`

### Noduri Workflow
1. **Email Trigger (IMAP)** - icon plic
2. **Edit Fields Manual** - icon creion
3. **AI Agent Tools Agent** - icon fulger (nod central, evidențiat)
4. **Code** - icon `</>`
5. **Edit Fields1 Manual** - icon creion
6. **Telegram sendAndWait message** - icon avion hârtie
7. **If** - icon săgeată condițională
8. **Send Email Send** - icon săgeată/play

### Sidebar Mockup
- Toggle: "AI AGENT" / "AI CHAT"
- Secțiune "STACK" cu iconițe integrări
- Buton "+" (adăugare)

---

## Features Tabs Section

### Layout
- Full-width
- Background: `#0A0A0A`
- Padding: 80-120px vertical

### Header Secțiune
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// PRODUCT FEATURES" | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Headline | "Engineered for autonomy" | 56-72px, weight 400, `#FFFFFF` |
| Subheadline | "Go beyond simple chat interfaces. StaticLabs provides the underlying architecture to build, test, and scale enterprise-grade agents." | 16-18px, weight 400, `#A0A0A0` |

### Tab Navigation
```
┌────────────────┬────────────────┬────────────────┬────────────────┐
│   [🥽]         │   [📊]         │   [🏃]         │   [🖥️]         │
│  DISCOVERY     │  ANALYSIS      │  TRAINING      │  DEPLOY        │
│                │                │                │                │
│  (inactive)    │  (inactive)    │  (inactive)    │  (active)      │
│  bg: #0D0D0D  │  bg: #0D0D0D  │  bg: #0D0D0D  │  bg: #E8E8E8  │
│  text: #808080 │  text: #808080 │  text: #808080 │  text: #000000 │
└────────────────┴────────────────┴────────────────┴────────────────┘
```

- 4 tab-uri orizontale, full-width, fiecare ~25%
- Height: 60-80px
- Icon + label uppercase, centrat
- Stare activă: fundal deschis, text închis
- Stare inactivă: fundal închis, text gri
- Border-radius: 0

### Tab Content (exemplu DEPLOY)
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────┐  ┌─────────────────────────────────┐  │
│  │ [Mockup UI]        │  │ "Push your agents to          │  │
│  │ Browser window     │  │  production with a single   │  │
│  │ with chat interface│  │  click. Our secure edge       │  │
│  │                    │  │  infrastructure ensures       │  │
│  │                    │  │  sub-50ms latency globally."  │  │
│  └────────────────────┘  └─────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- 2 coloane: mockup stânga (~40-50%), text dreapta (~50-60%)
- Text: 20-24px, weight 400, `#FFFFFF`

---

## Our Approach Section

### Layout
- Full-width
- Background: `#E8E8E8` (light gray) cu noise texture
- Split-screen: imagine stânga (~45%), conținut dreapta (~55%)
- Padding: 80-120px vertical

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌────────────────────────────────────┐  │
│  │              │  │ //// OUR APPROACH                 │  │
│  │   [IMAGE]    │  │                                   │  │
│  │  abstract    │  │  "Built for the long term"        │  │
│  │  digital     │  │                                   │  │
│  │  rain/matrix │  │  We don't just ship code; we      │  │
│  │              │  │  architect neural ecosystems...   │  │
│  │              │  │                                   │  │
│  │              │  │  ┌──────────┐  ┌──────────┐      │  │
│  │              │  │  │ [ICON]   │  │ [ICON]   │      │  │
│  │              │  │  │ Prime    │  │ Total    │      │  │
│  │              │  │  │ Logic    │  │ Clarity  │      │  │
│  │              │  │  │ Desc...  │  │ Desc...  │      │  │
│  │              │  │  └──────────┘  └──────────┘      │  │
│  │              │  │  ┌──────────┐                    │  │
│  │              │  │  │ [ICON]   │                    │  │
│  │              │  │  │ Fast     │                    │  │
│  │              │  │  │ Cycles   │                    │  │
│  │              │  │  │ Desc...  │                    │  │
│  │              │  │  └──────────┘                    │  │
│  └──────────────┘  └────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Imagine | Abstract digital rain/matrix, monocromă, textură granulară | Full-height în coloană stângă |
| Label | "//// OUR APPROACH" | 11-12px, uppercase, tracking 0.1em, `#666666` |
| Headline | "Built for the long term" | 48-56px, weight 400, `#0A0A0A` |
| Descriere | "We don't just ship code; we architect neural ecosystems..." | 16-18px, weight 400, `#4A4A4A` |
| Feature Cards | Grid 2×2 | Icon + titlu monospace + descriere sans-serif |

### Feature Cards (3 vizibile)
1. **Prime Logic** - Icon cub 3D cu stea, titlu monospace, desc sans-serif
2. **Total Clarity** - Icon ochi/iris, titlu monospace, desc sans-serif
3. **Fast Cycles** - Icon fulger/săgeată circulară, titlu monospace, desc sans-serif

---

## CTA / Newsletter Section

### Layout
- Full-width
- Background: `#0A0A0A` cu gradient overlay și noise texture
- Padding: 80-120px vertical
- Content: aliniat stânga, ~60% din lățime

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Label | "//// GET STARTED" | 11-12px, uppercase, tracking 0.1em, `#E0E0E0` |
| Headline | "Get smarter about AI systems" | 56-72px, weight 400, `#FFFFFF` |
| Descriere | "Join the teams that use StaticLabs to power their neural infrastructure." | 16-18px, weight 400, `#A0A0A0` |
| Form | Input email + Button "Subscribe →" | Input: `#2A2A2A` bg, `#4A4A4A` border, placeholder `#666666`. Button: `#E8E8E8` bg, `#1A1A1A` text |

### Form Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Email Address                                              │
│  ┌────────────────────────────────────┐ ┌────────────────┐  │
│  │ your@email.com                     │ │ → Subscribe    │  │
│  └────────────────────────────────────┘ └────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- Input: full-width minus button width
- Button: icon săgeată + text, fixed width
- Border-radius: 0 (sharp corners)
- Height: 56-64px

### Efecte Background
- Gradient: `#0A0A0A` → `#1A1A1A` (mid-left)
- Noise/grain overlay: 3-5% opacity
- Horizontal light streaks: aurora effect, opacity redusă
- Grid lines subtile

---

## Footer

### Layout
- Full-width
- Background: `#0A0A0A`
- Padding: 60-80px orizontal, 40-60px vertical (top)

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

- 4 coloane egale pentru link-uri
- Gap coloane: 40-60px
- Gap link-uri per coloană: 16-20px

### Elemente
| Element | Stil |
|---------|------|
| Titlu coloană | 11-12px, uppercase, tracking 0.1em, `#808080` |
| Link-uri | 18-22px, weight 400, `#A0A0A0`, hover: `#FFFFFF` |
| Social icons | Squircle 40-44px, bg `#1A1A1A`, icon 20-24px |
|  | "staticlabs", 200-300px, weight 900, `#E8E8E8`, lowercase, letter-spacing -0.05em |
| Copyright | 12-14px, monospace, `#666666` |

### 
- Font: display (Clash Display, Monument Extended, Neue Machina)
- Dimensiune: 200-300px sau viewport-relative (`clamp()`)
- Greutate: 900 (Black/Extra Bold)
- Culoare: `#E8E8E8` / `#F0F0F0` (subtil)
- Letter-spacing: -0.05em
- Lowercase: "staticlabs"
- Overflow: crop la margini
- Full-width, centrat

---

## s (Fixed)

### Poziție
- Fixed, bottom-right corner
- Right: 16-24px
- Bottom: 16-24px
- Z-index: 40

### 
- Layout: thumbnail + text + preț
- Fundal: `#E8E8E8` sau `#F0F0F0`
- Border: 1px solid `#DDDDDD`
- Border-radius: 12-16px
- Padding: 12-16px
- Font: 14px, weight 500, `#000000`
- Preț: 12-14px, weight 400, `#666666`

- Layout: icon  + text
- Fundal: alb sau transparent
- Border: 1px solid `#E0E0E0`
- Border-radius: 8-12px (pill shape)
- Padding: 8-12px vertical, 16px horizontal
- Text: ""
- Font: 12-14px, weight 500
- Icon: logo  (săgeată/F stilizată)

---

## Nav Overlay (Fullscreen Menu)

### Layout
- Fullscreen overlay: 100vw, 100vh
- Background: `#0A0A0A`
- Z-index: 100
- Poziție: fixed

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
| Close | Dreapta-sus, icon X, 24px |
| Link-uri nav | Centrat vertical în jumătatea dreaptă, 48-64px, weight 300, `#FFFFFF` |
| Logo-uri parteneri | Sub link-uri, thunder + octomus, gri deschis |
| Hero text | Stânga-jos, headline + subheadline + CTA (din hero section) |

### Link-uri Navigație
1. AI Strategy
2. Custom Agents
3. Process Automation
4. Data Intelligence

### Comportament
- La click pe hamburger: overlay slide-in sau fade-in
- La click pe close sau Escape: overlay close
- La click pe link: navigare + close overlay
- Animare: 300-400ms, ease-out

---

## Responsive Breakpoints

### Desktop (1024px+)
- Toate secțiunile ca în layout-urile de mai sus
- 4 coloane features, 3 coloane statistici, 4 coloane footer
- Split-screen pentru Our Approach

### Tablet (768-1023px)
- Features: 2 coloane (2×2 grid)
- Statistics: 3 coloane (păstrate)
- Case studies: logo deasupra textului, 2 coloane
- Our Approach: imagine deasupra, conținut dedesubt
- Footer: 2 coloane (2×2)

### Mobile (< 768px)
- Features: 1 coloană, stivuite vertical
- Statistics: 1 coloană, stivuite vertical
- Case studies: 1 coloană, stivuite vertical
- Product Demo: scrollable, noduri mai mici
- Features Tabs: tab-uri scrollable or vertical
- Our Approach: imagine full-width, conținut dedesubt
- Footer: 1 coloană, stivuite vertical

---

## Checklist Homepage

- [ ] Navbar (fixed, transparent)
- [ ] Nav Overlay (fullscreen menu)
- [ ] Hero Section (fullscreen, background image)
- [ ] Integrations Section (icon stack + gradient text)
- [ ] Features Section (4 coloane, dot grid)
- [ ] Statistics Section (3 coloane, corner accents)
- [ ] Case Studies Section (light bg, 3 proiecte)
- [ ] Product Demo Section (UI mockup, workflow nodes)
- [ ] Features Tabs Section (4 tab-uri, mockup + text)
- [ ] Our Approach Section (split-screen, 2×2 grid)
- [ ] CTA/Newsletter Section (form email + button)
- [ ] Footer (4 coloane, , copyright)
- [ ] s ( + )
