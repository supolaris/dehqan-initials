import React from 'react';
import {AppColors} from '../constant/AppColors';
import {borderRadius} from '../constant/AppConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {normalizeFont, normalizeHeight} from '../utils/CommonFunctions';

function BottomTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  return (
    <View style={[styles.MainTabPanel]}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {index == 0 ? (
              <View style={isFocused ? styles.activeView : styles.inActiveView}>
                <AntDesign
                  name="home"
                  size={20}
                  color={isFocused ? AppColors.black : AppColors.white}
                />
              </View>
            ) : index == 1 ? (
              <View style={isFocused ? styles.activeView : styles.inActiveView}>
                <AntDesign
                  name="home"
                  size={20}
                  color={isFocused ? AppColors.black : AppColors.white}
                />
              </View>
            ) : index == 2 ? (
              <View style={isFocused ? styles.activeView : styles.inActiveView}>
                <AntDesign
                  name="home"
                  size={20}
                  color={isFocused ? AppColors.black : AppColors.white}
                />
              </View>
            ) : index == 3 ? (
              <View style={isFocused ? styles.activeView : styles.inActiveView}>
                <AntDesign
                  name="home"
                  size={20}
                  color={isFocused ? AppColors.black : AppColors.white}
                />
              </View>
            ) : (
              <View style={isFocused ? styles.activeView : styles.inActiveView}>
                <AntDesign
                  name="home"
                  size={20}
                  color={isFocused ? AppColors.black : AppColors.white}
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default BottomTabBar;

const styles = StyleSheet.create({
  MainTabPanel: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: normalizeHeight(60),
    backgroundColor: AppColors.black,
  },
  activeView: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    backgroundColor: AppColors.white,
  },
  inActiveView: {},
  tabTextActive: {
    textAlign: 'center',
    color: AppColors.black,
    fontSize: normalizeFont(12),
  },
  tabTextInActive: {
    color: AppColors.white,
    fontSize: normalizeFont(12),
    marginTop: normalizeHeight(10),
  },
});
