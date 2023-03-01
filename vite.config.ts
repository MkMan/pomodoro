/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'prompt',
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
    // transformMode: { web: [/\.[jt]sx?$/] },
    // setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
    reporters: ['verbose'],
    // otherwise, solid would be loaded twice:
    deps: { registerNodeLoader: true },

    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,

    coverage: {
      clean: true,
      cleanOnRerun: true,
      reporter: [],
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
