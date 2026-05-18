export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  upcoming?: boolean;
  bullets: string[];
  stack?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-01',
    role: 'Stagiaire R&D — Robotique d\'assistance et IA',
    company: 'Tanaka Lab',
    location: 'Japon 🇯🇵',
    period: 'Avr. 2026 — Juin 2026',
    current: true,
    upcoming: false,
    bullets: [
      'Intégration IA & Vision : déploiement du modèle VLM <a href="https://hamster-robot.github.io/" target="_blank" rel="noopener noreferrer" style="color:var(--accent-teal);text-decoration:underline;">Hamster</a> pour analyser les flux vidéo et optimiser la trajectoire des bras robotisés lors d\'actions assistées.',
      'Conception & Téléopération : modélisation 3D et programmation d\'un bras robotique maître sur mesure, pensé comme une interface de contrôle ergonomique.',
      'Outil d\'aide à la recherche : développement du système de téléopération pour l\'équipe, garantissant aux futurs chercheurs une acquisition de données haute-fidélité pour leurs modèles d\'Imitation Learning.',
    ],
    stack: ['Python', 'Git', 'Onshape', 'Linux', 'VSCode'],
  },
  {
    id: 'exp-02',
    role: 'Stagiaire / Alternant Développeur 3D',
    company: 'Simforhealth',
    location: 'France 🇫🇷',
    period: 'Avr. 2021 — Sept. 2022',
    current: false,
    upcoming: false,
    bullets: [
      'Développement et optimisation de Serious Games médicaux sous Unity 3D (C#)',
      'Refactoring d\'architecture, ajout de fonctionnalités et correction de bugs',
      'Travail en équipe avec Git et Visual Studio',
    ],
    stack: ['C#', 'Unity 3D', 'Git', 'Visual Studio'],
  },
];
