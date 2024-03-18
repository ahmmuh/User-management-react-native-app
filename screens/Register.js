import { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import Button from "./Button";



const Register = ({ navigation }) => {
    const [user, setUser] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })


    return (
        <KeyboardAvoidingView style={styles.parentContainer}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../assets/logo.webp')} style={styles.image} />

            </View>
            <View style={styles.container}>

                <View style={styles.formView}>
                    <TextInput style={styles.textInput} autoCapitalize="none" autoComplete="off" autoCorrect={false} onChangeText={setUser} placeholder="username"
                        placeholderTextColor={'#222'}
                        value={user.username} />

                    <TextInput autoCapitalize="none" autoComplete="off" autoCorrect={false} style={styles.textInput} onChangeText={setUser} placeholder="firstname"
                        value={user.firstName} placeholderTextColor={'#222'} />
                    <TextInput style={styles.textInput} onChangeText={setUser} placeholder="lastname"
                        value={user.lastName} placeholderTextColor={'#222'} />
                    <TextInput autoCapitalize="none" autoComplete="off" autoCorrect={false} style={styles.textInput} onChangeText={setUser} placeholder="Email"
                        value={user.email} placeholderTextColor={'#222'} />

                    <TextInput autoCapitalize="none" secureTextEntry autoComplete="off" autoCorrect={false} style={styles.textInput} onChangeText={setUser} placeholder="Password"
                        value={user.password} placeholderTextColor={'#222'} />

                    <Button title="Register" onPress={() => navigation.navigate("Login")} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        marginBottom: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#337be6'
    },
    formView: {
        backgroundColor: 'white',
        width: '90%',
        padding: 30,


    },
    textInput: {
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: '300',
        paddingHorizontal: 20,
        height: 40,
        borderWidth: 1,
        borderColor: '#222',
        borderRadius: 25,
        marginBottom: 4
    },

    registerBtn: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',

    },
    image: {
        width: 100,
        resizeMode: 'contain'

    }
})


export default Register;