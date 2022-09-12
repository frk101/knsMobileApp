/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';

///Screeens
import HomeScreen from '../screens/home-screen/home-screen';
import DetailScreen from '../screens/detail-screen/detail-screen';
import SearchScreen from '../screens/search-screen/search-screen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const screens = [
    {
      name: ROUTES.home,
      component: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: ROUTES.detail,
      component: DetailScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: ROUTES.search,
      component: SearchScreen,
      options: {
        headerShown: false,
      },
    },
  ];

  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
