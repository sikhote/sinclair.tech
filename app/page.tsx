import Grid from 'components/Grid';
import { promises as fs } from 'fs';
import Md from 'components/Md';
import styles from './styles.module.scss';

export default async function Page() {
  const source = await fs.readFile('public/assets/md/index.md', 'utf8');
  return (
    <Grid
      ParentTag="div"
      ChildTag="section"
      items={[
        {
          key: 0,
          item: (
            <div className={styles.page}>
              <Md source={source} />
            </div>
          ),
        },
      ]}
    />
  );
}
