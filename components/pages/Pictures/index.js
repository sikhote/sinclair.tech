import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import PageMeta from 'components/PageMeta';
import lang from 'lib/lang';
import Overlay from 'components/Overlay';
import Image from 'next/image';
import styles from './styles';
import { parseISO, format } from 'date-fns';

const picturesPath = '/assets/img/pictures';
const getPictureInfo = (picture) => {
  const src = `${picturesPath}/${picture}`;
  const [rawDate, location, name] = picture.split(' - ');
  const date = format(parseISO(rawDate), 'MMMM do, yyyy');
  return { src, date, location, name };
};

const Pictures = ({ pictures }) => {
  const [popupPicture, setPopupPicture] = useState();
  const onImageListClick = useCallback((e) => {
    if (e.target instanceof HTMLImageElement) {
      const image = e.target;
      const li = image.parentNode.parentNode.parentNode;
      const ul = li.parentNode;
      const index = Array.prototype.indexOf.call(ul.childNodes, li);
      setPopupPicture(getPictureInfo(pictures[index]));
    }
  }, []);
  const picturesElements = useMemo(
    () =>
      pictures.map((picture, i) => {
        const { src, date } = getPictureInfo(picture);
        return (
          <li key={src} data-src={src}>
            <figure>
              <Image alt={date} src={src} layout="fill" objectFit="cover" />
            </figure>
            <legend>{date}</legend>
          </li>
        );
      }),
    [pictures],
  );

  return (
    <>
      <PageMeta title={lang.pictures} />
      {Boolean(popupPicture) && (
        <div onClick={() => setPopupPicture()}>
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
      <ul css={styles.images} onClick={onImageListClick}>
        {picturesElements}
      </ul>
    </>
  );
};

Pictures.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Pictures;
