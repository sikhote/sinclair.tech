import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Error from 'next/error';
import Page from '../components/Page';
import Item from './Item';
import content from '../lib/content';
import style from '../styles/feed'

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
          <div className={`items ${page}`}>
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
                      className="image"
                      style={{
                        backgroundImage: `url(/static/images/projects/${
                          id
                        }-1.jpg)`,
                      }}
                    />
                  )}
                  <div className="title">{title}</div>
                  {type === 'thought' && (
                    <div>{description}</div>
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

export default withRouter(Feed);
