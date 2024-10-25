import type { Component } from 'solid-js';

import { Container } from '$app-components';
import { variables } from '$app-theme';
import { FiGithub } from 'solid-icons/fi';

import { version } from '../../../package.json';
import * as styles from './styles.css';

export const Footer: Component = () => (
  <footer class={styles.footer}>
    <Container class={styles.wrapper} maxWidth={1000}>
      <span>App version: {version}</span>
      <a
        class={styles.sourceCodeLink}
        href="https://github.com/MkMan/pomodoro"
        target="blank"
        title="Source code"
      >
        <FiGithub color={variables.color.font} size={20} />
      </a>
    </Container>
  </footer>
);
