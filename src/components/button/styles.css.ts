import { ComplexStyleRule, style } from '@vanilla-extract/css';

type BaseStylesColors = Record<'background' | 'border' | 'font', string>;

const getBaseStyles = ({
  background,
  border,
  font,
}: BaseStylesColors): ComplexStyleRule => ({
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 'var(--opacity-input-disabled)',
  },
  backgroundColor: `var(${background})`,
  border: `2px solid var(${border})`,
  borderRadius: 8,
  color: `var(${font})`,
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontWeight: 600,
  outlineOffset: 4,
  paddingBlock: 16,
  paddingInline: 40,

  selectors: {
    '&.isSmall': {
      paddingBlock: 8,
      paddingInline: 16,
    },

    '&:not(:disabled):hover': {
      backgroundColor: `var(${font})`,
      border: `2px solid var(${background})`,
      color: `var(${background})`,
    },
  },

  transition: 'background-color, color 200ms ease',
});

export const primary = style(
  getBaseStyles({
    background: '--color-cta-background',
    border: '--color-cta-background',
    font: '--color-cta-font',
  })
);

export const secondary = style(
  getBaseStyles({
    background: '--color-cta-font',
    border: '--color-cta-background',
    font: '--color-cta-background',
  })
);

export const danger = style(
  getBaseStyles({
    background: '--color-danger',
    border: '--color-danger',
    font: '--color-cta-font',
  })
);
