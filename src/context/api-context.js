import React, {useReducer} from 'react';
import {
  ALL_CARDS_SUCCESS,
  ALL_CARDS_FAILURE,
  SEARCH_CARDS_SUCCESS,
  SEARCH_CARDS_FAILURE,
} from './api-context-type';

export const ApiContext = React.createContext({});
ApiContext.displayName = 'ApiContext';

const initialState = {
  allCardsLoading: true,
  allCardsError: '',
  allCardsData: [],
  searchCardSearchLoading: true,
  searchCardSearchData: [],
  searchCardSearchError: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ALL_CARDS_SUCCESS:
      return {
        ...state,
        allCardsLoading: false,
        allCardsError: '',
        allCardsData: action.payload,
      };
    case ALL_CARDS_FAILURE:
      return {
        ...state,
        allCardsLoading: false,
        allCardsError: 'Something went wrong',
        allCardsData: [],
      };
    case SEARCH_CARDS_SUCCESS:
      return {
        ...state,
        searchCardSearchLoading: false,
        searchCardSearchData: action.payload,
        searchCardSearchError: '',
      };
    case SEARCH_CARDS_FAILURE:
      return {
        ...state,
        searchCardSearchLoading: false,
        searchCardSearchData: [],
        searchCardSearchError: 'Something went wrong',
      };
    default:
      return state;
  }
};

const ApiContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ApiContext.Provider value={{state, dispatch}}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
