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
    degree: 'Titre à renseigner',
    school: 'École / Université',
    location: 'Ville, Pays',
    period: '2021 — 2024',
    description: 'Description courte de la formation.',
    highlights: [
      'Électronique analogique et numérique',
      'Systèmes embarqués et temps réel',
      'Conception PCB',
    ],
  },
  {
    id: 'dip-02',
    degree: 'Titre à renseigner',
    school: 'École / Université',
    location: 'Ville, Pays',
    period: '2019 — 2021',
    description: 'Description courte de la formation.',
    highlights: [
      'Mathématiques & Physique',
      'Informatique',
    ],
  },
];
