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

const Stack = createStackNavigator<RootStackParamList>();
const Bottom = createBottomTabNavigator<BottomStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerShown: false,
        }}>
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
