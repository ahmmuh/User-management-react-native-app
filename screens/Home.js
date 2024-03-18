
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from "./Settings";
import Favorite from "./Favorite";
import Profile from "./Profile";
import Ionicons from '@expo/vector-icons/Ionicons';
import UserList from './UserList';

const Home = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName='Users'>
            <Tab.Screen name='Settings' component={Settings}
                options={{

                    tabBarInactiveTintColor: 'skyblue',
                    tabBarIcon: ({ color }) => <Ionicons name='settings' size={20} color={color} />
                }}
            >
            </Tab.Screen>
            <Tab.Screen name='Favorite' component={Favorite}
                options={{

                    tabBarInactiveTintColor: 'skyblue',
                    tabBarIcon: () => <Ionicons name='heart' size={20} color={'#ff0000'} />
                }}
            >
            </Tab.Screen>
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarInactiveTintColor: 'skyblue',
                tabBarIcon: ({ color }) => <Ionicons name='person' size={20} color={color} />
            }} />
            <Tab.Screen name='Users' component={UserList} options={{
                tabBarInactiveTintColor: 'skyblue',
                tabBarIcon: ({ color }) => <Ionicons name='people' size={20} color={color} />
            }} />
        </Tab.Navigator>
    )
}


export default Home