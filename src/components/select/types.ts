import { JSX } from 'solid-js';

type SelectProps = {
  value: string;
  onChange: JSX.EventHandler<HTMLSelectElement, Event>;
  options: { label: string; value: string }[];
} & Omit<JSX.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>;

export type { SelectProps };
