import { Archivo } from 'next/font/google';
import Nav from 'components/Nav';
import 'public/assets/fonts/fontello/css/fontello.css';
import './global.scss';
import styles from './styles.module.scss';
import getMetadata from 'lib/getMetadata';
import { Analytics } from '@vercel/analytics/react';
import Background from 'components/Background';

const fontArchivo = Archivo({ subsets: ['latin'], variable: '--fontArchivo' });

export const metadata = getMetadata();

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={fontArchivo.className}>
        <Nav />
        <main className={styles.main}>{children}</main>
        <Background />
        <Analytics />
      </body>
    </html>
  );
}
