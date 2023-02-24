import { icon, library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronRight,
  faClose,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from 'solid-js';

import * as styles from './styles';
import { IconProps } from './types';

const supportedIcons = [faPencil, faBars, faClose, faChevronRight];

library.add(...supportedIcons);

export const Icon: Component<IconProps> = (props) => (
  <span
    class={styles.wrapper}
    // eslint-disable-next-line solid/no-innerhtml -- trusted svgs
    innerHTML={
      icon({ prefix: 'fas', iconName: props.iconName })
        ?.html as unknown as string
    }
    style={{ '--size': `${props.size ?? 20}px` }}
  />
);
