# SHAE — Official Web Architecture

```
   ____  _                 
  / ___|| |__   __ _  ___  
  \___ \| '_ \ / _` |/ _ \ 
   ___) | | | | (_| |  __/ 
  |____/|_| |_|\__,_|\___| 
```

> **Swiss International Typographic Style meets 1-Bit Ditherpunk Architecture.**  
> High-performance static web portal for **SHAE**, a post-ceremony programming language built on Rust.

---

## ⚡ Core Philosophy & Aesthetics

* **Aesthetic**: Swiss Brutalism fused with Retro Bitmap / Halftone Dithering. Clinical, high-contrast, lightning-fast.
* **Border Radius**: Strictly `0px` (`rounded-none` everywhere). No soft curves, no bubbly UI.
* **Color Palette**:
  - Primary Background: `#080808` (Stark Void Black)
  - Primary Foreground: `#F5F5F5` (Studio White)
  - Secondary Accents: `#181818` (Deep Charcoal)
  - Hairline Borders: `#2E2E2E` to `#404040` (Crisp 1px grids)
  - Hover Inversion: `#FFFFFF` background with `#000000` text (0ms transition delay)
* **Typography**:
  - Headings: Bold Helvetica / Neue Haas Grotesk (`tracking-tighter`, massive scale)
  - Micro-Data & Coordinates: JetBrains Mono / SF Mono (`tracking-widest`, uppercase)
* **1-Bit Procedural Bayer Dither Canvas**:
  - Native 2D canvas with 8x8 Bayer matrix thresholding.
  - Interactive mouse perturbation and wave mode switching.
  - Sub-millisecond frame rendering with zero external dependencies.

---

## 📦 Repository Structure

```
├── astro.config.mjs          # Astro 5 configuration with Tailwind integration
├── tailwind.config.mjs       # Custom Swiss Brutalist design tokens
├── package.json              # Zero-heavy-runtime dependency manifest
├── tsconfig.json             # TypeScript configuration
├── public/
│   └── favicon.svg           # 1-bit crisp pixel favicon
└── src/
    ├── layouts/
    │   └── RootLayout.astro  # Base HTML5 layout with metadata and halftone layer
    ├── components/
    │   ├── Navigation.astro  # Sticky hairline top bar with pixel LED & hover inversion
    │   ├── Hero.astro        # Typographic hero with stats barometer & install script
    │   ├── KineticText.astro # Mechanical stepped typographic state rotator
    │   ├── DitherCanvas.astro# Native 1-bit Bayer 8x8 procedural dithering canvas
    │   ├── ManifestoGrid.astro# Rigorous 3-column Swiss architectural grid
    │   ├── ArchiveList.astro # Technical ledger with syntax drawers
    │   └── Footer.astro      # Machine clock telemetry & return to top
    ├── styles/
    │   └── global.css        # Halftone radial grids, resets, and mechanical curves
    └── pages/
        └── index.astro       # Assembled single-page application
```

---

## 🛠️ Development & Building

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 License

MIT &copy; 2026 [spdedsec](https://github.com/spdedsec)
