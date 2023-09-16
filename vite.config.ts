import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    solidPlugin(),
    vanillaExtractPlugin(),
    tsconfigPaths(),
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
  test: {
    clearMocks: true,
    /* eslint-disable perfectionist/sort-objects */
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      exclude: [
        '**/*/index.ts?(x)',
        '**/*/*test.ts?(x)',
        'test-setup.ts',
        '**/*/types.ts',
        '**/*/constants.ts',
        '**/*/styles.ts',
        '**/*/*.d.ts',
      ],
      provider: 'c8',

      reporter: ['lcov', 'text-summary'],
      src: ['./src'],
      thresholdAutoUpdate: true,

      branches: 93.06,
      functions: 90.17,
      lines: 87.32,
      statements: 87.32,
    },
    include: ['**/?(*.)test.ts?(x)'],

    mockReset: true,
    reporters: ['verbose'],
    restoreMocks: true,

    setupFiles: './test-setup.ts',
  },
});
