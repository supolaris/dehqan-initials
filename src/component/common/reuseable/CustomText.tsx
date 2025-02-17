import {Text, TextProps} from 'react-native';
import {AppFonts} from '../../../constant/AppFonts';

interface IProps extends TextProps {
  text: string;
  color?: string;
  fontSize: number;
  lineHeight?: number;
  preset: 'light' | 'bold' | 'medium' | 'regular' | 'semiBold';
}

const CustomText = ({
  text,
  fontSize,
  lineHeight,
  color,
  preset,
  style,
  ...styleProp
}: IProps) => {
  return (
    <Text
      {...styleProp}
      style={[
        {
          fontSize: fontSize,
          color: color ? color : 'black',
          lineHeight: lineHeight ? lineHeight : fontSize + 2,
          fontFamily:
            preset === 'light'
              ? AppFonts.light
              : preset === 'bold'
              ? AppFonts.bold
              : preset === 'regular'
              ? AppFonts.regular
              : preset === 'medium'
              ? AppFonts.medium
              : preset === 'semiBold'
              ? AppFonts.semiBold
              : AppFonts.regular,
        },
        style,
      ]}
      allowFontScaling={false}>
      {text}
    </Text>
  );
};

export default CustomText;
