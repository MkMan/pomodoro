import { render } from 'test-utils';

import { getFormattedTime, useInterval } from './utils';

describe('Countdown utils', () => {
  describe('#getFormattedTime', () => {
    it.each([
      ['00', '00', 0],
      ['00', '01', 1],
      ['00', '30', 30],
      ['01', '00', 60],
      ['01', '01', 61],
    ])('should return %s:%s when time is %s', (minutes, seconds, time) => {
      expect(getFormattedTime(time)).toEqual([minutes, seconds]);
    });
  });

  describe('#useInterval', () => {
    it('should run the callback every interval', () => {
      const callBack = vi.fn();
      const interval = 1;
      vi.useFakeTimers();
      const TestBed = () => {
        useInterval(callBack, interval);
        return null;
      };

      render(<TestBed />);
      vi.advanceTimersByTime(5);

      expect(callBack).toHaveBeenCalledTimes(5 * interval);
    });
  });
});
