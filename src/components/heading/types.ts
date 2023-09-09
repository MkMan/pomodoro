import { JSXElement } from 'solid-js';

export type HeadingProps = {
  children?: JSXElement;
  class?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  shouldAutoFocus?: boolean;
  size?: string;
  weight?: 'bold' | 'light' | 'normal' | 300 | 400 | 500 | 600 | 700 | 800;
};
