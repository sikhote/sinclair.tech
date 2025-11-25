'use server';

import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './styles.module.scss';

export interface Props {
  children?: React.ReactNode;
  source?: string;
}

export default async function Md({ children, source }: Props) {
  return (
    <div className={styles.md}>
      {children}
      {source && <MDXRemote source={source} />}
    </div>
  );
}
