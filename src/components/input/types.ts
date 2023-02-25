import { JSX } from 'solid-js';

export type InputProps = {
  className?: string;
  error?: string | boolean;
  label: string;
  isRequired?: boolean;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  value: string | number;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
