import { Component } from 'solid-js';
import { Portal } from 'solid-js/web';

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

export const Drawer: Component<DrawerProps> = (props) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <Portal mount={document.getElementById(drawerContainerId)!}>
      {props.isOpen && (
        <>
          <div class={cx(styles.overlay, 'isOpen')} onClick={props.onClose} />
          <div
            aria-labelledby="drawer-header"
            class={styles.wrapper}
            role="dialog"
          >
            <header class={styles.header} id="drawer-header">
              <div>{props.heading}</div>
              <ButtonIcon
                aria-label={props.closeIconLabel ?? 'close'}
                iconName="close"
                onClick={props.onClose}
                size={30}
              />
            </header>
            <div class={styles.content}>{props.children}</div>
          </div>
        </>
      )}
    </Portal>
  );
};
