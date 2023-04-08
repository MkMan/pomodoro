import { css } from '@emotion/css';

const wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const main = css({
  flex: '1',
});

const section = css({
  paddingBlockStart: 48,
  paddingBlockEnd: 32,
});

export { main, section, wrapper };
