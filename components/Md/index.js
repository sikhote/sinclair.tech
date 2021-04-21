import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import styles from './styles';

const containers = {
  default: (props) => <div {...props} />,
  highlight: Highlight,
};

const Md = ({ container, html, ...props }) => {
  const Container = containers[container];
  return (
    <Container
      css={styles.root}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
      className="markdown"
      {...props}
    />
  );
};

Md.propTypes = {
  container: PropTypes.string,
};

Md.defaultProps = {
  container: 'default',
};

export default Md;
