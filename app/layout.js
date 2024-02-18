import { Archivo } from 'next/font/google';
import Nav from 'components/Nav';
import 'public/assets/fonts/fontello/css/fontello.css';
import './global.css';
import styles from './styles.module.scss';
import getMetadata from 'lib/getMetadata';
import { Analytics } from '@vercel/analytics/react';

const fontArchivo = Archivo({ subsets: ['latin'], variable: '--fontArchivo' });

export const metadata = getMetadata();

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={fontArchivo.className}>
        <Nav />
        <main className={styles.main}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
