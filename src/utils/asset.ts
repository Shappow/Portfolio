// Préfixe un chemin public avec BASE_URL pour GitHub Pages
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/Portfolio' ou ''

export function asset(path: string): string {
  if (!path) return '';
  return BASE + (path.startsWith('/') ? path : '/' + path);
}
