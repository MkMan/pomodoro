export const cx = (...classes: (string | undefined | boolean)[]) =>
  classes.filter(Boolean).join(' ');
