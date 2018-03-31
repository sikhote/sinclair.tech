import React from 'react';
import ActiveLink from './ActiveLink';
import style from '../styles/navigation';

const Navigation = () => (
  <div className="root">
    <style jsx>{style}</style>
    <ActiveLink className="link" href="/">
      Home
    </ActiveLink>
    <ActiveLink href="/projects">Projects</ActiveLink>
    <ActiveLink href="/thoughts">Thoughts</ActiveLink>
  </div>
);

export default Navigation;
