import React from 'react';
import {ActivityIndicator, View, Modal} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../text/text';
import {COLORS} from '../../theme';
import styles from './styles';

const ScreenOverlay = ({isLoading, children, ...props}) => {
  return (
    <Modal isVisible={true} transparent={true}>
      <View style={styles.overlay} {...props}>
        {isLoading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator color={COLORS.white} />
            <Text style={styles.text}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    </Modal>
  );
};

ScreenOverlay.defaultProps = {
  isLoading: false,
};

ScreenOverlay.propTypes = {
  isLoading: PropTypes.bool,
};

export default ScreenOverlay;
