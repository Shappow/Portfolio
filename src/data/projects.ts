export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: 'stable' | 'wip' | 'archived';
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'proj-01',
    title: 'Nom du projet 1',
    description: 'Description courte du projet. Remplace ce texte par ta vraie description.',
    stack: ['STM32', 'C', 'FreeRTOS', 'SPI'],
    status: 'stable',
    featured: true,
    github: '#',
  },
  {
    id: 'proj-02',
    title: 'Nom du projet 2',
    description: 'Description courte du projet. Remplace ce texte par ta vraie description.',
    stack: ['ESP32', 'C++', 'MQTT', 'PCB Design'],
    status: 'stable',
    featured: true,
    github: '#',
  },
  {
    id: 'proj-03',
    title: 'Nom du projet 3',
    description: 'Description courte du projet. Remplace ce texte par ta vraie description.',
    stack: ['FPGA', 'VHDL', 'I2C'],
    status: 'wip',
    featured: false,
    github: '#',
  },
  {
    id: 'proj-04',
    title: 'Nom du projet 4',
    description: 'Description courte du projet. Remplace ce texte par ta vraie description.',
    stack: ['ARM Cortex-M4', 'C', 'CAN Bus'],
    status: 'stable',
    featured: false,
    github: '#',
  },
];
