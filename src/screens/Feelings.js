import React, {useContext} from 'react';
import DefaultText from 'components/shared/DefaultText';
import Container from 'components/shared/Container';
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
