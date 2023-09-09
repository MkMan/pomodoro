export const cx = (...classes: (boolean | string | undefined)[]) =>
  classes.filter(Boolean).join(' ');
