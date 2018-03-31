import css from 'styled-jsx/css';
import { bps, spacing, colors, fontSizes, lineHeights } from './base';

// prettier-ignore
export default css`
  .root {
    .items {
      display: grid;
      grid-gap: ${spacing.large}px;
      grid-auto-flow: row;

      & *, *:after {
        transition-duration: 0.5s
      }

      &.projects {
        a {
          align-items: center;
          justify-content: center;
          display: flex;
          width: 100%;
          height: 100%;
          position: relative;
          &:hover {
            text-decoration: none;

            &:after {
              opacity: 0.8;
            }

            .title {
              opacity: 1;
            }
          }

          &:after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9;
          }

          .image {
            width: 100%;
            height: 100%;
            background-size: cover;
            filter: saturate(0%);
            position: absolute;
            top: 0;
            left: 0;
          }

          .title {
            position: relative;
            z-index: 99;
            color: white;
            font-weight: 100;
            text-align: center;
            padding: ${spacing.large}px;
          }
        }
      }

      &.thoughts {
        a {
          background: ${colors.feed};
          color: white;

          &:hover {
            background: ${colors.primary};
            text-decoration: none;
          }

          .title {
            ${lineHeights.close}
            font-weight: 100;
          }
        }
      }
      @media (max-width: ${bps.medium - 1}px) {
        grid-template-columns: 1fr;
        grid-auto-columns: 1fr;

        &.projects {
          grid-template-rows: 100px;
          grid-auto-rows: 100px;

          a {
            &:after {
              background: ${colors.feed};
              opacity: 0.9;
            }

            .title {
              opacity: 1;
              ${fontSizes.larger}
            }
          }
        }
        &.thoughts {
          a {
            padding: ${spacing.large}px;

            .title {
              ${fontSizes.large}
              padding-bottom: ${spacing.medium}px;
            }
          }
        }
      }

      @media (min-width: ${bps.medium}px) {
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr 1fr;

        &.projects {
          grid-template-rows: 288px;
          grid-auto-rows: 288px;

          a {
            &:after {
              background: ${colors.primary};
              opacity: 0.2;
            }

            .title {
              opacity: 0;
              ${fontSizes.huge}
            }
          }
        }
        &.thoughts {
          a {
            padding: ${spacing.larger}px;

            .title {
              ${fontSizes.larger}
              padding-bottom: ${spacing.large}px;
            }
          }
        }
      }
    }
  }
`;
