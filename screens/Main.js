import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";
const image = require('../assets/banner.jpg');
const Main = ({ navigation }) => {
    const [isEye, setEye] = useState(false)
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white" }}>
            <Header
                backgroundColor="#66cc9a"
                placement="left"
                leftComponent={<View><Text>Hello, <Text style={styles.userName}>Hello</Text></Text></View>}
                rightComponent={<Image source={require('../assets/notifi-icon.png')} style={styles.notifiIcon}></Image>}
            />
            <View style={styles.bannerContainer}>
                <Image source={image} style={styles.banner}></Image>
            </View>
            <View style={styles.mainFuncWrapper}>
                <View style={styles.mainFunc}>
                    <View style={styles.moneyArea}>
                        {isEye ?
                            <TouchableOpacity onPress={() => setEye(!isEye)} style={styles.moneyArea}>
                                <Image source={require('../assets/hide.png')} style={styles.showIcon}></Image>
                                <Text>******</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity onPress={() => setEye(!isEye)} style={styles.moneyArea}>
                                <Image source={require('../assets/show.png')} style={styles.showIcon}></Image>
                                <Text>100.000đ</Text>
                            </TouchableOpacity>

                        }
                    </View>
                    <Divider width={1} color="#fff" />
                    <View style={styles.funcArea}>
                        <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }} onPress={() => navigation.navigate("ChuyenTien")}>
                            <Image source={require('../assets/chuyentien.png')} style={styles.chuyentienIcon}></Image>
                            <Text>Chuyển Tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }} onPress={() => navigation.navigate("QRCodeThanhToan")}>
                            <Image source={require('../assets/qr.png')} style={styles.chuyentienIcon}></Image>
                            <Text>QR Thanh Toán</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }} onPress={() => navigation.navigate("NapRut")}>
                            <Image source={require('../assets/naprut.png')} style={styles.naprutIcon}></Image>
                            <Text>Nạp/Rút</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.functions}>
                <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }}>
                    <Image source={require('../assets/phoneBill.png')} style={styles.naprutIcon}></Image>
                    <Text>Nạp Tiền Điện Thoại</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }}>
                    <Image source={require('../assets/data.png')} style={styles.naprutIcon}></Image>
                    <Text>3G/4G</Text>
                </TouchableOpacity>
            </View>
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
    userName: {
        color: "black",
        fontWeight: "900"
    },
    notifiIcon: {
        width: 20,
        height: 20
    },
    chuyentienIcon: {
        width: 20,
        height: 20
    },
    naprutIcon: {
        width: 20,
        height: 20
    },
    showIcon: {
        width: 20,
        height: 20
    },
    mainFuncWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    mainFunc: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
        height: 100,
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
    moneyArea: {
        flexDirection: "row"
    },
    funcArea: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    functions: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "90%",
        height: 100,
        padding: 10,
    }
});
export default Main