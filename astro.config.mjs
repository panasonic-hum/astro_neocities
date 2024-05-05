import { defineConfig } from 'astro/config';
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: "static",
  build: {
    format: 'preserve',
    inlineStylesheets: "never"
  },
  site: 'https://swampcreaturee.neocities.org/'
});