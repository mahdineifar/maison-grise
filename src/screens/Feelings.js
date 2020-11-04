import React, {useContext} from 'react';
import {View} from 'react-native';
import DefaultText from '../components/shared/DefaultText';
import {ThemeContext} from '../utils/Themes';

const Feelings = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <DefaultText>Feelings Screen</DefaultText>
    </View>
  );
};

export default Feelings;
