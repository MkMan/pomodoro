import { JSX } from 'solid-js';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  children?: JSX.Element;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
