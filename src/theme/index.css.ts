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

  ctaBackground: colorChambray,
  ctaText: colorGrayNurse,

  danger: colorHippiePink,

  font: colorBleachedRevolver,
  fontInverted: colorGrayNurse,

  overlay: colorBleachedRevolver,

  shadowColor: '120deg 4% 60%',
});

const darkThemeClassName = createTheme(colorVariables, {
  background: colorBleachedRevolver,
  backgroundInverted: colorGrayNurse,

  ctaBackground: colorChambray,
  ctaText: colorGrayNurse,

  danger: colorHippiePink,

  font: colorGrayNurse,
  fontInverted: colorBleachedRevolver,

  overlay: colorBermudaGray,

  shadowColor: '254deg 57% 6%',
});

const rootVariables = createGlobalTheme('body', {
  color: {},
  opacity: {
    inputDisabled: '0.7',
  },
  shadow: {
    /* eslint-disable perfectionist/sort-objects */
    lowElevation: `
      0.3px 0.5px 0.7px hsl(${colorVariables.shadowColor} / 0.29),
      0.4px 0.8px 1px -1.2px hsl(${colorVariables.shadowColor} / 0.29),
      0.9px 1.9px 2.4px -2.5px hsl(${colorVariables.shadowColor} / 0.29)
    `,
    mediumElevation: `
      0.3px 0.5px 0.7px hsl(${colorVariables.shadowColor} / 0.24),
      0.6px 1.3px 1.6px -0.6px hsl(${colorVariables.shadowColor} / 0.24),
      1.2px 2.4px 3px -1.2px hsl(${colorVariables.shadowColor} / 0.24),
      2.4px 4.8px 6px -1.9px hsl(${colorVariables.shadowColor} / 0.24),
      4.6px 9.3px 11.7px -2.5px hsl(${colorVariables.shadowColor} / 0.24)
    `,
    highElevation: `
      0.3px 0.5px 0.7px hsl(${colorVariables.shadowColor} / 0.23),
      1.1px 2.1px 2.7px -0.3px hsl(${colorVariables.shadowColor} / 0.23),
      1.8px 3.7px 4.6px -0.6px hsl(${colorVariables.shadowColor} / 0.23),
      2.8px 5.6px 7px -0.8px hsl(${colorVariables.shadowColor} / 0.23),
      4px 8.1px 10.2px -1.1px hsl(${colorVariables.shadowColor} / 0.23),
      5.8px 11.6px 14.6px -1.4px hsl(${colorVariables.shadowColor} / 0.23),
      8.2px 16.4px 20.6px -1.7px hsl(${colorVariables.shadowColor} / 0.23),
      11.5px 23px 28.9px -1.9px hsl(${colorVariables.shadowColor} / 0.23),
      15.8px 31.6px 39.7px -2.2px hsl(${colorVariables.shadowColor} / 0.23),
      21.3px 42.5px 53.5px -2.5px hsl(${colorVariables.shadowColor} / 0.23)
    `,
    /* eslint-enable perfectionist/sort-objects */
  },
});

globalStyle('body', {
  backgroundColor: `${colorVariables.background}`,
  color: `${colorVariables.font}`,
});

const variables = {
  ...rootVariables,
  color: { ...rootVariables.color, ...colorVariables },
  inputOffset: '4px',
  transition: {
    buttonHoverEnd: '400ms',
    buttonHoverStart: '200ms',
  },
};

export { darkThemeClassName, lightThemeClassName, variables };
