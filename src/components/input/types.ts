import { JSX } from 'solid-js';

export type InputProps = {
  class?: string;
  error?: string | boolean;
  label: string;
  isRequired?: boolean;
  onInput: JSX.EventHandler<HTMLInputElement, Event>;
  value: string | number;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onInput'>;
