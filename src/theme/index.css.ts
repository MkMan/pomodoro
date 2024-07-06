import {
  createGlobalTheme,
  createTheme,
  globalStyle,
} from '@vanilla-extract/css';

/**
 * Light shades
 * Use this color as the background for your dark-on-light designs, or the text color of an inverted design.
 */
const colorGrayNurse = '#f5f7f5';

/**
 * Light accent
 * Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.
 */
const colorBermudaGray = '#7a88aa';

/**
 * Main brand color
 * This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
 */
const colorChambray = '#2c4f7c';

/**
 * Dark accent
 * Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.
 */
const colorHippiePink = '#a84259';

/**
 * Dark shades
 * Use as the text color for dark-on-light designs, or as the background for inverted designs.
 */
const colorBleachedRevolver = '#211a39';

const [lightThemeClassName, colorVariables] = createTheme({
  background: colorGrayNurse,
  backgroundInverted: colorBleachedRevolver,

  boxShadowCard: '0 2px 14px hsl(120, 5%, 85%)',

  ctaBackground: colorChambray,
  ctaText: colorGrayNurse,

  danger: colorHippiePink,

  font: colorBleachedRevolver,
  fontInverted: colorGrayNurse,

  overlay: colorBleachedRevolver,
});

const darkThemeClassName = createTheme(colorVariables, {
  background: colorBleachedRevolver,
  backgroundInverted: colorGrayNurse,

  boxShadowCard: '0 2px 14px hsl(254, 37%, 5%)',

  ctaBackground: colorChambray,
  ctaText: colorGrayNurse,

  danger: colorHippiePink,

  font: colorGrayNurse,
  fontInverted: colorBleachedRevolver,

  overlay: colorBermudaGray,
});

const rootVariables = createGlobalTheme('body', {
  color: {},
  opacity: {
    inputDisabled: '0.7',
  },
});

globalStyle('body', {
  backgroundColor: `${colorVariables.background}`,
  color: `${colorVariables.font}`,
});

const variables = {
  ...rootVariables,
  color: { ...rootVariables.color, ...colorVariables },
};

export { darkThemeClassName, lightThemeClassName, variables };
