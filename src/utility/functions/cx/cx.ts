export const cx = (...classes: Array<string | undefined | boolean>) =>
  classes.filter(Boolean).join(' ');
