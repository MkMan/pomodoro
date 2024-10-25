import type { HeadingProps } from './types';

export const fontWeightMap: Record<
  NonNullable<HeadingProps['weight']>,
  number
> = {
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  bold: 700,
  light: 300,
  normal: 400,
};

export const sizeMap: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'var(--size-font-h1)',
  2: 'var(--size-font-h2)',
  3: 'var(--size-font-h3)',
  4: 'var(--size-font-h4)',
  5: 'var(--size-font-h5)',
  6: 'var(--size-font-h6)',
};
