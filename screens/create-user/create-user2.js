/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function CreateUser({navigation}) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const createUser = async () => {
        try {
            const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/registeruser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password
                }),
            });
            const json = await response.json();
            Alert.alert("User created successfuly");
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert(error);
        }
    }
     return (
    <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Name" onChangeText={text => setNombre(text)}/>
            <TextInput style={styles.textInput} placeholder="Last Name" onChangeText={text => setApellido(text)}/>
            <TextInput style={styles.textInput} placeholder="Email" onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.textInput} placeholder="Password" onChangeText={text => setPassword(text)}/>
            <TouchableHighlight style={styles.createUserButton} onPress={createUser}>
                <Text style={styles.textUserButton}>Create User</Text>
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

export default CreateUser;