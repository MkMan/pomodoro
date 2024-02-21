import '@testing-library/jest-dom';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
globalThis.Notification = vi.fn() as any;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
globalThis.matchMedia = vi.fn(() => ({ addEventListener: vi.fn() })) as any;
globalThis.Worker = vi.fn();
