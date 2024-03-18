import { View, Text, StyleSheet } from "react-native";

const User = ({ route, navigation }) => {


    const { username, name, email, address } = route.params
    return (
        <>
            <View style={styles.userContainer}>
                <View style={styles.userView}>
                    <Text style={styles.text}>Name: {name}</Text>
                    <Text style={styles.text}>Username: {username}</Text>
                    <Text style={styles.text}>Email: {email}</Text>
                    <View style={styles.addressVew}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#00a9e0'
                        }}>Address</Text>
                        <Text>Street: {address.street}</Text>
                        <Text>Suite: {address.suite}</Text>
                        <Text>City: {address.city}</Text>
                        <Text>Zipcode: {address.zipcode}</Text>
                    </View>
                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        alignItems: 'center',

    },
    userView: {
        marginTop: 30,
        padding: 45,
        border: 1,
        borderColor: '#222',
        borderRadius: 15,
        borderWidth: 1,
        shadowColor: 'skyblue',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        elevation: 5,
        marginBottom: 5,
        width: '80%'

    },
    addressVew: {
        padding: 20,
    },

    text: {
        color: 'black',
        fontSize: 15,
    }
})


export default User