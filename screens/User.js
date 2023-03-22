import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, PermissionsAndroid, AppState } from "react-native";
import { Header, Divider, Button } from "@rneui/base";
import { useState, useEffect } from "react";
const image = require('../assets/banner.jpg');

const User = ({ navigation, route }) => {
    const [count, setCount] = useState(false)
    const [count1, setCount1] = useState(0)
    const [isActive, setActive] = useState(false)
    const [checkPermiss, setPermiss] = useState(false)
    useEffect(() => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { setPermiss(response) })
        AppState.addEventListener('change', nextAppState => {
            if (
                AppState.currentState.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { setPermiss(response) })
            }

            AppState.currentState = nextAppState;

        });
        return () => console.log('rm')

    }, [])
    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
            <View style={styles.txt}>
                <Text>{count1}</Text>
                <Button title="click" onPress={() => setCount1(prev => prev + 1)} />
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    txt: {
        flex: 1,
        fontSize: 300,
        borderWidth: 20,
        borderColor: "lime"
    }
});
export default User