import { style } from '@vanilla-extract/css';

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

const header = style({
  backgroundColor: 'var(--color-background)',
  isolation: 'isolate',
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

const main = style({
  flex: '1',
});

const section = style({
  paddingBlockEnd: 32,
  paddingBlockStart: 48,
});

export { header, main, section, wrapper };
