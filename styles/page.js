import css from 'styled-jsx/css';
import { lighten } from 'polished';
import { bps, fontSizes, fontFamilies, spacing, colors } from './base';

// prettier-ignore
export default css`
  .root {
    display: grid;
    height: 100vh;

    :global(*) {
      margin: 0;
      padding: 0;
      ${fontSizes.small}
      ${fontFamilies.sansSerif}
      color: ${colors.text};
      font-weight: 200;
    }

    :global(a) {
      color: ${colors.primary};
      text-decoration: none;

      &:hover {
        color: ${lighten(0.05, colors.primary)};
        text-decoration: underline;
      }
    }

    :global(h1) {
      ${fontSizes.larger}
      ${fontFamilies.sansSerif}
      font-weight: 100;
    }

    :global(h2) {
      ${fontSizes.larger}
      ${fontFamilies.sansSerif}
      font-weight: 600;
      padding-bottom: ${spacing.mini}px;
    }

    :global(h3) {
      ${fontSizes.medium}
      ${fontFamilies.sansSerif}
      font-weight: 600;
    }

    :global(h4) {
      ${fontSizes.small}
      ${fontFamilies.sansSerif}
      font-weight: 600;
    }

    :global(.content > *:not(:last-child):not(h2):not(h3):not(h4)) {
      padding-bottom: ${spacing.larger}px;
    }

    @media (max-width: ${bps.medium - 1}px) {
      grid-template-areas: 'children' 'navigation';
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 55px;
    }

    @media (min-width: ${bps.medium}px) {
      grid-template-areas: 'navigation children';
      grid-template-columns: 200px 1fr;
      grid-template-rows: 1fr;
    }
  }


`;
