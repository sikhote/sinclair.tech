import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { capitalize, merge } from 'lodash';
import PageMeta from 'components/PageMeta';
import Grid from 'components/Grid';
import feed from 'lib/feed';
import styles from './styles';
import Image from 'next/image';

const Feed = ({ type }) => (
  <>
    <PageMeta title={capitalize(type)} />
    <Grid
      rootCss={merge(
        {},
        styles.items,
        type === 'thoughts' ? styles.itemsThoughts : {},
        type === 'projects' ? styles.itemsProjects : {},
      )}
      items={feed.reduce((acc, { id, title, description, type: itemType }) => {
        if (itemType === type) {
          acc.push(
            <div key={id}>
              <Link href={`/${itemType}/${id}`}>
                <a>
                  <strong>{title}</strong>
                  {description && <span>{description}</span>}
                  {itemType === 'projects' && (
                    <Image
                      alt={title}
                      src={`/assets/img/projects/${id}-1.jpg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </a>
              </Link>
            </div>,
          );
        }

        return acc;
      }, [])}
    />
  </>
);

Feed.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Feed;
