export type TechKind = 'lang' | 'tool' | 'hw';

const LANGS = new Set([
  'python', 'c/c++', 'c++', 'c', 'java', 'c#', 'html/css/js',
  'html', 'css', 'javascript', 'js', 'arduino',
]);

const HW = new Set([
  'raspberry pi', 'raspberry pi 5', 'pcb', 'pcb design',
  'lidar', 'électronique', 'electronics', 'esp32', 'stm32',
  'arm cortex-m', 'fpga',
]);

export function techKind(label: string): TechKind {
  const l = label.toLowerCase();
  if (LANGS.has(l)) return 'lang';
  if (HW.has(l))    return 'hw';
  return 'tool';
}
