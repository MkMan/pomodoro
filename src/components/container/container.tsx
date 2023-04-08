import { css } from '@emotion/css';
import { Component, JSX } from 'solid-js';

import { cx } from '$app-utils';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  class?: string;
  height?: string | number;
  maxWidth?: string | number;
};

const Container: Component<ContainerProps> = (props) => {
  return (
    <div
      class={cx(
        css({
          height: props.height,
          maxWidth: props.maxWidth,
          marginInline: 'auto',
          paddingInline: 16,
        }),
        props.class
      )}
    >
      {props.children}
    </div>
  );
};

export { Container };
