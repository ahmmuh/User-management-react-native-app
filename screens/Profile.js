import { View, Text, Image } from "react-native";


const Profile = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                resizeMode: 'contain'
            }} />
            <Text style={{
                padding: 40
            }}>Ahmed, Developer</Text>
        </View>
    )
}


export default Profile;