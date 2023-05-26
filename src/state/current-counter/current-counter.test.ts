import { counterOrder } from 'src/constants';

import {
  currentCounterIndex,
  getCurrentCounter,
  incrementCounter,
  setCurrentCounterIndex,
} from './current-counter';

describe('current-counter', () => {
  // eslint-disable-next-line vitest/no-hooks
  afterEach(() => {
    setCurrentCounterIndex(0);
  });

  describe('increment', () => {
    it('should increment normally', () => {
      expect(currentCounterIndex()).toBe(0);

      incrementCounter();

      expect(currentCounterIndex()).toBe(1);
    });

    it('should reset to 0 when at the end of the list', () => {
      expect(currentCounterIndex()).toBe(0);

      setCurrentCounterIndex(counterOrder.length - 1);
      incrementCounter();

      expect(currentCounterIndex()).toBe(0);
    });
  });

  describe('getCurrentCounter', () => {
    it('should return the counter type at the current index', () => {
      const randomIndex = Math.floor(Math.random() * counterOrder.length);

      setCurrentCounterIndex(randomIndex);

      expect(getCurrentCounter()).toBe(counterOrder[randomIndex]);
    });
  });
});
