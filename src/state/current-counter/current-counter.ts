import { createSignal } from 'solid-js';
import { counterOrder } from 'src/constants';

import type { CurrentCounter } from '../../types';

const [currentCounterIndex, setCurrentCounterIndex] = createSignal(0);

const incrementCounter = () => {
  if (currentCounterIndex() === counterOrder.length - 1) {
    // if at the end of the array -> start over
    setCurrentCounterIndex(0);
  } else {
    // else just increment
    setCurrentCounterIndex(currentCounterIndex() + 1);
  }
};

const getCurrentCounter: () => CurrentCounter = () =>
  counterOrder[currentCounterIndex()];

export {
  currentCounterIndex,
  getCurrentCounter,
  incrementCounter,
  setCurrentCounterIndex,
};
