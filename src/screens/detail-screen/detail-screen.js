import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useContext, useRef} from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft, Search} from '../../components/icon';
import {Text} from '../../components';
import styles from './styles';
import {SPACINGS} from '../../theme';
import {ROUTES} from '../../constants/routes';
import {ApiContext} from '../../context/api-context';
import {ENV} from '../../constants/env';

const DetailScreen = ({route}) => {
  const {top} = useSafeAreaInsets();
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const viewRef = useRef();
  const apiContext = useContext(ApiContext);
  const {state} = apiContext;
  const {allCardsData} = state;

  let cards = [];
  Object.getOwnPropertyNames(allCardsData).map(item => {
    allCardsData[item].map(data => {
      if (data && data.mechanics && data.mechanics.length > 0) {
        if (data.mechanics.some(x => x.name === route.params.item)) {
          cards.push(data);
        }
      }

      return data;
    });
    return item;
  });
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
      <FlatList
        data={cards}
        keyExtractor={item => item.cardId}
        renderItem={item => {
          return (
            <GestureFlipView ref={viewRef} width={width} height={width}>
              <RenderFront image={item.item.img} />
              <RenderBack item={item} />
            </GestureFlipView>
          );
        }}
      />
    </View>
  );
};
const RenderFront = ({image}) => {
  return (
    <>
      {image !== undefined ? (
        <Image
          source={{uri: image}}
          style={styles.renderflip}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={ENV.logoImage}
          style={styles.renderflip}
          resizeMode="contain"
        />
      )}
    </>
  );
};

const RenderBack = ({item: {item}}) => {
  return (
    <View style={styles.renderflipBack}>
      <View
        style={{marginVertical: SPACINGS[3], marginHorizontal: SPACINGS[3]}}>
        <Text weight={'bold'} size={'xl'} align={'center'}>
          {item.name}
        </Text>
        {item.artist && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1], marginTop: SPACINGS[5]}}>
            artist = {item.artist}
          </Text>
        )}
        {item.artist && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1]}}>
            artist = {item.artist}
          </Text>
        )}
        {item.playerClass && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1]}}>
            playerClass = {item.playerClass}
          </Text>
        )}
        {item.faction && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1]}}>
            faction = {item.faction}
          </Text>
        )}
        {item.rarity && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1]}}>
            rarity = {item.rarity}
          </Text>
        )}
        {item.type && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1]}}>
            type = {item.type}
          </Text>
        )}
        {item.flavor && (
          <Text
            weight={'bold'}
            size={'sm'}
            style={{marginVertical: SPACINGS[1]}}>
            flavor = {item.flavor}
          </Text>
        )}
        <Text weight={'bold'} size={'sm'} style={{marginVertical: SPACINGS[1]}}>
          attack = {item.attack}
        </Text>
      </View>
    </View>
  );
};
export default DetailScreen;
