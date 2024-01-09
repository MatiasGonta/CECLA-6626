import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  static: {
    directory: 'assets'
  },

  output: 'hybrid',
  integrations: [tailwind()]
});