import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Login() {
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white" }}>
            <View style={styles.bannerContainer}>
                <Image source={image} style={styles.banner}></Image>
            </View>
            <View style={styles.mainFuncWrapper}>
                <View style={styles.mainFunc}>
                    <Input inputContainerStyle={styles.chuyenTien} placeholder="Nhập số tiền (đ)" 
                        
                    ></Input>
                    <Input inputContainerStyle={styles.chuyenTien} placeholder="Nhập số tiền (đ)"
                        
                    ></Input>
                </View>
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: "100%",
        height: 200
    },
    banner: {
        width: "100%",
        height: "100%"
    },
    userName: {
        color: "black",
        fontWeight: "900"
    },
    notifiIcon: {
        width: 20,
        height: 20
    },
    chuyentienIcon: {
        width: 20,
        height: 20
    },
    naprutIcon: {
        width: 20,
        height: 20
    },
    showIcon: {
        width: 20,
        height: 20
    },
    mainFuncWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    mainFunc: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
        height: 100,
        backgroundColor: "#66cc9a",
        borderRadius: 5,
        position: "relative",
        bottom: 30,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    moneyArea: {
        flexDirection: "row"
    },
    funcArea: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    functions: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "90%",
        height: 100,
        padding: 10,
    }
});