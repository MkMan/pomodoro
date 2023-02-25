import { splitProps, VoidComponent } from 'solid-js';

import { Icon } from '../icon/icon';
import * as styles from './styles';
import { ButtonIconProps } from './types';

export const ButtonIcon: VoidComponent<ButtonIconProps> = (_props) => {
  const [props, buttonProps] = splitProps(_props, [
    'onClick',
    'size',
    'iconName',
  ]);

  return (
    <button
      class={styles.button}
      onClick={(event) => props.onClick?.(event)}
      style={{ '--size': `${props.size}px` }}
      {...buttonProps}
    >
      <Icon iconName={props.iconName} size={props.size} />
    </button>
  );
};
