import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import moment from 'moment';
import axios from 'axios';
import Highlight from 'react-highlight';
import PageTitle from '../PageTitle';
import { converter } from '../../lib/content';
import feed from '../../lib/feed';
import styles from './styles';

const getData = ({ id, type, setState }) => {
  if (!id || !type) {
    return;
  }

  const markdownPromise = axios
    .get(`/static/md/${type}/${id}.md`)
    .then(res => converter.makeHtml(res.data))
    .catch(() => null);

  Promise.all([markdownPromise]).then(([a]) =>
    setState({
      html: a,
      item: feed.find(item => item.id === id) || {},
    }),
  );
};

const Item = ({ id, type }) => {
  const initialState = {
    html: undefined,
    item: {},
  };
  const [state, setState] = useState(initialState);
  const {
    html,
    item: { title, description, date, images },
  } = state;

  useEffect(() => getData({ id, type, setState }), [id, type]);

  if (!id || !type || html === null) {
    return <Error statusCode={404} />;
  }

  if (html === undefined) {
    return null;
  }

  return (
    <div className="root">
      <PageTitle title={title} description={description} />
      <style jsx>{styles}</style>
      <div>
        {title && (
          <div className="markdown">
            <h1>{title}</h1>
          </div>
        )}
        {html && (
          <Highlight innerHTML className="markdown">
            {html}
          </Highlight>
        )}
        {type === 'thoughts' && date && (
          <div className="markdown">
            <p>Posted {moment(date).format('MMMM Do, YYYY')}.</p>
          </div>
        )}
      </div>
      {type === 'projects' && (
        <div>
          {new Array(images).fill(0).map((a, i) => (
            <img
              key={`${id}-${i + 1}`}
              alt={title}
              src={`/static/img/projects/${id}-${i + 1}.jpg`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Item.getInitialProps = ({ query: { id, type } }) => ({ id, type });

Item.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};

Item.defaultProps = {
  id: '',
  type: '',
};

export default Item;
