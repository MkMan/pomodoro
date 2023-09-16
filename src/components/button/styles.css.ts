import { variables } from '$app-theme';
import { ComplexStyleRule, style } from '@vanilla-extract/css';

type BaseStylesColors = Record<'background' | 'border' | 'font', string>;

const getBaseStyles = ({
  background,
  border,
  font,
}: BaseStylesColors): ComplexStyleRule => ({
  ':disabled': {
    cursor: 'not-allowed',
    opacity: variables.opacity.inputDisabled,
  },
  backgroundColor: background,
  border: `2px solid ${border}`,
  borderRadius: 8,
  color: font,
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
      backgroundColor: `${font}`,
      border: `2px solid ${background}`,
      color: background,
    },
  },

  transition: 'background-color, color 200ms ease',
});

export const primary = style(
  getBaseStyles({
    background: variables.color.ctaBackground,
    border: variables.color.ctaBackground,
    font: variables.color.ctaText,
  }),
);

export const secondary = style(
  getBaseStyles({
    background: variables.color.ctaText,
    border: variables.color.ctaBackground,
    font: variables.color.ctaBackground,
  }),
);

export const danger = style(
  getBaseStyles({
    background: variables.color.danger,
    border: variables.color.danger,
    font: variables.color.ctaText,
  }),
);
