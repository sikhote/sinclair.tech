import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import qp from 'query-parse';
import Navigation from './Navigation';
import LoadingBar from './LoadingBar';
import { bps, fontSizes, fontFamilies } from '../lib/styles';
import content from '../lib/content';
import { match } from '../lib/routing';

class Page extends Component {
  componentDidMount() {
    const currentPath = window.location.pathname.replace(/\/$/, '');

    if (currentPath && Router.route !== currentPath) {
      const { page, ...params } = match(currentPath);
      Router.push(`/${page}?${qp.toString(params)}`, currentPath);
    }
  }
  render() {
    const { title } = this.props;

    return (
      <div className="root">
        <Head>
          <title>
            {content.name}
            {title ? `${content.divider}${title}` : ''}
          </title>
        </Head>
        <style jsx>
          {`
            .root {
              display: grid;
              height: 100vh;

              :global(*) {
                ${fontSizes.small}
                ${fontFamilies.sansSerif}
              }

              @media (max-width: ${bps.medium - 1}px) {
                grid-template-areas: 'children' 'navigation';
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 55px;
              }

              @media (min-width: ${bps.medium}px) {
                grid-template-areas: 'navigation children';
                grid-template-columns: 200px 1fr;
                grid-template-rows: 1fr;
              }
            }
          `}
        </style>
        <LoadingBar />
        <div style={{ gridArea: 'navigation' }}>
          <Navigation />
        </div>
        <div style={{ gridArea: 'children' }}>{this.props.children}</div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: '',
};

export default connect(() => ({}), () => ({}))(Page);
