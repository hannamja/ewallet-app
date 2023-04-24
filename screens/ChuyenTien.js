import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";

const ChuyenTien = ({ navigation }) => {
    return (

        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
                placement="left"
                leftComponent={
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Chuyển Tiền</Text>
                    </View>

                }
            />
            < View style={
                styles.chuyenTien
            } >
                <TouchableOpacity style={
                    { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }
                }
                    onPress={() => navigation.navigate("ChuyenTienSoThe")}>
                    <View style={
                        { width: 250, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }
                    }>
                        <Image source={require('../assets/payroll-salary-icon.png')} style={{
                            height: 30,
                            width: 30,
                        }}></Image>
                        <View style={{marginLeft: 10}}>
                            <Text style={{ fontWeight: "bold" }}>Đến Bạn Bè</Text>
                            <Text>Chuyển tiền đến SĐT bạn bè</Text>
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
                    onPress={() => navigation.navigate("ChooseBank")}
                >
                    <View style={
                        { width: 250, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }
                    }>
                        <Image source={require('../assets/bank-finance-loan-icon.png')} style={{
                            height: 30,
                            width: 30,
                        }}></Image>
                        <View style={{marginLeft: 10}}>
                            <Text style={{ fontWeight: "bold" }}>Đến Ngân Hàng</Text>
                            <Text>Chuyển tiền đến số tài khoản/số thẻ</Text>
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
        top: 10,
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
export default ChuyenTien