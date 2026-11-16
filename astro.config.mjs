import { defineConfig } from 'astro/config';

// Every page builds to a flat .html file at the site root and all links are
// relative, so the output works from any host or subfolder (GitHub Pages,
// Netlify, a shared preview link) without configuration.
export default defineConfig({
  build: { format: 'file', inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
