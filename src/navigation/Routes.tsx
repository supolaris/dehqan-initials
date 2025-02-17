import React from 'react';
import {
  BottomStackParamList,
  RootStackParamList,
} from '../@type/NavigationTypes';
import BottomTabBar from './CustomBottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/bottomTab/HomeScreen';
import Authentication from '../component/authentication/Authentication';
import AuthenticationScreen from '../screen/authentication/AuthenticationScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Bottom = createBottomTabNavigator<BottomStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Authentication"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const BottomTabs = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Bottom.Screen name="Home" component={HomeScreen} />
    </Bottom.Navigator>
  );
};
