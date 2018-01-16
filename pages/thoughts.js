import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import initStore from '../lib/initStore';
import Page from '../components/Page';

class Thoughts extends Component {
  static getInitialProps({ query: { alpha } }) {
    return { alpha };
  }
  render() {
    return (
      <Page title="Thoughts">
        Thoughts<br />id: {this.props.alpha}
        <br />
        <br />
        <ul>
          <li>
            <Link href="/thoughts?alpha=first" as="/thoughts/first">
              <div>My first blog post</div>
            </Link>
          </li>
          <li>
            <Link href="/thoughts?alpha=second" as="/thoughts/second">
              <div>My second blog post</div>
            </Link>
          </li>
          <li>
            <Link href="/thoughts?alpha=last" as="/thoughts/last">
              <div>My last blog post</div>
            </Link>
          </li>
        </ul>
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
