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
export default function Login({ navigation }) {

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
            <View style={styles.bannerContainer}>
                <Text style={{ position: "absolute", zIndex: 999, width: "90%", top: 50, left: "5%", fontSize: 30, fontWeight: "bold" }}>ĐĂNG NHẬP</Text>
                <Image source={image} style={styles.banner}></Image>
            </View>

            <View style={styles.inputArea}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>Số điện thoại</Text>
                    <Input inputContainerStyle={styles.chuyenTien} keyboardType="number-pad"
                        errorMessage={phone ? '' : "Bắt buộc"}
                        onChangeText={(value) => setPhone(value)}
                    ></Input>
                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Mật khẩu</Text>
                    <Input inputContainerStyle={styles.chuyenTien} secureTextEntry={isEye ? true : false}
                        errorMessage={password ? '' : "Bắt buộc"}
                        onChangeText={(value) => setPassword(value)}
                        value={password}
                        rightIcon={isEye ?
                            <TouchableOpacity onPress={() => setEye(!isEye)}>
                                <Image source={require('../assets/hide.png')} style={styles.showIcon}></Image>
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => setEye(!isEye)}>
                                <Image source={require('../assets/show.png')} style={styles.showIcon}></Image>
                            </TouchableOpacity>}
                    ></Input>
                </View>
            </View>
            {
                isLoading ? <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="small" color="#0000ff" />
                </View> : <>
                    <Button title="Đăng nhập" buttonStyle={{
                        backgroundColor: "#66cc9a",
                        borderRadius: 50,
                        width: 200,
                    }} onPress={handleLogin}
                        disabled={phone && password ? false : true}
                    ></Button>
                    <Button title="Đăng kí" buttonStyle={{
                        backgroundColor: "black",
                        borderRadius: 50,
                        width: 200,
                        marginTop: 20
                    }} onPress={() => navigation.navigate('Signup')}
                    ></Button>
                </>
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
        width: "90%",
        height: 200,
        backgroundColor: "#66cc9a",
        borderRadius: 5,
        position: "relative",
        bottom: 30,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    chuyenTien: {
        backgroundColor: "white",
        borderRadius: 5
    }
});