import type { ComplexStyleRule } from '@vanilla-extract/css';

import { variables } from '$app-theme';
import { createContainer, style } from '@vanilla-extract/css';

const bodyContainer = createContainer();
const containerQuery = `@container ${bodyContainer} (width > 800px)`;

const cardStyles: ComplexStyleRule = {
  borderRadius: '8px',
  padding: '16px',
};

const wrapper = style({
  containerName: bodyContainer,
  containerType: 'inline-size',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

const mainContentInlinePadding = style({
  paddingInline: 16,
});

const header = style([
  mainContentInlinePadding,
  {
    backgroundColor: variables.color.background,
    isolation: 'isolate',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
]);

const main = style([
  mainContentInlinePadding,
  {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    gap: 32,
    paddingBlock: 32,

    // eslint-disable-next-line perfectionist/sort-objects -- will be overridden by basic styles
    [containerQuery]: {
      flexDirection: 'row',
    },
  },
]);

const todos = style({
  ...cardStyles,
  boxShadow: variables.shadow.highElevation,

  [containerQuery]: {
    flex: 1,
  },
});

const countdown = style({
  [containerQuery]: {
    ...cardStyles,
    alignSelf: 'start',
    boxShadow: variables.shadow.mediumElevation,
  },
});

const footer = mainContentInlinePadding;

export { countdown, footer, header, main, todos, wrapper };
