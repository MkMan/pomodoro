import { cx } from '$app-utils';
import { Component, JSX, createMemo } from 'solid-js';

import { container } from './styles.css';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  class?: string;
  maxWidth?: number | string;
};

const Container: Component<ContainerProps> = (props) => {
  const maxWidth = createMemo(() =>
    typeof props.maxWidth === 'number' || typeof props.maxWidth === 'string'
      ? `${props.maxWidth}px`
      : undefined,
  );

  return (
    <div class={cx(container, props.class)} style={{ 'max-width': maxWidth() }}>
      {props.children}
    </div>
  );
};

export { Container };
