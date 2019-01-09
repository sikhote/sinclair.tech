import css from 'styled-jsx/css';
import { spacing, bps } from '../../lib/styling';

export default css`
  .root {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: ${spacing.a5}px;
  }
  img {
    width: 100%;
  }

  @media (max-width: ${bps.a2}px) {
    .root {
      grid-auto-rows: auto;
      grid-auto-flow: row;
    }
  }
`;
