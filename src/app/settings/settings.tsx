import { Component } from 'solid-js';

import { Durations } from './durations/durations';

type Props = {
  dataTestId?: string;
};

export const Settings: Component<Props> = (props) => {
  return (
    <div data-testid={props.dataTestId}>
      <Durations />
    </div>
  );
};
