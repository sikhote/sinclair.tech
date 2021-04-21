import css from 'styled-jsx/css';
import { fontSizes, colors, spacing, bps, fontWeights } from 'lib/styling';

const styles = {
  items: {
    li: {
      '& > div': {
        height: '100%',
      },
      a: {
        width: '100%',
        height: '100%',
        textDecoration: 'none',
        padding: `${spacing.e - 2}px ${spacing.e}px ${spacing.e}px ${
          spacing.e
        }px`,
      },
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      padding: 0,
    }
  },
  itemsThoughts: {
    li: {
      a: {
        display: 'block',
        background: colors.darkGrey1,
        strong: {
          color: colors.lightGrey1,
          fontWeight: fontWeights.normal,
          fontSize: fontSizes.d,
        },
        span: {
          display: 'block',
          paddingTop: spacing.d,
          color: colors.lightGrey3,
          fontWeight: fontWeights.normal,
          fontSize: fontSizes.b,
        },
      },
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      gap: 0,
      li: {
        a: {
          background: 'none',
        },
        '&:nth-of-type(n + 2)': {
          a: {
            borderTop: `1px solid ${colors.darkGrey2}`,
          },
        },
      },
    },
  },
  itemsProjects: {
    gridAutoRows: 300,
    li: {
      a: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        strong: {
          position: 'relative',
          zIndex: 1,
          color: colors.lightGrey1,
          fontWeight: fontWeights.normal,
          fontSize: fontSizes.d,
        },
        img: {
          filter: 'saturate(0%) contrast(30%)',
        },
        '&:after': {
          background: colors.black,
          opacity: 0.7,
          content: "''",
          display: 'block',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
      },
    },
    [`@media (max-width: ${bps.d - 1}px)`]: {
      gridAutoRows: 200,
    },
    [`@media (max-width: ${bps.c - 1}px)`]: {
      gridAutoRows: 100,
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      gap: 0,
      li: {
        a: {
          '&:after': {
            opacity: 0.8,
          },
        },
        '&:nth-of-type(n + 2)': {
          a: {
            borderTop: `1px solid ${colors.black}`,
          },
        },
      },
    },
  },
};

export default styles;
