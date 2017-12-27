import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

const ActiveLink = ({ children, href, router }) => (
  <Link prefetch href={href}>
    <div
      style={{
        textDecoration: router.pathname === href ? 'underline' : 'none',
      }}
    >
      {children}
    </div>
  </Link>
);

ActiveLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(ActiveLink);
