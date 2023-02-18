import { ChangeEvent, InputHTMLAttributes } from 'react';

export type InputProps = {
  className?: string;
  error?: string | boolean;
  label: string;
  isRequired?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
} & InputHTMLAttributes<HTMLInputElement>;
