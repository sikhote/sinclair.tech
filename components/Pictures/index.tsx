'use client';

import Overlay from 'components/Overlay';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useState, useCallback } from 'react';
import classNames from 'classnames';
import type { Picture } from 'lib/types';

export interface Props {
  pictures: Picture[];
  height: 'tall' | 'short';
}

export default function Pictures({ pictures, height }: Props) {
  const [popupPicture, setPopupPicture] = useState<Picture | undefined>();

  const onItemClick = useCallback(
    (e: React.SyntheticEvent) => {
      if (e.target instanceof HTMLImageElement) {
        const image = e.target;
        const li = image?.parentNode?.parentNode;
        const ul = li?.parentNode;
        const index = Array.prototype.indexOf.call(ul?.childNodes, li);
        setPopupPicture(pictures[index]);
      }
    },
    [pictures],
  );

  return (
    <>
      {Boolean(popupPicture) && (
        <div
          onClick={() => setPopupPicture(undefined)}
          role="button"
          tabIndex={0}
        >
          <Overlay>
            <Image
              alt={popupPicture?.alt || ''}
              src={popupPicture?.src || ''}
              fill
              quality={100}
              className={styles['popup-picture']}
            />
          </Overlay>
        </div>
      )}
      <ul
        className={classNames({
          [styles.images]: true,
          [styles['images-tall']]: height === 'tall',
          [styles['images-short']]: height === 'short',
        })}
      >
        {pictures.map(({ src, alt, date }, i) => (
          <li
            key={src}
            data-src={src}
            onClick={onItemClick}
            role="button"
            tabIndex={0}
          >
            <figure>
              <Image
                alt={alt}
                src={src}
                fill
                priority={i < 2}
                sizes="(max-width: 1200px) 90vw, 50vw"
              />
            </figure>
            {date && <legend>{date}</legend>}
          </li>
        ))}
      </ul>
    </>
  );
}
