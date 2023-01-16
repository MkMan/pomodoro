import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { defaultSettings } from './constants';
import { AppSettingsStore } from './types';

const updateDurationField = (
  appState: AppSettingsStore,
  field: keyof AppSettingsStore['durations'],
  duration: number
): AppSettingsStore => ({
  ...appState,
  durations: { ...appState.durations, [field]: duration },
});

export const useAppSettings = create<AppSettingsStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      setLongBreakDuration: (duration) =>
        set((state) => updateDurationField(state, 'longBreak', duration)),
      setPomodoroDuration: (duration) =>
        set((state) => updateDurationField(state, 'pomodoro', duration)),
      setShortBreakDuration: (duration) =>
        set((state) => updateDurationField(state, 'shortBreak', duration)),
    }),
    {
      name: 'app-settings',
    }
  )
);
