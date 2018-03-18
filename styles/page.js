import css from 'styled-jsx/css';
import { bps, spacing } from './base';

// prettier-ignore
export default css`
  .root {
    max-width: 960px;
    margin: 0 auto;
    padding-top: ${spacing.larger}px;
    padding-bottom: ${spacing.larger}px;
    padding-left: ${spacing.larger}px;
    padding-right: ${spacing.larger}px;

    @media (max-width: ${bps.medium - 1}px) {

    }

    @media (min-width: ${bps.medium}px) {

    }
  }
`;
