import { View, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Header } from "@rneui/base";
import { Input } from "@rneui/themed";
import { login } from '../slices/auth'
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
const image = require('../assets/banner.jpg');

export default function Signup({ navigation }) {
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
        <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
            />
            <ScrollView contentContainerStyle={styles.inputArea}>
                <View contentContainerStyle={styles.inputArea}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>Số điện thoại</Text>
                        <Input inputContainerStyle={styles.chuyenTien} keyboardType="number-pad"
                            errorMessage={phone ? '' : "Bắt buộc"}
                            onChangeText={(value) => setPhone(value)}
                        ></Input>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>Họ và tên</Text>
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
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Nhập lại mật khẩu</Text>
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
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Địa chỉ</Text>
                        <Input inputContainerStyle={styles.chuyenTien} secureTextEntry={isEye ? true : false}
                            errorMessage={password ? '' : "Bắt buộc"}
                            onChangeText={(value) => setPassword(value)}
                            value={password}
                        ></Input>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Ngày sinh</Text>
                        <Input inputContainerStyle={styles.chuyenTien} secureTextEntry={isEye ? true : false}
                            errorMessage={password ? '' : "Bắt buộc"}
                            onChangeText={(value) => setPassword(value)}
                            value={password}
                        ></Input>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {
                            isLoading ? <View style={[styles.container, styles.horizontal]}>
                                <ActivityIndicator size="small" color="#0000ff" />
                            </View> : <Button title="Đăng kí" buttonStyle={{
                                backgroundColor: "#66cc9a",
                                borderRadius: 50,
                                width: 200,
                            }} onPress={() => navigation.navigate('OTP')}

                            ></Button>
                        }
                    </View>

                </View>

            </ScrollView>
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