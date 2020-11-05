import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from '../utils/Themes';
import {BLACK_COLOR, WHITE_COLOR} from '../constants/Colors';

const TabBarIcon = ({name}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Icon
      name={name}
      size={20}
      color={theme.dark ? WHITE_COLOR : BLACK_COLOR}
    />
  );
};

export default TabBarIcon;
