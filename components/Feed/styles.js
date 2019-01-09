import css from 'styled-jsx/css';
import { fontSizes, colors, spacing, bps } from '../../lib/styling';

export default css`
  .root {
    display: grid;
    grid-gap: ${spacing.page}px;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr 1fr;
  }
  a {
    text-decoration: none;
    padding: ${spacing.a4}px ${spacing.a5}px ${spacing.a5}px ${spacing.a5}px;
  }
  .projects {
    grid-template-rows: 288px;
    grid-auto-rows: 288px;
  }
  .projects a {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
  .projects a:after {
    background: ${colors.a1};
    opacity: 0.5;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .projects .image {
    background-size: cover;
    filter: saturate(0%) contrast(30%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .projects .content {
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px black;
  }
  .thoughts a {
    background: ${colors.a2};
  }
  .thoughts .content :global(div:first-child) {
    padding-bottom: ${spacing.a4}px;
  }

  @media (max-width: ${bps.a2}px) {
    .root {
      grid-gap: ${spacing.pageA2}px;
      grid-template-columns: 1fr;
      grid-auto-columns: 1fr;
    }
    .projects {
      grid-template-rows: 100px;
      grid-auto-rows: 100px;
    }
    .projects .content :global(div) {
      font-size: ${fontSizes.a4}px !important;
    }
    .thoughts .content :global(div:first-child) {
      font-size: ${fontSizes.a4}px !important;
    }
    .thoughts .content :global(div:last-child) {
      font-size: ${fontSizes.a2}px !important;
    }
  }
`;
