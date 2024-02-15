'use server';

import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './styles.module.scss';

export default async function Md({ children, source }) {
  return (
    <div className={styles.md}>
      {children}
      {source && <MDXRemote source={source} />}
    </div>
  );
}
