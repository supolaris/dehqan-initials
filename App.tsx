import React from 'react';
import {StatusBar} from 'react-native';
import {Routes} from './src/navigation/Routes';
import {AppColors} from './src/constant/AppColors';
import {UserProvider} from './src/context/Context';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={AppColors.appBackground}
      />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};

export default App;
