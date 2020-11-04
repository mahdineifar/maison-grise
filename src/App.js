import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LastVideosStackNavigator from './stackNavigators/LastVideosStackNavigator';
import FeelingScreenNavigator from './stackNavigators/FeelingScreenNavigator';
import MembersScreenNavigator from './stackNavigators/MembersScreenNavigator';
import constants from './constants/constants';
import {BLACK_COLOR, WHITE_COLOR, YELLOW_COLOR} from './constants/Colors';
import {
  AppDarkTheme,
  AppLightTheme,
  getPreferredTheme,
  setPreferredTheme,
  ThemeContext,
} from './utils/Themes';

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme);
  useEffect(() => {
    getPreferredTheme().then((preferredTheme) => {
      setTheme(preferredTheme);
    });
  }, []);
  function changeTheme() {
    const newTheme = theme.dark ? AppLightTheme : AppDarkTheme;
    setPreferredTheme(newTheme.dark ? 'dark' : 'light').then(() => {
      setTheme(newTheme);
    });
  }
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: theme.dark ? WHITE_COLOR : BLACK_COLOR,
            style: {
              backgroundColor: theme.dark ? BLACK_COLOR : WHITE_COLOR,
              borderTopWidth: 1,
              borderTopColor: YELLOW_COLOR,
            },
            labelStyle: {fontWeight: 'bold'},
          }}>
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
    </ThemeContext.Provider>
  );
}
