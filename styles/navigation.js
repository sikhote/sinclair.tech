import css from 'styled-jsx/css';
import { lighten } from 'polished';
import { bps, colors, spacing } from './base';

// prettier-ignore
export default css`
  .root {
    padding-bottom: ${spacing.large}px;

    :global(> div) {
      display: inline-block;
      margin-right: ${spacing.large}px;
      font-weight: 600;
      color: ${colors.primary};
      cursor: pointer;

      &:hover {
        color: ${lighten(0.05, colors.primary)};
        text-decoration: underline !important;
      }
    }
  }
`;
