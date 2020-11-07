import React, {useContext} from 'react';
import DefaultText from 'sharedComponents/DefaultText';
import Container from 'sharedComponents/Container';
import {ThemeContext} from 'utils/Themes';

const Feelings = () => {
  const {changeTheme} = useContext(ThemeContext);
  return (
    <Container>
      <DefaultText onPress={changeTheme}>Feelings Screen</DefaultText>
    </Container>
  );
};

export default Feelings;
