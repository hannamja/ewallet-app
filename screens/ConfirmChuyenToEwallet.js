import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider, Button } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import TransactionService from '../services/transaction.service'
import { deposit, transfer } from '../slices/auth'
export default function ConfirmChuyenToEwallet({ navigation, route }) {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        TransactionService.transferToEwallet(user.userInfo.phone_number, route.params.sdt, route.params.money, "Chuyen tien ewallet ban be", user.token)
            .then((data) => {
                if (data.status == 'success') {
                    dispatch(transfer(route.params.money))
                    navigation.navigate("ResultChuyenToEwallet", { money: route.params.money, sdt: route.params.sdt })
                }
                else navigation.navigate("ResultChuyenToEwallet", { money: 0, sdt: route.params.sdt })
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
                    <Text>SĐT nhận</Text>
                    <Text>{route.params.sdt}</Text>
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

