import React from 'react';
import showdown from 'showdown';
import Page from '../components/Page';
import about from '../static/text/pages/about.md';
import content from '../lib/content';

const converter = new showdown.Converter();

export default () => (
  <Page title={content.pages.about.title}>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(about) }}
    />
  </Page>
);
