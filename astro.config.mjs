import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  static: {
    directory: 'assets' // o el nombre de tu carpeta de activos estáticos
  },

  output: 'hybrid',
  integrations: [tailwind(), react()]
});