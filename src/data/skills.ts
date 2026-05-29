export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  group: 'hard' | 'soft';
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'electronics',
    label: 'Électronique',
    icon: 'cpu',
    group: 'hard',
    color: '#F59E0B',
    skills: [
      { name: 'Systèmes embarqués & MCU', level: 85 },
      { name: 'Conception & routage PCB', level: 80 },
      { name: 'Prototypage & validation',  level: 80 },
      { name: 'RF / Hyperfréquence',       level: 65 },
    ],
  },
  {
    id: 'languages',
    label: 'Programmation',
    icon: 'code',
    group: 'hard',
    color: '#00D4B8',
    skills: [
      { name: 'C / C++',         level: 85 },
      { name: 'Python',          level: 80 },
      { name: 'Java / C#',       level: 60 },
      { name: 'HTML / CSS / JS', level: 55 },
    ],
  },
  {
    id: 'tools',
    label: 'Outils',
    icon: 'tool',
    group: 'hard',
    color: '#60A5FA',
    skills: [
      { name: 'KiCad / Altium',    level: 80 },
      { name: 'Git',               level: 80 },
      { name: 'VSCode',             level: 85 },
      { name: 'STM32Cube',          level: 75 },
      { name: 'Onshape',            level: 65 },
      { name: 'Linux',              level: 75 },
      { name: 'Fusion 360',         level: 60 },
    ],
  },
  {
    id: 'work-methods',
    label: 'Méthodes de travail',
    icon: 'signal',
    group: 'soft',
    color: '#A78BFA',
    skills: [
      { name: 'Méthodologie Scrum', level: 70 },
      { name: 'Cycle en V',         level: 70 },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: 'signal',
    group: 'soft',
    color: '#F472B6',
    skills: [
      { name: 'Communication technique',    level: 80 },
      { name: 'Rédaction de docs techniques', level: 75 },
      { name: 'Présentations',              level: 70 },
    ],
  },
  {
    id: 'languages-soft',
    label: 'Langues',
    icon: 'signal',
    group: 'soft',
    color: '#34D399',
    skills: [
      { name: 'Anglais — courant', level: 75 },
      { name: 'Français — natif',  level: 100 },
    ],
  },
];
