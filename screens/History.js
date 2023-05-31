import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";

import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react";
const image = require('../assets/banner.jpg');
import HistoryService from "../services/history.service";
import { useSelector } from "react-redux";
const History = ({ navigation }) => {
    const { user } = useSelector((state) => state.auth)

    const [history, setHistory] = useState([])
    useEffect(() => {
        HistoryService.allPayments(user.userInfo.phone_number, user.token)
            .then((data) => {
                setHistory(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
            />
            <FlatList style={{ width: "100%" }}
                data={history}
                renderItem={({ item, index }) => <TouchableOpacity onPress={() => navigation.navigate('HistoryDetail', { detail: item })}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, padding: 10 }}>
                        <View>

                            {(() => {
                                if (item.type == 1) return <Text style={{ fontWeight: "bold" }}>Chuyển tiền đến ví</Text>
                                if (item.type == 2) return <Text style={{ fontWeight: "bold" }}>Chuyển tiền đến tài khoản</Text>
                                if (item.type == 3) return <Text style={{ fontWeight: "bold" }}>Nạp tiền</Text>
                                if (item.type == 4) return <Text style={{ fontWeight: "bold" }}>Nhận tiền</Text>
                            })()}

                            <Text>{item.create}</Text>
                        </View>
                        <View>
                            {(() => {
                                if (item.type == 1) return <Text style={{ color: 'orange' }}>-{item.money}</Text>
                                if (item.type == 2) return <Text style={{ color: 'orange' }}>-{item.money}</Text>
                                if (item.type == 3) return <Text style={{ color: 'lime' }}>+{item.money}</Text>
                                if (item.type == 4) return <Text style={{ color: 'lime' }}>+{item.money}</Text>
                            })()}
                            <Text style={{ color: 'lime' }}>{item.status}</Text>
                        </View>
                    </View>
                </TouchableOpacity>}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
});
export default History