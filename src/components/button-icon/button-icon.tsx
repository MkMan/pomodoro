import { Icon } from '../icon/icon';
import * as styles from './styles';
import { ButtonIconProps } from './types';

export const ButtonIcon = ({
  iconName,
  onClick,
  size,
  ...buttonProps
}: ButtonIconProps) => (
  <button
    className={styles.button}
    onClick={onClick}
    style={{ '--size': `${size}px` } as any}
    {...buttonProps}
  >
    <Icon iconName={iconName} size={size} />
  </button>
);
