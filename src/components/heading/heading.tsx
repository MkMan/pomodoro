import { cx } from '$app-utils';
import { type Component, mergeProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { HeadingProps } from './types';

import { fontWeightMap, sizeMap } from './constants';
import { heading } from './styles.css';

const Heading: Component<HeadingProps> = (_props) => {
  const props = mergeProps({ level: 1 }, _props);

  return (
    <Dynamic
      class={cx(props.class, heading)}
      component={`h${props.level}`}
      style={{
        'font-size': props.size
          ? props.size
          : sizeMap[props.level as NonNullable<HeadingProps['level']>],
        'font-weight': props.weight ? fontWeightMap[props.weight] : 'bold',
      }}
      tabIndex={props.shouldAutoFocus ? -1 : undefined}
    >
      {props.children}
    </Dynamic>
  );
};

export { Heading };
