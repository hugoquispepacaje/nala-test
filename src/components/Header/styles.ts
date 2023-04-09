import colors from '../../style/colors';

export default {
  headerContainer: {
    padding: '2rem 1.5rem 2rem 1.5rem',
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
  button: {
    color: colors.white,
    border: `0.1rem solid ${colors.white}`,
  },
  image: {
    cursor: 'pointer',
  },
};
