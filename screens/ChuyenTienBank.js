import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Input } from '@rneui/themed';
import { Button } from '@rneui/themed';
import BankService from "../services/bank.service";
import { useState } from "react";
import { useSelector } from "react-redux";

const ChuyenTienBank = (props) => {
    const [stk, setSTK] = useState('')
    const [owner, setOwner] = useState('')
    const { user } = useSelector((state) => state.auth)
    const [money, setMoney] = useState(0)

    const findTKOwner = () => {
        BankService.searchBankAccount(props.route.params.bank.id, stk, user.token)
            .then((data) => {
                setOwner(data.name)
            })
            .catch()
    }
    return (
        <SafeAreaView style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}>
            <View style={{ width: "100%", padding: 10 }}><Text style={{ fontWeight: "bold", color: "#66cc9a" }}>Điền thông tin</Text></View>
            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 90, paddingLeft: 5 }
                }>Số tài khoản</Text>
                <Input onChangeText={(e) => setSTK(e)} onBlur={findTKOwner} keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='0123456789' errorMessage={stk.length == 16 ? '' : "Số tài khoản không hợp lệ"} errorStyle={{ top: 10 }} />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 60, paddingLeft: 5 }
                }>Chủ thẻ</Text>
                <Input inputContainerStyle={styles.chuyenTien} value={owner} disabled />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={
                    { position: "relative", top: 18, left: 20, zIndex: 999, fontWeight: "bold", backgroundColor: "white", width: 150, paddingLeft: 5 }
                }>Số tiền muốn chuyển</Text>
                <Input onChangeText={(e) => e == '' ? setMoney(0) : setMoney(parseInt(e))} keyboardType="numeric" inputContainerStyle={styles.chuyenTien} placeholder='...' errorMessage={money > 10000 ? '' : "Số tiền chuyển tối thiểu là 10.000đ"} errorStyle={{ top: 10 }} />
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
                    disabled={owner == '' || money < 10000
                        ? true : false}
                    onPress={() => props.navigation.navigate("ConfirmChuyenSoThe", { bank: props.route.params.bank, money: money, account: stk, owner: owner })}
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
export default ChuyenTienBank