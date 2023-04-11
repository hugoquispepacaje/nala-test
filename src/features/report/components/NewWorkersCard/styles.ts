import colors from '../../../../style/colors';

export default {
  container: {
    width: '300px',
    marginBottom: '2rem',
    backgroundColor: colors.primary,
  },
  headerText: {
    paddingTop: '1rem',
    color: colors.white,
    textAlign: 'center' as const,
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  text: {
    color: colors.white,
    textAlign: 'center' as const,
    fontSize: '1rem',
    marginBottom: '1rem',
  },
};
