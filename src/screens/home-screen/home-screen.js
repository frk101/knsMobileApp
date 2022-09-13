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

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const apiContext = useContext(ApiContext);
  const {state, dispatch} = apiContext;
  const {allCardsLoading, allMechanicsData} = state;

  useEffect(() => {
    axios
      .request({
        method: 'GET',
        url: ENV.baseUrl + '/cards',
        headers: {
          'X-RapidAPI-Key': ENV.rapidApiKey,
          'X-RapidAPI-Host': ENV.rapidApiHost,
        },
      })
      .then(function (response) {
        let allMechanics = [];
        Object.getOwnPropertyNames(response?.data).map(item => {
          response?.data[item].map(data => {
            if (data && data.mechanics && data.mechanics.length > 0) {
              data.mechanics.map(m => {
                if (!allMechanics.some(x => x === m.name)) {
                  allMechanics.push(m.name);
                }
                return m;
              });
            }
            return data;
          });
          return item;
        });
        dispatch({
          type: 'ALL_MECHANICS_SUCCESS',
          payload: allMechanics,
        });
        dispatch({
          type: 'ALL_CARDS_SUCCESS',
          payload: response.data,
        });
      })
      .catch(function (error) {
        dispatch({type: 'ALL_CARDS_FAILURE'});
      });
    return () => {};
  }, [dispatch]);

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
            data={allMechanicsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <RenderAllCard item={item} />}
            ListEmptyComponent={() => (
              <ListEmptyComponent
                title={
                  allCardsLoading
                    ? 'Mechanics aranıyor..'
                    : 'Mechanics bulunamadı.'
                }
              />
            )}
          />
        </View>
      </View>
      {allCardsLoading ? <ScreenOverlay isLoading={true} /> : null}
    </>
  );
};

export default HomeScreen;
