import { JSX } from 'solid-js';

export type CollapseProps = {
  content?: JSX.Element;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  isOpen?: boolean;
  label: string;
};
