import {
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import axios from 'axios';
import GestureFlipView from 'react-native-gesture-flip-card';

import {ENV} from '../../constants/env';
import {ApiContext} from '../../context/api-context';
import {Text} from '../../components';
import styles from './styles';
import {COLORS, SPACINGS} from '../../theme';
import {ArrowLeft} from '../../components/icon';
import {useNavigation} from '@react-navigation/native';
import {ListEmptyComponent} from '../../components';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiContext = useContext(ApiContext);
  const viewRef = useRef();

  const {state, dispatch} = apiContext;
  const {searchCardSearchData} = state;
  const {width} = Dimensions.get('window');
  const handleSearchCard = () => {
    if (searchValue.length > 0) {
      setIsLoading(true);
      axios
        .request({
          method: 'GET',
          url: ENV.baseUrl + '/cards/search/' + searchValue,
          headers: {
            'X-RapidAPI-Key': ENV.rapidApiKey,
            'X-RapidAPI-Host': ENV.rapidApiHost,
          },
        })
        .then(function (response) {
          setIsLoading(false);
          let data = response?.data?.filter(function (element) {
            return element.img !== undefined;
          });
          dispatch({
            type: 'SEARCH_CARDS_SUCCESS',
            payload: data,
          });
        })
        .catch(function (error) {
          dispatch({type: 'SEARCH_CARDS_FAILURE'});
          setIsLoading(false);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: SPACINGS[8]}}>
        <View style={{paddingTop: top + SPACINGS[5]}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Ara..."
          selectionColor={COLORS.white}
          placeholderTextColor={COLORS.white}
          onChangeText={text => setSearchValue(text)}
          value={searchValue}
          autoFocus={true}
          style={styles.inputContainer}
          onChange={() => handleSearchCard()}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.white} />
      ) : (
        <FlatList
          data={searchValue.length > 0 ? searchCardSearchData : []}
          keyExtractor={item => item.cardId}
          ListEmptyComponent={() => (
            <ListEmptyComponent
              title={
                searchValue.length > 0
                  ? 'İlgili kart bulunumadı.'
                  : 'Kartları görmek için arama yapınız.'
              }
            />
          )}
          renderItem={item => {
            return (
              <GestureFlipView ref={viewRef} width={width} height={width}>
                <RenderFront item={item} />
                <RenderBack item={item} />
              </GestureFlipView>
            );
          }}
        />
      )}
    </View>
  );
};
const RenderFront = ({item}) => {
  return (
    <Image
      source={{
        uri: item.item.img,
      }}
      style={styles.renderflip}
      resizeMode="contain"
    />
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
export default SearchScreen;
