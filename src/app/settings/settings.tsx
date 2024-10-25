import type { Component } from 'solid-js';

import { Collapse } from '$app-components';

import { Alerts } from './alerts/alerts';
import { Durations } from './durations/durations';
import * as styles from './styles.css';
import { Theme } from './theme/theme';

type Props = {
  dataTestId?: string;
};

export const Settings: Component<Props> = (props) => (
  <div class={styles.settingsWrapper} data-testid={props.dataTestId}>
    <Collapse
      content={<Durations />}
      headingLevel={3}
      isOpen
      label="Durations"
    />
    <Collapse content={<Alerts />} headingLevel={3} label="Alerts" />
    <Collapse content={<Theme />} headingLevel={3} label="Theme" />
  </div>
);
