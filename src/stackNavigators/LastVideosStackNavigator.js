import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LastVideos from 'screens/LastVideos';
import constants from 'constants/constants';
import GenericStackNavigator from './GenericStackNavigator';

const Stack = createStackNavigator();

const LastVideosStackNavigator = () => {
  return (
    <GenericStackNavigator Navigator={Stack.Navigator}>
      <Stack.Screen
        name="LastVideosScreen"
        component={LastVideos}
        options={{title: constants.lastVideosHeaderTitle}}
      />
    </GenericStackNavigator>
  );
};

export default LastVideosStackNavigator;
