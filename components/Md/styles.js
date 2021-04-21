import {
  fontFamilies,
  fontWeights,
  fontSizes,
  colors,
  spacing,
  lineHeights,
} from 'lib/styling';
import { css } from '@emotion/react';

const styles = {
  root: css`
    &:nth-of-type(n + 3) {
      padding-top: ${spacing.e}px;
    }
    & a {
      color: ${colors.green1};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    @media print {
      & a {
        color: ${colors.black};
        text-decoration: none;
      }
    }
    & h1,
    & h2,
    & h3,
    & h4 {
      color: ${colors.lightGrey1};

      @media print {
        color: ${colors.black};
      }
    }
    & h1 {
      padding-bottom: ${spacing.e}px;
      font-size: ${fontSizes.e}px;
      font-weight: ${fontWeights.thin};
      line-height: ${lineHeights.normal};
    }
    & h2 {
      padding-bottom: ${spacing.c}px;
      font-size: ${fontSizes.d}px;
      font-weight: ${fontWeights.thin};
      line-height: ${lineHeights.normal};
    }
    & h3 {
      padding-bottom: ${spacing.c}px;
      font-size: ${fontSizes.c}px;
      font-weight: ${fontWeights.bold};
      line-height: ${lineHeights.normal};
    }
    & h4 {
      padding-bottom: ${spacing.c}px;
      font-size: ${fontSizes.b}px;
      font-weight: ${fontWeights.bold};
      line-height: ${lineHeights.normal};
    }
    & hr {
      height: 1px;
      background: ${colors.darkGrey2};
      border: none;
      margin-top: ${spacing.e}px;
      margin-bottom: ${spacing.f}px;
    }
    & blockquote {
      font-style: italic;
      font-size: ${fontSizes.f}px;
      display: inline-block;
    }
    & blockquote > * {
      display: inline;
    }
    & blockquote:before {
      display: inline;
      content: '“';
    }
    & blockquote:after {
      display: inline;
      content: '”';
    }
    & pre {
      max-width: 100%;
      word-break: break-all;
      white-space: pre-wrap;
      font-size: ${fontSizes.code}px;
    }
    & p > code,
    & ul > li > code,
    & ol > li > code {
      font-size: ${fontSizes.code}px;
      word-break: break-all;
      background: ${colors.darkGrey1};
      color: ${colors.lightGrey1};
      padding: 2px 5px 4px 5px;
      position: relative;
      bottom: 2px;
    }
    & img {
      max-width: 100%;
    }
    & ul {
      padding: 0;
      list-style: none;
    }
    & ul > li {
      padding-left: 30px;
      text-indent: -20px;
    }
    & ul > li:before {
      content: '•';
      padding-right: 12px;
    }
    & ol {
      padding: 0;
      margin-left: ${spacing.e}px;
    }
    & > *:not(:last-child):not(h1):not(h2):not(h3):not(h4):not(hr) {
      padding-bottom: ${spacing.f}px;
    }
    & .hljs {
      display: block;
      overflow-x: auto;
      padding: ${spacing.e}px;
      background: ${colors.darkGrey1};
      color: ${colors.lightGrey1};
    }
    & .hljs-comment,
    & .hljs-quote {
      color: ${colors.lightGrey3};
    }
    & .hljs-keyword,
    & .hljs-selector-tag,
    & .hljs-addition {
      color: ${colors.codeGreen};
    }
    & .hljs-number,
    & .hljs-string,
    & .hljs-meta .hljs-meta-string,
    & .hljs-literal,
    & .hljs-doctag,
    & .hljs-regexp {
      color: ${colors.codeCyan};
    }
    & .hljs-title,
    & .hljs-section,
    & .hljs-name,
    & .hljs-selector-id,
    & .hljs-selector-class {
      color: ${colors.codeBlue};
    }
    & .hljs-attribute,
    & .hljs-attr,
    & .hljs-variable,
    & .hljs-template-variable,
    & .hljs-class .hljs-title,
    & .hljs-type {
      color: ${colors.codeYellow};
    }
    & .hljs-symbol,
    & .hljs-bullet,
    & .hljs-subst,
    & .hljs-meta,
    & .hljs-meta .hljs-keyword,
    & .hljs-selector-attr,
    & .hljs-selector-pseudo,
    & .hljs-link {
      color: ${colors.codeOrange};
    }
    & .hljs-built_in,
    & .hljs-deletion {
      color: ${colors.codeRed};
    }
    & .hljs-emphasis {
      font-style: italic;
    }
    & .hljs-strong {
      font-weight: bold;
    }
  `,
};

export default styles;
