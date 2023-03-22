import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";
import { useState } from "react";

const NapRut = ({ navigation }) => {
    const [eye, setEye] = useState(false)
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Nạp Tiền</Text>
                    </View>

                }
            />

            <View style={{
                width: "100%",
                height: 200,
                backgroundColor: "white",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ color: "black", fontSize: 20 }}>Số dư ví</Text>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ fontSize: 15 }}>{eye ? '******' : '100.000đ'}</Text>
                    <TouchableOpacity onPress={() => eye ? setEye(false) : setEye(true)}>
                        <Image source={eye ? require('../assets/disable_eye.png') : require('../assets/eye.png')} style={{
                            width: 20,
                            height: 20
                        }}></Image>
                    </TouchableOpacity>

                </View>
            </View>

            < View style={
                styles.chuyenTien
            } >
                <TouchableOpacity style={
                    { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }
                }
                    onPress={() => navigation.navigate("NapTien")}>
                    <View style={
                        { width: 250, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }
                    }>
                        <Image source={require('../assets/add-money-wallet-icon.png')} style={{
                            height: 30,
                            width: 30,
                        }}></Image>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>Nạp Tiền</Text>
                            <Text>Nạp tiền từ ngân hàng vào ví E-Wallet</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/curved-arrow-right-green-icon.png')}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: "black"
                        }}></Image>
                </TouchableOpacity>

                <Divider width={1}></Divider>

                <TouchableOpacity style={
                    { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }
                }
                    onPress={() => navigation.navigate("RutTien")}
                >
                    <View style={
                        { width: 250, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }
                    }>
                        <Image source={require('../assets/naprut.png')} style={{
                            height: 30,
                            width: 30,
                        }}></Image>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: "bold" }}>Rút Tiền</Text>
                            <Text>Rút tiền từ ví E-Wallet về ngân hàng</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/curved-arrow-right-green-icon.png')}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: "black"
                        }}></Image>
                </TouchableOpacity>
            </View >
        </SafeAreaView >

    )
}
const styles = StyleSheet.create({
    chuyenTien: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
        backgroundColor: "#66cc9a",
        borderRadius: 5,
        bottom: 50,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})
export default NapRut