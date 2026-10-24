// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tomaszkolonko.github.io',
  base: '/tomaszkolonko',
  vite: {
    plugins: [tailwindcss()],
  },
});