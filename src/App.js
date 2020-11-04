import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LastVideosStackNavigator from './stackNavigators/LastVideosStackNavigator';
import FeelingScreenNavigator from './stackNavigators/FeelingScreenNavigator';
import MembersScreenNavigator from './stackNavigators/MembersScreenNavigator';
import constants from './constants/constants';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="VideosTab"
          component={LastVideosStackNavigator}
          options={{title: constants.lastVideosTabTitle}}
        />
        <Tab.Screen
          name="FeelingsTab"
          component={FeelingScreenNavigator}
          options={{title: constants.feelingsTabTitle}}
        />
        <Tab.Screen
          name="MembersTab"
          component={MembersScreenNavigator}
          options={{title: constants.membersTabTitle}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
