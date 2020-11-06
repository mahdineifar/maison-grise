import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../utils/Themes';

const Container = ({children}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        minHeight: 1,
        minWidth: 1,
      }}>
      {children}
    </View>
  );
};

export default Container;
