import css from 'styled-jsx/css';
import {
  fontFamilies,
  fontWeights,
  fontSizes,
  colors,
  spacing,
  lineHeights,
} from '../../lib/styling';

export default css.global`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
  body {
    font-family: ${fontFamilies.normal};
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes.a3}px;
    line-height: ${lineHeights.normal};
    color: ${colors.text};
    background: ${colors.background};
  }
  @media print {
    body {
      color: ${colors.black};
      background: ${colors.white};
    }
  }
  .markdown:nth-of-type(n + 3) {
    padding-top: ${spacing.a5}px;
  }
  .markdown a {
    color: ${colors.links};
  }
  @media print {
    .markdown a {
      color: ${colors.black};
      text-decoration: none;
    }
  }
  .markdown h1 {
    padding-bottom: ${spacing.a5}px;
    font-size: ${fontSizes.a5}px;
    font-weight: ${fontWeights.thin};
    color: ${colors.h1};
    line-height: ${lineHeights.normal};
  }
  @media print {
    .markdown h1 {
      color: ${colors.black};
    }
  }
  .markdown h2 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a4}px;
    font-weight: ${fontWeights.thin};
    color: ${colors.h2};
    line-height: ${lineHeights.normal};
  }
  @media print {
    .markdown h2 {
      color: ${colors.black};
    }
  }
  .markdown h3 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a3}px;
    font-weight: ${fontWeights.bold};
    color: ${colors.h3};
    line-height: ${lineHeights.normal};
  }
  @media print {
    .markdown h3 {
      color: ${colors.black};
    }
  }
  .markdown h4 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a2}px;
    font-weight: ${fontWeights.bold};
    color: ${colors.h4};
    line-height: ${lineHeights.normal};
  }
  @media print {
    .markdown h4 {
      color: ${colors.black};
    }
  }
  .markdown hr {
    height: 1px;
    background: ${colors.border};
    border: none;
    margin-top: ${spacing.a5}px;
    margin-bottom: ${spacing.a6}px;
  }
  .markdown blockquote {
    color: ${colors.a14};
    font-style: italic;
    font-size: ${fontSizes.a5}px;
    display: inline-block;
  }
  .markdown blockquote > * {
    display: inline;
  }
  .markdown blockquote:before {
    display: inline;
    content: '“';
    color: ${colors.text};
  }
  .markdown blockquote:after {
    display: inline;
    content: '”';
    color: ${colors.text};
  }
  .markdown pre {
    max-width: 100%;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: ${fontSizes.a2}px;
  }
  .markdown p > code,
  .markdown ul > li > code,
  .markdown ol > li > code {
    font-size: ${fontSizes.a2}px;
    word-break: break-all;
    background: ${colors.a2};
    padding: ${spacing.a2}px ${spacing.a4}px;
  }
  .markdown img {
    max-width: 100%;
  }
  .markdown ul {
    padding: 0;
    list-style: none;
  }
  .markdown ul > li {
    padding-left: 30px;
    text-indent: -20px;
  }
  .markdown ul > li:before {
    content: '•';
    padding-right: 12px;
  }
  .markdown ol {
    padding: 0;
    margin-left: ${spacing.a5}px;
  }
  .markdown > *:not(:last-child):not(h1):not(h2):not(h3):not(h4):not(hr) {
    padding-bottom: ${spacing.a6}px;
  }

  /*
  Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>
  */
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: ${colors.a2};
    color: ${colors.text};
  }
  .hljs-comment,
  .hljs-quote {
    color: ${colors.a3};
  }
  /* Solarized Green */
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-addition {
    color: ${colors.a16};
  }
  /* Solarized Cyan */
  .hljs-number,
  .hljs-string,
  .hljs-meta .hljs-meta-string,
  .hljs-literal,
  .hljs-doctag,
  .hljs-regexp {
    color: ${colors.a15};
  }
  /* Solarized Blue */
  .hljs-title,
  .hljs-section,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: ${colors.a14};
  }
  /* Solarized Yellow */
  .hljs-attribute,
  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-class .hljs-title,
  .hljs-type {
    color: ${colors.a9};
  }
  /* Solarized Orange */
  .hljs-symbol,
  .hljs-bullet,
  .hljs-subst,
  .hljs-meta,
  .hljs-meta .hljs-keyword,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-link {
    color: ${colors.a10};
  }
  /* Solarized Red */
  .hljs-built_in,
  .hljs-deletion {
    color: ${colors.a11};
  }
  .hljs-formula {
    background: ${colors.a2};
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: bold;
  }
`;
