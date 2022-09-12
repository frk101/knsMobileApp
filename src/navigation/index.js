import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ROUTES} from '../constants/routes';
////Navigation
import StackNavigation from './stack-navigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
