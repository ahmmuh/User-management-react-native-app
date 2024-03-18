import { View, Text } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";




const Settings = () => {

    const [icons, setIcons] = useState([])
    const settingsList = [
        { id: 1, name: 'Account', icon: <Ionicons name="person-add-outline" size={24} color="black" /> },
        { id: 2, name: 'notifications', icon: <Ionicons name="notifications" size={24} color="black" /> },
        { id: 3, name: 'Apearance', icon: <Ionicons name="eye-outline" size={24} color="black" /> },
        { id: 4, name: 'Delete account', icon: <Ionicons name="trash-outline" size={24} color="red" /> },
        { id: 5, name: 'Help & Support', icon: <Ionicons name="help-circle-outline" size={24} color="black" /> },

    ]


    return (
        <View style={{

        }}>


            {
                settingsList.map((setting) => (


                    <View style={{
                        paddingHorizontal: 30,
                        flexDirection: 'row',
                        padding: 16

                    }} key={setting.id}>
                        <Text>{setting.icon}</Text>
                        <Text style={{
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            fontSize: 15
                        }} >{setting.name}</Text>

                    </View>

                ))
            }
        </View>
    )
}


export default Settings;