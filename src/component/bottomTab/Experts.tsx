import React from 'react';
import {AppColors} from '../../constant/AppColors';
import {appPaddingHorizontal} from '../../constant/AppConstants';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import SimpleHeader from '../common/reuseable/SimpleHeader';

const Experts = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <SimpleHeader title="Experts" isBackIconVisible={true} />
        <View style={styles.innerContainer}>
          <Text>Experts</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Experts;

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
