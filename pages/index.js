import React from 'react';
import about from '../static/md/pages/about.md';
import { converter } from '../lib/content';
import PageTitle from '../components/PageTitle';
import translations from '../lib/translations';

const html = converter.makeHtml(about);

export default () => (
  <div>
    <PageTitle title={translations.siteDescription} />
    {html && (
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </div>
);
