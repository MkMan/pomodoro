import { Component } from 'solid-js';

import { Collapse } from '$app-components';

import { Alerts } from './alerts/alerts';
import { Durations } from './durations/durations';
import * as styles from './styles';
import { Theme } from './theme/theme';

type Props = {
  dataTestId?: string;
};

export const Settings: Component<Props> = (props) => {
  return (
    <div class={styles.settingsWrapper} data-testid={props.dataTestId}>
      <Collapse
        label="Durations"
        headingLevel={3}
        isOpen
        content={<Durations />}
      />
      <Collapse label="Alerts" headingLevel={3} content={<Alerts />} />
      <Collapse label="Theme" headingLevel={3} content={<Theme />} />
    </div>
  );
};
