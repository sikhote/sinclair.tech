import PropTypes from 'prop-types';
import styles from './styles';

const Md = ({ html, ...props }) => (
  <div
    css={styles.root}
    {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    className="markdown"
    {...props}
  />
);

Md.propTypes = {
  html: PropTypes.string,
};

Md.defaultProps = {
  html: '',
};

export default Md;
