import PropTypes from 'prop-types';
import styles from './styles';

const Grid = ({ items, rootCss }) => (
  <ul css={[styles.root, rootCss]}>
    {items.map(({ item, key }) => (
      <li key={key}>{item}</li>
    ))}
  </ul>
);

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  rootCss: PropTypes.object,
};

Grid.defaultProps = {
  rootCss: {},
};

export default Grid;
