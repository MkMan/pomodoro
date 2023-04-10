import { JSXElement } from 'solid-js';

export type HeadingProps = {
  children?: JSXElement;
  class?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: string;
  shouldAutoFocus?: boolean;
  weight?: 'light' | 'normal' | 'bold' | 300 | 400 | 500 | 600 | 700 | 800;
};
