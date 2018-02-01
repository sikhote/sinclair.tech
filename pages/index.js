import React from 'react';
import withRedux from 'next-redux-wrapper';
import showdown from 'showdown';
import initStore from '../lib/initStore';
import Page from '../components/Page';
import about from '../static/text/pages/about.md';
import content from '../lib/content';

const converter = new showdown.Converter();

const Player = () => (
  <Page title={content.pages.about.title}>
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(about) }} />
  </Page>
);

export default withRedux(initStore, null, null)(Player);
