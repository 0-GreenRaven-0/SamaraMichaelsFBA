// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://0-GreenRaven-0.github.io',
  base: '/SamaraMichaelsFBA/',
  vite: {
    plugins: [tailwindcss()]
  },
    devToolbar: {
    enabled: false
  }
});