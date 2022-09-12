import React from 'react';
import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';
import useStyle from './text-style';

const Text = ({
  color,
  size,
  weight,
  numberOfLines,
  align,
  style,
  onPress,
  children,
  ...props
}) => {
  const styles = useStyle({color, size, weight, align});
  return (
    <RNText
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      onPress={onPress}
      {...props}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  size: 'md',
  weight: 'regular',
  align: 'left',
};

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([
    '3xs',
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
  ]),
  weight: PropTypes.oneOf(['regular', 'bold']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  numberOfLines: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

export default Text;
