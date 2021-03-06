import React from 'react';
import { converter } from '../../lib/content';
import PageTitle from '../PageTitle';
import translations from '../../lib/translations';
import content from './content.md';
import styles from './styles';

const html = converter.makeHtml(content);

export default () => (
  <div className="root">
    <PageTitle title={translations.resume} />
    <style jsx>{styles}</style>
    {html && (
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </div>
);
