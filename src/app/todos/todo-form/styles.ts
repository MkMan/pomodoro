import { css } from '@emotion/css';

const headingWrapper = css({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
});

const heading = css({
  paddingBlockEnd: 16,
});

const inputsWrapper = css({
  display: 'grid',
  gridTemplateColumns: '2fr minmax(110px, 1fr)',
  gap: 16,
});

const frequencyWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

const frequency = css({ width: '100%' });

const createCta = css({
  marginBlockStart: 16,
  width: '100%',
});

export {
  createCta,
  frequency,
  frequencyWrapper,
  heading,
  headingWrapper,
  inputsWrapper,
};
