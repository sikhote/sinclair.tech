import { spacing, colors, bps } from 'lib/styling';

const styles = {
  images: {
    display: 'flex',
    gap: spacing.f,
    flexDirection: 'column',
    listStyle: 'none',
    width: '100%',
    li: {
      background: colors.darkGrey1,
      height: 600,
      padding: spacing.f,
      display: 'flex',
      flexDirection: 'column',
      figure: {
        position: 'relative',
        width: '100%',
        height: '100%',
        img: {
          cursor: 'pointer',
        },
      },
      legend: {
        paddingTop: spacing.f,
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      gap: spacing.e,
      li: {
        padding: spacing.e,
      },
    },
  },
};

export default styles;
