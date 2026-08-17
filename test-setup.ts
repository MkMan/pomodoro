import '@testing-library/jest-dom';

globalThis.Notification = vi.fn() as unknown as typeof globalThis.Notification;
globalThis.matchMedia = vi.fn(() => ({
  addEventListener: vi.fn(),
})) as unknown as typeof globalThis.matchMedia;
globalThis.Worker = vi.fn();
