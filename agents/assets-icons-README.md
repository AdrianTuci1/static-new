# Iconițe StaticLabs

## Instrucțiuni Generale

Toate iconițele sunt **SVG line-art**, **monocrom**, **sharp corners** (border-radius 0).

### Proprietăți SVG Standard
```css
.icon {
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
```

### Culoare
- Pe background dark (`#0A0A0A`): `#FFFFFF`
- Pe background light (`#F5F5F0`): `#000000`
- Folosește `currentColor` pentru a moșteni culoarea părintelui

### Dimensiuni Standard
| Dimensiune | Utilizare |
|------------|-----------|
| 20px | Butoane, workflow nodes |
| 24px | Navbar, iconițe standard |
| 32px | Săgeți, external links |
| 48-56px | Container icons (stats grid) |
| 80-120px | Gauge charts, decorative |

---

## Lista Completă de Iconițe

### Logo & Brand
| Nume fișier | Descriere | ViewBox |
|-------------|-----------|---------|
| `logo-staticlabs.svg` | Text "staticlabs" + icon fulger | - |
| `icon-bolt.svg` | Fulger/săgeată (logo icon) | 24x24 |

### Navigație & UI
| Nume fișier | Descriere | ViewBox |
|-------------|-----------|---------|
| `icon-hamburger.svg` | 2 linii orizontale (menu) | 24x24 |
| `icon-close.svg` | X / ✕ (close) | 24x24 |
| `icon-arrow-up-right.svg` | Săgeată diagonală ↗ | 24x24 |
| `icon-arrow-right.svg` | Săgeată dreapta → | 24x24 |
| `icon-grid.svg` | Grid / ◫ (button icon) | 20x20 |
| `icon-wave.svg` | Wave / 〰 (decorative) | 24x24 |

### Stats Grid Icons
| Nume fișier | Descriere | ViewBox |
|-------------|-----------|---------|
| `icon-database.svg` | Baze de date / coin stack (funding) | 24x24 |
| `icon-at.svg` | @ / spirală (engagement) | 24x24 |
| `icon-chart-up.svg` | Grafic cu săgeată în sus (growth) | 24x24 |
| `icon-handshake.svg` | Strângere de mâini (partnership) | 24x24 |

### Workflow Nodes
| Nume fișier | Descriere | ViewBox |
|-------------|-----------|---------|
| `icon-email.svg` | Plic (email trigger) | 20x20 |
| `icon-edit.svg` | Creion (edit fields) | 20x20 |
| `icon-bolt-small.svg` | Fulger (AI agent) | 20x20 |
| `icon-code.svg` | Code / </> | 20x20 |
| `icon-send.svg` | Avion hârtie (telegram) | 20x20 |
| `icon-branch.svg` | Săgeată condițională (if) | 20x20 |
| `icon-play.svg` | Play (send email) | 20x20 |

### Social Media
| Nume fișier | Descriere | ViewBox |
|-------------|-----------|---------|
| `icon-x.svg` | X (Twitter) | 20x20 |
| `icon-linkedin.svg` | LinkedIn | 20x20 |
| `icon-github.svg` | GitHub | 20x20 |
| `icon-youtube.svg` | YouTube | 20x20 |

### Gauge Charts (About Page)
| Nume fișier | Descriere | ViewBox |
|-------------|-----------|---------|
| `gauge-secure.svg` | Gauge Secure Guard | 120x120 |
| `gauge-agent.svg` | Gauge Agent Build | 120x120 |
| `gauge-cloud.svg` | Gauge Cloud Scale | 120x120 |
| `gauge-data.svg` | Gauge Data Mining | 120x120 |

---

## Export din Figma / Design Tool

1. Selectează iconița în Figma
2. Export ca SVG
3. Curăță codul:
   - Elimină `fill` attributes (folosește `stroke`)
   - Elimină `width` și `height` (folosește `viewBox`)
   - Elimină clase CSS inline
   - Păstrează doar `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`
4. Optimizează cu [SVGOMG](https://jakearchibald.github.io/svgomg/)
5. Salvează în `assets/icons/`

---

## Exemplu SVG

```svg
<!-- icon-bolt.svg -->
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

```svg
<!-- icon-hamburger.svg -->
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 8H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M4 16H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

```svg
<!-- icon-arrow-up-right.svg -->
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 17L17 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 7H17V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Utilizare în React

```tsx
import { ReactComponent as IconBolt } from './assets/icons/icon-bolt.svg';

// Sau cu sprite sheet
import Icons from './assets/icons/sprite.svg';

// Utilizare
<IconBolt className="w-6 h-6 text-white" />
// sau
<svg className="w-6 h-6 text-white">
  <use href={`${Icons}#icon-bolt`} />
</svg>
```

---

## Note
- Toate iconițele sunt **monocrom** (o singură culoare)
- Nu folosiți iconițe cu fill (umplere), doar stroke (contur)
- Dimensiunile sunt în `viewBox`, nu în `width`/`height`
- Folosiți `currentColor` pentru a permite schimbarea culorii via CSS
