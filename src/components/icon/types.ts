type SupportedIcons =
  | 'bars'
  | 'chevron-down'
  | 'chevron-right'
  | 'close'
  | 'code'
  | 'pencil';

export type IconProps = {
  class?: string;
  iconName: SupportedIcons;
  size?: number;
};
