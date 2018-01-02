import React from 'react';
import withRedux from 'next-redux-wrapper';
import showdown from 'showdown';
import initStore from '../lib/initStore';
import Page from '../components/Page';
import resume from '../static/text/pages/resume.md';
import content from '../lib/content';

const converter = new showdown.Converter();

const Resume = () => (
  <Page title={content.pages.resume.title}>
    <div dangerouslySetInnerHTML={{__html: converter.makeHtml(resume)}} />
  </Page>
);

export default withRedux(initStore, null, null)(Resume);
