import React, { useState, useCallback } from 'react';
import PageMeta from 'components/PageMeta';
import lang from 'lib/lang';
import Overlay from 'components/Overlay';
import Image from 'next/image';
import styles from './styles';
import PropTypes from 'prop-types';

const Pictures = ({ pictures }) => {
  const [popupPicture, setPopupPicture] = useState();
  const onImageListClick = useCallback(
    (e) => {
      if (e.target instanceof HTMLImageElement) {
        const image = e.target;
        const li = image.parentNode.parentNode.parentNode;
        const ul = li.parentNode;
        const index = Array.prototype.indexOf.call(ul.childNodes, li);
        setPopupPicture(pictures[index]);
      }
    },
    [pictures],
  );

  return (
    <>
      <PageMeta title={lang.pictures} />
      {Boolean(popupPicture) && (
        <div
          onClick={() => setPopupPicture()}
          onKeyPress={() => setPopupPicture()}
          role="button"
          tabIndex="0"
        >
          <Overlay>
            <Image
              alt={popupPicture.date}
              src={popupPicture.src}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </Overlay>
        </div>
      )}
      <div
        onClick={onImageListClick}
        onKeyPress={onImageListClick}
        role="button"
        tabIndex="0"
        css={styles.images}
      >
        <ul>
          {pictures.map(({ src, date }, i) => (
            <li key={src} data-src={src}>
              <figure>
                <Image
                  alt={date}
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  priority={i === 0}
                />
              </figure>
              <legend>{date}</legend>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Pictures.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Pictures;
