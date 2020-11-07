import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from 'utils/Themes';
import DefaultText from 'components/shared/DefaultText';

const Members = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <DefaultText>Members Screen</DefaultText>
    </View>
  );
};

export default Members;
