/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@testing-library/jest-dom';

globalThis.Notification = vi.fn() as any;
globalThis.matchMedia = vi.fn(() => ({ addEventListener: vi.fn() })) as any;
globalThis.crypto = {
  getRandomValues: vi.fn(),
  randomUUID: vi.fn(() => 'this-is-a-random-uuid-like-string'),
  subtle: undefined as any,
};

globalThis.Worker = vi.fn();
