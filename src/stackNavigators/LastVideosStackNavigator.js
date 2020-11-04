import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LastVideos from '../screens/LastVideos';
import constants from '../constants/constants';

const Stack = createStackNavigator();

const LastVideosStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LastVideosScreen"
        component={LastVideos}
        options={{title: constants.lastVideosHeaderTitle}}
      />
    </Stack.Navigator>
  );
};

export default LastVideosStackNavigator;
