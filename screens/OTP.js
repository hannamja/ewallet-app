import { View, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Header } from "@rneui/base";
import { Input } from "@rneui/themed";
import { login } from '../slices/auth'
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
const image = require('../assets/banner.jpg');

export default function OTP() {

    const [isEye, setEye] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const isFocused = useIsFocused();
    const dispatch = useDispatch()

    const handleLogin = () => {
        if (phone == "") return
        if (password == "") return
        setLoading(true)
        dispatch(login({ phone, password })).unwrap()
            .then((data) => {
                setLoading(false)
                navigation.navigate("Home")
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            });
    }
    useEffect(() => {
        isFocused ? setPassword("") : setPassword("")
    }, [isFocused])
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
            />

            <View style={styles.inputArea}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>OTP nhận được</Text>
                    <Input inputContainerStyle={styles.chuyenTien} keyboardType="number-pad"
                        errorMessage={phone ? '' : "Bắt buộc"}
                        onChangeText={(value) => setPhone(value)}
                    ></Input>
                </View>

            </View>
            {
                isLoading ? <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View> : <Button title="Check" buttonStyle={{
                    backgroundColor: "#66cc9a",
                    borderRadius: 50,
                    width: 200,
                }} onPress={handleLogin}
                    disabled={phone && password ? false : true}
                ></Button>
            }

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    bannerContainer: {
        width: "100%",
        height: 200
    },
    banner: {
        width: "100%",
        height: "100%"
    },
    showIcon: {
        width: 20,
        height: 20
    },
    inputArea: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "100%",
    },
    chuyenTien: {
        backgroundColor: "white",
        borderRadius: 5
    }
});