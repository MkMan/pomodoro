import { createSignal } from 'solid-js';
import { counterOrder } from 'src/constants';

import { CurrentCounter } from '../../types';

const [currentCounterIndex, setCurrentCounterIndex] = createSignal(0);

const increment = () => {
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
  increment,
  setCurrentCounterIndex,
};
