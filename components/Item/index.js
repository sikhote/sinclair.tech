import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import { parseISO, format } from 'date-fns';
import PageMeta from 'components/PageMeta';
import Md from 'components/Md';
import Grid from 'components/Grid';
import Overlay from 'components/Overlay';
import Image from 'next/image';
import styles from './styles';

const Item = ({ html, item }) => {
  const [popupIndex, setPopupIndex] = useState();
  const { title, description, type, images, id, date } = item || {};
  const onImageListClick = useCallback((e) => {
    if (e.target instanceof HTMLImageElement) {
      const image = e.target;
      const li = image.parentNode.parentNode;
      const ul = li.parentNode;
      const index = Array.prototype.indexOf.call(ul.childNodes, li);
      setPopupIndex(index);
    }
  }, []);

  if (!html) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PageMeta title={title} description={description} />
      {popupIndex !== undefined && (
        <div
          onClick={() => setPopupIndex()}
          onKeyPress={() => setPopupIndex()}
          role="button"
          tabIndex="0"
        >
          <Overlay>
            <Image
              alt={title}
              src={`/assets/img/projects/${id}-${popupIndex + 1}.jpg`}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </Overlay>
        </div>
      )}
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
                  <div
                    onClick={onImageListClick}
                    onKeyPress={onImageListClick}
                    role="button"
                    tabIndex="0"
                    css={styles.images}
                  >
                    <ul>
                      {new Array(images).fill(0).map((a, i) => (
                        <li key={`${id}-${i + 1}`}>
                          <Image
                            alt={title}
                            src={`/assets/img/projects/${id}-${i + 1}.jpg`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
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
