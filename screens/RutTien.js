import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header, Button } from "@rneui/base";
import { Input } from "@rneui/themed";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
const RutTien = ({ navigation }) => {
    const [money, setMoney] = useState(0)
    const [activeBank, setActiveBank] = useState(0)
    const bank = [
        { name: "Agribank", logo: require('../assets/logo-agribank.jpg'), tk: "****123" },
        { name: "Vietinbank", logo: require('../assets/logo-vietinbank.jpg'), tk: "****123" },
    ]
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Rút tiền</Text>
                    </View>

                }
            />


            <View style={{ width: "100%", padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Ngân hàng liên kết</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#86d6e4" }}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <FlatList style={{ maxHeight: 200, top: 10 }}
                    data={bank}
                    renderItem={({ item, index }) => <TouchableOpacity style={index === activeBank ? {
                        flexDirection: "row", borderWidth: 1, borderColor: 'green', padding: 10, borderRadius: 10, marginBottom: 10
                    } : {
                        flexDirection: "row", borderWidth: 1, borderColor: 'grey', padding: 10, borderRadius: 10, marginBottom: 10, width: "80%"
                    }} onPress={() => { setActiveBank(index) }}>
                        <Image source={item.logo} style={
                            {
                                width: 50,
                                height: 50,
                            }
                        }></Image>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
                            <Text>{item.tk}</Text>
                        </View>
                    </TouchableOpacity>}
                />

                <TouchableOpacity style={{
                    flexDirection: "row", justifyContent: "flex-start", marginTop: 20
                }}>
                    <Image source={require('../assets/mathematics-sign-plus-outline-icon.png')} style={
                        {
                            width: 20,
                            height: 20,
                            tintColor: "#86d6e4"
                        }
                    }></Image>
                    <Text style={{ color: "#86d6e4", fontSize: 15 }}>Thêm liên kết</Text>
                </TouchableOpacity>
            </View>


            <View style={{ width: "90%" }}><Text style={{ color: "#66cc9a", fontSize: 15 }}>Chọn nhanh số tiền</Text></View>


            <View style={{ width: "90%", flexDirection: "row", top: 10, flexWrap: "wrap", justifyContent: "space-between", }}>
                <TouchableOpacity
                    style={styles.buttonMoney}
                    onPress={() => { setMoney(50000) }}>
                    <Text>50.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(100000) }}>
                    <Text>100.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(200000) }}>
                    <Text>200.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(500000) }}>
                    <Text>500.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(500000) }}>
                    <Text>500.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(1000000) }}>
                    <Text>1.000.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { setMoney(2000000) }}>
                    <Text>2.000.000đ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMoney} onPress={() => { navigation.navigate("RutTienSoKhac", { bank: bank[activeBank] }) }}>
                    <Text>Số khác</Text>
                </TouchableOpacity>
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
                />
            </View>
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
export default RutTien