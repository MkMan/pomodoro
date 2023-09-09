import { Container } from '$app-components';
import { FiGithub } from 'solid-icons/fi';
import { Component } from 'solid-js';

import { version } from '../../../package.json';
import * as styles from './styles.css';

export const Footer: Component = () => (
  <footer class={styles.footer}>
    <Container class={styles.wrapper} maxWidth={600}>
      <span>App version: {version}</span>
      <a
        class={styles.sourceCodeLink}
        href="https://github.com/MkMan/pomodoro"
        target="blank"
        title="Source code"
      >
        <FiGithub color="var(--color-font)" size={20} />
      </a>
    </Container>
  </footer>
);
