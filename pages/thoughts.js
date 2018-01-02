import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Link } from 'next-url-prettifier';
import initStore from '../lib/initStore';
import Page from '../components/Page';
import { Router } from '../routes';

class Thoughts extends Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }
  render() {
    return (
      <Page>
        Thoughts<br />id: {this.props.id}
        <br />
        <br />
        <Link route={Router.linkPage('thoughts', { id: 'testtt' })}>
          <div>Id of testtt</div>
        </Link>
        <Link route={Router.linkPage('thoughts', { id: 'hiiiiiiiii' })}>
          <div>Id of hiiiiiiiii</div>
        </Link>
      </Page>
    );
  }
}

Thoughts.propTypes = {
  id: PropTypes.string,
};

Thoughts.defaultProps = {
  id: '',
};

export default withRedux(initStore, null, null)(Thoughts);
