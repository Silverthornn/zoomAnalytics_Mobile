import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import dashBoardScreen from '../src/dashBoardScreen';
import thisWeekScreen from '../src/thisWeekScreen';
import thisMonthScreen from '../src/thisMonthScreen';
import thisYearScreen from '../src/thisYearScreen';
import financialScreen from '../src/financialScreen';




export default function NavRoute() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="dashboard">
          
          <Stack.Screen name="dashboard" component={dashBoardScreen} />
          <Stack.Screen name="thisweek" component={thisWeekScreen} />
          <Stack.Screen name="thismonth" component={thisMonthScreen} />
          <Stack.Screen name="thisyear" component={thisYearScreen} />
          <Stack.Screen name="Financials" component={financialScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
  
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })
