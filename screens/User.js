import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, PermissionsAndroid, AppState } from "react-native";
import { Header, Divider, Button } from "@rneui/base";
import { useState, useEffect } from "react";
const image = require('../assets/banner.jpg');

const User = ({ navigation, route }) => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%", width: "100%", flexDirection: "column", alignItems: "center" }}>
            <View style={styles.txt}>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>Nguyen Van A</Text>
                <Text>0987123123</Text>
            </View>
            <View style={{width: "100%"}}>
                <Button title="Logout" color="warning"/>
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