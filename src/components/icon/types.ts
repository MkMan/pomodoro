type SupportedIcons =
  | 'pencil'
  | 'bars'
  | 'close'
  | 'chevron-right'
  | 'chevron-down';

export type IconProps = {
  class?: string;
  iconName: SupportedIcons;
  size?: number;
};
