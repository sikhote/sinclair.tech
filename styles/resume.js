import css from 'styled-jsx/css';
import { bps, spacing, colors, fontSizes, lineHeights } from './base';

// prettier-ignore
export default css`
  .resume {
    > :first-child {
      display: none;
    }

    > :nth-child(2) {
      h1 {
        padding-bottom: 0;
      }

      h2 {
        font-weight: 200;
      }
    }
  }
`;
