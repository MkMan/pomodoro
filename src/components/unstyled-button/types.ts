import type { JSX } from 'solid-js';

export type UnstyledButtonProps =
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: JSX.Element;
  };
