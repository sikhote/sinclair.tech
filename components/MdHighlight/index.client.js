import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import styles from 'components/Md/styles';

const MdHighlight = ({ html, ...props }) => (
  <Highlight
    css={styles.root}
    {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    className="markdown"
    {...props}
  />
);

MdHighlight.propTypes = {
  html: PropTypes.string,
};

MdHighlight.defaultProps = {
  html: '',
};

export default MdHighlight;
