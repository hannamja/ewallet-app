import React from "react";
import QRCode from "react-native-qrcode-svg";
import { View, Text, StyleSheet, Image, SafeAreaView, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header, Button, Divider } from "@rneui/base";
import { Input, Dialog } from "@rneui/themed";
import { useState } from "react";
const QRCodeThanhToan = ({ navigation, route }) => {
    const [isActive, setActive] = useState(false)

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
                        <Text style={{ color: "white", marginLeft: 10 }}>Nhận tiền bằng QR Code</Text>
                    </View>

                }
            />


            <View style={{ width: "100%", padding: 10 }}>
                <Text style={{ textAlign: "center", color: "black" }}>Sử dụng E-Wallet quét QR code để chuyển tiền mà không cần kết bạn </Text>
            </View>

            <View style={{ width: "100%", padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                </View>

            </View>

            <View style={{ flexDirection: "column", alignItems: "center", width: "100%", padding: 10 }}>
                <View style={{ marginTop: 10 }}>
                    <QRCode value="123">
                    </QRCode>
                </View>
                <Button
                    title="Nhập số tiền"
                    buttonStyle={{
                        backgroundColor: "#66cc9a",
                        width: 150,
                        marginTop: 10
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
                    <Text style={{ textAlign: "center", color: "black" }}>Nhập số tiền</Text>
                </View>

                <View>
                    <Input inputContainerStyle={styles.chuyenTien} keyboardType="numeric" placeholder="Số tiền" autoFocus>

                    </Input>
                </View>

                <View>
                    <Input inputContainerStyle={styles.chuyenTien} placeholder="Lời nhắn">

                    </Input>
                </View>

                <Dialog.Actions>
                    <Dialog.Button title="Xong">
                    </Dialog.Button>
                    <Dialog.Button title="Hủy">
                    </Dialog.Button>
                </Dialog.Actions>
            </Dialog>

        </SafeAreaView >

    )
}


const styles = StyleSheet.create({
    chuyenTienWrapper: {

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
export default QRCodeThanhToan
