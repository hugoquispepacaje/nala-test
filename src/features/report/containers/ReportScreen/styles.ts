import colors from '../../../../style/colors';

export default {
  nodeContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: '1.5rem',
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
  infoContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '2rem',
    width: '100%',
    justifyContent: 'center',
  },
};
