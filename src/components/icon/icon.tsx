import { icon, library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronDown,
  faChevronRight,
  faClose,
  faCode,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { Component } from 'solid-js';

import { cx } from '$app-utils';

import * as styles from './styles';
import { IconProps } from './types';

const supportedIcons = [
  faBars,
  faChevronDown,
  faChevronRight,
  faClose,
  faCode,
  faPencil,
];

library.add(...supportedIcons);

export const Icon: Component<IconProps> = (props) => (
  <span
    class={cx(styles.wrapper, props.class)}
    // eslint-disable-next-line solid/no-innerhtml -- trusted svgs
    innerHTML={
      icon({ prefix: 'fas', iconName: props.iconName })
        ?.html as unknown as string
    }
    style={{ '--size': `${props.size ?? 20}px` }}
  />
);
