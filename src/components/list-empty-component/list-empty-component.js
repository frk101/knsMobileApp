import {StyleSheet, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Warning from '../icon/warning-icon';

import {SPACINGS} from '../../theme';
import Text from '../text/text';

const ListEmptyComponent = ({title}) => {
  return (
    <View style={styles.listEmptyComponents}>
      <Warning sizeIcon={'md'} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

ListEmptyComponent.defaultProps = {
  title: 'Mechanics bulunamadı.',
};

ListEmptyComponent.propTypes = {
  title: PropTypes.string,
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  listEmptyComponents: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACINGS[50],
  },
  text: {
    marginTop: 20,
  },
});
