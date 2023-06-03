import { css } from '@emotion/css';

const headingWrapper = css({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
});

const heading = css({
  paddingBlockEnd: 16,
});

const createCta = css({
  marginBlockStart: 16,
  width: '100%',
});

export { createCta, heading, headingWrapper };
