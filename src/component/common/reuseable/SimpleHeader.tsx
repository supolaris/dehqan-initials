import React from 'react';
import CustomText from './CustomText';
import {AppColors} from '../../../constant/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {borderRadius} from '../../../constant/AppConstants';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {normalizeFont, normalizeHeight} from '../../../utils/CommonFunctions';

interface IMainHeaderProps {
  title: string;
  isBackIconVisible?: boolean;
  isRightIconVisible?: boolean;
  onHeaderBackPressed?: () => void;
  onRightIconPressed?: () => void;
}

const SimpleHeader = (props: IMainHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={props.onHeaderBackPressed}>
          {props.isBackIconVisible && (
            <Ionicons name="arrow-back" size={20} color={AppColors.black} />
          )}
        </TouchableOpacity>

        <CustomText
          preset="semiBold"
          numberOfLines={1}
          text={props.title}
          color={AppColors.black}
          fontSize={normalizeFont(15)}
          style={{textAlign: 'center'}}
        />

        {props.isRightIconVisible && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={props.onRightIconPressed}>
            <AntDesign name="user" size={20} color={AppColors.black} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: borderRadius,
    height: normalizeHeight(50),
    marginBottom: normalizeHeight(20),
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    left: 0,
    position: 'absolute',
  },
  rightIcon: {
    right: 0,
    position: 'absolute',
  },
});
