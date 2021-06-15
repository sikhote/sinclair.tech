import { spacing, bps } from 'lib/styling';

const styles = {
  images: {
    display: 'flex',
    gap: spacing.f,
    flexDirection: 'column',
    listStyle: 'none',
    li: {
      position: 'relative',
      height: 300,
      img: {
        cursor: 'pointer',
      },
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      gap: spacing.e,
    },
  },
};

export default styles;
