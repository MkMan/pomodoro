import { css } from '@emotion/css';

import { cx } from '../cx/cx';

type DefaultProps = {
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  pl?: string | number;
};

type Component<Props> = (props: Props) => JSX.Element;

export const withDefaultProps = <BaseProps,>(
  Component: Component<BaseProps>
): Component<BaseProps & DefaultProps & { className?: string }> => {
  const WithDefaultProps: Component<
    BaseProps & DefaultProps & { className?: string }
  > = ({ className, m, mb, ml, mr, mt, p, pb, pl, pr, pt, ...baseProps }) => (
    <Component
      {...(baseProps as BaseProps)}
      className={cx(
        css({
          margin: m,
          marginBlockEnd: mb,
          marginInlineStart: ml,
          marginInlineEnd: mr,
          marginBlockStart: mt,
          padding: p,
          paddingBlockEnd: pb,
          paddingInlineStart: pl,
          paddingInlineEnd: pr,
          paddingBlockStart: pt,
        }),
        className
      )}
    />
  );

  return WithDefaultProps;
};
