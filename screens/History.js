import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Header, Divider } from "@rneui/base";

import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react";
const image = require('../assets/banner.jpg');
const History = () => {
    const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <FlatList style={{ marginTop: 40 }}
                data={fakeData}
                renderItem={({ item, index }) => <TouchableOpacity>
                    <View style={{}}>
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{item}</Text>
                    </View>
                </TouchableOpacity>}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
});
export default History