import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider, Button } from "@rneui/base";
import { useSelector } from "react-redux";
import TransactionService from '../services/transaction.service'
export default function ConfirmNap({ navigation, route }) {
    const { user } = useSelector((state) => state.auth)

    const handleSubmit = () => {
        TransactionService.transfer(route.params.bank.phone_number, route.params.money, route.params.bank.id, route.params.bank.bank_account_number, "Nap tien", user.token)
            .then((data) => {
                if (data.status == 0) navigation.navigate("ResultNap", { bank: route.params.bank.bank.name, money: route.params.money })
                else navigation.navigate("ResultNap", { bank: route.params.bank.bank.name, money: 0 })
            })
            .catch((err) => {
                console.log(err)
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Thanh toán an toàn</Text>
                    </View>

                }
            />

            <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text>Nguồn tiền</Text>
                    <Text>{route.params.bank.bank.name}</Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text>Số tiền</Text>
                    <Text>{route.params.money}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text>Phí giao dịch</Text>
                    <Text>Miễn phí</Text>
                </View>
            </View>

            <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <Text>Tổng số tiền</Text>
                    <Text>{route.params.money}</Text>
                </View>
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
                    onPress={handleSubmit}
                />
            </View>
        </SafeAreaView>
    )
}
