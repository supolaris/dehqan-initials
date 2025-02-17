import React from 'react';
import {
  normalizeFont,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/CommonFunctions';
import CustomText from '../reuseable/CustomText';
import {View, StyleSheet, Modal} from 'react-native';
import {AppColors} from '../../../constant/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {borderRadius} from '../../../constant/AppConstants';
import CustomTouchableOpacity from '../reuseable/CustomTouchable';

interface IAlertPopupProps {
  title?: string;
  isAlertPopupVisible: boolean;
  messageText: string;
  cancelText: string;
  confirmText: string;
  onAlertPopupCancel: () => void;
  onAlertPopupConfirm: () => void;
}

const AlertPopup = (props: IAlertPopupProps) => {
  return (
    <Modal transparent={true} visible={props.isAlertPopupVisible}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Ionicons name="arrow-back" size={20} color={AppColors.black} />
          <View style={styles.textView}>
            {props.title && (
              <CustomText
                text={props.title}
                fontSize={normalizeFont(16)}
                color={'#202020'}
                preset={'bold'}
                style={{
                  textAlign: 'center',
                  marginBottom: normalizeHeight(10),
                }}
              />
            )}
            <CustomText
              text={props.messageText}
              fontSize={normalizeFont(16)}
              color={AppColors.titleBlack}
              preset={'medium'}
              style={{textAlign: 'center'}}
            />
          </View>
          <View style={styles.buttonView}>
            <View style={styles.singleButtonView}>
              <CustomTouchableOpacity
                disabled={false}
                preset={'regular'}
                text={props.cancelText}
                fontSize={normalizeFont(14)}
                textColor={AppColors.primaryColor}
                onPress={props.onAlertPopupCancel}
                style={{
                  backgroundColor: AppColors.white,
                  borderColor: AppColors.primaryColor,
                  paddingVertical: normalizeHeight(12),
                }}
              />
            </View>
            <View style={styles.singleButtonView2}>
              <CustomTouchableOpacity
                disabled={false}
                preset={'regular'}
                text={props.confirmText}
                textColor={AppColors.white}
                fontSize={normalizeFont(14)}
                onPress={props.onAlertPopupConfirm}
                style={{
                  backgroundColor: AppColors.primaryColor,
                  borderColor: AppColors.primaryColor,
                  paddingVertical: normalizeHeight(12),
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: normalizeWidth(24.5),
    backgroundColor: AppColors.transparentBackground,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    width: normalizeWidth(381),
    paddingTop: normalizeHeight(32),
    backgroundColor: AppColors.white,
    paddingBottom: normalizeHeight(32),
    paddingHorizontal: normalizeWidth(32),
  },

  textView: {
    width: normalizeWidth(317),
    marginVertical: normalizeHeight(24),
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleButtonView: {
    width: normalizeWidth(143),
    marginRight: normalizeWidth(8),
  },
  singleButtonView2: {
    width: normalizeWidth(143),
    marginLeft: normalizeWidth(8),
  },
});
