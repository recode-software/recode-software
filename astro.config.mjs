// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://recode-software.eu',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    vue(),
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl-PL',
          en: 'en-US'
        }
      }
    })
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${path.resolve(__dirname, 'src/assets/styles/_variables.scss')}" as *;`
        }
      }
    }
  }
});
