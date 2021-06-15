import { spacing, bps, zIndexes, colors } from 'lib/styling';

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: zIndexes.overlay,
    width: '100%',
    height: '100%',
    background: colors.black,
    cursor: 'pointer',
    padding: spacing.f,
    '& > div': {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      padding: spacing.e,
    },
  },
};

export default styles;
