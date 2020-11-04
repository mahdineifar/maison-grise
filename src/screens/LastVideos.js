import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../utils/Themes';
import DefaultText from '../components/shared/DefaultText';

const LastVideos = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <DefaultText style={{color: 'white'}} onPress={changeTheme}>
        Last videos Screen
      </DefaultText>
    </View>
  );
};

export default LastVideos;
