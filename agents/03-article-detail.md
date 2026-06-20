# Pagina: Article Detail

## Structură Completă

Pagina de articol individual conține următoarele secțiuni:

1. **Navbar** (fixed, prezent pe toată pagina)
2. **Article Hero Section** (dark bg, gradient + noise)
3. **Article Content** (light bg)
4. **Related Articles** (optional, light bg)
5. **Footer** (dark bg)

---

## Article Hero Section

### Layout
- Full-width, ~60-80vh
- Background: gradient complex + noise texture + pattern puncte
- Content: aliniat stânga, ~50-60% din lățime
- Padding: 100-140px top, 60-80px bottom

### Gradient Background
- Gradient: `#0A0A0F` → `#1A1A3E` → `#2D2B6E`
- Noise texture: overlay, 3-5% opacity
- Pattern: puncte/squares cu densitate variabilă ("digital dust")
- Grid lines: subtile, verticale

### Grid
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                                    [≡ MENU]         │
│                                                             │
│  [RSS ICON]  ARTICLE                                        │
│                                                             │
│  "What It Takes to Turn AI                                 │
│   Into a Business Asset"                                    │
│                                                             │
│  We explore the infrastructure, logic, and design...       │
│                                                             │
│  [⏱ 12 MIN READ]  [📅 JAN 15, 2026]                      │
│                                                             │
│  Lead paragraph text...                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elemente
| Element | Conținut | Stil |
|---------|----------|------|
| Headline | "What It Takes to Turn AI Into a Business Asset" | 56-72px, weight 700, `#FFFFFF`, line-height 1.1 |
| Lead Paragraph | "We explore the infrastructure, logic, and design patterns that separate experimental AI from production-grade systems." | 24-32px, weight 400-500, `#FFFFFF`, line-height 1.4 |
| Meta | "⏱ 12 MIN READ" + "📅 JAN 15, 2026" | Monospace, 13-14px, weight 500, `#A0A0B0` |

### Meta Icons
- Clock icon: ⏱ sau SVG custom
- Calendar icon: 📅 sau SVG custom
- Font: monospace, 13-14px
- Culoare: `#9CA3AF` sau `#A0A0B0`

---

## Article Content

### Layout
- Full-width
- Background: `#F5F5F0` (warm off-white) sau `#FFFFFF`
- Padding: 80-120px vertical
- Container: max-width ~800-900px, centrat sau stânga-aliniat

### Typography Content
| Element | Stil |
|---------|------|
| H2 | 32-40px, weight 500, `#0A0A0A`, line-height 1.2, margin-top 48-64px |
| H3 | 24-28px, weight 500, `#0A0A0A`, line-height 1.3, margin-top 40-48px |
| Paragraph | 18-20px, weight 400, `#1A1A1A`, line-height 1.7, margin-bottom 24-32px |
| Blockquote | 24-32px, weight 400, `#4A4A4A`, line-height 1.4, border-left 2px `#000000`, padding-left 24px, italic |
| List | 18-20px, weight 400, `#1A1A1A`, line-height 1.7, bullet: disc sau custom |
| Code | Monospace, 14px, `#E8E8E8` bg, `#0A0A0A` text, padding 2-4px, border-radius 0 |
| Code Block | Monospace, 14px, `#0A0A0A` bg, `#FFFFFF` text, padding 24px, overflow-x auto |
| Link | `#000000`, underline, hover: no underline |
| Image | Full-width, border-radius 0, margin 48-64px vertical |
| Caption | 14px, weight 400, `#666666`, italic, text-align center |
| Horizontal Rule | 1px solid `#D0D0D0`, margin 48-64px vertical |

### Drop Cap (Optional)
- Prima literă din primul paragraf
- Dimensiune: 72-96px, weight 700
- Float: left
- Line-height: 0.8
- Margin-right: 16px

---

## Article Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ARTICLE HERO (gradient + noise bg)                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  H2 Section Title                                   │   │
│  │                                                     │   │
│  │  Paragraph text...                                  │   │
│  │  Paragraph text...                                  │   │
│  │                                                     │   │
│  │  ┌─────────────────────────────────────────────┐     │   │
│  │  │                                             │     │   │
│  │  │  [IMAGE FULL-WIDTH]                         │     │   │
│  │  │                                             │     │   │
│  │  └─────────────────────────────────────────────┘     │   │
│  │  Caption text...                                     │   │
│  │                                                     │   │
│  │  > Blockquote text...                               │   │
│  │                                                     │   │
│  │  H3 Subsection Title                                │   │
│  │                                                     │   │
│  │  • List item 1                                      │   │
│  │  • List item 2                                      │   │
│  │  • List item 3                                      │   │
│  │                                                     │   │
│  │  ┌─────────────────────────────────────────────┐     │   │
│  │  │  ```code block```                            │     │   │
│  │  └─────────────────────────────────────────────┘     │   │
│  │                                                     │   │
│  │  Paragraph text...                                  │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  RELATED ARTICLES (optional)                               │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Related Articles (Optional)

