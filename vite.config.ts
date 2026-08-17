import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    solidPlugin(),
    vanillaExtractPlugin(),
    VitePWA({
      manifest: {
        background_color: '#bf5b4a',
        icons: [
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: '/pomodoro/images/manifest-icon-512.maskable.png',
            type: 'image/webp',
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: '/pomodoro/images/manifest-icon-192.maskable.png',
            type: 'image/webp',
          },
          {
            purpose: 'any',
            sizes: '192x192',
            src: '/pomodoro/images/manifest-icon-192.maskable.png',
            type: 'image/webp',
          },
        ],
        id: '/pomodoro/',
        name: 'Pomodoro',
        theme_color: '#bf5b4a',
      },
      registerType: 'prompt',
    }),
  ],
  resolve: {
    conditions: ['development', 'browser'],
    tsconfigPaths: true,
  },
  test: {
    clearMocks: true,
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      exclude: [
        '**/*/index.ts?(x)',
        '**/*/*test.ts?(x)',
        '**/*/*stories.ts?(x)',
        'test-setup.ts',
        '**/*/types.ts',
        '**/*/constants.ts',
        '**/*/styles.ts',
        '**/*/*.d.ts',
      ],
      include: ['src/**'],
      provider: 'v8',
      reporter: ['lcov', 'text-summary'],

      thresholds: {
        autoUpdate: true,
        branches: 57.47,
        functions: 88.38,
        lines: 85.77,
        statements: 88.08,
      },
    },
    deps: {
      optimizer: {
        web: {
          exclude: ['solid-js'],
        },
      },
    },
    environment: 'jsdom',
    globals: true,
    include: ['**/?(*.)test.ts?(x)'],
    mockReset: true,
    pool: 'forks',
    // reporters: ['verbose'], // when enabled it logs twice
    restoreMocks: true,
    setupFiles: './test-setup.ts',
  },
});
