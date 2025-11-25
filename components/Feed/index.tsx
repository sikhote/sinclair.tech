import Link from 'next/link';
import Grid from 'components/Grid';
import feed from 'lib/feed';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './styles.module.scss';
import type { GridItem } from 'lib/types';

export interface Props {
  type: string;
}

export default function Feed({ type }: Props) {
  return (
    <Grid
      items={feed.reduce(
        (acc: GridItem[], { id, title, description, type: itemType }) => {
          if (itemType === type) {
            acc.push({
              key: id,
              item: (
                <div key={id}>
                  <Link
                    href={`/${itemType}/${id}`}
                    className={classNames({
                      [styles.link]: true,
                      [styles['link-thoughts']]: type === 'thoughts',
                      [styles['link-projects']]: type === 'projects',
                    })}
                  >
                    <strong>{title}</strong>
                    {description && <span>{description}</span>}
                    {itemType === 'projects' && (
                      <div className={styles['image-project']}>
                        <Image
                          priority={acc.length === 0}
                          alt={title}
                          src={`/assets/img/projects/${id}-1.jpg`}
                          fill
                          sizes="(max-width: 1200px) 90vw, 50vw"
                        />
                      </div>
                    )}
                  </Link>
                </div>
              ),
            });
          }

          return acc;
        },
        [],
      )}
    />
  );
}
