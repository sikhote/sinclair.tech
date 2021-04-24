import { bps, spacing, fontWeights } from 'lib/styling';

const styles = {
  root: {
    [`@media (max-width: ${bps.a - 1}px)`]: {
      padding: spacing.e,
    },
    '.markdown': {
      h1: {
        paddingBottom: 0,
      },
      h2: {
        fontWeight: fontWeights.thin,
      },
      '> ul:nth-of-type(1) > li': {
        paddingLeft: 0,
        textIndent: 0,
      },
      '> ul:nth-of-type(1) > li:before': {
        display: 'none',
      },
      '> ul:nth-of-type(2)': {
        columnCount: 3,
      },
      '> h4 + p': {
        paddingBottom: `${spacing.c}px !important`,
      },
      [`@media (max-width: ${bps.a - 1}px)`]: {
        '> ul:nth-of-type(2)': {
          columnCount: 1,
        },
      },
      '@media print': {
        '> ul:nth-of-type(2)': {
          columnCount: '3 !important',
        },
      },
    },
  },
};

export default styles;
