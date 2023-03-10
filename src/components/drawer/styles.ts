import { css } from '@emotion/css';

export const overlay = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 1,
  opacity: 0,
  transition: 'opacity 300ms',
  willChange: 'opacity',
  backgroundColor: 'var(--color-overlay)',
  userSelect: 'none',

  '&.isOpen': {
    opacity: 0.7,
  },
});

export const wrapper = css({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  height: '100%',
  width: '100%',
  maxWidth: '500px',
  zIndex: 2,
  overflow: 'auto',

  transition: 'transform 200ms',
  willChange: 'transform',
  backgroundColor: 'var(--color-background)',

  display: 'flex',
  flexDirection: 'column',

  transform: 'translate3d(-103%, 0, 0)' /* extra 3% because of box-shadow */,

  boxShadow: '6px 0px 16px 2px #777',

  '&.isOpen': {
    transform: 'translate3d(0%, 0, 0)',
  },
});

export const header = css({
  padding: 16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
});

export const content = css({
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
  height: '100%',
  flex: '1',
  padding: 16,
});
