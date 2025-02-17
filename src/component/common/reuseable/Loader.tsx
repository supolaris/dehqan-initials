import React from 'react';
import LottieView from 'lottie-react-native';
import {AppColors} from '../../../constant/AppColors';
import {View, Modal, StyleSheet} from 'react-native';
import {normalizeWidth} from '../../../utils/CommonFunctions';

interface IProps {
  isLoading: boolean;
}

const Loader = (props: IProps) => {
  return (
    <Modal transparent={true} visible={props.isLoading}>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          style={styles.lottie}
          source={require('../../../assets/lottie/logoLottie.json')}
        />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.transparentBackground,
  },
  lottie: {
    width: normalizeWidth(90),
    height: normalizeWidth(90),
  },
});
