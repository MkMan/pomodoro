import { useEffect } from 'react';

const formatTimeUnit = (timeUnit: number): string =>
  timeUnit.toString().padStart(2, '0');

export const getFormattedTime = (timeInSeconds: number): [string, string] => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;

  return [formatTimeUnit(minutes), formatTimeUnit(seconds)];
};

export const useInterval = (callback: () => void, interval: number): void => {
  useEffect(() => {
    const intervalNumber = window.setInterval(callback, interval);

    return () => {
      window.clearInterval(intervalNumber);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- set interval once
  }, []);
};
