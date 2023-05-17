import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, SafeAreaView, PermissionsAndroid, AppState } from "react-native";
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
        <SafeAreaView>
            <Header
                backgroundColor="#66cc9a"
            />
            <View style={styles.txt}>
                <Image source={{ uri: "https://i.pinimg.com/564x/c0/73/cf/c073cf0623ea1ab54213114aa7922f06.jpg" }} style={{ width: 50, height: 50, borderRadius: 50 }}>
                </Image>
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{user.userInfo.name}</Text>
                    <Text>{user.userInfo.phone_number}</Text>
                </View>

            </View>
            <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate("QRCodeThanhToan")}>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 20, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "gray" }}>
                    <Image source={require('../assets/qr.png')} style={styles.chuyentienIcon}></Image>

                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Mã QR nhận tiền</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "100%" }} onPress={() => navigation.navigate("NapRut")}>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 20, backgroundColor: "white" }}>
                    <Image source={require('../assets/naprut.png')} style={styles.naprutIcon}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Số dư</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "100%" }} onPress={handleLogout}>
                <View style={{ marginTop: 10, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 20, backgroundColor: "white" }}>
                    <Image source={require('../assets/logout-icon-18.png')} style={{ width: 30, height: 30 }}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Logout</Text>
                </View>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    naprutIcon: {
        width: 30,
        height: 30,
        tintColor: 'lime'
    },
    chuyentienIcon: {
        width: 30,
        height: 30
    },
    txt: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 40,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});
export default User