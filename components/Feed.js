import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';
import css from 'styled-jsx/css';
import Error from 'next/error';
import initStore from '../lib/initStore';
import Page from '../components/Page';
import { colors } from '../lib/styles';
import Item from './Item';
import content from '../lib/content';

const style = css`
  .root {
    height: 100%;

    :global(div) {
      color: ${colors.primary};
    }
  }
`;

class Feed extends Component {
  static getInitialProps({ query: { alpha } }) {
    return { alpha };
  }
  render() {
    const { alpha: id, router } = this.props;
    const page = router.pathname.replace(/\//g, '');
    const item = id ? content.feed.find(i => i.id === id) : null;
    const title =
      content.pages[page].title +
      (item ? `${content.divider}${item.title}` : '');

    if (id && !item) {
      return <Error statusCode={404} />;
    }

    return (
      <Page title={title}>
        <style jsx>{style}</style>
        <div className="root">
          {id && <Item item={item} />}
          {!id && <div>No id</div>}
        </div>
      </Page>
    );
  }
}

Feed.propTypes = {
  alpha: PropTypes.string,
  router: PropTypes.object.isRequired,
};

Feed.defaultProps = {
  alpha: '',
};

export default withRouter(withRedux(initStore, null, null)(Feed));
