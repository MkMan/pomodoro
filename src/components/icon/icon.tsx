import { icon, library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faChevronRight,
  faClose,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';

import * as styles from './styles';
import { IconProps } from './types';

const supportedIcons = [faPencil, faBars, faClose, faChevronRight];

library.add(...supportedIcons);

export const Icon = ({ iconName, size = 20 }: IconProps) => (
  <span
    className={styles.wrapper}
    dangerouslySetInnerHTML={{
      __html: icon({ prefix: 'fas', iconName })?.html as unknown as string,
    }}
    style={{ '--size': `${size}px` } as any}
  />
);
