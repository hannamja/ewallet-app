import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";

const ChooseBank = ({ navigation }) => {
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

            <View style={{ width: "100%", padding: 10 }}><Text style={{ fontWeight: "bold", color: "#66cc9a" }}>Ngân hàng hỗ trợ chuyển tiền</Text></View>
            <View style={
                { width: "100%", flexDirection: "row", justifyContent: "flex-start" }
            }>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("ChuyenTienStep1", { bankName: "agribank" })}>
                    <Image style={{
                        height: 60,
                        width: 60,
                    }} source={require('../assets/logo-agribank.jpg')}></Image>
                    <Text style={{ color: "black" }}>Agribank</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("ChuyenTienStep1", { bankName: "vietinbank" })}>
                    <Image style={{
                        height: 60,
                        width: 60,
                    }} source={require('../assets/logo-vietinbank.jpg')}></Image>
                    <Text style={{ color: "black" }}>Vietinbank</Text>
                </TouchableOpacity>
            </View>
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
export default ChooseBank