import { JSX } from 'solid-js';

export type SelectProps = {
  value: string;
  onChange: JSX.EventHandler<HTMLSelectElement, Event>;
  options: { label: string; value: string }[];
} & Omit<JSX.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>;
