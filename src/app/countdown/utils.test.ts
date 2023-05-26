/**
 * @vitest-environment node
 */

import { getFormattedTime, getWorkerHelpers } from './utils';

describe('Countdown utils', () => {
  describe('#getFormattedTime', () => {
    it.each([
      ['00:00', 0],
      ['00:01', 1],
      ['00:30', 30],
      ['01:00', 60],
      ['01:01', 61],
    ])('should return %s:%s when time is %s', (expected, time) => {
      expect(getFormattedTime(time)).toStrictEqual(expected);
    });
  });

  describe('#getWorkerHelpers', () => {
    const mockPostMessage = vi.fn();
    const mockWorker: Pick<Worker, 'postMessage'> = {
      postMessage: mockPostMessage,
    };

    it('should post a stop message correctly', () => {
      getWorkerHelpers(mockWorker as Worker).stopWorkerCounter();

      expect(mockPostMessage).toHaveBeenCalledWith({
        type: 'stop',
      });
    });

    it('should post a start message correctly', () => {
      getWorkerHelpers(mockWorker as Worker).startWorkerCounter(1);

      expect(mockPostMessage).toHaveBeenCalledWith({
        type: 'start',
        time: 1,
      });
    });
  });
});
