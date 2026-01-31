import type { Component } from 'solid-js';

import { variables } from '$app-theme';
import { cx } from '$app-utils';
import { TbBrandGithub } from 'solid-icons/tb';

import { version } from '../../../package.json';
import * as styles from './styles.css';

type FooterProps = {
  class?: string;
};

export const Footer: Component<FooterProps> = (props) => (
  <footer class={cx(styles.footer, props.class)}>
    <span>App version: {version}</span>
    <a
      aria-label="Source code"
      class={styles.sourceCodeLink}
      href="https://github.com/MkMan/pomodoro"
      target="blank"
    >
      <TbBrandGithub color={variables.color.font} size={20} />
    </a>
  </footer>
);
