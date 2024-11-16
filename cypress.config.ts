import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    baseUrl: 'http://localhost:3000',
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {},
  },
});
