import { spacing, bps } from 'lib/styling';

const styles = {
  root: {
    listStyle: 'none',
    width: '100%',
    display: 'grid',
    gap: spacing.f,
    gridAutoFlow: 'row',
    gridTemplateColumns: '1fr 1fr',
    gridAutoColumns: '1fr 1fr',
    [`@media (max-width: ${bps.c - 1}px)`]: {
      gridTemplateColumns: '1fr',
      gridAutoColumns: '1fr',
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      gap: spacing.e,
      padding: spacing.e,
    },
    ul: {
      listStyle: 'none',
      display: 'grid',
      gap: spacing.f,
      gridTemplateColumns: '1fr',
      gridAutoColumns: '1fr',
      [`@media (max-width: ${bps.a - 1}px)`]: {
        gap: spacing.e,
      },
    },
  },
};

export default styles;
