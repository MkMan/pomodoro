/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#bf5b4a',
        name: 'Pomodoro',
        background_color: '#bf5b4a',
        icons: [
          {
            src: '/pomodoro/images/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/webp',
          },
          {
            src: '/pomodoro/images/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
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
        '**/*/constants.ts',
        '**/*/styled.ts',
        '**/*/*.d.ts',
      ],
    },
  },
});
