import { useState } from 'react';

import { CurrentCounter } from './components/counter-selector/types';
import { counterOrder } from './constants';

export const useCurrentCounterState = (): {
  currentCounter: CurrentCounter;
  currentCounterIndex: number;
  setCurrentCounterIndex: (currentCounterIndex: number) => void;
  increment: () => void;
} => {
  const [currentCounterIndex, setCurrentCounterIndex] = useState(0);

  const increment = () => {
    if (currentCounterIndex === counterOrder.length - 1) {
      // if at the end of the array -> start over
      setCurrentCounterIndex(0);
    } else {
      // else just increment
      setCurrentCounterIndex(currentCounterIndex + 1);
    }
  };

  return {
    currentCounter: counterOrder[currentCounterIndex],
    increment,
    setCurrentCounterIndex,
    currentCounterIndex,
  };
};
