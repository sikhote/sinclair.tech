import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Global } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Global styles={styles.global} />
      <nav
        css={[
          styles.nav,
          router.pathname === '/resume' ? styles.navResume : {},
        ]}
      >
        {[
          { href: '/', title: 'Home', icon: 'home' },
          { href: '/pictures', title: 'Pictures', icon: 'camera' },
          { href: '/projects', title: 'Projects', icon: 'folder' },
          { href: '/thoughts', title: 'Thoughts', icon: 'feather' },
        ].map(({ href, title, icon }) => (
          <Link passHref key={href} href={href}>
            <a
              css={[
                styles.link,
                router.pathname === href ? styles.linkActive : {},
              ]}
            >
              <i className={`icon-${icon}`} />
              <span>{title}</span>
            </a>
          </Link>
        ))}
      </nav>
      <main
        css={[
          styles.main,
          router.pathname === '/resume' ? styles.mainResume : {},
        ]}
      >
        <Component {...{ ...pageProps }} />
      </main>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  pageProps: {},
};

export default App;
