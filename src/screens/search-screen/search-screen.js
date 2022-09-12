import {TouchableOpacity, View, TextInput} from 'react-native';
import React, {useState, useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import axios from 'axios';

import {ENV} from '../../constants/env';
import {ApiContext} from '../../context/api-context';
import {DismissKeyboardHoc} from '../../components';
import styles from './styles';
import {COLORS, SPACINGS} from '../../theme';
import {ArrowLeft, Search} from '../../components/icon';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const [searchValue, setSearchValue] = useState('');
  const apiContext = useContext(ApiContext);
  const {state, dispatch} = apiContext;
  const {searchCardSearchLoading, searchCardSearchData, searchCardSearchError} =
    state;

  const handleSearchCard = () => {
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
        console.log(response);
        dispatch({
          type: 'SEARCH_CARDS_SUCCESS',
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({type: 'SEARCH_CARDS_FAILURE'});
      });
  };
  return (
    <DismissKeyboardHoc keyboardAvoidingViewStyle={styles.container}>
      <View style={{marginHorizontal: SPACINGS[10]}}>
        <View style={{paddingTop: top + SPACINGS[5]}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ara..."
            placeholderTextColor={COLORS.white}
            onChangeText={text => setSearchValue(text)}
            value={searchValue}
            autoFocus={true}
          />
          <TouchableOpacity onPress={() => handleSearchCard()}>
            <Search />
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboardHoc>
  );
};

export default SearchScreen;
