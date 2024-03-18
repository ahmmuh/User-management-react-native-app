import { View, Text } from "react-native";


const Favorite = () => {
    const languages = ["Java", "JavaScript", "Swift", "Kotlin"]
    return (
        <View style={{
            padding: 30
        }}>
            <Text style={{ fontSize: 25 }}>My favorite programming language: </Text>

            {
                languages.map((lan, index) => (
                    <Text style={{
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        fontSize: 16
                    }} key={index}>
                        {lan}
                    </Text>
                ))
            }
        </View>
    )
}


export default Favorite