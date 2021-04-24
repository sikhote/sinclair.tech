import {
  fontFamilies,
  fontWeights,
  fontSizes,
  colors,
  lineHeights,
  spacing,
  bps,
  zIndexes,
} from 'lib/styling';
import { css } from '@emotion/react';

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: zIndexes.nav,
    top: spacing.h,
    marginLeft: '50%',
    left: -638,
    [`@media (max-width: ${bps.e - 1}px)`]: {
      marginLeft: 0,
      left: spacing.h,
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      width: '100%',
      top: 'auto',
      bottom: 0,
      left: 0,
      flexDirection: 'row',
      background: colors.darkGrey2,
    },
    '@media print': {
      display: 'none',
    },
  },
  navResume: {
    display: 'none',
  },
  link: {
    fontSize: fontSizes.c,
    color: colors.lightGrey3,
    textDecoration: 'none',
    padding: spacing.d,
    outline: 'none',
    span: {
      display: 'block',
    },
    i: {
      display: 'none',
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      width: '100%',
      textAlign: 'center',
      span: {
        fontSize: fontSizes.a,
      },
      i: {
        display: 'inline',
      },
    },
  },
  linkActive: {
    color: colors.white,
  },
  main: {
    width: '100%',
    maxWidth: 990,
    minHeight: '100vh',
    margin: `${spacing.h}px auto`,
    display: 'flex',
    [`@media (max-width: ${bps.e - 1}px)`]: {
      padding: `${spacing.h}px ${spacing.h}px ${spacing.h}px 190px`,
      maxWidth: '100%',
      margin: 0,
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      padding: '0 0 54px 0',
    },
    '@media print': {
      maxWidth: '100% !important',
      padding: '0 !important',
      margin: '0 !important',
    },
  },
  mainResume: {
    [`@media (max-width: ${bps.e - 1}px)`]: {
      padding: spacing.h,
      maxWidth: 990,
      margin: '0 auto',
    },
    [`@media (max-width: ${bps.a - 1}px)`]: {
      padding: 0,
    },
  },
  global: css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: ${fontFamilies.normal};
      font-weight: ${fontWeights.normal};
      font-size: ${fontSizes.b}px;
      line-height: ${lineHeights.normal};
      color: ${colors.lightGrey3};
      background: ${colors.black};
    }
    ::selection {
      background: ${colors.darkGrey1};
    }

    @media print {
      body {
        color: ${colors.black};
        background: ${colors.white};
      }
    }
  `,
};

export default styles;
