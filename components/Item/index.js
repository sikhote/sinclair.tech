import { parseISO, format } from 'date-fns';
import Md from 'components/Md';
import Grid from 'components/Grid';
import Pictures from 'components/Pictures';
import feed from 'lib/feed';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import styles from './styles.module.scss';

export default async function Item({ params }) {
  const { id } = params;
  const item = feed.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  const { type, title, description, images, date } = item;
  const source = await fs.readFile(`public/assets/md/${type}/${id}.md`, 'utf8');

  if (!source) {
    notFound();
  }

  const pictures = new Array(images).fill(0).map((a, i) => ({
    alt: title,
    src: `/assets/img/projects/${id}-${i + 1}.jpg`,
  }));

  return (
    <Grid
      items={[
        {
          key: 0,
          item: (
            <div className={styles.page}>
              {title && (
                <Md>
                  <h1>{title}</h1>
                </Md>
              )}
              {source && <Md source={source} />}
              {type === 'thoughts' && date && (
                <Md>
                  <p>Posted {format(parseISO(date), 'MMMM do, yyyy')}.</p>
                </Md>
              )}
            </div>
          ),
        },
        type === 'projects'
          ? {
              key: 1,
              item: <Pictures pictures={pictures} height="short" />,
            }
          : { key: 1 },
      ]}
    />
  );
}
