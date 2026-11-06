# SHAIK SAMEER — LUXURY DEVELOPER PORTFOLIO
> **Cinematic Luxury + Modern Technology Personal Portfolio**  
> Tailored for **Shaik Sameer**, Undergraduate Computer Science Student & Future Software Engineer.

---

## ✦ Overview & Visual Identity

This website is custom-crafted to represent an elite personal brand. Rather than relying on generic templates, it pairs **high-fashion luxury aesthetics** (obsidian matte backgrounds, champagne gold metallic gradients, refined typography) with **modern technological precision** (ambient particle constellations, 3D card tilt, smooth scroll reveals, and full responsive behavior).

### Key Features
- **Cinematic Entrance**: Smooth dark introduction with gold light sweep revealing the monogram `SS` and portfolio name.
- **Hero Showcase**: Fullscreen presentation featuring your professional portrait with dual concentric gold rings, corner accents, and interactive 3D perspective tilt.
- **Subtle Particle Engine**: Ultra-lightweight HTML5 Canvas rendering ambient golden stardust that gently shifts with cursor movement.
- **Academic Timeline**: Verifiable reverse-chronological timeline with gold milestone indicators and embossed marks highlights (B.Sc. Honours, Intermediate 865 marks, SSC 518 marks).
- **Technical Skills**: Clear categorisation of core programming languages (C, C++) and active web explorations (HTML, CSS, JavaScript, Web Development) without artificial percentage bars.
- **Projects Feature ("Coming Soon")**: Centerpiece card with animated gold border, interactive blueprint mockups, and modular code for easy future additions.
- **Career Ambitions**: 6-card staggered grid covering software development, web specialization, and continuous learning.
- **Strengths & Multilingual Proficiency**: Dedicated cards highlighting Creativity, Communication, Self-Motivation, and language proficiencies (English, Telugu, Hindi, Urdu).
- **Contact Suite**: Direct email action (`sameersk1818@gmail.com`), one-click clipboard copy with toast notifications, verified social links (GitHub & LinkedIn), and client-validated inquiry form.
- **Accessibility & Performance**: Supports `prefers-reduced-motion`, full keyboard navigation, zero external heavy dependencies, and optimized asset loading.

---

## ✦ Project Structure

```text
shaik-sameer-portfolio/
│
├── index.html                   # Complete semantic HTML5 structure with rich SEO metadata
├── README.md                    # Project documentation & customization guide
│
└── assets/
    ├── css/
    │   ├── style.css            # Master stylesheet (luxury tokens, glassmorphism, responsive grid)
    │   └── animations.css       # Keyframe animations (gold light sweep, curtain reveal, pulses)
    │
    ├── js/
    │   ├── main.js              # Core interactivity (scroll spy, mobile drawer, tilt, validation)
    │   └── particles.js         # Lightweight ambient gold stardust canvas engine
    │
    ├── images/
    │   └── sameer-portrait.jpg  # Your high-resolution studio portrait
    │
    └── icons/
        └── favicon.svg          # Bespoke SS Monogram luxury vector favicon
```

---

## ✦ How to Run & Preview Locally

You don't need any complex dependencies or build steps! You can run this website directly:

### Option 1: Direct Browser Launch
Simply double-click `index.html` or right-click and choose **Open with > Google Chrome** (or Edge/Firefox).

### Option 2: VS Code Live Server
If you use VS Code:
1. Install the **Live Server** extension.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✦ How to Add Future Projects

When you are ready to display your real projects, open `index.html`, navigate to the `<!-- ==================== 7. PROJECTS SHOWCASE ==================== -->` section, and paste this block into `.future-blueprints-grid` or duplicate it:

```html
<div class="skill-card project-card reveal-init reveal-up">
  <div class="skill-header">
    <div class="skill-icon-wrap">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    </div>
    <div>
      <h4 class="skill-name">Project Title Here</h4>
      <span class="skill-meta">Web Application • JavaScript</span>
    </div>
  </div>
  <p class="skill-desc">
    Concise description of the problem solved, architecture used, and real-world results.
  </p>
  <div class="skill-tags">
    <span class="skill-tag">HTML5 / CSS3</span>
    <span class="skill-tag">JavaScript</span>
    <span class="skill-tag">Git</span>
  </div>
  <div style="margin-top: 18px; display: flex; gap: 12px;">
    <a href="https://github.com/sameer18180/project-repo" target="_blank" class="btn-copy-email">GitHub Code ↗</a>
    <a href="https://yourprojectdemo.com" target="_blank" class="btn-copy-email">Live Preview ↗</a>
  </div>
</div>
```

---

## ✦ Deploying to GitHub Pages (Free Hosting)

1. Create a repository on GitHub named `portfolio` or `sameer18180.github.io`.
2. Push all files from `shaik-sameer-portfolio/` into the `main` branch.
3. In GitHub, go to **Settings > Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your portfolio will be live at `https://sameer18180.github.io` within minutes!

---

## ✦ Design System Tokens

| Token | Value / Description | Usage |
| :--- | :--- | :--- |
| `--bg-primary` | `#070709` | Deep matte black canvas background |
| `--bg-secondary` | `#0d0e13` | Dark charcoal section contrast |
| `--bg-card` | `rgba(18, 19, 27, 0.72)` | Translucent glassmorphism cards |
| `--gold-400` | `#D4AF37` | Signature metallic classic gold |
| `--gold-gradient` | `linear-gradient(135deg, #FFF5D6, #E6CA7E, #D4AF37, #9E7412)` | Text titles, buttons, icons |
| `--font-serif` | `'Cinzel', serif` | Majestic luxury headings & monograms |
| `'Plus Jakarta Sans'` | Clean geometric modern sans | High legibility body text & labels |
