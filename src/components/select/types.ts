import type { JSX } from 'solid-js';

type SelectProps = Omit<
  JSX.SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'value'
> & {
  onChange: JSX.EventHandler<HTMLSelectElement, Event>;
  options: { label: string; value: string }[];
  value: string;
};

export type { SelectProps };
