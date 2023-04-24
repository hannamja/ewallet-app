import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";
import { Input } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { useState } from "react";
import { useSelector } from "react-redux";

const ChuyenTienSoThe = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth)
    const [sdt, setSDT] = useState('')
    const [money, setMoney] = useState(0)
    
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Chuyển Tiền Đến Ewallet Bạn Bè</Text>
                    </View>

                }
            />
            <View style={{ width: "100%", padding: 10 }}><Text style={{ fontWeight: "bold", color: "#66cc9a" }}>Điền thông tin</Text></View>
            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 100, paddingLeft: 5 }
                }>Số điện thoại</Text>
                <Input onChangeText={(e) => setSDT(e)} keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='0123456789' errorMessage={sdt.length == 10 || sdt.length == 11 ? '' : "SĐT không hợp lệ"} errorStyle={{ top: 10 }} />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 150, paddingLeft: 5 }
                }>Số tiền muốn chuyển</Text>
                <Input onChangeText={(e) => e == '' ? setMoney(0) : setMoney(parseInt(e))} keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='...' errorMessage={money > 10000 ? '' : "Số tiền chuyển tối thiểu là 10.000đ"} errorStyle={{ top: 10 }} />
            </View>

            <View style={{
                position: "absolute",
                bottom: 50
            }}>
                <Button
                    title="Tiếp tục"
                    buttonStyle={{
                        backgroundColor: "#66cc9a",
                        borderRadius: 50,
                        width: 200,
                    }}
                    onPress={() => navigation.navigate("ConfirmChuyenToEwallet", { money: money, sdt: sdt })}
                />
            </View>
        </SafeAreaView >

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
})
export default ChuyenTienSoThe