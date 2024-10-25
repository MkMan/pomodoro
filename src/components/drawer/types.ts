import type { JSX } from 'solid-js';

export type DrawerProps = {
  children?: JSX.Element | JSX.Element[];
  closeIconLabel?: string;
  heading?: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
};
