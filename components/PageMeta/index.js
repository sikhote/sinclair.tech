import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import lang from 'lib/lang';

const PageMeta = ({ title, description }) => (
  <Head>
    <title>
      {lang.siteName}
      {title ? `${lang.siteDivider}${title}` : ''}
    </title>
    <meta name="description" content={description} />
  </Head>
);

PageMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

PageMeta.defaultProps = {
  title: '',
  description: lang.siteDescription,
};

export default PageMeta;
