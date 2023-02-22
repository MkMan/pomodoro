import { HeadingProps } from './types';

export const fontWeightMap: Record<
  NonNullable<HeadingProps['weight']>,
  number
> = {
  light: 300,
  normal: 400,
  bold: 700,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
};

export const sizeMap: Record<NonNullable<HeadingProps['level']>, string> = {
  1: '2rem',
  2: '1.8rem',
  3: '1.6rem',
  4: '1.4rem',
  5: '1.2rem',
  6: '1rem',
};
