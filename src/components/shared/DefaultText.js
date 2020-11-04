import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../../utils/Themes';

const DefaultText = (props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Text {...props} style={{...props.style, color: theme.colors.text}}>
      {props.children}
    </Text>
  );
};

export default DefaultText;
