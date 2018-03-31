import css from 'styled-jsx/css';
import { bps, spacing } from './base';

// prettier-ignore
export default css`
  .root {
    width: 100%;

    .project {
      display: grid;
      grid-gap: ${spacing.huge}px;
      grid-template-rows: 1fr;

      .project-image {
        width: 100%;
        display: block;

        &:not(:last-child) {
          padding-bottom: ${spacing.larger}px;
        }
      }
    }

    @media (max-width: ${bps.medium - 1}px) {
      .project {
        grid-template-columns: 1fr;
      }
    }

    @media (min-width: ${bps.medium}px) {
      .project {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;
