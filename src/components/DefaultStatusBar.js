import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {DARK_COLOR} from '../constants/Colors';

const DefaultStatusBar = ({theme}) => {
  return (
    <SafeAreaView
      style={{
        flex: 0,
        backgroundColor: theme.dark ? DARK_COLOR : theme.colors.background,
      }}>
      <StatusBar
        backgroundColor={theme.dark ? DARK_COLOR : theme.colors.background}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
    </SafeAreaView>
  );
};

export default DefaultStatusBar;
