import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LastVideosStackNavigator from './stackNavigators/LastVideosStackNavigator';
import FeelingScreenNavigator from './stackNavigators/FeelingScreenNavigator';
import MembersScreenNavigator from './stackNavigators/MembersScreenNavigator';
import constants from './constants/constants';
import {
  BLACK_COLOR,
  DARK_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from './constants/Colors';
import {
  AppDarkTheme,
  AppLightTheme,
  getPreferredTheme,
  setPreferredTheme,
  ThemeContext,
} from './utils/Themes';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme);
  useEffect(() => {
    SplashScreen.hide();
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
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: theme.dark ? DARK_COLOR : theme.colors.background,
        }}>
        <StatusBar
          backgroundColor={theme.dark ? DARK_COLOR : theme.colors.background}
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
      </SafeAreaView>
      <ThemeContext.Provider value={{theme, changeTheme}}>
        <NavigationContainer>
          <Tab.Navigator
            tabBarPosition="bottom"
            lazy
            lazyPlaceholder={() => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: theme.dark ? BLACK_COLOR : WHITE_COLOR,
                }}
              />
            )}
            backBehavior="initialRoute"
            tabBarOptions={{
              activeTintColor: theme.dark ? WHITE_COLOR : BLACK_COLOR,
              style: {
                backgroundColor: theme.dark ? BLACK_COLOR : WHITE_COLOR,
                borderTopWidth: 1,
                borderTopColor: YELLOW_COLOR,
              },
              indicatorStyle: {opacity: 0},
              labelStyle: {fontSize: 10},
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
    </SafeAreaProvider>
  );
}
