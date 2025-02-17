import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {normalizeWidth} from '../../../utils/CommonFunctions';

export default function LogoLottie() {
  return (
    <TouchableOpacity>
      <LottieView
        autoPlay
        loop
        style={styles.lottie}
        source={require('../../../assets/animation/logo.lottie')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: normalizeWidth(90),
    height: normalizeWidth(90),
  },
});
