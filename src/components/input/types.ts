import { JSX } from 'solid-js';

const appearanceBlock = 'block';
const appearanceInline = 'inline';

const appearance = [appearanceBlock, appearanceInline] as const;

type InputProps = {
  appearance?: (typeof appearance)[number];
  class?: string;
  error?: boolean | string;
  isRequired?: boolean;
  label?: string;
  onInput: JSX.EventHandler<HTMLInputElement, Event>;
  value: number | string;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onInput'>;

export { appearanceBlock, appearanceInline };
export type { InputProps };
