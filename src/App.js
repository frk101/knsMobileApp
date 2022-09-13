/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import ApiContextProvider from './context/api-context';

import Navigation from './navigation';
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <ApiContextProvider>
        <Navigation />
      </ApiContextProvider>
    </SafeAreaProvider>
  );
}
