import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider, Button } from "@rneui/base";
import { Input } from "@rneui/themed";
import { useState } from "react";
const NapRut = ({ navigation }) => {
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Nạp tiền</Text>
                    </View>

                }
            />

            <View style={{ width: "100%", height: 100 }}></View>

            <View style={styles.chuyenTienWrapper}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../assets/bitcoin-cash-bch-icon.png')} style={{
                            width: 30,
                            height: 30
                        }}></Image>
                        <Text>Số dư ví</Text>
                    </View>
                    <Text>100.000đ</Text>
                </View>

                <Input inputContainerStyle={styles.chuyenTien} placeholder="Nhập số tiền (đ)" value={money === 0 ? "" : "" + money + ""}
                    onChangeText={value => setMoney(value)}
                ></Input>
            </View>


            <View style={{ width: "90%" }}><Text style={{ color: "#66cc9a", fontSize: 15 }}>Chọn nhanh số tiền</Text></View>


            <View style={{ width: "90%", flexDirection: "row", top: 10, flexWrap: "wrap", justifyContent: "space-between", }}>
                <TouchableOpacity
                    style={styles.buttonMoney}
                    onPress={() => { setMoney(50000) }}>
                    <Text>50.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(100000) }}>
                    <Text>100.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(200000) }}>
                    <Text>200.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(500000) }}>
                    <Text>500.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(500000) }}>
                    <Text>500.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(1000000) }}>
                    <Text>1.000.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(2000000) }}>
                    <Text>2.000.000đ</Text>
                </TouchableOpacity>
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
                />
            </View>
        </SafeAreaView >

    )
}
const styles = StyleSheet.create({
    chuyenTienWrapper: {
        width: "90%",
        backgroundColor: "#66cc9a",
        borderRadius: 5,
        bottom: 50,
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
        width: "100%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#66cc9a",
        borderRadius: 5,
        top: 10,
    },
    buttonMoney: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "grey",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    }
})
export default NapRut