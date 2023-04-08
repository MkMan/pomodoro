import { css } from '@emotion/css';

const wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const main = css({ flex: '1', paddingBlockStart: 16 });

const counterSelector = css({
  paddingBlock: 32,
});

export { counterSelector, main, wrapper };
