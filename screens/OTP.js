import { View, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Header, getIconType } from "@rneui/base";
import { Input } from "@rneui/themed";
import { register } from '../slices/auth'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authService from '../services/auth.service';
import { ToastAndroid } from 'react-native';
const image = require('../assets/banner.jpg');

export default function OTP({ navigation, route }) {
    const [otp, setOtp] = useState("")
    const [otpInput, setOtpInput] = useState("")
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleSignup = () => {
        if (otp == setOtpInput) return
        setLoading(true)
        console.log('req')
        dispatch(register(route.params)).unwrap()
            .then((data) => {
                setLoading(false)
                navigation.navigate("Home")
            })
            .catch((err) => {
                setLoading(false)
            });
    }

    useEffect(() => {
        console.log(route.params)
        authService.getOtp(route.params.phone).then(data => { console.log('otp: ' + data); setOtp(data) })
            .catch(err => {
                ToastAndroid.show('Unable to send OTP', ToastAndroid.SHORT)
            })
    }, [])
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
            />

            <View style={styles.inputArea}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>OTP nhận được</Text>
                    <Input inputContainerStyle={styles.chuyenTien} keyboardType="number-pad"
                        onChangeText={(value) => setOtpInput(parseInt(value))}
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
                }} onPress={handleSignup}
                    disabled={otpInput != "" ? false : true}
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