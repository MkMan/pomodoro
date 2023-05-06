import { css } from '@emotion/css';

const wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const header = css({
  position: 'sticky',
  top: 0,
  backgroundColor: 'var(--color-background)',
  isolation: 'isolate',
  zIndex: 1,
});

const main = css({
  flex: '1',
});

const section = css({
  paddingBlockStart: 48,
  paddingBlockEnd: 32,
});

export { header, main, section, wrapper };
