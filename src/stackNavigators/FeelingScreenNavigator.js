import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feelings from '../screens/Feelings';
import constants from '../constants/constants';

const Stack = createStackNavigator();

const FeelingScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeelingScreen"
        component={Feelings}
        options={{title: constants.feelingsHeaderTitle}}
      />
    </Stack.Navigator>
  );
};

export default FeelingScreenNavigator;
