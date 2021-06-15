import PropTypes from 'prop-types';
import styles from './styles';

const Overlay = ({ children, rootCss }) => (
  <div css={[styles.root, rootCss]}>
    <div>{children}</div>
  </div>
);

Overlay.propTypes = {
  children: PropTypes.any.isRequired,
  rootCss: PropTypes.object,
};

Overlay.defaultProps = {
  rootCss: {},
};

export default Overlay;
