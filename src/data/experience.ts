export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-01',
    role: 'Ingénieur Électronique Embarquée',
    company: 'Nom de l\'entreprise',
    location: 'Ville, Pays',
    period: '2023 — présent',
    current: true,
    bullets: [
      'Développement firmware C sur STM32 pour un système temps-réel',
      'Conception de cartes PCB sous KiCad (schéma + routing)',
      'Mise en place de tests unitaires embarqués',
    ],
  },
  {
    id: 'exp-02',
    role: 'Stagiaire Développeur Embarqué',
    company: 'Nom de l\'entreprise',
    location: 'Ville, Pays',
    period: '2022 — 2023',
    current: false,
    bullets: [
      'Implémentation de pilotes I2C et SPI',
      'Intégration FreeRTOS sur microcontrôleur AVR',
    ],
  },
];
