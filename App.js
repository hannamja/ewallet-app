/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import Tabs from './navigation/tabs';
import ChuyenTien from './screens/ChuyenTien';
import TabsChuyenTien from './navigation/tabsChuyenTien';
import ChooseBank from './screens/ChooseBank';
import NapRut from './screens/NapRut';
import NapTien from './screens/NapTien';
import RutTien from './screens/RutTien';
import RutTienSoKhac from './screens/RutTienSoKhac';
import QRCodeThanhToan from './screens/QRCodeThanhToan';
import Login from './screens/Login';
import ConfirmNap from './screens/ConfirmNap';
import ConfirmRut from './screens/ConfirmRut';
import ResultRut from './screens/ResultRut';
import ResultNap from './screens/ResultNap';
import ConfirmChuyenSoThe from './screens/ConfirmChuyenSoThe';
import ResultChuyenSoThe from './screens/ResultChuyenSoThe';
import ChuyenTienSoThe from './screens/ChuyenTienSoThe';
import ConfirmChuyenToEwallet from './screens/ConfirmChuyenToEwallet';
import ResultChuyenToEwallet from './screens/ResultChuyenToEwallet';
import AddLinkedBank from './screens/AddLinkedBank';
const Stack = createStackNavigator();
const App = () => (
  <Provider store={store}>
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}
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
        <Stack.Screen name="ConfirmNap" component={ConfirmNap} />
        <Stack.Screen name="ConfirmRut" component={ConfirmRut} />
        <Stack.Screen name="ResultRut" component={ResultRut} />
        <Stack.Screen name="ResultNap" component={ResultNap} />
        <Stack.Screen name="ConfirmChuyenSoThe" component={ConfirmChuyenSoThe} />
        <Stack.Screen name="ResultChuyenSoThe" component={ResultChuyenSoThe} />
        <Stack.Screen name="ChuyenTienSoThe" component={ChuyenTienSoThe} />
        <Stack.Screen name="ConfirmChuyenToEwallet" component={ConfirmChuyenToEwallet} />
        <Stack.Screen name="ResultChuyenToEwallet" component={ResultChuyenToEwallet} />
        <Stack.Screen name="AddBank" component={AddLinkedBank} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
