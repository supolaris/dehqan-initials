import React from 'react';
import {AppColors} from '../../constant/AppColors';
import SimpleHeader from '../common/reuseable/SimpleHeader';
import {appPaddingHorizontal} from '../../constant/AppConstants';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const VideoCategories = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <SimpleHeader title="VideoCategories" isBackIconVisible={true} />
        <View style={styles.innerContainer}>
          <Text>VideoCategories</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoCategories;

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
