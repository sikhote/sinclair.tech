'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className={classNames([
        styles.nav,
        { [styles['nav-hidden']]: ['/resume', '/landing'].includes(pathname) },
      ])}
    >
      {[
        { href: '/', title: 'Home', icon: 'home' },
        { href: '/pictures', title: 'Pictures', icon: 'camera' },
        { href: '/projects', title: 'Projects', icon: 'folder' },
        { href: '/thoughts', title: 'Thoughts', icon: 'feather' },
      ].map(({ href, title, icon }) => (
        <Link
          key={href}
          href={href}
          className={classNames([
            styles.link,
            { [styles['link-active']]: pathname === href },
          ])}
        >
          <i className={`icon-${icon}`} />
          <span>{title}</span>
        </Link>
      ))}
    </nav>
  );
}
