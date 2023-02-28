import { createSignal } from 'solid-js';

import { CounterState } from './types';

const [counterState, setCounterState] = createSignal<CounterState>('stopped');

export { counterState, setCounterState };
