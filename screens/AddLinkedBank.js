import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ToastAndroid, TouchableOpacity, Image } from "react-native";
import { Header, Button } from "@rneui/base";
import { Input } from "@rneui/themed";
import { useState } from "react";

import { useSelector } from "react-redux";
import bankService from "../services/bank.service";
const AddLinkedBank = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth)
    const [stk, setSTK] = useState('')
    const [owner, setOwner] = useState('')
    const findTKOwner = () => {
        bankService.searchBankAccount(route.params.bank.id, stk, user.token)
            .then((data) => {
                if (data) setOwner(data.name)
                else setOwner('')
            })
            .catch()
    }
    const addBank = () => {
        bankService.addLinkedBank(user.userInfo.phone_number, stk, route.params.bank.id, user.token)
            .then((data) => {
                console.log(data)
                ToastAndroid.show('Đã thêm liên kết thành công !', ToastAndroid.SHORT);
                navigation.goBack()
            })
            .catch((err) => {
                ToastAndroid.show('Thêm liên kết không thành công !', ToastAndroid.SHORT);
            })
    }
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
                placement="left"
                leftComponent={
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require('../assets/back.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: "black"
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: "white", marginLeft: 10 }}>Thêm liên kết</Text>
                    </View>

                }
            />
            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 90, paddingLeft: 5 }
                }>Số tài khoản</Text>
                <Input onChangeText={(e) => setSTK(e)} onBlur={findTKOwner} keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='0123456789' errorMessage={stk.length == 16 && owner != '' ? '' : "Số tài khoản không hợp lệ hoặc không tồn tại"} errorStyle={{ top: 10 }} />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 60, paddingLeft: 5 }
                }>Chủ thẻ</Text>
                <Input inputContainerStyle={styles.chuyenTien} value={owner} disabled />
            </View>
            <View style={{
                position: "absolute",
                bottom: 50
            }}>
                <Button
                    title="Thêm liên kết"
                    buttonStyle={{
                        backgroundColor: "#66cc9a",
                        borderRadius: 50,
                        width: 200,
                    }}
                    disabled={owner == ''
                        ? true : false}
                    onPress={addBank}
                />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    chuyenTien: {
        width: "100%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#66cc9a",
        borderRadius: 5,
        top: 10,
    }
});
export default AddLinkedBank