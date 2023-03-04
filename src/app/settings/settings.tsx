import { Component } from 'solid-js';

import { Durations } from './durations/durations';
import * as styles from './styles';
import { Theme } from './theme/theme';

type Props = {
  dataTestId?: string;
};

export const Settings: Component<Props> = (props) => {
  return (
    <div class={styles.settingsWrapper} data-testid={props.dataTestId}>
      <Durations />
      <Theme />
    </div>
  );
};
