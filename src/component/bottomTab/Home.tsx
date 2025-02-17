import React from 'react';
import {AppColors} from '../../constant/AppColors';
import CustomText from '../common/reuseable/CustomText';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import SimpleHeader from '../common/reuseable/SimpleHeader';
import {appPaddingHorizontal} from '../../constant/AppConstants';
import {normalizeFont, normalizeHeight} from '../../utils/CommonFunctions';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <SimpleHeader title="Home" isBackIconVisible={true} />
        <View style={styles.innerContainer}>
          <CustomText
            preset="medium"
            text="helloWorld"
            color={AppColors.black}
            fontSize={normalizeFont(12)}
            style={{
              marginTop: normalizeHeight(10),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.appBackground,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: appPaddingHorizontal,
  },
});
