import { audioUrlsMap } from '../assets/sounds';

export const getAlertHandle = (): HTMLAudioElement => {
  const alarm = new Audio(audioUrlsMap.alarm1);

  return alarm;
};
