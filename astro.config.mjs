import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dein-username.github.io',
  base: '/coaching-website', //Sobald du deine eigene Domain (z. B. www.dein-name.ch) verknüpfst, lässt du base einfach weg
  integrations: [tailwind()],
});