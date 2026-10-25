// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: '[https://www.tomaszkolonko.ch](https://www.tomaszkolonko.ch)',
  vite: {
    plugins: [tailwindcss()],
  },
});