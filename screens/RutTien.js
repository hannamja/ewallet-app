import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header, Button } from "@rneui/base";
import { Input } from "@rneui/themed";

import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react";

import BankService from '../services/bank.service'
import bankImgSource from '../assets/bankImg'
import { useSelector } from "react-redux";

const RutTien = ({ navigation }) => {
    const { user } = useSelector((state) => state.auth)
    const [money, setMoney] = useState(0)
    const [activeBank, setActiveBank] = useState(0)

    const [bank, setBank] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            setMoney(0)
        });
        BankService.allLinkedBank(user.userInfo.phone_number, user.token)
            .then((data) => setBank(data))
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Rút tiền</Text>
                    </View>

                }
            />


            <View style={styles.chuyenTienWrapper}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../assets/bitcoin-cash-bch-icon.png')} style={{
                            width: 30,
                            height: 30
                        }}></Image>
                        <Text>Số dư ví</Text>
                    </View>
                    <Text>{user.userInfo.balance}</Text>
                </View>

                <Input inputContainerStyle={styles.chuyenTien} placeholder="Nhập số tiền (đ)" value={money === 0 ? "" : "" + money + ""}
                    onChangeText={value => setMoney(value)}
                ></Input>
            </View>


            <View style={{ width: "90%" }}><Text style={{ color: "#66cc9a", fontSize: 15 }}>Chọn nhanh số tiền</Text></View>


            <View style={{ width: "90%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", }}>
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
            </View>

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

            <View>
                <Button
                    title="Tiếp tục"
                    buttonStyle={{
                        backgroundColor: "#66cc9a",
                        borderRadius: 50,
                        width: 200,
                    }}
                    onPress={() => navigation.navigate("ConfirmRut", { bank: bank[activeBank], money: money })}
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
export default RutTien