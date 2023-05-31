import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ToastAndroid, TouchableOpacity, Image } from "react-native";
import { Header, Button } from "@rneui/base";
import { Input, Dialog } from "@rneui/themed";
import { useState } from "react";
import { useSelector } from "react-redux";
import bankService from "../services/bank.service";
import bankImgSource from '../assets/bankImg'

const LinkedBankDetail = ({ navigation, route }) => {
    const { user } = useSelector((state) => state.auth)
    const [isActive, setActive] = useState(false)
    const del = () => {
        bankService.delLinkedBank(route.params.bank.id, user.token)
            .then((data) => {
                setActive(!isActive)
                navigation.goBack()
                ToastAndroid.show('Hủy liên kết thành công !', ToastAndroid.SHORT)
            })
            .catch((err) => {
                setActive(!isActive)
                ToastAndroid.show('Hủy liên kết thất bại !', ToastAndroid.SHORT)
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Nạp tiền</Text>
                    </View>

                }
            />

            <View style={styles.chuyenTienWrapper}>
                <View style={{ width: "100%", padding: 10, flexDirection: "row", alignItems: "center" }}>
                    <Image source={bankImgSource['bank' + route.params.bank.bank.id]} style={{
                        height: 50,
                        width: 50,

                    }} />
                    <Text>TK {route.params.bank.bank.name}</Text>
                </View>
                <Text style={{ padding: 10 }}>{route.params.bank.bank_account_number}</Text>
            </View>


            <View style={{
                position: "absolute",
                bottom: 20
            }}>
                <Button
                    title="Hủy liên kết"
                    buttonStyle={{
                        backgroundColor: "red",
                        borderRadius: 50,
                        width: 200,
                    }}
                    onPress={() => setActive(true)}
                />
            </View>

            <Dialog style={{
                borderRadius: 5
            }}
                isVisible={isActive}
                onBackdropPress={() => setActive(false)}
            >
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ textAlign: "center", color: "black" }}>Hủy liên kết ?</Text>
                </View>


                <Dialog.Actions>
                    <Dialog.Button title="Xong" onPress={del}>
                    </Dialog.Button>
                    <Dialog.Button title="Hủy" onPress={() => setActive(!isActive)}>
                    </Dialog.Button>
                </Dialog.Actions>
            </Dialog>
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
export default LinkedBankDetail