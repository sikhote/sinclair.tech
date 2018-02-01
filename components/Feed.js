import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';
import Link from 'next/link';
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
      color: ${colors.text};
    }
  }
`;

const Feed = ({ alpha: id, router }) => {
  const page = router.pathname.replace(/\//g, '');
  const item = id ? content.feed.find(i => i.id === id) : null;
  const title =
    content.pages[page].title + (item ? `${content.divider}${item.title}` : '');

  if (id && !item) {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={title}>
      <style jsx>{style}</style>
      <div className="root">
        {id && <Item item={item} />}
        {!id && (
          <div>
            {content.feed
              .filter(({ type }) => `${type}s` === page)
              .map(({ id, type, title, description }) => (
                <a
                  key={id}
                  href={`/${type}s/${id}`}
                  onClick={e => {
                    e.preventDefault();
                    router.push(`/${type}s?alpha=${id}`, `/${type}s/${id}`);
                  }}
                >
                  {type === 'project' && (
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        backgroundImage: `url(/static/images/projects/${
                          id
                        }-1.jpg)`,
                      }}
                    />
                  )}
                  <div>{title}</div>
                  {type === 'thought' && (
                    <div className="description">{description}</div>
                  )}
                </a>
              ))}
          </div>
        )}
      </div>
    </Page>
  );
};

Feed.getInitialProps = ({ query: { alpha } }) => ({ alpha });

Feed.propTypes = {
  alpha: PropTypes.string,
  router: PropTypes.object.isRequired,
};

Feed.defaultProps = {
  alpha: '',
};

export default withRouter(withRedux(initStore, null, null)(Feed));
