import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, ScrollView, ActivityIndicator } from "react-native";
import User from "./User";
import Button from "./Button";



const UserList = ({ navigation }) => {
    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true)
    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json()
        setLoading(false)
        setUsers(data)
    }

    useEffect(() => {

        getUsers()
    }, [])
    return (
        <View style={styles.container}>

            <ScrollView>

                <View style={styles.textView}>
                    {
                        loading ? <ActivityIndicator style={styles.loading} size={30} /> : users.map((user) => (
                            <View key={user.id} style={styles.userView}>
                                <Text style={styles.text}>Namn: {user.name}</Text>
                                <Text style={styles.text}>Användarnamn {user.username}</Text>
                                <Text style={styles.text}>E-post {user.email}</Text>
                                <Button title="View"

                                    onPress={() => navigation.navigate('User', {
                                        username: user.username,
                                        name: user.name,
                                        email: user.email,
                                        address: user.address
                                    })} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 30 : 20
    },
    textView: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 30,

    },
    text: {
        padding: 10,
        color: '#5670b0',
        fontSize: 15,


    },
    userView: {
        border: 1,
        borderBottomColor: 'skyblue',
        borderBottomWidth: .9,
        marginBottom: 10,
        padding: 20,
    },
    loading: {
        size: Platform.OS === 'android' ? 50 : 100,
        color: '#1ac394'
    }

})

export default UserList