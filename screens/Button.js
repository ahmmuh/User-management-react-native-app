import { Pressable, Text, StyleSheet } from "react-native";


const Button = (props) => {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#1ac394',
        marginTop: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white'
    }
})


export default Button;