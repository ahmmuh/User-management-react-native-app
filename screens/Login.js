import Button from "./Button"
import { Link } from '@react-navigation/native';

const { useState } = require("react")
const { View, Pressable, Text, TextInput, StyleSheet, Image } = require("react-native")


export default Login = ({ navigation }) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")


    return (
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../assets/logo.webp')} style={styles.image} />

            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 30,
                    fontStyle: 'italic',
                    color: '#32a852',
                    paddingBottom: 100
                }}>Please login </Text>
            </View>

            <View style={{
                flex: 1,

            }}>

                <View style={styles.logoView}>
                    <View style={styles.formView}>
                        <TextInput autoCapitalize="none" autoComplete="off" autoCorrect={false} style={styles.inputText} placeholder="User name" onChangeText={setUserName} />
                        <TextInput autoCapitalize="none" secureTextEntry autoComplete="off" autoCorrect={false} style={styles.inputText} placeholder="Password" onChangeText={setPassword} />
                        <Button title="Login" onPress={() => navigation.navigate('Home')} />
                    </View>

                    <Link to={{ screen: 'Register' }}>
                        Not yet?
                    </Link>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    label: {
        color: 'red',
        fontSize: 26,
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formView: {
        width: '80%'
    },
    inputText: {
        paddingHorizontal: 40,
        height: 40,
        backgroundColor: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#2dc',
        borderRadius: 25,
        marginBottom: 4

    },
    image: {
        width: 150,
        resizeMode: 'contain'

    }

})