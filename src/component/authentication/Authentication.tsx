import React from 'react';
import {AppColors} from '../../constant/AppColors';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  normalizeFont,
  normalizeHeight,
  normalizeWidth,
} from '../../utils/CommonFunctions';
import {AppFonts} from '../../constant/AppFonts';
import CustomText from '../common/reuseable/CustomText';
import CustomTextInput from '../common/reuseable/CustomTextInput';
import CustomTouchableOpacity from '../common/reuseable/CustomTouchable';
import {appPaddingHorizontal, borderColor} from '../../constant/AppConstants';

interface IProps {
  inputNumVal: string;
  onPolicyPressed: () => void;
  onGetOtpPressed: () => void;
  guestLoginPressed: () => void;
  onChangeNumVal: (val: string) => void;
  onTermsConditionPressed: () => void;
}

const Authentication = (props: IProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={styles.container}
        source={require('../../asset/image/authentication/authenticationBg1.webp')}>
        <View style={styles.innerContainer}>
          <View style={styles.detailView}>
            <CustomText
              preset="semiBold"
              text="Enter Mobile Number"
              color={AppColors.titleBlack}
              fontSize={normalizeFont(18)}
            />
            <CustomText
              preset="regular"
              text="Register by entering mobile number."
              color={AppColors.descriptionBlack}
              fontSize={normalizeFont(14)}
              style={{
                marginTop: normalizeHeight(7.9),
              }}
            />

            <View style={styles.numInputView}>
              <CustomTextInput
                inputValue={props.inputNumVal}
                onChangeText={props.onChangeNumVal}
                placeholder="+92 3XX-XXXXXXX"
                placeholderTextColor={'rgba(73, 73, 73, 0.52)'}
                style={{
                  borderWidth: 1,
                  borderColor: borderColor,
                  backgroundColor: AppColors.white,
                }}
              />
            </View>

            <View style={styles.buttonsView}>
              <CustomTouchableOpacity
                preset="bold"
                text="Get OTP"
                textColor={AppColors.white}
                fontSize={normalizeFont(16)}
                style={{
                  borderWidth: 0,
                  borderRadius: 42.1,
                  paddingVertical: normalizeHeight(20),
                  backgroundColor: AppColors.primaryColor,
                }}
                onPress={props.onGetOtpPressed}
              />
              <CustomTouchableOpacity
                preset="bold"
                text="Continue as Guest"
                textColor={'#808080'}
                fontSize={normalizeFont(16)}
                style={{
                  borderWidth: 1,
                  borderRadius: 42.1,
                  marginTop: normalizeHeight(11.85),
                  borderColor: AppColors.primaryColor,
                  paddingVertical: normalizeHeight(20),
                }}
                onPress={props.guestLoginPressed}
              />
            </View>

            <Text style={styles.privacyTermsText}>
              By Signing in, I agree to{' '}
              <Text
                style={styles.innerPrivacyTermsText}
                onPress={props.onTermsConditionPressed}>
                Terms & Conditions
              </Text>{' '}
              {'\n'}and{' '}
              <Text
                style={styles.innerPrivacyTermsText}
                onPress={props.onPolicyPressed}>
                privacy policy.
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.appBackground,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: appPaddingHorizontal,
  },
  detailView: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 21.5,
    position: 'absolute',
    bottom: normalizeHeight(26),
    backgroundColor: '#F5F5F5',
    paddingVertical: normalizeHeight(25),
    paddingHorizontal: normalizeWidth(29),
  },
  numInputView: {
    marginTop: normalizeHeight(21.05),
  },
  buttonsView: {
    marginTop: normalizeHeight(66.02),
  },
  privacyTermsText: {
    color: '#333333',
    textAlign: 'center',
    fontFamily: AppFonts.light,
    fontSize: normalizeFont(14),
    marginTop: normalizeHeight(11.85),
  },
  innerPrivacyTermsText: {
    color: AppColors.primaryColor,
  },
});
