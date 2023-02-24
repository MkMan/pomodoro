import { Component } from 'solid-js';

import { ButtonIcon } from '../button-icon/button-icon';
import { Container } from '../container/container';
import { Heading } from '../heading/heading';
import * as styles from './styles';

type Props = {
  onSettingsClick: () => void;
};

const headerHight = 80;

export const Header: Component<Props> = (props) => (
  <header class={styles.header(headerHight)}>
    <Container height={headerHight} maxWidth={600}>
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
