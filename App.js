/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './navigation/tabs';
import ChuyenTien from './screens/ChuyenTien';
import TabsChuyenTien from './navigation/tabsChuyenTien';
import ChooseBank from './screens/ChooseBank';
import NapRut from './screens/NapRut';
import NapTien from './screens/NapTien';
import RutTien from './screens/RutTien';
import RutTienSoKhac from './screens/RutTienSoKhac';
import QRCodeThanhToan from './screens/QRCodeThanhToan';
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer styles={styles.container}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      {/* Tabs */}
      <Stack.Screen name="Home" component={Tabs} />

      <Stack.Screen name="ChuyenTien" component={ChuyenTien} />
      <Stack.Screen name="ChooseBank" component={ChooseBank} />
      <Stack.Screen name="ChuyenTienStep1" component={TabsChuyenTien} />
      <Stack.Screen name="NapRut" component={NapRut}></Stack.Screen>
      <Stack.Screen name="NapTien" component={NapTien}></Stack.Screen>
      <Stack.Screen name="RutTien" component={RutTien}></Stack.Screen>
      <Stack.Screen name="RutTienSoKhac" component={RutTienSoKhac}></Stack.Screen>
      <Stack.Screen name="QRCodeThanhToan" component={QRCodeThanhToan}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
