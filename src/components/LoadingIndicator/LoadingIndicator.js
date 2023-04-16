import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayNone: {
    display: 'none',
  },
});

const LoadingIndicator = ({
  fullScreen, visible, style, size, color,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <View style={[
      fullScreen ? [StyleSheet.absoluteFill, styles.center] : null,
      style,
      visible ? null : styles.displayNone,
    ]}
    >
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

LoadingIndicator.propTypes = {
  fullScreen: PropTypes.bool,
  visible: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  fullScreen: false,
  visible: false,
  style: null,
  size: 'small',
};

export default LoadingIndicator;
