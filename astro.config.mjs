import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://emporiahydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
