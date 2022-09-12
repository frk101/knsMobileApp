import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {dummyData} from '../../../data';
import {ArrowLeft, Search} from '../../components/icon';
import {Text} from '../../components';
import styles from './styles';
import {SPACINGS} from '../../theme';
import {ROUTES} from '../../constants/routes';

const DetailScreen = () => {
  const {top} = useSafeAreaInsets();
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const viewRef = useRef();
  return (
    <View style={styles.container}>
      <View
        style={{marginHorizontal: SPACINGS[10], paddingBottom: SPACINGS[5]}}>
        <View style={[styles.headerContainer, {paddingTop: top + SPACINGS[5]}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.search)}>
            <Search />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.flipContainer}
        onPress={() => viewRef.current.flipLeft()}>
        <GestureFlipView
          ref={viewRef}
          width={width}
          height={width}
          gestureEnabled={false}>
          <RenderFront />
          {renderBack()}
        </GestureFlipView>
      </TouchableOpacity>
    </View>
  );
};
const RenderFront = () => {
  return (
    <Image
      source={require('../../../assets/svg-icon/avatar.jpeg')}
      style={styles.renderflip}
      resizeMode="cover"
    />
  );
};

const renderBack = () => {
  return (
    <View style={styles.renderflip}>
      <Text>{'Back'}</Text>
    </View>
  );
};
export default DetailScreen;
