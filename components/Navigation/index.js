import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Text from '../Text';
import { colors } from '../../lib/styling';
import styles from './styles';

const Navigation = ({ router }) => (
  <div className="navigation">
    <style jsx>{styles}</style>
    {[
      { href: '/', title: 'Home' },
      { href: '/projects', title: 'Projects' },
      { href: '/thoughts', title: 'Thoughts' },
    ].map(({ href, title }) => (
      <Link key={href} href={href}>
        <a className={router.pathname === href ? 'active' : ''}>
          <Text color={colors.nav} fontWeightKey="bold">
            {title}
          </Text>
        </a>
      </Link>
    ))}
  </div>
);

Navigation.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Navigation);
