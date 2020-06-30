/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUser  from './screens/create-user/create-user';
import CreateUser2  from './screens/create-user/create-user2';
import ListUsers from './screens/list-users/list-users';
import DetailUser from './screens/detail-user/detail-user';
import UpdateUser from './screens/update-user/update-user';
import CreateInmueble from './screens/create-inmueble/create-inmueble';
import ListInmuebles from './screens/list-inmuebles/list-inmuebles';
import UpdateInmueble from './screens/update-inmueble/update-inmueble';
import DetailInmueble from './screens/detail-inmueble/detail-inmueble';
import Login from './screens/login/login';
import Principal from './screens/principal/principal';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Principal" component={Principal} />
    <Stack.Screen name="Home" component={ListUsers} />
    <Stack.Screen name="ListInmuebles" component={ListInmuebles} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CreateInmueble" component={CreateInmueble} />
    <Stack.Screen name="UpdateInmueble" component={UpdateInmueble} />
    <Stack.Screen name="DetailInmueble" component={DetailInmueble} />
    <Stack.Screen name="Detail" component={DetailUser} />
      <Stack.Screen name="Create" component={CreateUser} />
      <Stack.Screen name="Create2" component={CreateUser2} />
      <Stack.Screen name="Update" component={UpdateUser} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;