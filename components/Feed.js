import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { colors } from '../lib/styles';
import Item from './Item';

const style = css`
  .root {
    height: 100%;

    :global(div) {
      color: ${colors.primary};
    }
  }
`;

const Feed = ({ id }) => (
  <div className="root">
    <style jsx>{style}</style>
    {id && <Item id={id} />}
    {!id && <div>No id</div>}
  </div>
);

Feed.propTypes = {
  id: PropTypes.string,
};

Feed.defaultProps = {
  id: '',
};

export default Feed;
