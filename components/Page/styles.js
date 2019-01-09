import css from 'styled-jsx/css';
import { bps, spacing } from '../../lib/styling';

export default css`
  .root {
    max-width: ${bps.a4}px;
    margin: 0 auto;
  }
  .main {
    padding: ${spacing.page}px;
  }
  @media (max-width: ${bps.a2}px) {
    .main {
      padding: ${spacing.pageA2}px;
    }
  }
`;
