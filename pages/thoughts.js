import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import initStore from '../lib/initStore';
import Page from '../components/Page';

class Thoughts extends Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }
  render() {
    console.log(this.props);
    return (
      <Page>
        Thoughts<br />id: {this.props.id}
        <br />
        <br />
        <ul>
          <li>
            <Link href="/thoughts?id=first" as="/thoughts/first">
              <div>My first blog post</div>
            </Link>
          </li>
          <li>
            <Link href="/thoughts?id=second" as="/thoughts/second">
              <div>My second blog post</div>
            </Link>
          </li>
          <li>
            <Link href="/thoughts?id=last" as="/thoughts/last">
              <div>My last blog post</div>
            </Link>
          </li>
        </ul>
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
