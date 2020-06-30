/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function UpdateUser({route,navigation}) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const updateUser = async () => {
        try {
            const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/updateuser', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: route.params.user.id,
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password
                }),
            });
            const json = await response.json();
            Alert.alert("User updated successfuly");
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert(error);
        }
    }
    useEffect(()=>{
        setNombre(route.params.user.nombre);
        setApellido(route.params.user.apellido);
        setEmail(route.params.user.email);
        setPassword(route.params.user.password);
      },[]);
     return (
    <View style={styles.container}>
            <TextInput style={styles.textInput} value={nombre} placeholder="Name" onChangeText={text => setNombre(text)}/>
            <TextInput style={styles.textInput} value={apellido} placeholder="Last Name" onChangeText={text => setApellido(text)}/>
            <TextInput style={styles.textInput} value={email} placeholder="Email" onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.textInput} value={password} placeholder="Password" onChangeText={text => setPassword(text)}/>
            <TouchableHighlight style={styles.createUserButton} onPress={updateUser}>
                <Text style={styles.textUserButton}>Update User</Text>
            </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9
    },
    createUserButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textUserButton: {
        color: 'white',
        fontSize: 16
    }
});

export default UpdateUser;