import React, {useContext} from 'react';
import {ThemeContext} from '../utils/Themes';
import {YELLOW_COLOR} from '../constants/Colors';

const GenericStackNavigator = ({children, Navigator}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Navigator
      screenOptions={{
        safeAreaInsets: {top: 10, bottom: 10},
        headerTintColor: theme.colors.headerText,
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
          borderBottomWidth: 1,
          borderBottomColor: YELLOW_COLOR,
        },
      }}>
      {children}
    </Navigator>
  );
};

export default GenericStackNavigator;
