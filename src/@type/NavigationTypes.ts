import {StackScreenProps} from '@react-navigation/stack';

export type MainStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  BottomTabs: undefined;
};

export type BottomStackParamList = {
  Home: undefined;
};
