import React from 'react';
import showdown from 'showdown';
import Page from '../components/Page';
import resume from '../static/text/pages/resume.md';
import content from '../lib/content';

const converter = new showdown.Converter();

export default () => (
  <Page title={content.pages.resume.title}>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(resume) }} />
  </Page>
);
