import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import CustomText from './CustomText';
import {normalizeWidth} from '../../../utils/CommonFunctions';
import {borderWidth, buttonBorderRadius} from '../../../constant/AppConstants';

interface IProps extends TouchableOpacityProps {
  text: string;
  width?: number;
  fontSize: number;
  textColor: string;
  preset: 'light' | 'bold' | 'medium' | 'regular' | 'semiBold';
}

const CustomTouchableOpacity: React.FC<IProps> = ({
  fontSize,
  preset,
  text,
  width,
  textColor,
  onPress,
  style,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {width}, style]}
      {...restProps}>
      <CustomText
        fontSize={fontSize}
        color={textColor}
        preset={preset}
        text={text}
        numberOfLines={2}
        style={{lineHeight: fontSize, textAlign: 'center'}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: borderWidth,
    borderRadius: buttonBorderRadius,
    paddingHorizontal: normalizeWidth(10),
  },
});

export default CustomTouchableOpacity;
