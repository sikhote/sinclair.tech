import css from 'styled-jsx/css';
import { spacing, colors, bps } from '../../lib/styling';

export default css`
  .navigation {
    padding-left: ${spacing.page}px;
    padding-right: ${spacing.page}px;
    padding-top: ${spacing.page}px;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: ${spacing.a5}px;
    justify-content: start;
  }
  a {
    text-decoration: none;
  }
  a.active {
    text-decoration: underline;
    color: ${colors.nav};
  }

  @media (max-width: ${bps.a2}px) {
    .navigation {
      padding-left: ${spacing.pageA2}px;
      padding-right: ${spacing.pageA2}px;
      padding-top: ${spacing.pageA2}px;
    }
  }
`;
