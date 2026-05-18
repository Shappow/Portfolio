export interface Diploma {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
  highlights?: string[];
}

export const diplomas: Diploma[] = [
  {
    id: 'dip-01',
    degree: 'BUT Génie Électrique et Informatique Industrielle',
    school: 'IUT de Bordeaux',
    location: 'Bordeaux, France',
    period: '2024 — 2027',
    description: 'Spécialisation électronique et systèmes embarqués.',
    highlights: [
      'Électronique analogique et numérique',
      'Systèmes embarqués et temps réel',
      'Conception PCB',
      'Microcontrôleurs et IoT',
    ],
  },
  {
    id: 'dip-02',
    degree: 'Diplôme Universitaire en Robotique',
    school: 'IUT de Bordeaux',
    location: 'Bordeaux, France',
    period: '2024 — 2026',
    highlights: [
      'Robotique autonome',
      'Capteurs et actionneurs',
      'Navigation et planification',
    ],
  },
  {
    id: 'dip-03',
    degree: 'Habilitation Électrique B1V',
    school: '',
    location: 'France',
    period: '2025',
  },
  {
    id: 'dip-04',
    degree: 'Bachelor 3ème année — Spécialisation Robotique',
    school: 'Ynov Bordeaux',
    location: 'Bordeaux, France',
    period: '2023 — 2024',
    highlights: [
      'Robotique et systèmes autonomes',
      'Développement embarqué',
    ],
  },
  {
    id: 'dip-05',
    degree: 'Licence Pro — Développement Applications Web & Innovation Numérique',
    school: 'IUT de Bordeaux',
    location: 'Bordeaux, France',
    period: '2021 — 2022',
  },
  {
    id: 'dip-06',
    degree: 'DUT Informatique',
    school: 'IUT de Bordeaux',
    location: 'Bordeaux, France',
    period: '2019 — 2021',
  },
  {
    id: 'dip-07',
    degree: 'Bac STI2D — Systèmes d\'Information et Numérique',
    school: '',
    location: 'France',
    period: '2017 — 2019',
  },
];
