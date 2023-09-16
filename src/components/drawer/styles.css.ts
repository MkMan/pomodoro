import { variables } from '$app-theme';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  backgroundColor: variables.color.overlay,
  bottom: 0,
  left: 0,
  opacity: 0,
  position: 'fixed',
  right: 0,
  selectors: {
    '&.isOpen': {
      opacity: 0.7,
    },
  },
  top: 0,
  transition: 'opacity 300ms',
  userSelect: 'none',
  width: '100%',
  willChange: 'opacity',

  zIndex: 1,
});

export const wrapper = style({
  backgroundColor: variables.color.background,
  bottom: 0,
  boxShadow: '6px 0px 16px 2px #777',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  left: 0,
  maxWidth: '500px',
  overflow: 'auto',

  position: 'fixed',
  selectors: {
    '&.isOpen': {
      transform: 'translate3d(0%, 0, 0)',
    },
  },
  top: 0,

  transform: 'translate3d(-103%, 0, 0)' /* extra 3% because of box-shadow */,
  transition: 'transform 200ms',

  width: '100%',

  willChange: 'transform',

  zIndex: 2,
});

export const header = style({
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 16,
});

export const content = style({
  flex: '1',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: 16,
  position: 'relative',
});
