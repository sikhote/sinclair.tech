import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { capitalize } from 'lodash';
import PageTitle from '../PageTitle';
import Text from '../Text';
import feed from '../../lib/feed';
import styles from './styles';

const Feed = ({ type }) => (
  <div className={`root ${type}`}>
    <PageTitle title={capitalize(type)} />
    <style jsx>{styles}</style>
    {feed
      .filter(item => item.type === type)
      .map(({ id, title, description }) => (
        <Link
          key={id}
          href={{ pathname: '/item', query: { type, id } }}
          as={`/${type}/${id}`}
        >
          <a>
            <div className="content">
              <Text color="white" fontWeightKey="thin" fontSizeKey="a5">
                {title}
              </Text>
              <Text className="description" color="white" fontWeightKey="thin">
                {description}
              </Text>
            </div>
            <div
              className="image"
              style={{
                backgroundImage: `url(/static/img/projects/${id}-1.jpg)`,
              }}
            />
          </a>
        </Link>
      ))}
  </div>
);

Feed.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Feed;
