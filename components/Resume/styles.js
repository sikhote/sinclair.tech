import css from 'styled-jsx/css';
import { bps, spacing, fontWeights } from '../../lib/styling';

export default css`
  :global(.navigation) {
    display: none !important;
  }
  .markdown :global(h1) {
    padding-bottom: 0;
  }
  .markdown :global(h2) {
    font-weight: ${fontWeights.thin};
  }
  .markdown :global(> ul:nth-of-type(2)) {
    column-count: 3;
  }
  .markdown :global(> ul:nth-of-type(1) > li) {
    padding-left: 0;
    text-indent: 0;
  }
  .markdown :global(> ul:nth-of-type(1) > li:before) {
    display: none;
  }
  .markdown :global(> h4 + p) {
    padding-bottom: ${spacing.a3}px !important;
  }

  @media (max-width: ${bps.a2}px) {
    .markdown :global(> ul:nth-of-type(2)) {
      column-count: 1;
    }
  }

  @media print {
    .markdown :global(> ul:nth-of-type(2)) {
      column-count: 3 !important;
    }
  }
`;
