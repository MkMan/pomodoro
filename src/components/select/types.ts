import { JSX } from 'solid-js';

type SelectProps = {
  onChange: JSX.EventHandler<HTMLSelectElement, Event>;
  options: { label: string; value: string }[];
  value: string;
} & Omit<JSX.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>;

export type { SelectProps };
