import React from 'react';
import { converter } from '../../lib/content';
import PageMeta from '../PageMeta';
import translations from '../../lib/translations';
import content from './content.md';
// import styles from './styles';

const html = converter.makeHtml(content);

export default () => (
  <div className="root">
    <PageMeta title={translations.resume} />
    {html && (
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </div>
);
