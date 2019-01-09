import css from 'styled-jsx/css';
import {
  fontFamilies,
  fontWeights,
  fontSizes,
  colors,
  spacing,
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
    color: ${colors.text};
    background: ${colors.background};
  }
  .markdown:nth-of-type(n + 3) {
    padding-top: ${spacing.a5}px;
  }
  .markdown a {
    color: ${colors.a1};
  }
  .markdown h1 {
    padding-bottom: ${spacing.a5}px;
    font-size: ${fontSizes.a5}px;
    font-weight: ${fontWeights.thin};
  }
  .markdown h2 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a4}px;
    font-weight: ${fontWeights.bold};
  }
  .markdown h3 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a3}px;
    font-weight: ${fontWeights.bold};
  }
  .markdown h4 {
    padding-bottom: ${spacing.a3}px;
    font-size: ${fontSizes.a2}px;
    font-weight: ${fontWeights.bold};
  }
  .markdown hr {
    border-top: .1px solid ${colors.border};
    margin-top: ${spacing.a5}px;
    margin-bottom: ${spacing.a6}px;
  }
  .markdown blockquote {
    color: ${colors.primary};
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
    background: ${colors.a3};
    padding: ${spacing.a3}px ${spacing.a4}px;
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
    padding-bottom: ${spacing.a5}px;
  }

  /*
  Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>
  */
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #002b36;
    color: #839496;
  }
  .hljs-comment,
  .hljs-quote {
    color: #586e75;
  }
  /* Solarized Green */
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-addition {
    color: #859900;
  }
  /* Solarized Cyan */
  .hljs-number,
  .hljs-string,
  .hljs-meta .hljs-meta-string,
  .hljs-literal,
  .hljs-doctag,
  .hljs-regexp {
    color: #2aa198;
  }
  /* Solarized Blue */
  .hljs-title,
  .hljs-section,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #268bd2;
  }
  /* Solarized Yellow */
  .hljs-attribute,
  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-class .hljs-title,
  .hljs-type {
    color: #b58900;
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
    color: #cb4b16;
  }
  /* Solarized Red */
  .hljs-built_in,
  .hljs-deletion {
    color: #dc322f;
  }
  .hljs-formula {
    background: #073642;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: bold;
  }
`;
