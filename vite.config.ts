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
    coverage: {
      all: true,
      branches: 93.42,
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
      functions: 91.27,
      // thresholds
      lines: 91.48,
      provider: 'c8',

      reporter: ['lcov', 'text-summary'],
      src: ['./src'],
      statements: 91.48,
      thresholdAutoUpdate: true,
    },
    include: ['**/?(*.)test.ts?(x)'],

    mockReset: true,
    reporters: ['verbose'],
    restoreMocks: true,

    setupFiles: './test-setup.ts',
  },
});
