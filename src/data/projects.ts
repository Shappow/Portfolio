export interface Project {
  id: string;
  title: string;
  type: 'perso' | 'univ';
  description: string;
  stack: string[];
  status: 'stable' | 'wip' | 'archived';
  featured: boolean;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'Réplique du Pip-Boy de Fallout',
    type: 'perso',
    description:
      'Conception d\'un système embarqué sur Raspberry Pi 5 intégrant électronique, interface Python et composants matériels (écran, radio, audio, potentiomètres) pour un prototype fonctionnel.',
    stack: ['Raspberry Pi 5', 'Python', 'Électronique', 'PCB'],
    status: 'wip',
    featured: true,
  },
  {
    id: 'proj-02',
    title: 'Robot autonome — Exploration de labyrinthe',
    type: 'univ',
    description:
      'Conception globale (mécanique, électronique, logiciel) d\'un robot holonome. Navigation et évitement d\'obstacles sur Raspberry Pi via un capteur LIDAR.',
    stack: ['Raspberry Pi', 'Python', 'C++', 'LIDAR'],
    status: 'stable',
    featured: true,
  },
  {
    id: 'proj-03',
    title: 'Robot Sumo',
    type: 'univ',
    description:
      'Création complète d\'un shield électronique sur mesure (KiCad), dimensionnement de l\'alimentation, interfaçage capteurs/moteurs et programmation embarquée des stratégies de combat.',
    stack: ['KiCad', 'C/C++', 'Arduino', 'PCB Design'],
    status: 'stable',
    featured: true,
  },
];
