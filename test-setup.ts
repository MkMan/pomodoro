import '@testing-library/jest-dom';

globalThis.Notification = vi.fn() as unknown as typeof global.Notification;
globalThis.matchMedia = vi.fn(() => ({
  addEventListener: vi.fn(),
})) as unknown as typeof global.matchMedia;
globalThis.Worker = vi.fn();
