import React from 'react';
import { converter } from '../../lib/content';
import PageTitle from '../PageTitle';
import translations from '../../lib/translations';
import content from './content.md';

const html = converter.makeHtml(content);

export default () => (
  <div>
    <PageTitle title={translations.siteDescription} />
    {html && (
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </div>
);
