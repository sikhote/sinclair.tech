import React from 'react';
import css from 'styled-jsx/css';
import { colors } from '../styles/base';
import ActiveLink from './ActiveLink';

const style = css`
  .root {
    height: 100%;

    :global(div) {
      text-decoration: none;
      color: ${colors.primary};
      cursor: pointer;
    }
  }
`;

const Navigation = () => (
  <div className="root">
    <style jsx>{style}</style>
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/projects">Projects</ActiveLink>
    <ActiveLink href="/thoughts">Thoughts</ActiveLink>
  </div>
);

export default Navigation;
