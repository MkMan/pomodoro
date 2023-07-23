import { FiX } from 'solid-icons/fi';
import { Component, createEffect, createSignal, Show } from 'solid-js';
import { Portal } from 'solid-js/web';

import { cx } from '$app-utils';

import { IconButton } from '../icon-button/icon-button';
import * as styles from './styles.css';
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
    document.addEventListener('keydown', ({ key }) => {
      if (key === 'Escape' && props.isOpen) {
        props.onClose();
      }
    });
  });

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
              <IconButton
                aria-label={props.closeIconLabel ?? 'close'}
                onClick={props.onClose}
              >
                {<FiX size={30} />}
              </IconButton>
            </header>
            <div class={styles.content}>{props.children}</div>
          </div>
        </>
      </Show>
    </Portal>
  );
};
