import type { Component } from 'solid-js';

import { Container, Heading, IconButton } from '$app-components';
import { cx } from '$app-utils';
import { TbMenu2 } from 'solid-icons/tb';

import * as styles from './styles.css';

type Props = {
  class?: string;
  onSettingsClick: () => void;
};

export const Header: Component<Props> = (props) => (
  <header class={cx(styles.header, props.class)}>
    <Container maxWidth={1000}>
      <div class={styles.headerContentWrapper}>
        <IconButton aria-label="settings menu" onClick={props.onSettingsClick}>
          <TbMenu2 size={30} />
        </IconButton>
        <Heading size="3rem">Pomodoro</Heading>
      </div>
    </Container>
  </header>
);
