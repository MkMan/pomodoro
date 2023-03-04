import { FiMenu } from 'solid-icons/fi';
import { Component } from 'solid-js';

import { Container, Heading, UnstyledButton } from '$app-components';

import * as styles from './styles';

type Props = {
  onSettingsClick: () => void;
};

export const Header: Component<Props> = (props) => (
  <header class={styles.header}>
    <Container maxWidth={600}>
      <div class={styles.headerContentWrapper}>
        <UnstyledButton
          aria-label="settings menu"
          onClick={props.onSettingsClick}
        >
          <FiMenu size={30} />
        </UnstyledButton>
        <Heading size="3rem">Pomodoro</Heading>
      </div>
    </Container>
  </header>
);
