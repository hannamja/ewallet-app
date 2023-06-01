import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Header } from "@rneui/base";
import { Input } from "@rneui/themed";
import { ToastAndroid } from 'react-native';
import DatePicker from 'react-native-date-picker';
export default function Signup({ navigation }) {
    const [isEye, setEye] = useState(true)
    const [username, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [add, setAdd] = useState("")
    const [dob, setDob] = useState(new Date())
    const [picker, setPicker] = useState(false)
    const handlClick = () => {
        if (phone.length != 10) return
        if (password !== passwordConfirm) {
            ToastAndroid.show('Mật khẩu không khớp', ToastAndroid.TOP)
            return
        }
        // if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9]{8,})(?=.*[!@#$%^&*`]{1,})$/)) {
        //     ToastAndroid.show('Mật khẩu phải từ 8 kí tự và có 1 kí tự hoa và 1 kí tự thường và 1 kí tự đặc biệt', ToastAndroid.LONG)
        //     return
        // }
        navigation.navigate('OTP', { username: username, phone: phone, password: password, add: add, dob: dob.getUTCFullYear().toString() + '/' + dob.getUTCMonth().toString() + '/' + dob.getUTCDate().toString() })
    }
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
                            onChangeText={(value) => { setUserName(value) }}
                        ></Input>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Mật khẩu</Text>
                        <Input inputContainerStyle={styles.chuyenTien} secureTextEntry={isEye ? true : false}
                            errorMessage={password ? '' : "Bắt buộc"}
                            onChangeText={(value) => { setPassword(value) }}

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
                            onChangeText={(value) => { setPasswordConfirm(value) }}

                            value={passwordConfirm}
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
                        <Input inputContainerStyle={styles.chuyenTien}
                            errorMessage={password ? '' : "Bắt buộc"}
                            onChangeText={(value) => setAdd(value)}
                            value={add}
                        ></Input>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Ngày sinh</Text>
                        {
                            picker && (<DatePicker
                                modal
                                mode='date'
                                open={picker}
                                date={dob}
                                onConfirm={(date) => {
                                    setDob(date)
                                    setPicker(!picker)
                                }}
                                onCancel={() => {
                                    setPicker(!picker)
                                }}
                            />)
                        }
                        {
                            !picker && (<Pressable>

                                <Input inputContainerStyle={styles.chuyenTien}
                                    errorMessage={password ? '' : "Bắt buộc"}
                                    onChangeText={(value) => setDob(value)}
                                    value={dob.getUTCFullYear().toString() + '/' + dob.getUTCMonth().toString() + '/' + dob.getUTCDate().toString()}
                                    onPressIn={() => setPicker(!picker)}
                                ></Input>
                            </Pressable>)
                        }


                    </View>

                    <View style={{ alignItems: 'center' }}>

                        <Button title="Đăng kí" buttonStyle={{
                            backgroundColor: "#66cc9a",
                            borderRadius: 50,
                            width: 200,
                        }} onPress={handlClick}

                        ></Button>

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