### Layout
- Full-width
- Background: `#F5F5F0` sau `#E8E8E8`
- Padding: 80-120px vertical
- Grid: 3 coloane egale sau 2 coloane

### Header
| Element | Stil |
|---------|------|
| Label | "//// RELATED" sau "//// MORE ARTICLES" |
| Headline | "Continue Reading" sau "Related Posts" |

### Card-uri
- Vezi `02-blog.md` - Article Card Variants (Variant 3: Compact)

---

## Footer

Vezi `01-homepage.md` - Footer pentru detalii complete.

---

## Responsive Breakpoints

### Desktop (1024px+)
- Article content: max-width 800-900px, centrat sau stânga-aliniat
- Hero headline: 56-72px
- Images: full-width în container

### Tablet (768-1023px)
- Article content: max-width 100%, padding 40-60px
- Hero headline: 40-48px
- Images: full-width

### Mobile (< 768px)
- Article content: max-width 100%, padding 20-24px
- Hero headline: 32-40px
- Lead paragraph: 18-20px
- Images: full-width, margin 24-32px vertical
- Meta: stacked vertical

---

## Checklist Article Detail Page

- [ ] Navbar (fixed, transparent)
- [ ] Article Hero Section (gradient + noise bg)
- [ ] Headline (H1)
- [ ] Lead Paragraph (subtitle/excerpt)
- [ ] Meta (reading time + date)
- [ ] Article Content (rich text)
- [ ] H2, H3 headings
- [ ] Paragraphs
- [ ] Blockquotes
- [ ] Lists (ordered/unordered)
- [ ] Images with captions
- [ ] Code blocks
- [ ] Inline code
- [ ] Links
- [ ] Horizontal rules
- [ ] Related Articles (optional)
- [ ] Footer
- [ ] s ( + )

---

## Typography Scale for Content

| Element | Font | Size | Weight | Line-height | Color |
|---------|------|------|--------|-------------|-------|
| H1 (Hero) | Sans | 56-72px | 700 | 1.1 | `#FFFFFF` |
| H2 | Sans | 32-40px | 500 | 1.2 | `#0A0A0A` |
| H3 | Sans | 24-28px | 500 | 1.3 | `#0A0A0A` |
| H4 | Sans | 20-24px | 500 | 1.3 | `#0A0A0A` |
| Lead | Sans | 24-32px | 400 | 1.4 | `#FFFFFF` (hero) / `#1A1A1A` (content) |
| Body | Sans | 18-20px | 400 | 1.7 | `#1A1A1A` |
| Body Small | Sans | 16px | 400 | 1.6 | `#4A4A4A` |
| Caption | Sans | 14px | 400 | 1.4 | `#666666` |
| Blockquote | Sans | 24-32px | 400 | 1.4 | `#4A4A4A` |
| Code | Mono | 14px | 400 | 1.6 | `#0A0A0A` |
| Code Block | Mono | 14px | 400 | 1.6 | `#FFFFFF` |
| Meta | Mono | 13-14px | 500 | 1.4 | `#A0A0B0` |

---

## Spacing for Content

| Element | Margin-top | Margin-bottom |
|---------|-----------|---------------|
| H2 | 48-64px | 24-32px |
| H3 | 40-48px | 20-24px |
| H4 | 32-40px | 16-20px |
| Paragraph | 0 | 24-32px |
| Blockquote | 32-40px | 32-40px |
| List | 24-32px | 24-32px |
| Image | 48-64px | 48-64px |
| Code Block | 32-40px | 32-40px |
| Horizontal Rule | 48-64px | 48-64px |

---

## Image Handling

### Article Images
- Full-width în container
- Border-radius: 0 (sharp corners)
- Margin: 48-64px vertical
- Caption: centered, 14px, `#666666`

### Hero Image (Optional)
- Full-bleed, absolute positioned
- Gradient overlay pentru contrast text
- Object-fit: cover

### Thumbnail ( pentru related articles)
- Vezi `02-blog.md` - Article Card Variants
