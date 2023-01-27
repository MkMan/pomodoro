import { useState } from 'react';

import { CurrentCounter } from './components/counter-selector/types';
import { counterOrder } from './constants';
import { audioUrlsMap } from './sounds';

export const playNotificationSound = async () => {
  const audio = new Audio(audioUrlsMap.alarm1);
  await audio.play();

  setTimeout(() => {
    audio.pause();
    audio.remove();
  }, 5000);
};

export const useCurrentCounterState = (): {
  currentCounter: CurrentCounter;
  setCurrentCounter: (currentCounter: CurrentCounter) => void;
  increment: () => void;
} => {
  const [index, setIndex] = useState(0);

  const increment = () => {
    if (index === counterOrder.length - 1) {
      // if at the end of the array -> start over
      setIndex(0);
    } else {
      // else just increment
      setIndex(index + 1);
    }
  };

  const setCurrentCounter = (currentCounter: CurrentCounter) => {
    // clicking the currently selected counter does nothing
    if (currentCounter === counterOrder[index]) return;

    // find index of **next** occurrence of `currentCounter`
    let newIndex = counterOrder.findIndex((value, i) => {
      if (index >= i) return;
      return value === currentCounter;
    });

    // if not found loop from the start
    newIndex = newIndex > -1 ? newIndex : counterOrder.indexOf(currentCounter);

    setIndex(newIndex);
  };

  return {
    currentCounter: counterOrder[index],
    increment,
    setCurrentCounter,
  };
};
