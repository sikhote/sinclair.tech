import React from 'react';
import resume from '../../static/md/pages/resume.md';
import { converter } from '../../lib/content';
import PageTitle from '../PageTitle';
import translations from '../../lib/translations';
import styles from './styles';

const html = converter.makeHtml(resume);

export default () => (
  <div className="root">
    <PageTitle title={translations.resume} />
    <style jsx>{styles}</style>
    {html && (
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </div>
);
