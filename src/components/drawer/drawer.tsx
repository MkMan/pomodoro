import { Component, createEffect, createSignal, Show } from 'solid-js';
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
  const [isOpen, setIsOpen] = createSignal(false);

  let overlay: HTMLDivElement | undefined;
  let drawerWrapper: HTMLDivElement | undefined;

  createEffect(() => {
    if (props.isOpen) {
      setIsOpen(true);
    }

    if (!props.isOpen && isOpen()) {
      // delay unmounting to show closing transitions
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  });

  createEffect(() => {
    if (props.isOpen) {
      setTimeout(() => {
        // add opening transitions in next tick
        // so that the drawer mounts fires
        overlay?.classList.add('isOpen');
        drawerWrapper?.classList.add('isOpen');
      }, 0);
    } else {
      overlay?.classList.remove('isOpen');
      drawerWrapper?.classList.remove('isOpen');
    }
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <Portal mount={document.getElementById(drawerContainerId)!}>
      <Show when={isOpen()}>
        <>
          <div
            class={cx(styles.overlay)}
            onClick={() => props.onClose()}
            ref={overlay}
          />
          <div
            aria-labelledby="drawer-header"
            class={styles.wrapper}
            ref={drawerWrapper}
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
      </Show>
    </Portal>
  );
};
