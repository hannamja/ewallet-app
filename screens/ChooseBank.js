import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";
import BankService from "../services/bank.service";
import bankImgSource from '../assets/bankImg'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ChooseBank = ({ navigation }) => {

    const [bank, setBank] = useState([])
    const { user } = useSelector((state) => state.auth)
    useEffect(() => {
        BankService.getBanks(user.token)
            .then((data) => {
                setBank(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
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

                {
                    bank.map((item) => {
                        return <TouchableOpacity key={item.id} style={{ padding: 10 }} onPress={() => navigation.navigate("ChuyenTienStep1", { bank: item })}>
                            <Image style={{
                                height: 60,
                                width: 60,
                            }} source={bankImgSource['bank' + item.id]}></Image>
                            <Text style={{ color: "black" }}>{item.name}</Text>
                        </TouchableOpacity>
                    })
                }

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