import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { Header, Divider, Button } from "@rneui/base";
import React from 'react'

export default function ResultChuyenSoThe() {
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <View style={styles.chuyenTienWrapper}>
                {/* <Image source={route.params.money == 0 ? require('../assets/synchronization.png') : require('../assets/success.png')} />
                <Text>{route.params.money == 0 ? 'Thất bại' : "Thành công"}</Text> */}
                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Chuyển về ngân hàng</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Số thẻ</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Họ và tên</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", width: "100%", padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                        <Text>Số tiền</Text>
                        <Text></Text>
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
                        <Text></Text>
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
                <Button
                    title="Tiếp tục"
                    buttonStyle={{
                        backgroundColor: "#66cc9a",
                        borderRadius: 50,
                        width: 150,
                    }}
                    onPress={() => navigation.navigate("NapTien")}
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