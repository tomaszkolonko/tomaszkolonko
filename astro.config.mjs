import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.thomaskolonko.ch',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/session/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});