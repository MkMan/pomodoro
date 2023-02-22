import { css } from '@emotion/css';
import React from 'react';

import { cx, withDefaultProps } from '$app-utils';

import { fontWeightMap, sizeMap } from './constants';
import { HeadingProps } from './types';

const Heading = ({
  className,
  children,
  level = 1,
  shouldAutoFocus,
  size,
  weight,
}: HeadingProps): JSX.Element => {
  const classes = cx(
    className,
    css({
      fontFamily: `'Raleway', sans-serif`,
      fontSize: size ? size : sizeMap[level],
      fontWeight: weight ? fontWeightMap[weight] : 'bold',
    })
  );

  return React.createElement(
    `h${level}`,
    {
      className: classes,
      autoFocus: shouldAutoFocus,
      tabIndex: shouldAutoFocus ? -1 : undefined,
    },
    children
  );
};

const HeadingWithDefaultProps = withDefaultProps(Heading);

export { HeadingWithDefaultProps as Heading };
