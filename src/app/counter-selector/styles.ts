import { css, CSSObject } from '@emotion/css';

const wrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
});

const commonLabelStyles: CSSObject = {
  fontSize: 'var(--size-font-h2)',
  fontWeight: 'bold',
};

const label = css(commonLabelStyles);

const currentCounter = css({
  ...commonLabelStyles,
  color: 'var(--color-cta-background)',
});

export { currentCounter, label, wrapper };
