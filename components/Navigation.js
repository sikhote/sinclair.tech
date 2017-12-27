import React from 'react';
import { colors } from '../lib/styles';
import ActiveLink from './ActiveLink';

const Navigation = () => (
  <div className="root">
    <style jsx>
      {`
        .root {
          height: 100%;

          :global(div) {
            text-decoration: none;
            color: ${colors.primary};
            cursor: pointer;
          }
        }
      `}
    </style>
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/projects">Projects</ActiveLink>
    <ActiveLink href="/thoughts">Thoughts</ActiveLink>
  </div>
);

export default Navigation;
