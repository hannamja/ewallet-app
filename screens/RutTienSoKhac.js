import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header, Button } from "@rneui/base";
import { Input } from "@rneui/themed";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
const RutTienSoKhac = ({ navigation, route }) => {
    const [money, setMoney] = useState(0)
    const [activeBank, setActiveBank] = useState(0)
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Số tiền khác</Text>
                    </View>

                }
            />


            <View style={{ width: "100%", padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Rút tiền về:</Text>
                    <TouchableOpacity style={{
                        flexDirection: "row", borderWidth: 1, borderColor: 'green', padding: 10, borderRadius: 10, marginBottom: 10
                    }}>
                        <Image source={route.params.bank.logo} style={
                            {
                                width: 50,
                                height: 50,
                            }
                        }></Image>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{route.params.bank.name}</Text>
                            <Text>{route.params.bank.tk}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <Input inputContainerStyle={styles.chuyenTien} placeholder="Nhập số tiền (đ)" value={money === 0 ? "" : "" + money + ""}
                    onChangeText={value => setMoney(value)}
                ></Input>
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
export default RutTienSoKhac