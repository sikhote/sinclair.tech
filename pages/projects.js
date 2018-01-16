import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../lib/initStore';
import Page from '../components/Page';
import Feed from '../components/Feed';

class Projects extends Component {
  static getInitialProps({ query: { alpha } }) {
    return { alpha };
  }
  render() {
    const { alpha } = this.props;
    return (
      <Page title="Projects">
        <Feed id={alpha} />
      </Page>
    );
  }
}

Projects.propTypes = {
  alpha: PropTypes.string,
};

Projects.defaultProps = {
  alpha: '',
};

export default withRedux(initStore, null, null)(Projects);
