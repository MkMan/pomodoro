import { ComplexStyleRule, style } from '@vanilla-extract/css';

type BaseStylesColors = Record<'font' | 'background' | 'border', string>;

const getBaseStyles = ({
  font,
  background,
  border,
}: BaseStylesColors): ComplexStyleRule => ({
  backgroundColor: `var(${background})`,
  color: `var(${font})`,
  border: `2px solid var(${border})`,
  paddingInline: 40,
  paddingBlock: 16,
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '1.2rem',
  transition: 'background-color, color 200ms ease',
  outlineOffset: 4,

  selectors: {
    '&.isSmall': {
      paddingInline: 16,
      paddingBlock: 8,
    },

    '&:not(:disabled):hover': {
      border: `2px solid var(${background})`,
      backgroundColor: `var(${font})`,
      color: `var(${background})`,
    },
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 'var(--opacity-input-disabled)',
  },
});

export const primary = style(
  getBaseStyles({
    font: '--color-cta-font',
    background: '--color-cta-background',
    border: '--color-cta-background',
  })
);

export const secondary = style(
  getBaseStyles({
    font: '--color-cta-background',
    background: '--color-cta-font',
    border: '--color-cta-background',
  })
);

export const danger = style(
  getBaseStyles({
    font: '--color-cta-font',
    background: '--color-danger',
    border: '--color-danger',
  })
);
