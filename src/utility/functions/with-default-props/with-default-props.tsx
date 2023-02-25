import { css } from '@emotion/css';
import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

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
  > = (_props) => {
    const [props, baseProps] = splitProps(_props, [
      'className',
      'm',
      'mb',
      'ml',
      'mr',
      'mt',
      'p',
      'pb',
      'pl',
      'pr',
      'pt',
    ]);
    return (
      <Component
        {...(baseProps as BaseProps)}
        // eslint-disable-next-line solid/no-react-specific-props -- accepting a prop called `class` is problematic
        className={cx(
          css({
            margin: props.m,
            marginBlockEnd: props.mb,
            marginInlineStart: props.ml,
            marginInlineEnd: props.mr,
            marginBlockStart: props.mt,
            padding: props.p,
            paddingBlockEnd: props.pb,
            paddingInlineStart: props.pl,
            paddingInlineEnd: props.pr,
            paddingBlockStart: props.pt,
          }),
          props.className
        )}
      />
    );
  };
  return WithDefaultProps;
};
