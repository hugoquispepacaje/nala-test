import colors from '../../../../style/colors';

export default {
  container: {
    marginTop: '1rem',
  },
  labelsContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.4rem',
  },
  chip: {
    background: colors.white,
    color: colors.primary,
    borderRadius: '1.5rem',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    padding: '0.1rem 0 0.1rem 0',
  },
  nameLabel: {
    color: colors.white,
    fontWeight: 'bold',
  },
  label: {
    color: colors.white,
  },
};
