import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Members from 'screens/Members';
import constants from 'constants/constants';
import GenericStackNavigator from './GenericStackNavigator';

const Stack = createStackNavigator();

const MembersScreenNavigator = () => {
  return (
    <GenericStackNavigator Navigator={Stack.Navigator}>
      <Stack.Screen
        name="MembersScreen"
        component={Members}
        options={{title: constants.membersHeaderTitle}}
      />
    </GenericStackNavigator>
  );
};

export default MembersScreenNavigator;
