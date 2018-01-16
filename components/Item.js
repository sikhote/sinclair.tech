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

const Item = ({ id }) => {
  if (!id) {
    return <div>Could not find it!</div>;
  }

  console.log(id);

  return (
    <div className="root">
      <style jsx>{style}</style>
      <div>Helllo {id}</div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Item;
