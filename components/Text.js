import React from 'react';
import PropTypes from 'prop-types';
import {
  colors,
  fontSizes,
  fontFamilies,
  lineHeights,
  fontWeights,
} from '../lib/styling';
import translations from '../lib/translations';

const Text = ({
  children,
  fontSize,
  fontSizeKey,
  color,
  colorKey,
  fontWeight,
  fontWeightKey,
  fontFamily,
  lineHeight,
  messageId,
  width,
  textAlign,
  textTransform,
  className,
  style,
}) => (
  <div
    style={{
      fontSize: fontSizeKey ? fontSizes[fontSizeKey] : fontSize,
      color: colorKey ? colors[colorKey] : color,
      fontWeight: fontWeightKey ? fontWeights[fontWeightKey] : fontWeight,
      fontFamily,
      lineHeight,
      width,
      textAlign,
      textTransform,
      ...style,
    }}
    className={className || messageId}
  >
    {children}
    {messageId && translations[messageId]}
  </div>
);

Text.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  colorKey: PropTypes.string,
  fontSize: PropTypes.number,
  fontSizeKey: PropTypes.string,
  fontWeight: PropTypes.string,
  fontWeightKey: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  messageId: PropTypes.string,
  width: PropTypes.any,
  textAlign: PropTypes.string,
  style: PropTypes.object,
  textTransform: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  color: colors.text,
  colorKey: '',
  fontSize: fontSizes.a3,
  fontSizeKey: '',
  fontWeight: fontWeights.bold,
  fontWeightKey: '',
  fontFamily: fontFamilies.normal,
  lineHeight: lineHeights.normal,
  messageId: undefined,
  width: undefined,
  textAlign: undefined,
  textTransform: 'none',
  style: {},
  className: '',
};

export default Text;
