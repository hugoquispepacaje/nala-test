import colors from '../../style/colors';

export default {
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
};
