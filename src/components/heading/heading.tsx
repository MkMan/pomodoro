import { css } from '@emotion/css';
import { Component, mergeProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { cx, withDefaultProps } from '$app-utils';

import { fontWeightMap, sizeMap } from './constants';
import { HeadingProps } from './types';

const Heading: Component<HeadingProps> = (_props) => {
  const props = mergeProps({ level: 1 }, _props);

  return (
    <Dynamic
      tabIndex={props.shouldAutoFocus ? -1 : undefined}
      component={`h${props.level}`}
      class={cx(
        props.className,
        css({
          fontFamily: `'Raleway', sans-serif`,
          fontSize: props.size
            ? props.size
            : sizeMap[props.level as NonNullable<HeadingProps['level']>],
          fontWeight: props.weight ? fontWeightMap[props.weight] : 'bold',
        })
      )}
    >
      {props.children}
    </Dynamic>
  );
};

const HeadingWithDefaultProps = withDefaultProps(Heading);

export { HeadingWithDefaultProps as Heading };
