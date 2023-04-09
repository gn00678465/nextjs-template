import { defineConfig } from 'vitest/dist/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'c8'
    },
  }
});
