import { css } from '@emotion/css';

import { cx } from '../cx/cx';

type Margins = {
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
};

type Component<Props> = (props: Props) => JSX.Element;

export const withMargins = <BaseProps,>(
  Component: Component<BaseProps>
): Component<BaseProps & Margins & { className?: string }> => {
  const WithMargins: Component<
    BaseProps & Margins & { className?: string }
  > = ({ className, m, mb, ml, mr, mt, ...baseProps }) => (
    <Component
      {...(baseProps as BaseProps)}
      className={cx(
        css({
          margin: m,
          marginBlockEnd: mb,
          marginInlineStart: ml,
          marginInlineEnd: mr,
          marginBlockStart: mt,
        }),
        className
      )}
    />
  );

  return WithMargins;
};
