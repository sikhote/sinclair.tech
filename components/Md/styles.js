import {
  fontWeights,
  fontSizes,
  colors,
  spacing,
  lineHeights,
} from 'lib/styling';

const styles = {
  root: {
    ':nth-of-type(n + 3)': {
      paddingTop: spacing.e,
    },
    a: {
      color: colors.green1,
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    h1: {
      color: colors.lightGrey1,
      paddingBottom: spacing.e,
      fontSize: fontSizes.e,
      fontWeight: fontWeights.thin,
      lineHeight: lineHeights.normal,
    },
    h2: {
      color: colors.lightGrey1,
      paddingBottom: spacing.c,
      fontSize: fontSizes.d,
      fontWeight: fontWeights.thin,
      lineHeight: lineHeights.normal,
    },
    h3: {
      color: colors.lightGrey1,
      paddingBottom: spacing.c,
      fontSize: fontSizes.c,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.normal,
    },
    h4: {
      color: colors.lightGrey1,
      paddingBottom: spacing.c,
      fontSize: fontSizes.b,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.normal,
    },
    hr: {
      height: 1,
      background: colors.darkGrey2,
      border: 'none',
      marginTop: spacing.e,
      marginBottom: spacing.f,
    },
    blockquote: {
      fontStyle: 'italic',
      fontSize: fontSizes.d,
      display: 'inline-block',
      '> *': {
        display: 'inline',
      },
      ':before': {
        display: 'inline',
        content: '"“"',
      },
      ':after': {
        display: 'inline',
        content: '"”"',
      },
    },
    pre: {
      maxWidth: '100%',
      wordBreak: 'break-all',
      whiteSpace: 'pre-wrap',
      fontSize: fontSizes.code,
    },
    'p > code, ul > li > code, ol > li > code': {
      fontSize: fontSizes.code,
      wordBreak: 'break-all',
      background: colors.darkGrey1,
      color: colors.lightGrey1,
      padding: '2px 5px 4px 5px',
      position: 'relative',
      bottom: 2,
    },
    img: {
      maxWidth: '100%',
    },
    ul: {
      padding: 0,
      listStyle: 'none',
      '& > li': {
        paddingLeft: 30,
        textIndent: -20,
        ':before': {
          content: '"•"',
          paddingRight: 12,
        },
      },
    },
    ol: {
      padding: 0,
      marginLeft: spacing.e,
    },
    '& > *:not(:last-child):not(h1):not(h2):not(h3):not(h4):not(hr)': {
      paddingBottom: spacing.f,
    },
    '.hljs': {
      display: 'block',
      overflowX: 'auto',
      padding: spacing.e,
      background: colors.darkGrey1,
      color: colors.lightGrey1,
      '::selection, & *::selection': {
        background: colors.darkGrey2,
      },
    },
    '.hljs-comment, .hljs-quote': {
      color: colors.lightGrey3,
    },
    '.hljs-keyword, .hljs-selector-tag, .hljs-addition': {
      color: colors.codeGreen,
    },
    '.hljs-number, .hljs-string, .hljs-meta .hljs-meta-string, .hljs-literal, .hljs-doctag, .hljs-regexp': {
      color: colors.codeCyan,
    },
    '.hljs-title, .hljs-section, .hljs-name, .hljs-selector-id, .hljs-selector-class': {
      color: colors.codeBlue,
    },
    '.hljs-attribute, .hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-class .hljs-title, .hljs-type': {
      color: colors.codeYellow,
    },
    '.hljs-symbol, .hljs-bullet, .hljs-subst, .hljs-meta, .hljs-meta .hljs-keyword, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-link': {
      color: colors.codeOrange,
    },
    '.hljs-built_in, .hljs-deletion': {
      color: colors.codeRed,
    },
    '.hljs-emphasis': {
      fontStyle: 'italic',
    },
    '.hljs-strong': {
      fontWeight: 'bold',
    },
    '@media print': {
      a: {
        color: colors.black,
        textDecoration: 'none',
      },
      h1: {
        color: colors.black,
      },
      h2: {
        color: colors.black,
      },
      h3: {
        color: colors.black,
      },
      h4: {
        color: colors.black,
      },
    },
  },
};

export default styles;
