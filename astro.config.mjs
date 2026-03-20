import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://DamianDiaz0530.github.io',
  base: '/QR-CODE',
  vite: {
    plugins: [tailwindcss()],
  }
});