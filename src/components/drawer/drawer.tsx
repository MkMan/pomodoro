import { createPortal } from 'react-dom';

import { cx } from '$app-utils';

import { ButtonIcon } from '../button-icon/button-icon';
import * as styles from './styles';
import { DrawerProps } from './types';

const drawerContainerId = 'drawer-container-id';
if (!document.getElementById(drawerContainerId)) {
  const drawerContainer = document.createElement('div');
  drawerContainer.setAttribute('id', drawerContainerId);
  document.body.appendChild(drawerContainer);
}

export const Drawer = ({
  children,
  closeIconLabel = 'close',
  heading,
  isOpen,
  onClose,
}: DrawerProps) =>
  createPortal(
    isOpen ? (
      <>
        <div className={cx(styles.overlay, 'isOpen')} onClick={onClose} />
        <div
          aria-labelledby="drawer-header"
          className={styles.wrapper}
          role="dialog"
        >
          <header className={styles.header} id="drawer-header">
            <div>{heading}</div>
            <ButtonIcon
              aria-label={closeIconLabel}
              iconName="close"
              onClick={onClose}
              size={30}
            />
          </header>
          <div className={styles.content}>{children}</div>
        </div>
      </>
    ) : null,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById(drawerContainerId)!
  );
