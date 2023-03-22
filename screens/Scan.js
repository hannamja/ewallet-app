import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, PermissionsAndroid, Linking, AppState } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input, Dialog } from "@rneui/themed";
import { BarCodeScanner } from 'expo-barcode-scanner';



const Scan = ({ navigation, route }) => {
    const appState = useRef(AppState.currentState);
    const [isActive, setActive] = useState(false)
    const [checkPermiss, setPermiss] = useState(false)
    const [scanned, setScanned] = useState(false);

    const requestCameraPermission = async () => {
        // Open the custom settings if the app has one
        await Linking.openSettings()
    }
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setActive(true)
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    useEffect(() => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { setPermiss(response) })
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                console.log('App has come to the foreground!')
                PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { setPermiss(response) })
            }

            appState.current = nextAppState;
        });

        return () => subscription.remove();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
            {checkPermiss ?
                <View style={styles.chuyenTien}>

                    <View style={{
                        width: "100%", height: "100%"
                    }}>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </View>

                    <View style={styles.buttonMoney}>
                        <TouchableOpacity onPress={() => setScanned(false)}>
                            <Text style={{ textAlign: "center" }}>Scan again</Text>
                        </TouchableOpacity>
                    </View>

                </View> :
                <View style={styles.quyenCamera}>
                    <Text style={{ textAlign: "center" }}>Opps!!! Bạn chưa cấp quyền camera cho ứng dụng</Text>
                    <View style={styles.buttonMoney}>
                        <TouchableOpacity onPress={requestCameraPermission}>
                            <Text style={{ textAlign: "center" }}>Cấp quyền camera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }


            <Dialog style={{
                borderRadius: 5,
            }}
                isVisible={isActive}
                onBackdropPress={() => setActive(false)}
            >
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ textAlign: "center", color: "black" }}>Nhập số tiền</Text>
                </View>

                <View style={styles.dialogCT}>
                    <Input keyboardType="numeric" placeholder="Số tiền" autoFocus>

                    </Input>
                </View>

                <View style={styles.dialogCT}>
                <Input placeholder="Lời nhắn">

                </Input>
            </View>

            <Dialog.Actions>
                <Dialog.Button title="Xong">
                </Dialog.Button>
                <Dialog.Button title="Hủy" onPress={() => setActive(!isActive)}>
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
        height: "100%",
        flexDirection: "column"
    },
    dialogCT: {
        width: "100%",
        flexDirection: "column"
    },
    buttonMoney: {
        width: "80%",
        height: "5%",
        borderRadius: 10,
        position: "absolute",
        bottom: "10%",
        left: "10%",
        justifyContent: "center",
        backgroundColor: "lime",
        borderRadius: 5
    },
    quyenCamera: {
        width: "50%",
        height: "100%",
        borderRadius: 10,
        position: "absolute",
        bottom: "10%",
        left: "25%",
        justifyContent: "center"
    }
})
export default Scan
