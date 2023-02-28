import { Component } from 'solid-js';

import { ButtonIcon, Container, Heading } from '$app-components';

import * as styles from './styles';

type Props = {
  onSettingsClick: () => void;
};

export const Header: Component<Props> = (props) => (
  <header class={styles.header}>
    <Container maxWidth={600}>
      <div class={styles.headerContentWrapper}>
        <ButtonIcon
          aria-label="settings menu"
          iconName="bars"
          onClick={props.onSettingsClick}
          size={30}
        />
        <Heading size="3rem">Pomodoro</Heading>
      </div>
    </Container>
  </header>
);
