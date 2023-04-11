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
  workerContainer: {
    marginBottom: '1.4rem',
  },
  labelText: {
    color: colors.white,
    textAlign: 'center' as const,
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '0.4rem',
  },
  text: {
    color: colors.white,
    textAlign: 'center' as const,
    fontSize: '1rem',
    marginBottom: '0.4rem',
  },
};
