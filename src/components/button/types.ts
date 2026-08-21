import type { JSX } from 'solid-js';

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: JSX.Element;
  size?: 'large' | 'small';
  variant?: 'danger' | 'primary' | 'secondary';
};
