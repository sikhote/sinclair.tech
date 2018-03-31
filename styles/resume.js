import css from 'styled-jsx/css';
import { bps, spacing } from './base';

// prettier-ignore
export default css`
  .resume {
    > :first-child {
      display: none;
    }

    > :nth-child(2) {
      > *:not(:last-child):not(h1):not(h2):not(h3):not(h4):not(hr) {
        padding-bottom: ${spacing.larger}px;
      }

      h1 {
        padding-bottom: 0;
      }

      h2 {
        font-weight: 200;
      }

      > ul:nth-of-type(1) {
        > li {
          padding-left: 0;
          text-indent: 0;

          &:before {
            display: none;
          }
        }
      }

      > ul:nth-of-type(2) {
        @media (max-width: ${bps.medium - 1}px) {
          column-count: 1;
        }

        @media (min-width: ${bps.medium}px) {
          column-count: 3;
        }

        @media print {
          column-count: 3 !important;
        }
      }

      > h4 + p {
        padding-bottom: 0 !important;
      }
    }
  }
`;
