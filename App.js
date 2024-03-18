import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserList from './screens/UserList';
import Register from './screens/Register';
import User from './screens/User';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { useState } from 'react';
import Login from './screens/Login';


export default function App({ navigation }) {
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerStyle: {
            backgroundColor: '#1ac394'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>

          <Stack.Screen name='Home' component={Home}
            options={{
              title: 'Dashboard'
            }}
          />
          <Stack.Screen name='Users' component={UserList} options={{
            title: 'All Users',

          }} />

          <Stack.Screen name='Register' component={Register} />


          <Stack.Screen name='Login' component={Login}


            options={{
              headerShown: false
            }} />


          <Stack.Screen name='User' component={User}

            options={{
              title: 'User Details'
            }} />
        </Stack.Navigator>

      </NavigationContainer>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center'

  },
});
