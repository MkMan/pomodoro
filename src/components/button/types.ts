import { JSX } from 'solid-js';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'large' | 'small';
  children?: JSX.Element;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
