import { audioUrlsMap } from '../assets/sounds';
import { getAlertHandle } from './utils';

describe('App utils', () => {
  describe('#getAlertHandle', () => {
    it('should return an audio HTML element with the correct src', () => {
      const alertHandle = getAlertHandle();

      expect(alertHandle).toBeInstanceOf(HTMLAudioElement);
      expect(alertHandle).toHaveAttribute('src', audioUrlsMap.alarm1);
    });
  });
});
