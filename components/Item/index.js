import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import { parseISO, format } from 'date-fns';
import PageMeta from 'components/PageMeta';
import Md from 'components/Md';
import Grid from 'components/Grid';
import Image from 'next/image';
import styles from './styles';

const Item = ({ html, item }) => {
  const { title, description, type, images, id, date } = item || {};

  if (!html) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PageMeta title={title} description={description} />
      <Grid
        items={[
          {
            key: 0,
            item: (
              <div>
                {title && (
                  <Md>
                    <h1>{title}</h1>
                  </Md>
                )}
                {html && (
                  <Md innerHTML container="highlight">
                    {html}
                  </Md>
                )}
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
                item: (
                  <ul css={styles.images}>
                    {new Array(images).fill(0).map((a, i) => (
                      <li key={`${id}-${i + 1}`}>
                        <Image
                          alt={title}
                          src={`/assets/img/projects/${id}-${i + 1}.jpg`}
                          layout="fill"
                          objectFit="cover"
                        />{' '}
                      </li>
                    ))}
                  </ul>
                ),
              }
            : { key: 1 },
        ]}
      />
    </>
  );
};

Item.propTypes = {
  html: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default Item;
