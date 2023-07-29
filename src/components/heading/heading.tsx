import { Component, mergeProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { cx } from '$app-utils';

import { fontWeightMap, sizeMap } from './constants';
import { heading } from './styles.css';
import { HeadingProps } from './types';

const Heading: Component<HeadingProps> = (_props) => {
  const props = mergeProps({ level: 1 }, _props);

  return (
    <Dynamic
      tabIndex={props.shouldAutoFocus ? -1 : undefined}
      component={`h${props.level}`}
      style={{
        'font-size': props.size
          ? props.size
          : sizeMap[props.level as NonNullable<HeadingProps['level']>],
        'font-weight': props.weight ? fontWeightMap[props.weight] : 'bold',
      }}
      class={cx(props.class, heading)}
    >
      {props.children}
    </Dynamic>
  );
};

export { Heading };
