import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Header, Divider } from "@rneui/base";
import ChuyenTienBank from '../screens/ChuyenTienBank';
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
                <Tab.Screen name="Chuyển theo số thẻ" component={ChuyenTienBank} initialParams={{bank: props.route.params.bank}} />
                <Tab.Screen name="Chuyển theo số tài khoản" component={ChuyenTienSoThe} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }} />
            </Tab.Navigator>
        </View>
    );
}
export default TabsChuyenTien