import {View, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import axios from 'axios';
import {ENV} from '../../constants/env';
import {ApiContext} from '../../context/api-context';
import {Text, ListEmptyComponent, ScreenOverlay} from '../../components';
import styles from './styles';
import {SPACINGS} from '../../theme';
import RenderAllCard from './components/render-all-card/render-all-card';
import {dummyData} from '../../../data';

const HomeScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const apiContext = useContext(ApiContext);
  const {state, dispatch} = apiContext;
  const {allCardsData, allCardsError, allCardsLoading} = state;

  // useEffect(() => {
  //   axios
  //     .request({
  //       method: 'GET',
  //       url: ENV.baseUrl + '/cards',
  //       headers: {
  //         'X-RapidAPI-Key': ENV.rapidApiKey,
  //         'X-RapidAPI-Host': ENV.rapidApiHost,
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       dispatch({
  //         type: 'ALL_CARDS_SUCCESS',
  //         payload: response.data,
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       dispatch({type: 'ALL_CARDS_FAILURE'});
  //     });
  // });

  return (
    <>
      <View style={styles.container}>
        <View style={{marginHorizontal: SPACINGS[10]}}>
          <View style={{paddingTop: top + SPACINGS[5]}}>
            <Text weight={'bold'} size={'3xl'}>
              MECHANICS
            </Text>
          </View>
          <FlatList
            style={{marginTop: SPACINGS[10]}}
            data={dummyData}
            keyExtractor={item => item.id.toString()}
            renderItem={item => <RenderAllCard item={item} />}
            ListEmptyComponent={() => <ListEmptyComponent />}
          />
        </View>
      </View>
      {/* <ScreenOverlay isLoading={true} /> */}
    </>
  );
};

export default HomeScreen;
