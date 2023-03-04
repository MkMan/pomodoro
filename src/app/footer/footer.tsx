import { FiGithub } from 'solid-icons/fi';
import { Component } from 'solid-js';

import { Container } from '$app-components';

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
        <FiGithub color="var(--color-font)" size={20} />
      </a>
    </Container>
  </footer>
);
