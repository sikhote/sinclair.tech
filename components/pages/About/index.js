import React from 'react';
import converter from 'lib/converter';
import PageMeta from 'components/PageMeta';
import lang from 'lib/lang';
import content from './content.md';
import Grid from 'components/Grid';
import Md from 'components/Md';

const html = converter.makeHtml(content);

const About = () => (
  <>
    <PageMeta title={lang.siteDescription} />
    <Grid items={[{ key: 0, item: <Md html={html} /> }]} />
  </>
);

export default About;
