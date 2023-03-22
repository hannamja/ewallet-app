import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Header, Divider } from "@rneui/base";
const image = require('../assets/banner.jpg');
const History = () => {
    return (

        <View style={styles.txt}>
            <Text>History</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    txt: {
        flex: 1,
        fontSize: 300,
        borderWidth: 20,
        borderColor: "lime"
    }
});
export default History