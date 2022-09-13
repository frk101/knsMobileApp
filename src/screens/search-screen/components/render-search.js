import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SPACINGS, COLORS} from '../../../theme';
import {Text} from '../../../components';

const RenderSearch = ({item: {item}}) => {
  return (
    <View style={styles.renderSearchCard}>
      <View style={{marginHorizontal: SPACINGS[3]}}>
        <Text>render-all-card</Text>
      </View>
    </View>
  );
};

export default RenderSearch;

const styles = StyleSheet.create({
  renderSearchCard: {
    marginVertical: SPACINGS[3],
    borderWidth: 1,
    borderColor: COLORS.cyan,
    paddingVertical: SPACINGS[5],
    borderRadius: SPACINGS[3],
    backgroundColor: COLORS.background,
  },
});
