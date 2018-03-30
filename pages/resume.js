import React from 'react';
import showdown from 'showdown';
import Page from '../components/Page';
import resume from '../static/text/pages/resume.md';
import content from '../lib/content';
import style from '../styles/resume'

const converter = new showdown.Converter();

export default () => (
  <Page
    className="resume root"
    title={content.pages.resume.title}
  >
    <style jsx global>{style}</style>
    <div
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(resume) }}
    />
  </Page>
);
