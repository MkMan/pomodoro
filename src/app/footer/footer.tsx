import { Component } from 'solid-js';

import { Container, Icon } from '$app-components';

import { version } from '../../../package.json';
import * as styles from './styles';

export const Footer: Component = () => (
  <footer class={styles.footer}>
    {/* eslint-disable-next-line solid/no-react-specific-props -- prop name */}
    <Container className={styles.wrapper} maxWidth={600}>
      <span>App version: {version}</span>
      <a
        class={styles.sourceCodeLink}
        target="blank"
        href="https://github.com/MkMan/pomodoro"
        title="Source code"
      >
        <Icon size={15} iconName="code" />
      </a>
    </Container>
  </footer>
);
