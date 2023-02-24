import { JSX } from 'solid-js';

import { IconProps } from '../icon/types';

export type ButtonIconProps = {
  onClick: (event: MouseEvent) => void;
} & IconProps &
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;
