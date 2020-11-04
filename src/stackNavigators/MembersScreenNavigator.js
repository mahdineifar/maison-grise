import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Members from '../screens/Members';
import constants from '../constants/constants';

const Stack = createStackNavigator();

const MembersScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MembersScreen"
        component={Members}
        options={{title: constants.membersHeaderTitle}}
      />
    </Stack.Navigator>
  );
};

export default MembersScreenNavigator;
