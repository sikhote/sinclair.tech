import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import translations from '../lib/translations';

const PageTitle = ({ title, description }) => (
  <Head>
    <title>
      {translations.siteName}
      {title ? `${translations.siteDivider}${title}` : ''}
    </title>
    <meta name="description" content={description} />
  </Head>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

PageTitle.defaultProps = {
  title: '',
  description: translations.siteDescription,
};

export default PageTitle;
