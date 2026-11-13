import { defineConfig } from 'astro/config';

// Demo site: one static page per route, nothing server-side.
export default defineConfig({
  site: 'https://tallybrooktax.online',
  trailingSlash: 'ignore',
});
