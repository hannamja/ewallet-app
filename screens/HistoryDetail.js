import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { Header, Divider, Button } from "@rneui/base";
import React from 'react'

export default function HistoryDetail({ navigation, route }) {

    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <View style={styles.chuyenTienWrapper}>
                <Image source={route.params.money == 0 ? require('../assets/synchronization.png') : require('../assets/success.png')} />
                <Text style={route.params.money == 0 ? { color: 'orange' } : { color: 'lime' }}>{route.params.detail.status}</Text>
                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    {
                        (() => {
                            if (route.params.detail.type == 2) return (
                                <>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                        <Text>Nguồn tiền</Text>
                                        <Text>{route.params.detail.phone_number_source}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                        <Text>Ngân hàng thụ hưởng</Text>
                                        <Text>{route.params.detail.bank_info.name}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                        <Text>Tài khoản thụ hưởng</Text>
                                        <Text>{route.params.detail.bank_account_des}</Text>
                                    </View>
                                </>
                            )
                            else if (route.params.detail.type == 1) {
                                return (
                                    <>
                                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                            <Text>Nguồn tiền</Text>
                                            <Text>{route.params.detail.phone_number_source}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                            <Text>Số điện thoại thụ hưởng</Text>
                                            <Text>{route.params.detail.phone_number_des}</Text>
                                        </View>
                                    </>
                                )
                            }
                            else return (
                                <>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                        <Text>Nguồn tiền</Text>
                                        <Text>{route.params.detail.bank_info.name}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                        <Text>Tài khoản</Text>
                                        <Text>{route.params.detail.bank_account_source}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                        <Text>Thụ hưởng</Text>
                                        <Text>{route.params.detail.phone_number_des}</Text>
                                    </View>
                                </>
                            )
                        })()
                    }
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Số tiền</Text>
                        <Text>{route.params.detail.money}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Ngày gửi</Text>
                        <Text>{route.params.detail.create}</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Ngày nhận</Text>
                        <Text>{route.params.detail.update}</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Note</Text>
                        <Text>{route.params.detail.note}</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Phí giao dịch</Text>
                        <Text>Miễn phí</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "column", width: "100%", padding: 10 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Tổng số tiền</Text>
                        <Text>{route.params.detail.money}</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 50,
                width: "100%",
                justifyContent: "space-around",
            }}>
                <Button
                    title="Đóng"
                    buttonStyle={{
                        backgroundColor: "grey",
                        borderRadius: 50,
                        width: 150,
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    chuyenTienWrapper: {
        top: 50,
        width: "90%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#66cc9a",
        borderRadius: 5,
        padding: 20,
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