import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://DamianDiaz0530.github.io',
  base: '/QR-CODE',
});