import colors from '../../style/colors';

export default {
  headerContainer: {
    padding: '2rem 1rem 2rem 1rem',
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center' as const,
    fontSize: '1.4rem',
  },
};
