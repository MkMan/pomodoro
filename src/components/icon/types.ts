type SupportedIcons = 'pencil' | 'bars' | 'close' | 'chevron-right';

export type IconProps = {
  class?: string;
  iconName: SupportedIcons;
  size?: number;
};
