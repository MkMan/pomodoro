import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

import { IconProps } from '../icon/types';

export type ButtonIconProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: never;
} & IconProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
