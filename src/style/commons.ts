import colors from './colors';

const button = {
  backgroundColor: colors.primary,
  border: `1px solid ${colors.primary}`,
};

const buttonInverted = {
  backgroundColor: colors.white,
  color: colors.primary,
  border: `1px solid ${colors.primary}`,
};

export { button, buttonInverted };
