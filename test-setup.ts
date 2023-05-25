/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';

globalThis.Notification = vi.fn() as any;
globalThis.matchMedia = vi.fn(() => ({ addEventListener: vi.fn() })) as any;

globalThis.Worker = vi.fn();
