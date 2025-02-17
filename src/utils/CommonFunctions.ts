import {AxiosError} from 'axios';
// import { MMKV } from "react-native-mmkv";
import Toast from 'react-native-simple-toast';
import {Dimensions, PixelRatio, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {useMemo} from 'react';

const figmaScreenWidth = 440;
const figmaScreenHeight = 932;

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const bottomInset = initialWindowMetrics?.insets?.bottom ?? 0;
const scale = SCREEN_WIDTH / figmaScreenWidth;
const scaleVertical = (SCREEN_HEIGHT - bottomInset) / figmaScreenHeight;

// export const mmkv = new MMKV();

export const showToast = (message: string) => {
  Toast.show(message, Toast.LONG);
};

export const normalizeWidth = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

export const normalizeFont = (size: number, factor = 0.5) => {
  return size + (normalizeWidth(size) - size) * factor;
};

export const normalizeHeight = (size: number) => {
  const newSize = size * scaleVertical;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

export const getErrorData = (e: unknown) => {
  try {
    if (e instanceof AxiosError && e?.response?.data?.result) {
      console.log(e?.response?.data?.result?.toLowerCase());
      return e?.response?.data?.result?.toLowerCase();
    }
  } catch (e) {}
};

export const imageAspectHeight = (width: number, height: number) => {
  const ratio = width / height;
  return normalizeWidth(width) / ratio;
};
