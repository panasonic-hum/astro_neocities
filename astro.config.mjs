import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: "static",
  build: {
    format: 'preserve',
    inlineStylesheets: "never"
  }
});