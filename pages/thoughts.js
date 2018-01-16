import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../lib/initStore';
import Page from '../components/Page';
import Feed from '../components/Feed';

class Thoughts extends Component {
  static getInitialProps({ query: { alpha } }) {
    return { alpha };
  }
  render() {
    const { alpha } = this.props;
    return (
      <Page title="Thoughts">
        <Feed id={alpha} />
      </Page>
    );
  }
}

Thoughts.propTypes = {
  alpha: PropTypes.string,
};

Thoughts.defaultProps = {
  alpha: '',
};

export default withRedux(initStore, null, null)(Thoughts);
