import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      headerTitle: () => <Header />,
    }}
    initialRouteName="Home">
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator>
);

export default AppRoutes;
