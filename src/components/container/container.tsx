import { Component, createMemo, JSX } from 'solid-js';

import { cx } from '$app-utils';

import { container } from './styles.css';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  class?: string;
  maxWidth?: string | number;
};

const Container: Component<ContainerProps> = (props) => {
  const maxWidth = createMemo(() =>
    typeof props.maxWidth === 'number' || typeof props.maxWidth === 'string'
      ? `${props.maxWidth}px`
      : undefined
  );

  return (
    <div style={{ 'max-width': maxWidth() }} class={cx(container, props.class)}>
      {props.children}
    </div>
  );
};

export { Container };
