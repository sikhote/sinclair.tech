import { promises as fs } from 'fs';
import Md from 'components/Md';
import styles from './styles.module.scss';
import getMetadata from 'lib/getMetaData';

export const metadata = getMetadata('resume');

export default async function Page() {
  const source = await fs.readFile('public/assets/md/resume.md', 'utf8');
  return (
    <div className={styles.root}>
      <Md source={source} />
    </div>
  );
}
