import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ToastAndroid, TouchableOpacity, Image } from "react-native";
import { Header, Button } from "@rneui/base";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import bankService from "../services/bank.service";
import bankImgSource from '../assets/bankImg'
const AllBank = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth)

    const [bank, setBank] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            
        });
        bankService.allLinkedBank(user.userInfo.phone_number, user.token)
            .then((data) => {
                setBank(data)
            })
            .catch((err) => {
                console.log(err)
            })
        return unsubscribe
    }, [navigation])
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Danh sách Bank đã được liên kết</Text>
                    </View>

                }
            />
            <View style={{ width: "100%", padding: 10 }}>
                <FlatList style={{ maxHeight: 200, top: 10 }}
                    data={bank}
                    renderItem={({ item, index }) => <TouchableOpacity
                        style={{
                            flexDirection: "row", borderWidth: 1, borderColor: 'green', padding: 10, borderRadius: 10, marginBottom: 10
                        }}
                        onPress={() => { navigation.navigate('LinkedBankDetail', { bank: item }) }}>
                        <Image source={bankImgSource['bank' + item.bank.id]} style={
                            {
                                width: 50,
                                height: 50,
                            }
                        }></Image>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{item.bank.name}</Text>
                            <Text>{item.bank_account_number}</Text>
                        </View>
                    </TouchableOpacity>}
                />

              
            </View>
          
        </SafeAreaView >

    )
}
const styles = StyleSheet.create({
    chuyenTienWrapper: {
        width: "90%",
        margin: 10,
        backgroundColor: "#66cc9a",
        borderRadius: 5,
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
export default AllBank