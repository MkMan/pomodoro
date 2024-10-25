import type { JSX } from 'solid-js';

export type ButtonProps = {
  children?: JSX.Element;
  size?: 'large' | 'small';
  variant?: 'danger' | 'primary' | 'secondary';
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
