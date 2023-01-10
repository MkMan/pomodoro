/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    reporters: ['verbose'],
    coverage: {
      clean: true,
      cleanOnRerun: true,
      reporter: ['lcov', 'text-summary'],
      all: true,
      src: ['./src'],
      exclude: [
        '**/*/index.ts?(x)',
        '**/*/*test.ts?(x)',
        'test-setup.ts',
        '**/*/types.ts',
        '**/*/*.d.ts',
      ],
    },
  },
});
