import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://shae.run',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
