import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Input } from '@rneui/themed';
import { Button } from '@rneui/themed';
const ChuyenTienSoTK = (props) => {
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <View style={{ width: "100%", padding: 10 }}><Text style={{ fontWeight: "bold", color: "#66cc9a" }}>Điền thông tin</Text></View>
            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 90, paddingLeft: 5 }
                }>Số tài khoản</Text>
                <Input keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='0123456789' errorMessage="Số tài khoản không hợp lệ" errorStyle={{ top: 10 }} />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 60, paddingLeft: 5 }
                }>Chủ thẻ</Text>
                <Input inputContainerStyle={styles.chuyenTien} disabled />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 150, paddingLeft: 5 }
                }>Số tiền muốn chuyển</Text>
                <Input keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='...' errorMessage="Số tiền chuyển tối thiểu là 10.000đ" errorStyle={{ top: 10 }} />
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
    chuyenTien: {
        width: "100%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#66cc9a",
        borderRadius: 5,
        top: 10,
    }
})
export default ChuyenTienSoTK