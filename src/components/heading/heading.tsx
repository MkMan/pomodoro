import { css } from '@emotion/css';
import React from 'react';

import { cx, withMargins } from '$app-utils';

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

const HeadingWithMargins = withMargins(Heading);

export { HeadingWithMargins as Heading };
