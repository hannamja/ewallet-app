import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Header, Divider } from "@rneui/base";
import ChuyenTienSoTK from '../screens/ChuyenTienSoTK';
import ChuyenTienSoThe from '../screens/ChuyenTienSoThe';
const Tab = createMaterialTopTabNavigator();

function TabsChuyenTien(props) {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Header
                backgroundColor="#66cc9a"
                placement="left"
                leftComponent={
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
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
                        <Text style={{ color: "white", marginLeft: 10 }}>Chuyển Tiền</Text>
                    </View>

                }
            />
            <Tab.Navigator>
                <Tab.Screen name="Chuyển theo số thẻ" component={ChuyenTienSoThe} />
                <Tab.Screen name="Chuyển theo số tài khoản" component={ChuyenTienSoTK} />
            </Tab.Navigator>
        </View>
    );
}
export default TabsChuyenTien