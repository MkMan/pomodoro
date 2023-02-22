import { css } from '@emotion/css';

import { cx, withDefaultProps } from '$app-utils';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  height?: string | number;
  maxWidth?: string | number;
};

const Container = ({
  children,
  className,
  height,
  maxWidth,
}: ContainerProps): JSX.Element => {
  return (
    <div
      className={cx(
        css({ height, maxWidth, marginInline: 'auto', paddingInline: 16 }),
        className
      )}
    >
      {children}
    </div>
  );
};

const ContainerWithDefaultProps = withDefaultProps(Container);

export { ContainerWithDefaultProps as Container };
