import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SPACINGS, COLORS} from '../../../../theme';
import {Text} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../constants/routes';

const RenderAllCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.renderAllCard}
      onPress={() => navigation.navigate(ROUTES.detail, {item: item})}>
      <View style={{marginHorizontal: SPACINGS[3]}}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderAllCard;

const styles = StyleSheet.create({
  renderAllCard: {
    marginVertical: SPACINGS[3],
    borderWidth: 1,
    borderColor: COLORS.cyan,
    paddingVertical: SPACINGS[5],
    borderRadius: SPACINGS[3],
    backgroundColor: COLORS.background,
  },
});
