import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feelings from 'screens/Feelings';
import constants from 'constants/constants';
import GenericStackNavigator from './GenericStackNavigator';

const Stack = createStackNavigator();

const FeelingScreenNavigator = () => {
  return (
    <GenericStackNavigator Navigator={Stack.Navigator}>
      <Stack.Screen
        name="FeelingScreen"
        component={Feelings}
        options={{title: constants.feelingsHeaderTitle}}
      />
    </GenericStackNavigator>
  );
};

export default FeelingScreenNavigator;
