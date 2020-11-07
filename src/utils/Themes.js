import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext} from 'react';
import {Appearance} from 'react-native';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {BLACK_COLOR, DARK_COLOR, WHITE_COLOR} from 'constants/Colors';

export const ThemeContext = createContext(DefaultTheme);

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerText: BLACK_COLOR,
    headerBackground: WHITE_COLOR,
    text: BLACK_COLOR,
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: DARK_COLOR,
    headerText: WHITE_COLOR,
    headerBackground: BLACK_COLOR,
    text: WHITE_COLOR,
  },
};

export const getPreferredTheme = async () => {
  let theme = await AsyncStorage.getItem('@preferred_Theme');
  if (!theme) {
    theme = Appearance.getColorScheme();
  }
  return theme === 'dark' ? AppDarkTheme : AppLightTheme;
};

export const setPreferredTheme = async (value) => {
  await AsyncStorage.setItem('@preferred_Theme', value);
};
