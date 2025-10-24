import { lightColors, darkColors } from './color';
import { typography } from './typography';
import { spacing } from './spacing';
import { radii } from './radii';
import { elevation } from './elevation';
import { duration } from './duration';

export const semantic = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  typography: {
    fontSizes: typography.fontSizes,
    fontWeights: typography.fontWeights,
  },
  spacing: spacing,
  radii: radii,
  elevation: elevation,
  duration: duration,
};