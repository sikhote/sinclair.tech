import css from 'styled-jsx/css';
import { lighten } from 'polished';
import { fontSizes, fontFamilies, spacing, colors } from './base';

// prettier-ignore
export default css`
  body {
    margin: 0;
    ${fontSizes.small}
    ${fontFamilies.sansSerif}
    color: ${colors.text};
    font-weight: 200;

    * {
      margin: 0;
      padding: 0;
    }

    a {
      color: ${colors.primary};
      text-decoration: none;

      &:hover {
        color: ${lighten(0.05, colors.primary)};
        text-decoration: underline;
      }
    }

    h1 {
      ${fontSizes.huge}
      ${fontFamilies.sansSerif}
      font-weight: 200;
      padding-bottom: ${spacing.large}px;
    }

    h2 {
      ${fontSizes.larger}
      ${fontFamilies.sansSerif}
      font-weight: 600;
      padding-bottom: ${spacing.mini}px;
    }

    h3 {
      ${fontSizes.medium}
      ${fontFamilies.sansSerif}
      font-weight: 600;
    }

    h4 {
      ${fontSizes.small}
      ${fontFamilies.sansSerif}
      font-weight: 600;
    }

    hr {
      border-top: 1px solid ${colors.divider};
      margin-bottom: ${spacing.larger}px;
    }

    blockquote {
      color: ${colors.primary};
      font-style: italic;
      ${fontSizes.huge}
      ${fontFamilies.sansSerif}
      display: inline-block;

      > * {
        display: inline;
      }

      &:before {
        display: inline;
        content: "“";
        color: ${colors.text};
      }

      &:after {
        display: inline;
        content: "”";
        color: ${colors.text};
      }
    }

    pre {
      ${fontSizes.code}
      max-width: 100%;
      word-break: break-all;
      white-space: pre-wrap;
    }

    p > code,
    ul > li > code {
      ${fontSizes.code}
      word-break: break-all;
      background: ${colors.codeBg};
      padding-left: ${spacing.medium}px;
      padding-right: ${spacing.medium}px;
      padding-top: ${spacing.small}px;
      padding-bottom: ${spacing.small}px;
    }

    img {
      max-width: 100%;
    },

    ul {
      padding: 0;
      list-style: none;

      > li {
        padding-left: 34px;
        text-indent: -24px;

        &:before {
          content: "•";
          padding-right: ${spacing.large}px;
        }
      }
    }

    ol {
      padding: 0;
      margin-left: ${spacing.larger}px;
    }

    .content > *:not(:last-child):not(h1):not(h2):not(h3):not(h4):not(hr) {
      padding-bottom: ${spacing.larger}px;
    }

    footer {
      padding-top: ${spacing.larger}px;
    }
  }
`;
