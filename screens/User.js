import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, PermissionsAndroid, AppState } from "react-native";
import { Header, Divider, Button } from "@rneui/base";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from '../slices/auth'
const image = require('../assets/banner.jpg');

const User = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout()).unwrap()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch((err) => {
                console.log(err)
            });
    }
    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%", width: "100%", flexDirection: "column", alignItems: "center" }}>
            <View style={styles.txt}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{user.userInfo.phone_number}</Text>
                <Text>{user.userInfo.balance}</Text>
            </View>
            <View style={{ width: "100%" }}>
                <Button title="Logout" color="warning" onPress={handleLogout}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        marginTop: 40,
        marginBottom: 40,
        width: "100%"
    }
});
export default User