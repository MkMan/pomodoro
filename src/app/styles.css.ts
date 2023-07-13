import { style } from '@vanilla-extract/css';

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const header = style({
  position: 'sticky',
  top: 0,
  backgroundColor: 'var(--color-background)',
  isolation: 'isolate',
  zIndex: 1,
});

const main = style({
  flex: '1',
});

const section = style({
  paddingBlockStart: 48,
  paddingBlockEnd: 32,
});

export { header, main, section, wrapper };
