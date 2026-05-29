# Plan — Portfolio Interactif — Électronique & Embarqué

> Statut : EN ATTENTE DE VALIDATION — ne pas générer de code avant approbation.

---

## 1. Concept visuel

Style cible : **IDE sombre / Documentation technique / PCB layout**
- Police monospace pour les titres et labels
- Grilles avec bordures fines style "trace PCB"
- Indicateurs d'état (dots, badges) style firmware/debug
- Section navigation fixe sur le côté (style IDE panel)
- Single-page : tout le contenu est sur `index.astro`, navigation par ancres

---

## 2. Palette de couleurs

Extraite de l'image de circuit imprimé fournie.

| Token                | Valeur HEX  | Usage |
|----------------------|-------------|-------|
| `--bg-base`          | `#0B1929`   | Fond global (derrière l'image PCB) |
| `--bg-surface`       | `#0E2030`   | Cartes Bento, panneaux |
| `--bg-surface-2`     | `#132B3E`   | Hover état, nested cards |
| `--accent-teal`      | `#00D4B8`   | Accent principal (traces PCB) |
| `--accent-glow`      | `#00FFD5`   | Glow / highlights animés |
| `--accent-dim`       | `#0A8F7E`   | Accent secondaire, bordures actives |
| `--text-primary`     | `#D8F0EC`   | Texte principal |
| `--text-secondary`   | `#7EB8B0`   | Labels, sous-titres |
| `--text-muted`       | `#3D7A72`   | Commentaires, placeholders |
| `--border`           | `#1A3D4F`   | Bordures des cartes |
| `--border-active`    | `#00D4B8`   | Bordure au focus/hover |

**Overlay sur le fond PCB** : `rgba(11, 25, 41, 0.82)` — permet de lire le texte tout en laissant transparaître les traces lumineuses.

---

## 3. Typographie

| Rôle          | Police                         | Fallback         |
|---------------|-------------------------------|------------------|
| Titres / Code | `JetBrains Mono`              | `monospace`      |
| Corps de texte| `Inter`                       | `sans-serif`     |
| Labels UI     | `JetBrains Mono` (smaller)    | `monospace`      |

Chargement via Google Fonts (ou Fontsource pour éviter les requêtes externes).

---

## 4. Arborescence des fichiers

```
Portfolio/
├── public/
│   ├── bg-pcb.jpg              ← image circuit imprimé fournie
│   └── favicon.ico
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    ← <html>, meta, fond PCB fixe, overlay
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SideNav.astro   ← navigation latérale fixe (style IDE sidebar)
│   │   │   └── Footer.astro    ← "v1.0.0 — build stable"
│   │   │
│   │   ├── sections/           ← une section = un bloc scroll-target
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Experience.astro
│   │   │   └── Contact.astro
│   │   │
│   │   └── ui/                 ← composants réutilisables
│   │       ├── BentoCard.astro     ← carte générique avec slots
│   │       ├── TechBadge.astro     ← badge compétence style chip composant
│   │       ├── ProjectCard.astro   ← carte projet étendue
│   │       ├── SectionTitle.astro  ← titre avec décoration "// SECTION_ID"
│   │       ├── StatusDot.astro     ← indicateur état coloré (vert/orange/rouge)
│   │       └── AnimationWrapper.astro ← slot pour injecter Framer Motion plus tard
│   │
│   ├── data/
│   │   ├── projects.ts         ← liste des projets (titre, description, stack, lien)
│   │   ├── skills.ts           ← liste compétences par catégorie
│   │   └── experience.ts       ← historique professionnel
│   │
│   ├── styles/
│   │   └── global.css          ← variables CSS, animations keyframes, scrollbar custom
│   │
│   └── pages/
│       └── index.astro         ← page unique, assemble toutes les sections
│
├── astro.config.mjs
├── tailwind.config.mjs         ← extend avec les tokens couleurs
├── tsconfig.json
└── package.json
```

---

## 5. Sections prévues (single-page)

### `#hero`
- Nom + titre animé (effet typewriter "Ingénieur Électronique Embarquée")
- Sous-titre style terminal : `> init portfolio...`
- CTA : `[Voir les projets]` `[Me contacter]`
- Layout : centré, pleine hauteur, fond PCB très visible ici

### `#about`
- Bento 2 colonnes : texte bio à gauche, photo + stat-chips à droite
- Chips : `MCUs utilisés: 47`, `PCB conçus: 12`, etc. (données fictives à remplacer)
- Ambiance : lecture de fichier README technique

### `#skills`
- Bento grid 3–4 colonnes
- Catégories : `Microcontrôleurs`, `Protocoles`, `Outils`, `Langages`, `Soft Skills`
- Chaque compétence = `TechBadge` avec icône et niveau (barre style oscilloscope)

### `#projects`
- Bento grid variable (une carte peut prendre 2 colonnes si projet phare)
- Chaque carte : titre, description courte, stack, lien GitHub/doc, status badge
- Prévu pour images ou démos vidéo (placeholder pour l'instant)

### `#experience`
- Timeline verticale style "commit log" ou "changelog"
- Entrées : poste, entreprise, dates, bullet points réalisations

### `#contact`
- Formulaire minimaliste ou liens directs (email, LinkedIn, GitHub)
- Style : terminal input prompt `> send_message --to=theo`

---

## 6. Stack technique détaillée

| Technologie       | Version cible | Raison |
|-------------------|---------------|--------|
| Astro             | ^5.x          | SSG ultra-rapide, zéro JS par défaut |
| Tailwind CSS      | ^3.x          | Utilitaire, cohérence avec les tokens |
| TypeScript        | ^5.x          | Typage des données `projects.ts` etc. |
| Framer Motion     | ^11.x (React) | Animations futures via `client:load` |
| @astrojs/react    | ^4.x          | Intégration Framer Motion si nécessaire |

> Note : les animations simples (hover, fade-in) seront d'abord en CSS natif. Framer Motion sera activé uniquement pour les animations complexes que tu décriras plus tard. Structure `AnimationWrapper.astro` prévue pour faciliter le switch.

---

## 7. Fond PCB — Implémentation prévue

```css
/* Dans BaseLayout.astro */
body {
  background-image: url('/bg-pcb.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(11, 25, 41, 0.82);
  z-index: 0;
  pointer-events: none;
}
```

---

## 8. Conventions de code

- Commentaires style `// MODULE: HeroSection` en tête de composant
- Props typées avec TypeScript dans chaque `.astro`
- Données centralisées dans `src/data/` — jamais de contenu en dur dans les composants
- Classes Tailwind groupées par : layout → spacing → couleurs → effets

---

## Prochaines étapes (après validation)

1. `npm create astro@latest` avec template minimal
2. Installer Tailwind, configurer les tokens couleur
3. Créer `BaseLayout.astro` avec fond PCB + overlay
4. Implémenter `SideNav.astro` + section `Hero`
5. Itérer section par section

---

*En attente de ta validation. Indique ce que tu veux modifier avant que je génère quoi que ce soit.*
