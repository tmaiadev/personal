import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thallesmaia.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
