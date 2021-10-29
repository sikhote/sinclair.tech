import React from 'react';
import converter from 'lib/converter';
import PageMeta from 'components/PageMeta/index.server';
import lang from 'lib/lang';
import content from './content.md';
import Md from 'components/Md/index.server';
import styles from './styles';

const html = converter.makeHtml(content);

const Resume = () => (
  <div css={styles.root}>
    <PageMeta title={lang.resume} />
    <Md html={html} />
  </div>
);

export default Resume;
