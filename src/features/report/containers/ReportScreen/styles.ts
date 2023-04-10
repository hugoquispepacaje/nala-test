import colors from '../../../../style/colors';

export default {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  infoContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '2rem',
    width: '100%',
    justifyContent: 'center',
  },
  orgChartTitle: {
    paddingTop: '1rem',
    color: colors.primary_text,
    textAlign: 'center' as const,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  nodeContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: '1.5rem',
  },
};
