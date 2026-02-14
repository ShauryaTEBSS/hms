import { defineConfig } from 'vite';

export default defineConfig({
  // This ensures paths like /assets/ work on GitHub's subfolder URL
  base: '/hms/', 
});
