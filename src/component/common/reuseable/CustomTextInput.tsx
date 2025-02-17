import React, {forwardRef} from 'react';
import {AppColors} from '../../../constant/AppColors';
import {borderRadius} from '../../../constant/AppConstants';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import {normalizeFont, normalizeWidth} from '../../../utils/CommonFunctions';

interface IProps extends TextInputProps {
  inputValue: string;
  onChangeText: (val: string) => void;
}

const CustomTextInput = forwardRef<TextInput, IProps>((props, ref) => {
  const {inputValue, onChangeText, ...restProps} = props;
  return (
    <TextInput
      ref={ref}
      {...restProps}
      value={inputValue}
      allowFontScaling={false}
      onChangeText={onChangeText}
      placeholderTextColor={AppColors.placeholderColor}
      style={[
        styles.input,
        {textAlign: props.textAlign || 'left'},
        props.maxLength === 1 && {textAlign: 'center'},
      ]}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    color: AppColors.black,
    borderRadius: borderRadius,
    fontSize: normalizeFont(15),
    paddingLeft: normalizeWidth(15),
    backgroundColor: AppColors.white,
  },
});

export default CustomTextInput;
