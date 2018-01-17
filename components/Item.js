import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { colors } from '../lib/styles';

const style = css`
  .root {
    height: 100%;

    :global(div) {
      color: ${colors.primary};
    }
  }
`;

const Item = ({ item }) => (
  <div className="root">
    <style jsx>{style}</style>
    <div>Helllo {item.title}</div>
  </div>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
