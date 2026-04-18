# Atharva Kanchan — Portfolio

Personal portfolio website built with React and Tailwind CSS. Warm editorial aesthetic combining tech, research, writing, and travel into one cohesive identity.

## 🌐 Live Demo

🔗 [View Portfolio]([https://atharvakanchan25.github.io/my-portfolio/](https://my-portfolio-beryl-tau-34.vercel.app/))
---

## Stack

- **React 18** + **Create React App**
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **framer-motion** — animations, transitions, AnimatePresence
- **Formspree** — contact form submission
- **Google Fonts** — Fraunces (serif), DM Sans, DM Mono

---

## Design System

| Token | Value |
|---|---|
| Background | `#F8F7F4` warm off-white |
| Ink | `#1A1A1A` |
| Accent | `#4F46E5` indigo |
| Accent 2 | `#6B8E23` olive |
| Warm | `#C4A882` |
| Serif | Fraunces |
| Sans | DM Sans |
| Mono | DM Mono |

---

## Project Structure

```
src/
├── components/
│   ├── SplashScreen.jsx     # AK monogram SVG draw animation
│   ├── ScrollProgress.jsx   # Spring-animated top progress bar
│   ├── Navbar.jsx           # Transparent → glass on scroll, active section highlight
│   ├── Hero.jsx             # Full-screen split, cycling identity animations (Code / Travel / Reading / Writing)
│   ├── WhatIDo.jsx          # 4 identity pillars
│   ├── Currently.jsx        # Live status widget (building, reading, listening, exploring)
│   ├── Work.jsx             # Asymmetric project grid, 8 projects
│   ├── BCICase.jsx          # Experience section (Persistent Systems + IS360)
│   ├── Certifications.jsx   # Horizontal scroll cert strip
│   ├── Testimonials.jsx     # Animated quote carousel
│   ├── Travel.jsx           # Horizontal scroll travel cards
│   ├── Writing.jsx          # Medium articles list with featured lead
│   ├── About.jsx            # Bio, skills chips, photo
│   ├── Contact.jsx          # Floating label form + social icons
│   └── NotFound.jsx         # Custom 404 page
├── styles/
│   └── index.css            # CSS variables, component classes, animations
└── App.jsx                  # Root — splash, cursor, scroll progress, layout

public/
├── index.html               # Open Graph + Twitter Card meta tags
├── 404.html                 # GitHub Pages SPA redirect
├── sitemap.xml
└── robots.txt
tailwind.config.js
```

---

## Setup

```bash
git clone https://github.com/atharvakanchan25/my-portfolio.git
cd my-portfolio
npm install
npm start
```

Visit `http://localhost:3000`

---

## Build

```bash
npm run build
```

Gzipped output: ~105KB JS, ~5.7KB CSS

---

## Sections

| Section | Description |
|---|---|
| Hero | Name, tagline, cycling SVG animations, resume CTA |
| What I Do | Code, Research, Writing, Travel pillars |
| Currently | Live status tabs |
| Work | 8 ML/AI/cloud projects in asymmetric grid |
| Experience | Persistent Systems (Agentic AI, Nov 2025 – Apr 2026) + IS360 BCI (2024) |
| Certifications | AWS, TensorFlow, Python, ML, Power BI, Docker |
| Testimonials | Quote carousel |
| Travel | Horizontal scroll reflection cards |
| Writing | Real Medium articles — philosophy, identity, AI |
| About | Bio, skills, photo |
| Contact | Form + GitHub, LinkedIn, Medium, Quora, Pinterest |

---

## Deployment

Hosted on GitHub Pages from the `main` branch.

To deploy manually:

```bash
npm run build
# then push build/ or use gh-pages package
```

---

## Contact

Atharva Kanchan — [atharvakanchan959@gmail.com](mailto:atharvakanchan959@gmail.com)
