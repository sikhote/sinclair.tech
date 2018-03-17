import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import qp from 'query-parse';
import Navigation from './Navigation';
import LoadingBar from './LoadingBar';
import content from '../lib/content';
import { match } from '../lib/routing';
import style from '../styles/page';

const isWeb = typeof window !== 'undefined';
const getCurrentPath = () => {
  const path = isWeb && window.location.pathname.replace(/\/$/, '');
  return isWeb ? path || '/' : '';
};
const getPage = currentPath => currentPath.replace(/^\//, '');

class Page extends Component {
  componentDidMount() {
    const currentPath = getCurrentPath();
    const { page = getPage(currentPath), ...params } = match(currentPath);

    if (Router.route !== `/${page}`) {
      Router.push(`/${page}?${qp.toString(params)}`, currentPath);
    }
  }
  render() {
    const { title, children } = this.props;
    const currentPath = getCurrentPath();
    const { page = getPage(currentPath) } = match(currentPath);

    return (
      <div className="root">
        <Head>
          <title>
            {content.name}
            {title ? `${content.divider}${title}` : ''}
          </title>
        </Head>
        <style jsx>{style}</style>
        <LoadingBar />
        <div style={{ gridArea: 'navigation' }}>
          <Navigation />
        </div>
        <div style={{ gridArea: 'children' }}>
          {isWeb && Router.route === `/${page}` && children}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

Page.defaultProps = {
  children: null,
  title: '',
};

export default Page;
