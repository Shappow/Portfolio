export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'mcu',
    label: 'Microcontrôleurs',
    icon: 'cpu',
    skills: [
      { name: 'STM32', level: 90 },
      { name: 'ESP32', level: 85 },
      { name: 'AVR / Arduino', level: 80 },
      { name: 'ARM Cortex-M', level: 75 },
    ],
  },
  {
    id: 'protocols',
    label: 'Protocoles',
    icon: 'signal',
    skills: [
      { name: 'SPI / I2C / UART', level: 90 },
      { name: 'CAN Bus', level: 75 },
      { name: 'MQTT / BLE', level: 70 },
      { name: 'USB / Ethernet', level: 65 },
    ],
  },
  {
    id: 'languages',
    label: 'Langages',
    icon: 'code',
    skills: [
      { name: 'C / C++', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'VHDL', level: 60 },
      { name: 'Bash', level: 65 },
    ],
  },
  {
    id: 'tools',
    label: 'Outils',
    icon: 'tool',
    skills: [
      { name: 'KiCad / EasyEDA', level: 80 },
      { name: 'STM32CubeIDE', level: 85 },
      { name: 'FreeRTOS', level: 75 },
      { name: 'Git / Linux', level: 80 },
    ],
  },
];
