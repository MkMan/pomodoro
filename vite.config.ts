import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'prompt',
      manifest: {
        theme_color: '#bf5b4a',
        name: 'Pomodoro',
        id: '/pomodoro/',
        background_color: '#bf5b4a',
        icons: [
          {
            src: '/pomodoro/images/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'maskable',
          },
          {
            src: '/pomodoro/images/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'maskable',
          },
          {
            src: '/pomodoro/images/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  test: {
    include: ['**/?(*.)test.ts?(x)'],
    setupFiles: './test-setup.ts',
    reporters: ['verbose'],

    clearMocks: true,
    restoreMocks: true,
    mockReset: true,

    coverage: {
      thresholdAutoUpdate: true,
      provider: 'c8',
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
        '**/*/styles.ts',
        '**/*/*.d.ts',
      ],

      // thresholds
      lines: 91.38,
      functions: 90.27,
      branches: 93.25,
      statements: 91.38,
    },
  },
});
